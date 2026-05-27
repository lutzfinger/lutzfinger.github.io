#!/usr/bin/env node
// Ingest Forbes markdown files into src/content/writing.
// Source: ~/Lutz_Media/Lutz-author/Fobes-Lutz-Author/*.md
// Behavior: copy body as-is, normalize frontmatter, drop excerpt, set bodyAvailable.
// Note: we DO mirror the body locally (Lutz keeps the markdown for his own archive),
//       but the page UI directs readers to the Forbes URL via the canonical link.

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import matter from 'gray-matter';
import { wordCount, makeExcerpt, slugify } from './lib/word-count.mjs';

const SRC_DIR = path.join(os.homedir(), 'Lutz_Media/Lutz-author/Fobes-Lutz-Author');
const OUT_DIR = path.join(process.cwd(), 'src/content/writing/forbes');

async function main() {
  if (!existsSync(SRC_DIR)) {
    console.error(`Source not found: ${SRC_DIR}`);
    process.exit(1);
  }
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter(f => f.endsWith('.md'));
  let written = 0;
  for (const file of files) {
    const raw = await readFile(path.join(SRC_DIR, file), 'utf8');
    const parsed = matter(raw);
    const data = parsed.data;
    const body = parsed.content.trim();

    const title = data.title ?? file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '').replace(/-/g, ' ');
    const date = data.date ?? file.slice(0, 10);
    const url = data.url;
    const tags = (data.tags ?? []).map(String);
    const wc = wordCount(body);
    const excerpt = makeExcerpt(body);
    const slug = slugify(title) + '-' + String(date).slice(0, 10);

    const fm = {
      title,
      date: typeof date === 'string' ? date : date.toISOString().slice(0, 10),
      source: 'Forbes',
      sourceType: 'column',
      url,
      canonical: url,
      excerpt,
      tags,
      wordCount: wc,
      bodyAvailable: true,
    };

    const fmYaml = Object.entries(fm)
      .filter(([, v]) => v !== undefined && !(Array.isArray(v) && v.length === 0))
      .map(([k, v]) => {
        if (Array.isArray(v)) return `${k}: [${v.map(t => JSON.stringify(t)).join(', ')}]`;
        if (typeof v === 'string') return `${k}: ${JSON.stringify(v)}`;
        return `${k}: ${v}`;
      })
      .join('\n');

    const out = `---\n${fmYaml}\n---\n\n${body}\n`;
    await writeFile(path.join(OUT_DIR, slug + '.md'), out, 'utf8');
    written++;
  }
  console.log(`Wrote ${written} Forbes entries to ${OUT_DIR}`);
}

main().catch(e => { console.error(e); process.exit(1); });
