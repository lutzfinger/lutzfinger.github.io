#!/usr/bin/env node
// Test 1 — pure helpers in scripts/lib/forbes-meta.mjs (offline + one fetch-fail).
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  decodeEntities,
  extractMetaDescription,
  cleanDescription,
  isValidDescription,
  fetchForbesDescription,
} from './lib/forbes-meta.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
let n = 0;
function eq(actual, expected, msg) {
  n++;
  if (actual !== expected) {
    console.error(`FAIL: ${msg}\n  expected: ${JSON.stringify(expected)}\n  actual:   ${JSON.stringify(actual)}`);
    process.exit(1);
  }
}
function ok(cond, msg) {
  n++;
  if (!cond) { console.error(`FAIL: ${msg}`); process.exit(1); }
}

// --- decodeEntities: hex + decimal + named ---
eq(decodeEntities("a &amp; b &#x27;c&#39; &lt;d&gt; &#8217;"), "a & b 'c' <d> ’", 'decodeEntities mixed');
eq(decodeEntities("&nbsp;x&nbsp;"), ' x '.replace(/ /g, ' '), 'decodeEntities nbsp maps to a regular space');
eq(decodeEntities("&unknownent; stays"), '&unknownent; stays', 'unknown named entity passes through');

const sample = await readFile(path.join(here, '__fixtures__/forbes-meta-sample.html'), 'utf8');
const ogonly = await readFile(path.join(here, '__fixtures__/forbes-meta-ogonly.html'), 'utf8');

// --- extractMetaDescription: first name=description wins, ignores itemProp/og/duplicate ---
const raw = extractMetaDescription(sample);
ok(raw.includes('curing cancer'), 'extract returns the cancer description');
ok(raw.includes('&#x27;'), 'extract returns RAW (still entity-encoded) content');
ok(!raw.includes('DUPLICATE'), 'duplicate name=description is ignored (first wins)');
ok(!raw.includes('OG fallback'), 'og:description not used when name=description present');

// --- cleanDescription: decode + strip image + em-dash + keep ordinary brackets ---
const cleaned = cleanDescription(raw);
ok(!cleaned.includes('&#'), 'cleanDescription decodes entities');
ok(cleaned.includes("isn't") && cleaned.includes("It's"), 'apostrophes decoded');
ok(cleaned.includes('data & human'), '&amp; decoded to &');
eq(cleanDescription("*[Image: x]* A — B  C"), 'A, B C', 'image strip + em-dash + ws collapse');
ok(cleanDescription('Keep [this bracket] ok').includes('[this bracket]'), 'ordinary [brackets] are preserved');

// --- og fallback ---
const og = extractMetaDescription(ogonly);
ok(og && og.startsWith('Only an Open Graph'), 'extract falls back to og:description');

// --- isValidDescription length guard ---
ok(isValidDescription(cleaned) === true, 'real description is valid');
ok(isValidDescription('short') === false, 'short string is invalid');
ok(isValidDescription('') === false, 'empty string is invalid');

// --- fetchForbesDescription never throws on a bad URL ---
const bad = await fetchForbesDescription('not-a-url', { timeoutMs: 3000 });
eq(bad, null, 'fetchForbesDescription("not-a-url") resolves null (no throw)');

console.log(`ALL PASS (${n} assertions)`);
