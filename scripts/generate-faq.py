#!/usr/bin/env python3
"""
Generate the static Q&A page content from the Lutz-author RAG.

For each anchor question, retrieve top-K passages, build a markdown file with:
- frontmatter: question, category, sources, updated
- body: short framing line + the most relevant excerpt(s) with citation

The result is a /qa page that's both GEO-friendly (FAQPage JSON-LD with direct
Lutz quotes) and useful (real source links to Forbes/LinkedIn).
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from dataclasses import dataclass
from datetime import date

try:
    from chromadb import PersistentClient
except ImportError:
    print("ERROR: chromadb not installed. `pip install chromadb`", file=sys.stderr)
    sys.exit(1)

CHROMA_PATH = os.path.expanduser("~/Lutz_Media/rag-index/chroma")
COLLECTION = "lutz_author"
OUT_DIR = Path(__file__).parent.parent / "src" / "content" / "qa"

# Each entry: (question, category, framing, [query_variations])
# query_variations: optional list of alternative search phrases that produce
# better retrieval than the question itself.
QUESTIONS = [
    ("Who is Lutz Finger?", "About",
     "Background, current role, and what he focuses on professionally.",
     ["Lutz Finger background data science", "AI product LinkedIn Cornell teaching"]),
    ("What does Lutz Finger do?", "About",
     "Writing, teaching, speaking, advising.",
     ["Lutz Finger Forbes column Cornell teaching speaking"]),
    ("What does Lutz teach at Cornell?", "About",
     "eCornell certificate Designing and Building AI Solutions.",
     ["Cornell teaching AI course MBA students"]),
    ("What is Generative Engine Optimization (GEO)?", "Search & GEO",
     "Why being discoverable to AI assistants is the new SEO.",
     ["LLM search optimization GEO discoverability ChatGPT",
      "search beyond Google AI assistants"]),
    ("Is Google search dying?", "Search & GEO",
     "What changes when LLMs become the search interface.",
     ["Google search future LLM ChatGPT replacement"]),
    ("What is 2025 for search?", "Search & GEO",
     "Predictions about search changing in 2025.",
     ["2025 year of search prediction"]),
    ("How is AI changing e-commerce?", "Search & GEO",
     "Fine-tuned models, attribution, category death.",
     ["e-commerce AI mistakes brands fine-tuned"]),
    ("What replaces SEO in the LLM era?", "Search & GEO",
     "Strategies for being discoverable to AI assistants.",
     ["SEO is dead LLM citation strategy"]),
    ("What is the missing moat in AI?", "LLM Moats",
     "Eval data as the durable moat.",
     ["missing moat AI eval data", "OpenAI moat eval data race"]),
    ("Is OpenAI going bankrupt?", "LLM Moats",
     "Lutz's take on OpenAI economics and moats.",
     ["OpenAI bankrupt model moat economics"]),
    ("Why don't AI models create moats?", "LLM Moats",
     "The structural reasons foundation models commoditize.",
     ["LLM model not a moat commoditization transformer math"]),
    ("Why is eval data a moat?", "LLM Moats",
     "Evaluation data as the strategic differentiator.",
     ["eval data moat AI race", "evaluation data competitive advantage AI"]),
    ("What is the competitive advantage of LLMs for business?", "LLM Moats",
     "How enterprises can build durable AI advantage.",
     ["competitive advantage LLM ChatGPT business strategy"]),
    ("How does AI change healthcare?", "Healthcare",
     "AI applications, value-based care, regulation.",
     ["AI in healthcare large language models", "healthcare AI value-based care"]),
    ("What is value-based care and how does AI enable it?", "Healthcare",
     "VBC framing and AI's role.",
     ["value-based care VBC AI transformation"]),
    ("How do you measure quality in healthcare data?", "Healthcare",
     "Quality metrics for healthcare ML.",
     ["healthcare data quality measurement"]),
    ("What mistakes do brands make in AI-driven e-commerce?", "E-commerce",
     "Common pitfalls and how to avoid them.",
     ["three mistakes brands AI e-commerce"]),
    ("Why does e-commerce need fine-tuned AI?", "E-commerce",
     "Why general-purpose LLMs aren't enough.",
     ["fine-tuned AI e-commerce brand state"]),
    ("Why does \"good enough\" beat perfect for AI products?", "AI Product",
     "Shipping iteratively vs chasing perfection.",
     ["good enough beats perfect AI product minimum quality"]),
    ("What is the value translation gap?", "AI Product",
     "The deployment problem between models and value.",
     ["value translation gap AI deployment"]),
    ("How do you design an AI product?", "AI Product",
     "Process and frame-the-problem advice.",
     ["designing AI products lessons workshop founders"]),
    ("Why should you not trust OpenAI blindly?", "AI Product",
     "Vendor risk and architectural diversification.",
     ["should not trust OpenAI vendor risk"]),
    ("Should AI be regulated?", "Policy & Ethics",
     "Lutz's view on AI regulation.",
     ["AI regulation Biden central control", "Macron AI over-regulation"]),
    ("What about deepfakes?", "Policy & Ethics",
     "How society will adapt to synthetic media.",
     ["deepfakes danger AI manage"]),
    ("Why does AI fairness matter and where does it fail?", "Policy & Ethics",
     "Bias examples and demographic effects.",
     ["algorithmic transparency Biden bias",
      "AI fairness predictive power data validation"]),
    ("Is AI hurting people with non-Western names?", "Policy & Ethics",
     "Concrete bias outcomes in hiring and promotion.",
     ["non-Western names AI promotion bias"]),
    ("What is the \"Ask, Measure, Learn\" framework?", "Data & Measurement",
     "The framework from Lutz's book.",
     ["Ask Measure Learn framework book", "ask measure learn system data"]),
    ("Why does data fail us?", "Data & Measurement",
     "Bias, missing context, and bad collection.",
     ["data fail us Brazil bias collection"]),
    ("What is a data product?", "Data & Measurement",
     "Definition and how to build one.",
     ["data products you need to know"]),
    ("How do you spot social media bots?", "Data & Measurement",
     "Detection heuristics.",
     ["spot social media bots lonely"]),
    ("How will AI change jobs?", "Future of Work",
     "Disruption and adaptation patterns.",
     ["Meta laid off AI jobs different skills"]),
    ("What skills will matter in the AI era?", "Future of Work",
     "Where to invest your learning.",
     ["skills AI era data scientist tasks"]),
    ("Is AGI near?", "AI Predictions",
     "Lutz's stance on the AGI timeline.",
     ["no AGI killer app 2025 prediction"]),
    ("What is the killer app of AI?", "AI Predictions",
     "Where the durable AI value will accumulate.",
     ["killer app AI 2025 prediction"]),
    ("Why is energy the AI race?", "AI Predictions",
     "Energy and infrastructure as constraints.",
     ["energy race wins AI race"]),
    ("What is the book Ask, Measure, Learn about?", "Book & Teaching",
     "Topics covered in the O'Reilly book.",
     ["Ask Measure Learn book O'Reilly Lutz"]),
    ("What does the eCornell AI certificate cover?", "Book & Teaching",
     "The five-course program structure.",
     ["eCornell Designing Building AI Solutions certificate Cornell"]),
]


@dataclass
class Excerpt:
    text: str
    title: str
    url: str
    date: str
    source: str
    score: float

    def short(self, max_chars: int = 600) -> str:
        t = re.sub(r"\s+", " ", self.text).strip()
        # Trim leading title repetition and image markers
        t = re.sub(r"^#+\s*[^.!?]*?[.!?]\s*", "", t)
        t = re.sub(r"\*\[Image:[^\]]+\]\*", "", t)
        t = re.sub(r"!\[[^\]]*\]\([^)]+\)", "", t)
        t = t.strip()
        if len(t) <= max_chars:
            return t
        cut = t[:max_chars]
        last_period = max(cut.rfind(". "), cut.rfind("? "), cut.rfind("! "))
        if last_period > max_chars * 0.6:
            return cut[: last_period + 1]
        last_space = cut.rfind(" ")
        return (cut[:last_space] if last_space > 0 else cut) + "…"


PREFERRED_SOURCES = {"Forbes", "LinkedIn", "linkedin", "forbes"}


def query_rag(col, queries: list[str], k: int = 6) -> list[Excerpt]:
    """Run multiple query texts, merge results, dedupe by URL, sort by score."""
    pool: dict[str, Excerpt] = {}
    for q in queries:
        res = col.query(query_texts=[q], n_results=k)
        docs = res.get("documents", [[]])[0]
        metas = res.get("metadatas", [[]])[0]
        dists = res.get("distances", [[]])[0]
        for doc, meta, dist in zip(docs, metas, dists):
            meta = meta or {}
            url = meta.get("url") or ""
            key = url or (meta.get("title") or "") + str(meta.get("chunk_index", ""))
            score = 1.0 - float(dist) if dist is not None else 0.0
            existing = pool.get(key)
            if existing and existing.score >= score:
                continue
            pool[key] = Excerpt(
                text=doc,
                title=meta.get("title") or "Untitled",
                url=url,
                date=meta.get("date") or "",
                source=meta.get("source") or "",
                score=score,
            )
    return sorted(pool.values(), key=lambda e: e.score, reverse=True)


def pick_excerpts(all_excerpts: list[Excerpt], n: int = 2) -> list[Excerpt]:
    """Prefer Forbes/LinkedIn with URLs; fall back to any URL-bearing source;
    last-resort to any. Dedupe by URL/title."""
    seen: set[str] = set()
    preferred: list[Excerpt] = []
    with_url: list[Excerpt] = []
    rest: list[Excerpt] = []
    for e in all_excerpts:
        key = e.url or e.title
        if key in seen:
            continue
        seen.add(key)
        if e.url and e.source in PREFERRED_SOURCES:
            preferred.append(e)
        elif e.url:
            with_url.append(e)
        else:
            rest.append(e)
    out = preferred[:n]
    if len(out) < n:
        out += with_url[: n - len(out)]
    if len(out) < n:
        out += rest[: n - len(out)]
    return out


def dedupe_by_url(excerpts: list[Excerpt]) -> list[Excerpt]:
    seen: set[str] = set()
    out: list[Excerpt] = []
    for e in excerpts:
        key = e.url or e.title
        if key in seen:
            continue
        seen.add(key)
        out.append(e)
    return out


def slugify(s: str) -> str:
    s = re.sub(r"[^a-z0-9\s-]", "", s.lower())
    s = re.sub(r"\s+", "-", s).strip("-")
    return s[:80]


def yaml_escape(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    # Clean previous output
    for f in OUT_DIR.glob("*.md"):
        f.unlink()

    client = PersistentClient(path=CHROMA_PATH)
    col = client.get_collection(COLLECTION)
    today = date.today().isoformat()

    for i, item in enumerate(QUESTIONS, 1):
        # Backwards-compatible: tuples may be 3 or 4 elements.
        if len(item) == 4:
            q, cat, framing, variations = item
        else:
            q, cat, framing = item
            variations = []
        queries = [q] + list(variations)
        all_excerpts = query_rag(col, queries, k=6)
        excerpts = pick_excerpts(all_excerpts, n=2)
        if not excerpts:
            continue

        # Frontmatter
        sources = [
            {"title": e.title, "url": e.url}
            for e in excerpts if e.url
        ]
        fm_lines = [
            f"question: {yaml_escape(q)}",
            f"category: {yaml_escape(cat)}",
            f"updated: {today}",
        ]
        if sources:
            fm_lines.append("sources:")
            for s in sources:
                fm_lines.append(f"  - title: {yaml_escape(s['title'])}")
                fm_lines.append(f"    url: {yaml_escape(s['url'])}")

        # Body: short framing + excerpts with attribution
        body_parts = [f"_{framing}_", ""]
        for e in excerpts:
            quote = e.short(max_chars=550)
            cite = f"— [{e.title}]({e.url})" if e.url else f"— {e.title}"
            body_parts.append(f"> {quote}")
            body_parts.append("")
            body_parts.append(cite)
            body_parts.append("")

        slug = f"{i:02d}-{slugify(q)}"
        out_path = OUT_DIR / f"{slug}.md"
        out_path.write_text(
            "---\n" + "\n".join(fm_lines) + "\n---\n\n" + "\n".join(body_parts).rstrip() + "\n",
            encoding="utf-8",
        )

    print(f"Wrote {len(QUESTIONS)} Q&A files to {OUT_DIR}")


if __name__ == "__main__":
    main()
