#!/usr/bin/env node
// Generate WebP + AVIF variants of every JPG/PNG under public/img/
// so the markup can serve modern formats first and JPEG as fallback.

import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC = path.join(ROOT, 'public/img');

let generated = 0;
for (const f of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const src = path.join(SRC, f);
  const stem = f.replace(/\.(jpe?g|png)$/i, '');
  for (const fmt of ['webp', 'avif']) {
    const out = path.join(SRC, `${stem}.${fmt}`);
    try {
      const srcStat = await stat(src);
      const outStat = await stat(out).catch(() => null);
      if (outStat && outStat.mtimeMs >= srcStat.mtimeMs) continue;
    } catch {}
    const buf = await sharp(src)[fmt]({ quality: 80 }).toBuffer();
    await sharp(buf).toFile(out);
    generated++;
    console.log(`  ${stem}.${fmt}  (${(buf.length / 1024).toFixed(1)}KB)`);
  }
}
console.log(`\nGenerated ${generated} variants in ${SRC}`);
