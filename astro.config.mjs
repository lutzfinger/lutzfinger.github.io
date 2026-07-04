import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.lutzfinger.com',
  // Legacy-path redirects. GitHub Pages ignores public/_redirects, so these
  // must live here: in static output Astro emits a meta-refresh + canonical
  // page per source, which Google honours as a 301-equivalent. This is the
  // LIVE source of truth for redirects; public/_redirects is kept only as a
  // latent map for a future Cloudflare Pages host and is mirrored to match.
  redirects: {
    '/home': '/',                                   // old Google Sites landing
    '/ecornell-certificate': '/ecornell/',          // old cert path
    '/ai-lutz': '/qa/',                             // old Google Sites path
    // Q&A entry regenerated with a new slug; no 1:1 successor -> section index.
    '/qa/what-patterns-appear-across-thousands-of-ai-startup-pitches': '/qa/',
    // Speaking slug now carries the guest name.
    '/speaking/2025-02-19-ai-innovation-and-risk':
      '/speaking/2025-02-19-ai-innovation-and-risk-with-aneesh-chopra/',
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      i18n: undefined,
    }),
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
