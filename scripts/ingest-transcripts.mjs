#!/usr/bin/env node
// Ingest keynote + podcast transcripts into src/content/transcripts.
//
// Source:
//   ~/Lutz_Media/Lutz-author/Keynote/*.md                     (kind: keynote)
//   ~/Lutz_Media/Lutz-author/Podcast/<show>/*.md              (kind: podcast)
//
// Only the explicitly-listed podcast shows are ingested. `the-edge` (Lutz's
// own 23-episode podcast) is now included, mapped to the /podcast page
// (operator decision 2026-06-02, reversing the 2026-05-28 hold). The raw
// files are mlx-whisper output; cleanTranscriptBody() strips Whisper loops
// and paragraphs the wall of text. See code-plan 2026-05-28-lutzfinger-transcripts.md.

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import matter from 'gray-matter';
import { slugify, wordCount, cleanTranscriptBody } from './lib/word-count.mjs';

const MEDIA = path.join(os.homedir(), 'Lutz_Media/Lutz-author');
const KEYNOTE_DIR = path.join(MEDIA, 'Keynote');
const PODCAST_DIR = path.join(MEDIA, 'Podcast');
const OUT_DIR = path.join(process.cwd(), 'src/content/transcripts');
const MIN_WORDS = 200;

// Allowlist of podcast shows. Guest shows map to /other-shows cards; `the-edge`
// is Lutz's own podcast and maps to the /podcast page (included 2026-06-02).
const PODCAST_SHOWS = {
  'build-ai': 'Build AI',
  'pulse-of-ai': 'The Pulse of AI',
  'silicon-zombies': 'Silicon Zombies',
  'social-media-examiner': 'Social Media Examiner',
  'the-edge': 'The Edge',
  'three-key-insights': 'Three Key Insights',
};

function yamlValue(v) {
  if (typeof v === 'string') return JSON.stringify(v);
  return String(v);
}

function isoDate(raw) {
  // Source frontmatter date is a string "YYYY-MM-DD" (or a Date via gray-matter).
  if (raw instanceof Date) return raw.toISOString().slice(0, 10);
  const s = String(raw ?? '').trim();
  return s.slice(0, 10);
}

function writeTranscript(fm, body, counts) {
  const date = isoDate(fm.date);
  if (!fm.title || !date) {
    counts.skippedMeta = (counts.skippedMeta ?? 0) + 1;
    return;
  }
  const wc = wordCount(body);
  if (wc < MIN_WORDS) {
    console.warn(`  SKIP (only ${wc} words): ${fm.title}`);
    counts.skippedShort = (counts.skippedShort ?? 0) + 1;
    return;
  }
  const out = {
    title: fm.title,
    date,
    kind: fm.kind,
    show: fm.show,
    ...(fm.showId && { showId: fm.showId }),
    ...(fm.guest && { guest: fm.guest }),
    ...(fm.host && { host: fm.host }),
    ...(fm.sourceUrl && { sourceUrl: fm.sourceUrl }),
  };
  const fmYaml = Object.entries(out)
    .map(([k, v]) => `${k}: ${yamlValue(v)}`)
    .join('\n');
  const slug = `${date}-${slugify(fm.title)}`;
  return { file: path.join(OUT_DIR, slug + '.md'), content: `---\n${fmYaml}\n---\n\n${body}\n`, date, kind: fm.kind };
}

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const counts = { keynote: 0, podcast: 0 };
  const keynoteDates = [];

  // --- Keynotes ---
  if (existsSync(KEYNOTE_DIR)) {
    for (const f of (await readdir(KEYNOTE_DIR)).filter((f) => f.endsWith('.md'))) {
      const parsed = matter(await readFile(path.join(KEYNOTE_DIR, f), 'utf8'));
      const d = parsed.data;
      const body = cleanTranscriptBody(parsed.content);
      const rec = writeTranscript(
        { title: d.title, date: d.date, kind: 'keynote', show: 'The Keynote on AI', guest: d.guest, host: d.host, sourceUrl: d.url },
        body,
        counts,
      );
      if (rec) { await writeFile(rec.file, rec.content, 'utf8'); counts.keynote++; keynoteDates.push(rec.date); }
    }
  } else {
    console.warn(`Keynote dir not found: ${KEYNOTE_DIR}`);
  }

  // --- Podcasts (allowlisted shows only) ---
  for (const [showId, showName] of Object.entries(PODCAST_SHOWS)) {
    const dir = path.join(PODCAST_DIR, showId);
    if (!existsSync(dir)) { console.warn(`Podcast show dir not found: ${dir}`); continue; }
    for (const f of (await readdir(dir)).filter((f) => f.endsWith('.md'))) {
      const parsed = matter(await readFile(path.join(dir, f), 'utf8'));
      const d = parsed.data;
      const body = cleanTranscriptBody(parsed.content);
      const rec = writeTranscript(
        { title: d.title, date: d.date, kind: 'podcast', show: showName, showId, guest: d.guest, host: d.host, sourceUrl: d.url },
        body,
        counts,
      );
      if (rec) { await writeFile(rec.file, rec.content, 'utf8'); counts.podcast++; }
    }
  }

  console.log(`Transcripts written: ${JSON.stringify(counts)}`);
  console.log(`Keynote dates: ${keynoteDates.sort().join(', ')}`);
  console.log(`Output: ${OUT_DIR}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
