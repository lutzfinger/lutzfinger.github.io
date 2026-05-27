#!/usr/bin/env node
// Convert data/events.csv → markdown files in src/content/events/.
//
// CSV format (see data/events.csv for full schema):
//   date,end_date,title,tag,location,attendance,organizer,url,description,status
//
// Future: replace the CSV source with a Google Sheets pull (Cornell keynote sheet).
// For now, edit the CSV manually and re-run.

import { readFile, writeFile, readdir, unlink, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { slugify } from './lib/word-count.mjs';

const CSV = path.join(process.cwd(), 'data/events.csv');
const OUT = path.join(process.cwd(), 'src/content/events');

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim() && !l.startsWith('#'));
  const headers = splitCsvLine(lines[0]);
  return lines.slice(1).map(line => {
    const cols = splitCsvLine(line);
    return Object.fromEntries(headers.map((h, i) => [h, (cols[i] ?? '').trim()]));
  });
}

function splitCsvLine(line) {
  const out = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; continue; }
    if (ch === '"') { inQuotes = !inQuotes; continue; }
    if (ch === ',' && !inQuotes) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out;
}

async function main() {
  if (!existsSync(CSV)) {
    console.error(`Missing ${CSV}`);
    process.exit(1);
  }
  await mkdir(OUT, { recursive: true });

  // Wipe existing markdown so removed rows actually leave the site.
  for (const f of await readdir(OUT)) {
    if (f.endsWith('.md')) await unlink(path.join(OUT, f));
  }

  const text = await readFile(CSV, 'utf8');
  const rows = parseCsv(text);
  const now = Date.now();
  let written = 0;

  for (const r of rows) {
    if (!r.date || !r.title) continue;
    const startMs = Date.parse(r.date);
    if (Number.isNaN(startMs)) {
      console.warn(`Skipping row with bad date: ${r.title} (${r.date})`);
      continue;
    }
    const status = r.status || (startMs < now ? 'past' : 'upcoming');
    const slug = `${r.date.slice(0, 10)}-${slugify(r.title)}`;
    const fm = {
      title: r.title,
      date: r.date,
      ...(r.end_date && { endDate: r.end_date }),
      tag: r.tag || 'keynote',
      ...(r.location && { location: r.location }),
      eventAttendanceMode: r.attendance || 'offline',
      ...(r.organizer && { organizer: r.organizer }),
      ...(r.url && { url: r.url }),
      ...(r.description && { description: r.description }),
      status,
    };
    const fmYaml = Object.entries(fm)
      .map(([k, v]) => `${k}: ${typeof v === 'string' ? JSON.stringify(v) : v}`)
      .join('\n');
    const body = r.description ? r.description + '\n' : '';
    await writeFile(path.join(OUT, slug + '.md'), `---\n${fmYaml}\n---\n\n${body}`);
    written++;
  }
  console.log(`Wrote ${written} events to ${OUT}`);
}

main().catch(e => { console.error(e); process.exit(1); });
