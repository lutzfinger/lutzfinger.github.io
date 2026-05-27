#!/usr/bin/env node
// Ingest Forbes markdown files into src/content/writing.
// Per Lutz's spec: cards on the site link directly to the Forbes URL, so we
// only ship metadata + excerpt — never the body.

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import matter from 'gray-matter';
import { wordCount, makeExcerpt, slugify } from './lib/word-count.mjs';

const SRC_DIR = path.join(os.homedir(), 'Lutz_Media/Lutz-author/Fobes-Lutz-Author');
const OUT_DIR = path.join(process.cwd(), 'src/content/writing/forbes');

function yamlValue(v) {
  if (Array.isArray(v)) return `[${v.map(t => JSON.stringify(t)).join(', ')}]`;
  if (typeof v === 'string') return JSON.stringify(v);
  return String(v);
}

async function main() {
  if (!existsSync(SRC_DIR)) {
    console.error(`Source not found: ${SRC_DIR}`);
    process.exit(1);
  }
  // Wipe so removed source files actually disappear from the site.
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter(f => f.endsWith('.md'));
  let written = 0;
  for (const file of files) {
    const raw = await readFile(path.join(SRC_DIR, file), 'utf8');
    const parsed = matter(raw);
    const data = parsed.data;
    const body = parsed.content.trim();

    const url = data.url;
    if (!url) {
      console.warn(`Skipping (no url): ${file}`);
      continue;
    }
    const title = data.title ?? file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '').replace(/-/g, ' ');
    const date = data.date ?? file.slice(0, 10);
    const tags = (data.tags ?? []).map(String);
    const wc = wordCount(body);
    const excerpt = makeExcerpt(body, 240);
    const slug = slugify(title) + '-' + String(date).slice(0, 10);

    const fm = {
      title,
      date: typeof date === 'string' ? date : date.toISOString().slice(0, 10),
      source: 'Forbes',
      sourceType: 'column',
      url,
      excerpt,
      tags,
      wordCount: wc,
    };

    const fmYaml = Object.entries(fm)
      .filter(([, v]) => v !== undefined && !(Array.isArray(v) && v.length === 0))
      .map(([k, v]) => `${k}: ${yamlValue(v)}`)
      .join('\n');

    // No body — cards link directly to Forbes. Frontmatter only.
    await writeFile(path.join(OUT_DIR, slug + '.md'), `---\n${fmYaml}\n---\n`, 'utf8');
    written++;
  }
  console.log(`Wrote ${written} Forbes entries to ${OUT_DIR}`);
}

main().catch(e => { console.error(e); process.exit(1); });
