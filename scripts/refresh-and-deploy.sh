#!/usr/bin/env bash
# scripts/refresh-and-deploy.sh
#
# Pull fresh content from ~/Lutz_Media, regenerate every derived file,
# commit, and push. GH Actions then redeploys in ~30 seconds.
#
# Safe to run after any of these skills:
#   - forbes-download         (new Forbes articles)
#   - linkedin-data-sync      (new LinkedIn export)
#   - granola-keynote-sync    (new keynote MDs; if you also added events to
#                              data/events.csv it picks them up)
#   - social-post-scraper     (new social-media posts)
#   - rag-index-updater       (new RAG embeddings → /qa regenerates)
#
# Exits 0 with "No changes" if nothing changed.

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
