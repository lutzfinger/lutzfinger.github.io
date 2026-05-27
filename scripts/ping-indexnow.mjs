#!/usr/bin/env node
// Notify IndexNow (Bing + Yandex) that URLs have changed.
//
// IndexNow is the "real-time push" alternative to waiting for crawlers.
// We host the key file at /<key>.txt so the protocol can verify ownership,
// then POST the list of URLs to indexnow.org.
//
// What gets submitted:
//   - Every URL in dist/sitemap-0.xml after a build (default).
//   - If you pass URLs as args, only those.
//
// Idempotent: IndexNow rate-limits at 10,000 URLs/day per site; we have ~93,
// so this is fine to call after every deploy.

import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const HOST = 'www.lutzfinger.com';

// The key file lives in two places:
//   - data/.indexnow-key (source of truth, gitignored from history)
//   - public/<key>.txt (so the IndexNow service can verify ownership at runtime)
const key = (await readFile(path.join(ROOT, 'data/.indexnow-key'), 'utf8')).trim();
if (!key) {
  console.error('[indexnow] No key found at data/.indexnow-key — skipping.');
  process.exit(0);
}
const keyLocation = `https://${HOST}/${key}.txt`;

let urls = process.argv.slice(2);
if (urls.length === 0) {
  // Default: parse all URLs from the built sitemap.
  const xml = await readFile(path.join(ROOT, 'dist/sitemap-0.xml'), 'utf8').catch(() => '');
  if (!xml) {
    console.error('[indexnow] No dist/sitemap-0.xml — run `npm run build` first.');
    process.exit(0);
  }
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

if (urls.length === 0) {
  console.log('[indexnow] No URLs to submit.');
  process.exit(0);
}

console.log(`[indexnow] Submitting ${urls.length} URLs to api.indexnow.org`);
const body = { host: HOST, key, keyLocation, urlList: urls };

try {
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  if (res.ok) {
    console.log(`[indexnow] Submitted (${res.status})`);
  } else {
    const text = await res.text().catch(() => '');
    console.warn(`[indexnow] HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
} catch (e) {
  console.warn(`[indexnow] Network error (non-fatal): ${e.message}`);
}
