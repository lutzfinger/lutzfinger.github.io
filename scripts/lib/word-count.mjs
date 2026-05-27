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
