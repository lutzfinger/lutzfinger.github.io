#!/usr/bin/env node
// One-shot: produce a head-friendly og-default.jpg from the portrait source.
//
// Problem: the source is a 2001x3000 portrait. A naive "cover" crop into
// 1200x630 (landscape) chops the head off. We instead:
//   1. crop the top 60% of the source (head + chest, no waist/below)
//   2. resize that to fit inside 1200x630 using `contain` so the head stays
//      whole; the empty space gets a cream background that matches the site
//   3. write JPEG + WebP + AVIF variants

import sharp from 'sharp';
import path from 'node:path';
import os from 'node:os';

const SRC = path.join(os.homedir(), 'Downloads', 'Foto Lutz Finger Headshot (1).jpg');
const OUT_DIR = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'public', 'img');

const SITE_BG = { r: 251, g: 250, b: 247, alpha: 1 }; // matches CSS --c-bg

const meta = await sharp(SRC).metadata();
console.log(`source: ${meta.width}x${meta.height}`);

// Crop top 60% — keeps the head + collarbone, drops anything below.
const headRegion = await sharp(SRC)
  .extract({ left: 0, top: 0, width: meta.width, height: Math.round(meta.height * 0.6) })
  .toBuffer();

// Fit the cropped head into the 1200x630 OG canvas with cream side padding.
const variants = [
  { ext: 'jpg', opts: { quality: 86, mozjpeg: true } },
  { ext: 'webp', opts: { quality: 86 } },
  { ext: 'avif', opts: { quality: 70 } },
];

for (const v of variants) {
  let pipeline = sharp(headRegion)
    .resize(1200, 630, {
      fit: 'contain',
      background: SITE_BG,
    });
  if (v.ext === 'jpg') pipeline = pipeline.jpeg(v.opts);
  if (v.ext === 'webp') pipeline = pipeline.webp(v.opts);
  if (v.ext === 'avif') pipeline = pipeline.avif(v.opts);
  const out = path.join(OUT_DIR, `og-default.${v.ext}`);
  const { size } = await pipeline.toFile(out);
  console.log(`  wrote ${path.basename(out)} (${(size / 1024).toFixed(1)}KB)`);
}
