#!/usr/bin/env bash
# scripts/refresh-and-deploy.sh
#
# Re-runs the content ingestion pipeline, regenerates derived files
# (Q&A, events, search index), commits any changes, and pushes.
# GH Actions then rebuilds + redeploys.
#
# Idempotent: exits 0 with "No changes" when nothing has moved.

set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ Ingesting Forbes…"
npm run --silent ingest:forbes

echo "→ Ingesting LinkedIn…"
npm run --silent ingest:linkedin

echo "→ Syncing events from CSV…"
npm run --silent sync:events

echo "→ Regenerating Q&A from RAG…"
npm run --silent gen:faq

# Anything to deploy?
if [[ -z "$(git status --porcelain src/content/ data/events.csv)" ]]; then
  echo "→ No content changes. Nothing to deploy."
  exit 0
fi

echo "→ Committing and pushing…"
git add -A
git commit -m "auto: refresh site content $(date +%Y-%m-%d)" \
  || { echo "→ Nothing committable. Bailing."; exit 0; }
git push
echo "→ Pushed. GH Actions will rebuild + deploy in ~30 sec."

# IndexNow: notify Bing + Yandex of the URL set. Best-effort; the build artifact
# from the LAST local build is fine (CI's build will match in moments). Skipped
# silently if the local dist isn't present.
if [[ -f dist/sitemap-0.xml ]]; then
  echo "→ Notifying IndexNow…"
  node scripts/ping-indexnow.mjs || true
fi
