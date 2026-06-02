#!/usr/bin/env node
// Refresh src/data/the-edge-episodes.json from The Edge RSS feed.
//
// "The Edge" is Lutz's own podcast with Jasper Masemann (Cherry Ventures).
// Spotify hosts the show but its CDN blocks audio; the canonical distribution
// is the rss.com feed below. The /podcast page reads the JSON this writes.
//
// Curation is preserved: an episode's `blurb` and `guest` are kept across runs
// (matched by guid), so the hand-written copy on the page survives a refresh.
// Only metadata (title, date, duration, url) is overwritten from the feed, and
// newly published episodes are appended with an auto-generated blurb to polish.
//
// Usage: npm run sync:podcast   (needs network)

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const FEED = 'https://media.rss.com/lutzandjasper/feed.xml';
const OUT = path.join(process.cwd(), 'src/data/the-edge-episodes.json');

// Canonical show metadata (not present in the feed). Used only to seed a fresh
// file; an existing file's `show` block is left untouched so curated copy and
// subscribe links survive.
const SHOW = {
  title: 'The Edge',
  publisher: 'Cherry Ventures',
  tagline: 'Breaking down the latest in AI with two practitioners: Jasper Masemann, investment partner at Cherry Ventures, and Lutz Finger.',
  spotify: 'https://open.spotify.com/show/6AygQJpBq42XJcvVItlZYb',
  apple: 'https://podcasts.apple.com/us/podcast/the-edge/id1756953064',
  rss: FEED,
};

function unescapeHtml(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return m ? unescapeHtml(m[1]).trim() : '';
}

function toIsoDate(pubDate) {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10); // UTC calendar date
}

function durationToSec(raw) {
  if (!raw) return null;
  if (raw.includes(':')) {
    const parts = raw.split(':').map(Number);
    return parts.reduce((acc, n) => acc * 60 + n, 0);
  }
  const n = parseInt(raw, 10);
  return Number.isNaN(n) ? null : n;
}

function autoBlurb(descHtml) {
  const text = unescapeHtml(descHtml.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= 220) return text;
  const cut = text.slice(0, 220);
  return cut.slice(0, cut.lastIndexOf(' ')).trim() + '…';
}

async function main() {
  const res = await fetch(FEED, { headers: { 'user-agent': 'lutzfinger.com sync-podcast' } });
  if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`);
  const xml = await res.text();

  const channel = xml.slice(xml.indexOf('<channel'));
  const itemBlocks = [...channel.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);
  if (itemBlocks.length === 0) throw new Error('No <item> entries parsed from feed');

  // Load existing curation (blurb/guest) keyed by guid.
  let existing = { show: SHOW, episodes: [] };
  if (existsSync(OUT)) existing = JSON.parse(await readFile(OUT, 'utf8'));
  const prior = new Map((existing.episodes || []).map(e => [e.guid, e]));

  const seen = new Set();
  const newTitles = [];
  const episodes = itemBlocks.map(b => {
    const guid = tag(b, 'guid');
    const title = tag(b, 'title');
    const date = toIsoDate(tag(b, 'pubDate'));
    const durationSec = durationToSec(tag(b, 'itunes:duration'));
    const url = tag(b, 'link');
    const was = prior.get(guid);
    seen.add(guid);
    if (!was) newTitles.push(title);
    const ep = {
      guid,
      title,
      date,
      durationSec,
      url,
      blurb: was?.blurb ?? autoBlurb(tag(b, 'description')),
    };
    const guest = was?.guest;
    if (guest) ep.guest = guest;
    return ep;
  });

  episodes.sort((a, b) => (a.date < b.date ? 1 : -1));

  const doc = { show: existing.show ?? SHOW, episodes };
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(doc, null, 2) + '\n');

  const dropped = (existing.episodes || []).filter(e => !seen.has(e.guid)).map(e => e.title);
  console.log(`Wrote ${episodes.length} episodes to ${path.relative(process.cwd(), OUT)}`);
  if (newTitles.length) console.log(`  New: ${newTitles.join(' | ')}`);
  if (dropped.length) console.log(`  No longer in feed (removed): ${dropped.join(' | ')}`);
  if (!newTitles.length && !dropped.length) console.log('  No new or removed episodes; metadata refreshed.');
}

main().catch(e => { console.error(e); process.exit(1); });
