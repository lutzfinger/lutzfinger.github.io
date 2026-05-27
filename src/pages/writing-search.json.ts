// Build-time JSON endpoint feeding the client-side writing search.
// We want search restricted to the actual writing entries (not Q&A, not the
// /writing/<source>/ index pages). Pagefind indexes every HTML page on the
// site, so its results bleed across sections — using this JSON instead.

import { getCollection } from 'astro:content';

export async function GET() {
  const all = await getCollection('writing');
  const entries = all
    .map(p => ({
      title: p.data.title,
      date: p.data.date.toISOString(),
      source: p.data.source,
      sourceType: p.data.sourceType,
      url: p.data.url,
      excerpt: p.data.excerpt ?? '',
      tags: p.data.tags ?? [],
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
