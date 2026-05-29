// Helpers for content ingestion.

export function wordCount(text) {
  if (!text) return 0;
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>~\-]/g, ' ')
    .split(/\s+/u)
    .filter(t => /\p{L}|\p{N}/u.test(t))
    .length;
}

const FORBES_LUTZ_RE = /forbes\.com\/sites\/lutzfinger\b/i;
const FORBES_REPUBLISH_RE = /(?:^|\n|\(\s*)(?:republished\s+(?:post\s+)?from\s+forbes|republished\s+forbes|originally\s+(?:published|appeared)\s+(?:on|in)\s+forbes)/i;

export function linksToForbesLutz(text) {
  return !!text && FORBES_LUTZ_RE.test(text);
}

export function isForbesRepublish(text) {
  return !!text && FORBES_REPUBLISH_RE.test(text);
}

export function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function makeExcerpt(text, max = 220) {
  if (!text) return '';
  const stripped = text
    .replace(/^---[\s\S]*?---/, '')
    // Strip the LinkedIn-export boilerplate "Created on YYYY-MM-DD HH:MM" /
    // "Published on YYYY-MM-DD HH:MM" lines.
    .replace(/^\s*(Created|Published)\s+on\s+\d{4}-\d{2}-\d{2}[^\n]*/gim, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>~]/g, '')
    // Em-dash → comma (sitewide rule: no em-dashes anywhere user-facing).
    .replace(/ — /g, ', ')
    .replace(/—/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
  if (stripped.length <= max) return stripped;
  const cut = stripped.slice(0, max);
  const lastSentence = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('? '), cut.lastIndexOf('! '));
  if (lastSentence > max * 0.55) return cut.slice(0, lastSentence + 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

// ---------------------------------------------------------------------------
// Transcript cleanup (mlx-whisper output) — see code-plan 2026-05-28-lutzfinger-transcripts.
// Whisper produces two kinds of garbage: (1) full sentences repeated verbatim
// many times, and (2) intra-sentence phrase loops with no terminal punctuation
// ("there's a there's a there's a", "with that, with that,"). We collapse both,
// conservatively, so genuine emphatic doubles ("Yeah. Yeah.") survive.

function _normToken(w) {
  return w.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
}

// Collapse any immediately-repeated word-run of length 1..maxLen that repeats
// >= minRepeats times consecutively, down to a single copy. Greedy, longest-run
// first. Comparison ignores case and surrounding punctuation.
function collapsePhraseRuns(text, maxLen = 12, minRepeats = 3) {
  const words = text.split(/\s+/).filter(Boolean);
  const norm = words.map(_normToken);
  const out = [];
  let i = 0;
  while (i < words.length) {
    let collapsed = false;
    const maxL = Math.min(maxLen, words.length - i);
    for (let L = maxL; L >= 1; L--) {
      let reps = 1;
      for (;;) {
        const start = i + reps * L;
        if (start + L > words.length) break;
        let match = true;
        for (let k = 0; k < L; k++) {
          if (norm[i + k] !== norm[start + k]) { match = false; break; }
        }
        if (!match) break;
        reps++;
      }
      if (reps >= minRepeats) {
        for (let k = 0; k < L; k++) out.push(words[i + k]); // keep one block
        i += reps * L;
        collapsed = true;
        break;
      }
    }
    if (!collapsed) { out.push(words[i]); i++; }
  }
  return out.join(' ');
}

function _normSentence(s) {
  return s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

// Collapse runs of consecutive identical sentences. Long sentences (>=5 words)
// collapse at >=2 repeats; short ones (<=4 words, e.g. "Yeah.") only at >=3, so
// a genuine double is preserved.
function dedupSentences(sentences) {
  const out = [];
  let i = 0;
  while (i < sentences.length) {
    const base = _normSentence(sentences[i]);
    let j = i + 1;
    while (j < sentences.length && _normSentence(sentences[j]) === base) j++;
    const reps = j - i;
    const isShort = base.split(/\s+/).filter(Boolean).length <= 4;
    const threshold = isShort ? 3 : 2;
    if (reps >= threshold) {
      out.push(sentences[i]); // keep one
    } else {
      for (let k = i; k < j; k++) out.push(sentences[k]); // keep all
    }
    i = j;
  }
  return out;
}

export function cleanTranscriptBody(bodyText) {
  if (!bodyText) return '';
  let text = bodyText;

  // a. If there is a "## Full transcript" heading, keep only what follows it
  //    (drops the keynote "# Title" / "## Overview" / link-bullet boilerplate).
  const marker = text.match(/^##\s+Full transcript\s*$/im);
  if (marker) text = text.slice(marker.index + marker[0].length);

  // Drop any remaining markdown heading and list-bullet lines, then flatten the
  // wall of text into a single whitespace-normalized blob.
  text = text
    .split(/\r?\n/)
    .filter((line) => !/^\s{0,3}#{1,6}\s/.test(line))
    .filter((line) => !/^\s*[-*]\s+/.test(line))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  // b. Phrase-run compression (kills non-terminated loops).
  text = collapsePhraseRuns(text, 12, 3);

  // c. Sentence de-dup (kills full-sentence loops).
  let sentences = text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
  sentences = dedupSentences(sentences);

  // d. Re-group into readable paragraphs of ~4 sentences.
  const paras = [];
  for (let i = 0; i < sentences.length; i += 4) {
    const p = sentences.slice(i, i + 4).join(' ').trim();
    if (p) paras.push(p);
  }
  let out = paras.join('\n\n');

  // e. Em-dash normalize (sitewide rule: no em-dashes in user-facing content).
  out = out.replace(/ — /g, ', ').replace(/—/g, ', ');

  // f. Fix the one Whisper error worth fixing on Lutz's own site: his name.
  //    Conservative — only triggers on "Lutz <manglings>", never bare words.
  out = out.replace(/\bLutz\s+(?:Winger|Vinger|Fingar|Fingers|Singer)\b/g, 'Lutz Finger');

  return out.trim();
}

// Parse the LinkedIn-export "Published on YYYY-MM-DD HH:MM" line and return
// an ISO date string, or null if absent.
export function extractLinkedInPublishedDate(text) {
  if (!text) return null;
  const m = text.match(/Published\s+on\s+(\d{4}-\d{2}-\d{2})/i);
  return m ? m[1] : null;
}

// Strip the LinkedIn export's repeated-title + "Created on..." + "Published on..." block
// from the top of a body so it doesn't clutter excerpts.
export function cleanLinkedInBody(text, title = '') {
  if (!text) return '';
  let body = text;
  // Drop "Created on ..." / "Published on ..." lines — both forms:
  //   "Published on 2017-09-25 15:38"   (real date)
  //   "Published on ---"                (LinkedIn export with stripped date)
  //   "Published on"                    (bare)
  body = body.replace(/^\s*(Created|Published)\s+on[^\n]*\n?/gim, '');
  // Drop standalone "---" lines (markdown HR / leftover separators from the export)
  body = body.replace(/^\s*-{3,}\s*$\n?/gim, '');
  // Drop the leading "This is a republished post from FORBES:" line if present
  body = body.replace(/^\s*This\s+is\s+a\s+republished\s+post\s+from\s+FORBES\s*:?\s*\n?/im, '');
  // Drop repeated title lines at the top (the export tends to repeat the title 2-3x)
  if (title) {
    const titleEsc = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    body = body.replace(new RegExp('^\\s*' + titleEsc + '\\s*\\n', 'gim'), '');
  }
  return body.trim();
}
