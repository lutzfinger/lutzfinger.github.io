#!/usr/bin/env node
// Ingest LinkedIn Articles and Posts into src/content/writing.
// Source:
//   ~/Lutz_Media/Lutz-author/Linkedin-Lutz-Author/LinkedIn/Articles/*.md
//   ~/Lutz_Media/Lutz-author/Linkedin-Lutz-Author/LinkedIn/Posts/*.md
// Filter:
//   - wordCount(body) > 50
//   - body does NOT contain forbes.com/sites/lutzfinger (avoid duplicating Forbes pieces)
//   - title not empty

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import matter from 'gray-matter';
import { wordCount, linksToForbesLutz, makeExcerpt, slugify } from './lib/word-count.mjs';

const BASE = path.join(os.homedir(), 'Lutz_Media/Lutz-author/Linkedin-Lutz-Author/LinkedIn');
const ARTICLES = path.join(BASE, 'Articles');
const POSTS = path.join(BASE, 'Posts');
const OUT_DIR = path.join(process.cwd(), 'src/content/writing/linkedin');
const MIN_WORDS = 50;

function cleanBody(body) {
  // Strip duplicate title lines and stub repetition seen in the LinkedIn export.
  let lines = body.split('\n').map(l => l.trimEnd());
  // collapse runs of blank lines into a single blank
  const out = [];
  let lastBlank = false;
  for (const l of lines) {
    const blank = l.trim() === '';
    if (blank && lastBlank) continue;
    out.push(l);
    lastBlank = blank;
  }
  return out.join('\n').trim();
}

async function processDir(dir, sourceType, kept) {
  if (!existsSync(dir)) {
    console.warn(`Skipping ${dir} (not found)`);
    return [];
  }
  const files = (await readdir(dir)).filter(f => f.endsWith('.md'));
  const out = [];
  for (const file of files) {
    const raw = await readFile(path.join(dir, file), 'utf8');
    const parsed = matter(raw);
    const data = parsed.data;
    const body = cleanBody(parsed.content);

    const wc = wordCount(body);
    if (wc <= MIN_WORDS) continue;
    if (linksToForbesLutz(body)) continue;

    let title = (data.title ?? '').trim();

    if (title) {
      // Articles: drop title-echo stubs where body is just the title repeated.
      const titleEsc = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const bodyMinusTitle = body.replace(new RegExp(titleEsc, 'gi'), '').trim();
      if (wordCount(bodyMinusTitle) < MIN_WORDS) continue;
    } else {
      // Posts without explicit title: synthesize one from the first sentence.
      const firstSentence = body
        .replace(/^[\s\n]+/, '')
        .split(/(?<=[.!?])\s+|\n+/)
        .find(s => s.trim().length > 0) ?? '';
      title = firstSentence.trim().replace(/\s+/g, ' ').slice(0, 80);
      if (title.length < 10) continue; // not enough signal
      // Capitalize for display
      title = title.charAt(0).toUpperCase() + title.slice(1);
      // Strip trailing punctuation noise
      title = title.replace(/[.,;:]+$/, '');
    }

    const date = data.date ?? file.slice(0, 10);
    const dateStr = typeof date === 'string' ? date : new Date(date).toISOString().slice(0, 10);
    const excerpt = makeExcerpt(body);
    const slug = slugify(title) + '-' + dateStr.slice(0, 10);

    const fm = {
      title,
      date: dateStr,
      source: 'LinkedIn',
      sourceType,
      excerpt,
      wordCount: wc,
      bodyAvailable: true,
    };

    const fmYaml = Object.entries(fm)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => {
        if (Array.isArray(v)) return `${k}: [${v.map(t => JSON.stringify(t)).join(', ')}]`;
        if (typeof v === 'string') return `${k}: ${JSON.stringify(v)}`;
        return `${k}: ${v}`;
      })
      .join('\n');

    const outFile = path.join(OUT_DIR, slug + '.md');
    await writeFile(outFile, `---\n${fmYaml}\n---\n\n${body}\n`, 'utf8');
    out.push(slug);
    kept[sourceType] = (kept[sourceType] ?? 0) + 1;
  }
  return out;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const kept = {};
  await processDir(ARTICLES, 'article', kept);
  await processDir(POSTS, 'post', kept);
  console.log(`LinkedIn ingestion done: ${JSON.stringify(kept)}`);
  console.log(`Output: ${OUT_DIR}`);
}

main().catch(e => { console.error(e); process.exit(1); });
