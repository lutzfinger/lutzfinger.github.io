# lutzfinger.com

The personal site of Lutz Finger — Forbes contributor, Cornell faculty, AI
product leader. Migrated from Google Sites to Astro + Cloudflare Pages for
real SEO/GEO control.

## Stack

- **Astro 5** — zero-JS static HTML, ideal for SEO and GEO.
- **Cloudflare Pages** — static hosting at the edge, free tier.
- **Pagefind** — offline full-text search across all writing.
- **Vanilla CSS** — no framework, light bundles, fast loads.

## Layout

```
src/
├── content/                  ← Astro content collections
│   ├── writing/forbes/       ← 53 Forbes articles
│   ├── writing/linkedin/     ← 355 LinkedIn articles + posts (>50 words, no Forbes refs)
│   ├── events/               ← Speaking calendar (synced from data/events.csv)
│   └── qa/                   ← Q&A generated from the RAG
├── pages/                    ← Routes
├── layouts/                  ← Base + Post wrappers
├── components/               ← Header, Footer, JsonLd
├── styles/global.css
├── consts.ts                 ← Site metadata, nav, social
└── content.config.ts         ← Collection schemas
data/events.csv               ← Source-of-truth for /speaking
scripts/
├── ingest-forbes.mjs         ← Pulls from ~/Lutz_Media/Lutz-author/Fobes-Lutz-Author/
├── ingest-linkedin.mjs       ← Pulls + filters from ~/Lutz_Media/Lutz-author/Linkedin-Lutz-Author/
├── sync-events.mjs           ← CSV → markdown
└── generate-faq.py           ← Queries the local Chroma RAG → /qa entries
public/
├── robots.txt
├── llms.txt                  ← For LLM crawlers (GEO)
├── _redirects                ← Old Google Sites paths → new
└── _headers                  ← Cache + security headers
```

## Develop

```bash
npm install
npm run dev
# Browser opens at http://localhost:4321
```

## Build

```bash
npm run build
# Output goes to dist/. Includes Pagefind index at dist/pagefind/.
npm run preview
```

## Rebuild content

```bash
npm run ingest:all     # Forbes + LinkedIn from ~/Lutz_Media
npm run sync:events    # data/events.csv → src/content/events/
python3 scripts/generate-faq.py  # Q&A from the Chroma RAG
```

## Deploy

Cloudflare Pages auto-deploys on push to `main`. Build command:
`npm run build`. Output dir: `dist`.

See [MIGRATION_LOG.md](MIGRATION_LOG.md) for every decision made, and
[CUTOVER.md](CUTOVER.md) for the DNS swap playbook.
