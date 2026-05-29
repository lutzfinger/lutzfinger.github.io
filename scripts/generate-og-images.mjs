#!/usr/bin/env node
// Generate one Open-Graph image per page under public/og/<slug>.png.
// Build pipeline calls this before `astro build` so the PNGs ship as assets.
// Base.astro picks them up via the auto-slug rule.

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, 'public/og');
const FONT_DIR = path.join(ROOT, 'scripts/og-fonts');

await mkdir(OUT_DIR, { recursive: true });

const fontRegular = await readFile(path.join(FONT_DIR, 'Inter-Regular.woff'));
const fontBold = await readFile(path.join(FONT_DIR, 'Inter-Bold.woff'));
const headshotBuf = await readFile(path.join(ROOT, 'public/img/lutz-headshot-400.jpg'));
const headshotDataUri = `data:image/jpeg;base64,${headshotBuf.toString('base64')}`;

const BRAND_BG = '#fbfaf7';
const BRAND_TEXT = '#1d1d1f';
const BRAND_ACCENT = '#b8442a';
const BRAND_MUTED = '#5c5b5a';

function card({ eyebrow, title, subtitle }) {
  // Layout: left column (text), right column (headshot circle).
  return {
    type: 'div',
    props: {
      style: {
        width: 1200,
        height: 630,
        display: 'flex',
        background: BRAND_BG,
        padding: '70px 90px',
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', paddingRight: 50 },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    color: BRAND_ACCENT,
                    fontSize: 24,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 3,
                    marginBottom: 24,
                  },
                  children: eyebrow,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    color: BRAND_TEXT,
                    fontSize: 60,
                    fontWeight: 700,
                    lineHeight: 1.12,
                    letterSpacing: -1,
                  },
                  children: title,
                },
              },
              ...(subtitle
                ? [{
                    type: 'div',
                    props: {
                      style: {
                        color: BRAND_MUTED,
                        fontSize: 28,
                        marginTop: 28,
                        lineHeight: 1.35,
                      },
                      children: subtitle,
                    },
                  }]
                : []),
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              width: 260,
              height: 260,
              borderRadius: 130,
              overflow: 'hidden',
              display: 'flex',
              flexShrink: 0,
              alignSelf: 'center',
              border: `1px solid ${BRAND_MUTED}33`,
            },
            children: [
              {
                type: 'img',
                props: {
                  src: headshotDataUri,
                  width: 260,
                  height: 260,
                  style: { width: 260, height: 260, objectFit: 'cover' },
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function render({ slug, eyebrow, title, subtitle }) {
  const svg = await satori(card({ eyebrow, title, subtitle }), {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
      { name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { background: BRAND_BG, fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  await writeFile(path.join(OUT_DIR, `${slug}.png`), png);
  console.log(`  ${slug}.png`);
}

function truncate(s, n) {
  if (!s) return '';
  return s.length <= n ? s : s.slice(0, n - 1).trim() + '…';
}

// ── Page catalogue ─────────────────────────────────────────────────────────

const STATIC_PAGES = [
  { slug: 'home',                   eyebrow: 'Lutz Finger', title: 'Turning AI From Hype Into Products That Matter',           subtitle: 'Forbes column. Cornell certificate. Live keynote series.' },
  { slug: 'about',                  eyebrow: 'About',       title: 'Lutz Finger',                                                subtitle: 'Head of AI · Zoovu. Cornell Data Scientist in Residence. Forbes contributor.' },
  { slug: 'book',                   eyebrow: 'Book',        title: 'Ask, Measure, Learn',                                        subtitle: 'with Soumitra Dutta. O’Reilly Media, 2014.' },
  { slug: 'ecornell',               eyebrow: 'Certificate', title: 'Designing & Building AI Solutions',                          subtitle: 'The Cornell five-course AI certificate. No coding required.' },
  { slug: 'keynote',                eyebrow: 'Live series', title: 'The Keynote on AI',                                          subtitle: 'eCornell. Guests who impact how AI gets implemented.' },
  { slug: 'workshop',               eyebrow: 'Workshops',   title: 'AI Workflow Workshops',                                      subtitle: 'Personal-productivity and enterprise-production agents. Hosted by eCornell.' },
  { slug: 'qa',                     eyebrow: 'Q&A',         title: '41 questions, answered',                                     subtitle: 'From the Forbes column, LinkedIn, Intereconomics, NZZ, and teaching.' },
  { slug: 'portfolio',              eyebrow: 'Portfolio',   title: 'AI use cases I have built',                                  subtitle: 'Search & discovery. Healthcare. Cloning influencers. SAI. Future Me. And more.' },
  { slug: 'speaking',               eyebrow: 'Speaking',    title: 'Keynotes, workshops, lectures',                              subtitle: 'Upcoming and past sessions.' },
  { slug: 'writing',                eyebrow: 'Writing',     title: 'Every article in one place',                                 subtitle: 'Forbes, LinkedIn, Intereconomics, NZZ.' },
  { slug: 'writing-forbes',         eyebrow: 'Forbes',      title: 'The Forbes column on AI',                                    subtitle: 'AI products, GEO, LLM moats, healthcare, policy.' },
  { slug: 'writing-linkedin',       eyebrow: 'LinkedIn',    title: 'LinkedIn Pulse articles',                                    subtitle: 'Long-form writing on data, AI, and the social graph.' },
  { slug: 'writing-intereconomics', eyebrow: 'Intereconomics', title: 'Intereconomics journal',                                  subtitle: 'Two peer-reviewed pieces on data, AI, and Europe.' },
  { slug: 'writing-nzz',            eyebrow: 'NZZ',         title: 'Neue Zürcher Zeitung',                                       subtitle: 'Gastbeitrag in Meinung & Debatte, 19 March 2025.' },
];

// ── Collection-driven pages ────────────────────────────────────────────────

async function collectMarkdown(dir, slugPrefix, eyebrow) {
  const full = path.join(ROOT, dir);
  if (!existsSync(full)) return [];
  const out = [];
  for (const f of await readdir(full)) {
    if (!f.endsWith('.md')) continue;
    const raw = await readFile(path.join(full, f), 'utf8');
    const fm = matter(raw).data;
    const stem = f.replace(/\.md$/, '');
    const slug = `${slugPrefix}-${stem}`;
    out.push({
      slug,
      eyebrow,
      title: truncate(fm.question || fm.title || stem, 110),
      subtitle: truncate(fm.excerpt || fm.description || fm.show || '', 130),
    });
  }
  return out;
}

const qaPages = await collectMarkdown('src/content/qa', 'qa', 'Q&A');
const eventPages = await collectMarkdown('src/content/events', 'speaking', 'Speaking');
const transcriptPages = await collectMarkdown('src/content/transcripts', 'transcript', 'Transcript');

const ALL = [...STATIC_PAGES, ...qaPages, ...eventPages, ...transcriptPages];
console.log(`Generating ${ALL.length} OG images…`);
for (const p of ALL) await render(p);
console.log(`\nDone. Output: ${OUT_DIR}`);
