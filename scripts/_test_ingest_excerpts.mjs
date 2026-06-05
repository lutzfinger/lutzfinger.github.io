#!/usr/bin/env node
// Test 3 — verify the ingested Forbes excerpts are clean, meta-sourced, and
// cached (run AFTER `npm run ingest:forbes`).
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const OUT_DIR = path.join(process.cwd(), 'src/content/writing/forbes');
const CACHE_PATH = path.join(process.cwd(), 'data/forbes-meta.json');

const PE_URL_FRAG = 'ai-for-private-equity---the-future-of-b2b-distribution';
const PE_EXPECTED = 'AI is transforming B2B distribution by scaling expertise, improving customer acquisition and turning complexity into a competitive advantage. Private equity is watching.';

let n = 0;
function ok(cond, msg) { n++; if (!cond) { console.error(`FAIL: ${msg}`); process.exit(1); } }

const cache = JSON.parse(await readFile(CACHE_PATH, 'utf8'));
const cacheKeys = Object.keys(cache);
ok(cacheKeys.length >= 50, `cache has >= 50 keys (got ${cacheKeys.length})`);

const files = (await readdir(OUT_DIR)).filter(f => f.endsWith('.md'));
ok(files.length >= 50, `>= 50 generated forbes files (got ${files.length})`);

let cacheMatched = 0;
let peSeen = false;
for (const f of files) {
  const { data } = matter(await readFile(path.join(OUT_DIR, f), 'utf8'));
  const ex = data.excerpt ?? '';
  ok(!ex.includes('[Image'), `${f}: excerpt contains no "[Image"`);
  ok(typeof ex === 'string' && ex.trim().length > 0, `${f}: excerpt is non-empty`);
  if (data.url && cache[data.url] !== undefined) {
    ok(ex === cache[data.url], `${f}: excerpt equals cached meta description (proves meta path, not fallback)`);
    cacheMatched++;
  }
  if (typeof data.url === 'string' && data.url.includes(PE_URL_FRAG)) {
    peSeen = true;
    ok(ex === PE_EXPECTED, `Private Equity excerpt equals the known live <meta name=description>`);
  }
}
ok(peSeen, 'Private Equity article was found among generated files');
ok(cacheMatched >= 50, `>= 50 excerpts are cache-matched / meta-sourced (got ${cacheMatched})`);

console.log(`ALL PASS (${n} assertions; ${cacheMatched}/${files.length} meta-sourced)`);
