#!/usr/bin/env node
// Surgical em-dash sweep.
//
// Cleans em-dashes (U+2014) from page templates, layouts, components,
// llms.txt, consts.ts, events CSV + generated event MDs, and the small
// hand-written /writing/other/ files. Replacement rules:
//   " — "  →  ", "
//   "—"    →  ", "
//
// Deliberately SKIPS:
//   - src/content/writing/forbes/ and writing/linkedin/  — these are
//     Lutz's actual published writing; we don't rewrite his punctuation.
//   - src/content/qa/  — passages are direct quotes from the same.
//   - scripts/  — code comments are not user-facing.

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const EM = '—';

const INCLUDE = [
  'src/pages',
  'src/layouts',
  'src/components',
  'src/styles',
  'src/consts.ts',
  'src/content.config.ts',
  'src/content/events',
  'src/content/writing/other',
  'data/events.csv',
  'public/llms.txt',
];
const EXT = new Set(['.astro', '.md', '.mdx', '.ts', '.tsx', '.js', '.mjs', '.cjs', '.css', '.csv', '.txt']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

async function* walk(p) {
  const s = await stat(p);
  if (s.isFile()) {
    if (EXT.has(path.extname(p))) yield p;
    return;
  }
  for (const ent of await readdir(p, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    yield* walk(path.join(p, ent.name));
  }
}

let scanned = 0, changed = 0;
for (const top of INCLUDE) {
  const full = path.join(ROOT, top);
  try { await stat(full); } catch { continue; }
  for await (const file of walk(full)) {
    scanned++;
    const txt = await readFile(file, 'utf8');
    if (!txt.includes(EM)) continue;
    const next = txt.split(` ${EM} `).join(', ').split(EM).join(', ');
    if (next !== txt) {
      await writeFile(file, next, 'utf8');
      changed++;
      console.log(`  cleaned: ${path.relative(ROOT, file)}`);
    }
  }
}
console.log(`\nScanned ${scanned} files. Cleaned ${changed}.`);
