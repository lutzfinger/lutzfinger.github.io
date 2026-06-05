#!/usr/bin/env node
// Ingest Forbes markdown files into src/content/writing.
// Per Lutz's spec: cards on the site link directly to the Forbes URL, so we
// only ship metadata + excerpt — never the body.
//
// The card excerpt is each Forbes page's own <meta name="description"> (clean,
// authoritative), resolved once and cached in data/forbes-meta.json so repeat
// ingests + CI never hit the network. Resolution order per article:
//   1. frontmatter `description:` (if a source file ever carries one)
//   2. cached value in data/forbes-meta.json
//   3. live fetch of the Forbes page's <meta name="description">
//   4. makeExcerpt(body) fallback (only if the fetch fails)
// To force a re-fetch of one article, delete its URL key from
// data/forbes-meta.json (or delete the whole file). Only valid (non-stub)
// fetches are cached, so a transient Forbes error never freezes bad copy.

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import matter from 'gray-matter';
import { wordCount, makeExcerpt, slugify } from './lib/word-count.mjs';
import { fetchForbesDescription, cleanDescription, isValidDescription } from './lib/forbes-meta.mjs';

const SRC_DIR = path.join(os.homedir(), 'Lutz_Media/Lutz-author/Fobes-Lutz-Author');
const OUT_DIR = path.join(process.cwd(), 'src/content/writing/forbes');
const CACHE_PATH = path.join(process.cwd(), 'data/forbes-meta.json');

// Load the URL -> description cache. Tolerates a missing/corrupt file.
async function loadMetaCache() {
  try {
    const obj = JSON.parse(await readFile(CACHE_PATH, 'utf8'));
    return (obj && typeof obj === 'object' && !Array.isArray(obj)) ? obj : {};
  } catch {
    return {};
  }
}

// Persist the cache with sorted keys + trailing newline for stable diffs.
async function saveMetaCache(cache) {
  const sorted = {};
  for (const k of Object.keys(cache).sort()) sorted[k] = cache[k];
  await writeFile(CACHE_PATH, JSON.stringify(sorted, null, 2) + '\n', 'utf8');
}

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

  const cache = await loadMetaCache();
  const tally = { 'meta-cache': 0, 'meta-fetch': 0, frontmatter: 0, fallback: 0 };

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

    // Excerpt = the Forbes page's <meta name="description"> (cached), else a
    // body-derived fallback. See the header comment for the full order.
    let excerpt;
    let source;
    const fmDesc = cleanDescription(data.description ?? '');
    if (isValidDescription(fmDesc)) {
      excerpt = fmDesc; source = 'frontmatter';
    } else if (isValidDescription(cache[url])) {
      excerpt = cache[url]; source = 'meta-cache';
    } else {
      const fetched = await fetchForbesDescription(url);
      if (fetched) {
        excerpt = fetched; cache[url] = fetched; source = 'meta-fetch';
      } else {
        excerpt = makeExcerpt(body, 240); source = 'fallback';
        console.warn(`  [fallback] no meta description for ${file} (${url})`);
      }
    }
    tally[source]++;
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

  await saveMetaCache(cache);
  console.log(`Wrote ${written} Forbes entries to ${OUT_DIR}`);
  console.log(`  excerpt sources — meta-cache:${tally['meta-cache']} meta-fetch:${tally['meta-fetch']} frontmatter:${tally.frontmatter} fallback:${tally.fallback}`);
}

main().catch(e => { console.error(e); process.exit(1); });
