# lutzfinger.com

Source for [www.lutzfinger.com](https://www.lutzfinger.com).

Static site, built with [Astro 5](https://astro.build), deployed to GitHub
Pages on push to `main`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
```

## Structure

- `src/pages/` — routes
- `src/content/` — content collections (writing, events, qa)
- `src/components/`, `src/layouts/`, `src/styles/` — UI
- `data/events.csv` — speaking calendar source
- `public/` — robots.txt, llms.txt, sitemap output, images, OG cards
- `scripts/` — content ingestion + OG image generation
- `.github/workflows/deploy.yml` — CI

## License

Content © Lutz Finger. Code MIT.
