#!/usr/bin/env python3
"""
Generate the static Q&A.

Two kinds of entry, both read from data/qa-questions.json:

1. LEGACY (no `body`): question + variations + tags. The body and source
   citations are derived live from the Lutz-author RAG (ChromaDB) — the
   original behavior. The page renders the most question-relevant excerpt(s)
   with inline citation.

2. AUTHORED (has `body` + `sources`): question + tags + a pre-written body and
   pre-resolved sources. Rendered VERBATIM, no RAG query. This is what the
   qa-website-generator skill appends after a different-model review, so the
   text that shipped is exactly the text that was reviewed.

Source types (legacy):
- Forbes / LinkedIn — direct URL to the public article
- Book ("Ask Measure Learn") — link to /book/ on this site
- Course (PDF) — link to /ecornell/ on this site

The page renders Sources ONCE per quote, inline. No duplicate bottom block.
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from dataclasses import dataclass
from datetime import date

CHROMA_PATH = os.path.expanduser("~/Lutz_Media/rag-index/chroma")
COLLECTION = "lutz_author"
OUT_DIR = Path(__file__).parent.parent / "src" / "content" / "qa"
DATA_PATH = Path(__file__).parent.parent / "data" / "qa-questions.json"

URL_BLACKLIST = (
    "canvas.cornell.edu",
    "lnkd.in", "lnk.bio", "bit.ly", "buff.ly", "ow.ly", "t.co", "tinyurl.com",
)

# Canonical book + course landing URLs on this site.
BOOK_INTERNAL_URL = "https://www.lutzfinger.com/book/"
COURSE_INTERNAL_URL = "https://www.lutzfinger.com/ecornell/"
BOOK_TITLES = ("ask measure learn", "ask, measure, learn", "finger dutta")


def usable_external_url(url: str) -> bool:
    if not url:
        return False
    u = url.lower()
    if not (u.startswith("http://") or u.startswith("https://")):
        return False
    return not any(bad in u for bad in URL_BLACKLIST)


def load_questions(path: Path | str = DATA_PATH) -> list[dict]:
    """Load the Q&A source-of-truth list from JSON.

    Returns a list of entry dicts. Legacy entries carry
    question/category/framing/variations/tags; authored entries additionally
    carry body + sources (and optionally updated).
    """
    with open(path, encoding="utf-8") as fh:
        data = json.load(fh)
    entries = data.get("entries", [])
    if not isinstance(entries, list):
        raise ValueError(f"{path}: 'entries' must be a list")
    return entries


def is_authored(entry: dict) -> bool:
    """An authored entry ships a pre-written body + at least one source and is
    rendered verbatim (no RAG query)."""
    return bool(entry.get("body")) and bool(entry.get("sources"))


# Human-friendly tag labels (used by the Astro pages; kept here for reference).
TAG_LABELS: dict[str, str] = {
    "search-geo": "Search & GEO",
    "llm-moats": "LLM Moats",
    "healthcare": "Healthcare",
    "ecommerce": "E-commerce",
    "ai-product": "AI Product",
    "ai-workflows": "AI Workflows",
    "policy-ethics": "Policy & Ethics",
    "measurement": "Measurement",
    "analytics": "Analytics",
    "bias": "Bias",
    "risks": "Risks",
    "education": "Education",
    "startup": "Startups",
    "investment": "Investment",
    "leadership": "Leadership",
    "future-of-work": "Future of Work",
}


@dataclass
class Hit:
    text: str
    title: str
    url: str
    date: str
    source: str
    score: float

    def display_title(self) -> str:
        return self.title or "Untitled"

    def display_url(self) -> str:
        """Resolve to a public URL: external if usable, book/course pages if the
        chunk came from those sources, else empty string."""
        title_l = self.title.lower() if self.title else ""
        # Book references -> /book/
        if any(b in title_l for b in BOOK_TITLES):
            return BOOK_INTERNAL_URL
        # Course PDFs without external URL -> /ecornell/
        if "unit" in title_l and "transcript" in title_l:
            return COURSE_INTERNAL_URL
        if usable_external_url(self.url):
            return self.url
        return ""

    def display_source(self) -> str:
        t = self.title.lower() if self.title else ""
        if any(b in t for b in BOOK_TITLES):
            return "Book — Ask, Measure, Learn"
        if "unit" in t and "transcript" in t:
            return "eCornell course"
        return self.source or ""


def clean_passage(t: str) -> str:
    if not t:
        return ""
    t = t.replace("​", "")
    t = re.sub(r"^\s*#{1,6}\s+[^\n]+\n+", "", t)
    t = re.sub(r"\*\[Image:[^\]]*\]\*", "", t)
    t = re.sub(r"!\[[^\]]*\]\([^)]+\)", "", t)
    t = re.sub(r"^\s*\]\*\s*", "", t)
    t = re.sub(r"\s*\]\*\s*", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    m = re.match(r"^#{1,6}\s+([^.!?]{1,120})\s+(?=[A-Z])", t)
    if m:
        t = t[m.end():]
    return t


def split_sentences(t: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z\"'(\[])", t)
    return [p.strip() for p in parts if p.strip()]


STOPWORDS = set("""
a an and as at be by for from has have how in is it its of on or s t that
the their them then there these this to was were what which who why will with
""".split())


def tokens(s: str) -> set[str]:
    return {w for w in re.findall(r"[a-z][a-z0-9]{2,}", s.lower()) if w not in STOPWORDS}


def best_window(text: str, question: str, max_sentences: int = 3, max_chars: int = 440) -> str:
    sents = split_sentences(text)
    if not sents:
        return text[:max_chars]
    q_tok = tokens(question)
    if not q_tok:
        out = " ".join(sents[:2])
        return out if len(out) <= max_chars else out[:max_chars].rsplit(" ", 1)[0] + "…"
    scores = []
    for s in sents:
        s_tok = tokens(s)
        overlap = len(q_tok & s_tok)
        scores.append(overlap / (1 + len(q_tok - s_tok) * 0.1) if s_tok else 0.0)
    best_idx = max(range(len(sents)), key=lambda i: scores[i])
    if scores[best_idx] == 0:
        out = " ".join(sents[:2])
        return out if len(out) <= max_chars else out[:max_chars].rsplit(" ", 1)[0] + "…"
    lo = max(0, best_idx - 1)
    hi = min(len(sents), best_idx + max_sentences)
    window = " ".join(sents[lo:hi])
    if len(window) <= max_chars:
        return window
    return window[:max_chars].rsplit(" ", 1)[0] + "…"


def query_rag(col, queries: list[str], k: int = 8) -> list[Hit]:
    pool: dict[str, Hit] = {}
    for q in queries:
        res = col.query(query_texts=[q], n_results=k)
        docs = res.get("documents", [[]])[0]
        metas = res.get("metadatas", [[]])[0]
        dists = res.get("distances", [[]])[0]
        for doc, meta, dist in zip(docs, metas, dists):
            meta = meta or {}
            url = (meta.get("url") or "").strip()
            key = (meta.get("doc_id") or url or (meta.get("title") or "") + str(meta.get("chunk_index", "")))
            score = 1.0 - float(dist) if dist is not None else 0.0
            existing = pool.get(key)
            if existing and existing.score >= score:
                continue
            pool[key] = Hit(
                text=clean_passage(doc or ""),
                title=meta.get("title") or "Untitled",
                url=url,
                date=meta.get("date") or "",
                source=meta.get("source") or "",
                score=score,
            )
    return sorted(pool.values(), key=lambda h: h.score, reverse=True)


def pick_excerpts(all_hits: list[Hit], n: int = 2) -> list[Hit]:
    """Strict: only POLISHED, citable sources belong in a Q&A answer — Forbes /
    LinkedIn / Intereconomics articles, or the book / course landing pages.
    Podcasts, social posts, and raw episode transcripts are excluded so the RAG
    (which now also holds spoken-word transcripts) can never surface an mp3 link
    or unedited transcript text as a citation. Prefer articles, then book/course."""
    PREFERRED_EXTERNAL = {"Forbes", "LinkedIn", "linkedin", "Intereconomics"}
    seen_url: set[str] = set()
    primary = []
    secondary = []
    for h in all_hits:
        url = h.display_url()
        if not url or url in seen_url:
            continue
        is_article = h.source in PREFERRED_EXTERNAL and usable_external_url(h.url)
        is_book_or_course = url in (BOOK_INTERNAL_URL, COURSE_INTERNAL_URL)
        if not (is_article or is_book_or_course):
            continue
        seen_url.add(url)
        if is_article:
            primary.append(h)
        else:
            secondary.append(h)
    out = primary[:n]
    if len(out) < n:
        out += secondary[: n - len(out)]
    return out


def yaml_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def slugify(s: str) -> str:
    s = re.sub(r"[^a-z0-9\s-]", "", s.lower())
    s = re.sub(r"\s+", "-", s).strip("-")
    return s[:80]


def _frontmatter(*, question: str, category: str, tags: list[str], updated: str,
                 sources: list[dict]) -> list[str]:
    tag_yaml = "[" + ", ".join(yaml_str(t) for t in tags) + "]"
    fm = [
        f"question: {yaml_str(question)}",
        f"category: {yaml_str(category)}",
        f"tags: {tag_yaml}",
        f"updated: {updated}",
        "sources:",
    ]
    for src in sources:
        fm.append(f"  - title: {yaml_str(src.get('title', ''))}")
        fm.append(f"    url: {yaml_str(src.get('url', ''))}")
    return fm


def render_authored_md(entry: dict, today: str) -> tuple[str, str]:
    """Render an authored entry VERBATIM (no RAG query). Returns (slug, text)."""
    question = entry["question"]
    fm = _frontmatter(
        question=question,
        category=entry.get("category", ""),
        tags=entry.get("tags", []),
        updated=entry.get("updated") or today,
        sources=entry["sources"],
    )
    body = entry["body"].rstrip()
    text = "---\n" + "\n".join(fm) + "\n---\n\n" + body + "\n"
    return slugify(question), text


def render_legacy_md(col, entry: dict, today: str) -> tuple[str, str] | None:
    """Render a legacy entry by querying the RAG. Returns (slug, text) or None
    when no usable source excerpt is found (the entry is skipped)."""
    q = entry["question"]
    cat = entry.get("category", "")
    framing = entry.get("framing", "")
    variations = entry.get("variations", [])
    tags = entry.get("tags", [])

    all_hits = query_rag(col, [q] + variations, k=8)
    # One best on-topic excerpt per legacy answer. Forcing a second excerpt from
    # a different article was the cause of stitched, off-topic answers (e.g. a
    # non-Western-names bias question pulling in an unrelated deepfakes quote).
    # The single top-ranked polished excerpt stays on topic.
    excerpts = pick_excerpts(all_hits, n=1)
    if not excerpts:
        return None

    sources = [{"title": h.display_title(), "url": h.display_url()} for h in excerpts]
    fm = _frontmatter(question=q, category=cat, tags=tags, updated=today, sources=sources)

    body = [f"_{framing}_", ""]
    for h in excerpts:
        quote = best_window(h.text, q, max_sentences=3, max_chars=440)
        display_source = h.display_source()
        display_url = h.display_url()
        cite = f"— [{h.display_title()}]({display_url})"
        if display_source and display_source not in h.display_title():
            cite += f" · _{display_source}_"
        body.append(f"> {quote}")
        body.append("")
        body.append(cite)
        body.append("")

    text = "---\n" + "\n".join(fm) + "\n---\n\n" + "\n".join(body).rstrip() + "\n"
    return slugify(q), text


def generate(col, entries: list[dict], out_dir: Path, today: str) -> dict:
    """Render every entry into out_dir. `col` may be None when all entries are
    authored. Returns {written, skipped:[questions]}. Testable: no chromadb
    import, no global state."""
    out_dir.mkdir(parents=True, exist_ok=True)
    for f in out_dir.glob("*.md"):
        f.unlink()

    written = 0
    skipped: list[str] = []
    for entry in entries:
        if is_authored(entry):
            slug, text = render_authored_md(entry, today)
        else:
            if col is None:
                raise RuntimeError(
                    "legacy entry needs a RAG collection but col is None: "
                    + entry.get("question", "?")
                )
            rendered = render_legacy_md(col, entry, today)
            if rendered is None:
                skipped.append(entry.get("question", "?"))
                continue
            slug, text = rendered
        out_dir.joinpath(f"{slug}.md").write_text(text, encoding="utf-8")
        written += 1

    return {"written": written, "skipped": skipped}


def main() -> None:
    entries = load_questions()
    need_rag = any(not is_authored(e) for e in entries)

    col = None
    if need_rag:
        try:
            from chromadb import PersistentClient
        except ImportError:
            print("ERROR: chromadb not installed. `pip install chromadb`", file=sys.stderr)
            sys.exit(1)
        client = PersistentClient(path=CHROMA_PATH)
        col = client.get_collection(COLLECTION)

    today = date.today().isoformat()
    result = generate(col, entries, OUT_DIR, today)

    print(f"Wrote {result['written']} Q&A files to {OUT_DIR}")
    if result["skipped"]:
        print(f"Skipped {len(result['skipped'])}:")
        for q in result["skipped"]:
            print(f"  - {q}")


if __name__ == "__main__":
    main()
