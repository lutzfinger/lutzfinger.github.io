#!/usr/bin/env node
// Ingest LinkedIn Articles and Posts into src/content/writing.
//
// Source:
//   ~/Lutz_Media/Lutz-author/Linkedin-Lutz-Author/LinkedIn/Articles/*.md
//   ~/Lutz_Media/Lutz-author/Linkedin-Lutz-Author/LinkedIn/Posts/*.md
//
// Rules (from Lutz's content review on 2026-05-26):
//   1. Drop Forbes-republished pieces — they duplicate the Forbes column.
//   2. Drop pieces that link to forbes.com/sites/lutzfinger (same reason).
//   3. Parse the real publication date from "Published on YYYY-MM-DD" in the
//      body. The 2026-04-25 frontmatter date is the sync stamp, not the
//      original date.
//   4. Body is NEVER mirrored on the site — cards link to the LinkedIn URL.
//      So we require a URL: a `permalink:` for posts, a constructed URL for
//      articles, or fallback to Lutz's LinkedIn articles list.
//   5. Word count > 50 (per Lutz's filter rule).

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import matter from 'gray-matter';
import {
  wordCount,
  linksToForbesLutz,
  isForbesRepublish,
  makeExcerpt,
  slugify,
  extractLinkedInPublishedDate,
  cleanLinkedInBody,
} from './lib/word-count.mjs';

const BASE = path.join(os.homedir(), 'Lutz_Media/Lutz-author/Linkedin-Lutz-Author/LinkedIn');
const ARTICLES = path.join(BASE, 'Articles');
const POSTS = path.join(BASE, 'Posts');
const OUT_DIR = path.join(process.cwd(), 'src/content/writing/linkedin');
const PULSE_MAP_CSV = path.join(process.cwd(), 'data/linkedin-pulse-urls.csv');
const MIN_WORDS = 50;

async function readPulseMap() {
  const txt = await readFile(PULSE_MAP_CSV, 'utf8').catch(() => '');
  const map = new Map();
  for (const line of txt.split(/\r?\n/)) {
    const s = line.trim();
    if (!s || s.startsWith('#')) continue;
    const [slug, url] = s.split(',').map(x => x?.trim());
    if (slug && url) map.set(slug, url);
  }
  return map;
}

function yamlValue(v) {
  if (Array.isArray(v)) return `[${v.map(t => JSON.stringify(t)).join(', ')}]`;
  if (typeof v === 'string') return JSON.stringify(v);
  return String(v);
}

async function processDir(dir, sourceType, kept, pulseMap) {
  if (!existsSync(dir)) {
    console.warn(`Skipping ${dir} (not found)`);
    return;
  }
  const files = (await readdir(dir)).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const raw = await readFile(path.join(dir, file), 'utf8');
    const parsed = matter(raw);
    const data = parsed.data;
    let body = cleanLinkedInBody(parsed.content, data.title ?? '');

    // Forbes-republishes are kept too — Lutz wants every article that appears
    // on his LinkedIn recent-activity articles page, repost or not.

    const wc = wordCount(body);
    if (wc <= MIN_WORDS) {
      kept.skippedShort = (kept.skippedShort ?? 0) + 1;
      continue;
    }

    // Title: prefer frontmatter; for short posts with no title, synthesize from the first sentence.
    let title = (data.title ?? '').trim();
    if (!title) {
      const firstSentence = body
        .replace(/^[\s\n]+/, '')
        .split(/(?<=[.!?])\s+|\n+/)
        .find(s => s.trim().length > 0) ?? '';
      title = firstSentence.trim().replace(/\s+/g, ' ').slice(0, 80);
      if (title.length < 10) {
        kept.skippedTitleless = (kept.skippedTitleless ?? 0) + 1;
        continue;
      }
      title = title.charAt(0).toUpperCase() + title.slice(1).replace(/[.,;:]+$/, '');
    }

    // Date: prefer "Published on YYYY-MM-DD" in body (the real publication date).
    // Fallback to frontmatter date. Skip the sync-stamp `2026-04-25` if a better date exists.
    let dateStr = extractLinkedInPublishedDate(parsed.content);
    if (!dateStr) {
      const fm = data.date;
      dateStr = typeof fm === 'string' ? fm : (fm ? new Date(fm).toISOString().slice(0, 10) : file.slice(0, 10));
    }

    // URL resolution:
    //   1. `permalink:` or `url:` in the source frontmatter (set for Posts).
    //   2. Mapping in data/linkedin-pulse-urls.csv keyed by file stem.
    //   3. Fallback to Lutz's LinkedIn recent-activity articles index so the
    //      card still goes somewhere on linkedin.com.
    const LINKEDIN_ARTICLES_INDEX = 'https://www.linkedin.com/in/lutzfinger/recent-activity/articles/';
    let url = data.permalink || data.url;
    if (!url && sourceType === 'article') {
      const stem = file.replace(/\.md$/, '');
      url = pulseMap.get(stem);
    }
    if (!url) {
      url = LINKEDIN_ARTICLES_INDEX;
      kept.fallbackUrl = (kept.fallbackUrl ?? 0) + 1;
    }

    const excerpt = makeExcerpt(body, 240);
    const slug = slugify(title) + '-' + dateStr.slice(0, 10);

    const fm = {
      title,
      date: dateStr,
      source: 'LinkedIn',
      sourceType,
      url,
      excerpt,
      wordCount: wc,
    };

    const fmYaml = Object.entries(fm)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => `${k}: ${yamlValue(v)}`)
      .join('\n');

    // No body in the output — cards on /writing link directly to LinkedIn.
    await writeFile(path.join(OUT_DIR, slug + '.md'), `---\n${fmYaml}\n---\n`, 'utf8');
    kept[sourceType] = (kept[sourceType] ?? 0) + 1;
  }
}

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });
  const kept = {};
  const pulseMap = await readPulseMap();
  console.log(`Loaded ${pulseMap.size} Pulse URL mappings from ${PULSE_MAP_CSV}`);
  // Only LinkedIn Pulse articles ship. The 950+ short status posts are not
  // surfaced on the writing index — they're noise next to the Forbes column
  // and the actual Pulse pieces. (Re-enable via INGEST_LINKEDIN_POSTS=1 if
  // we ever want them.)
  await processDir(ARTICLES, 'article', kept, pulseMap);
  if (process.env.INGEST_LINKEDIN_POSTS === '1') {
    await processDir(POSTS, 'post', kept, pulseMap);
  }
  console.log(`LinkedIn ingestion: ${JSON.stringify(kept)}`);
  console.log(`Output: ${OUT_DIR}`);
}

main().catch(e => { console.error(e); process.exit(1); });
