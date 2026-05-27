#!/usr/bin/env python3
"""
Generate the static Q&A page content from the Lutz-author RAG.

For each anchor question:
- Retrieve top-K passages across the question + paraphrases.
- Filter to public-URL passages (no Canvas / shortlinks / no-URL course material).
- Pick the most question-relevant sentences within each passage (not the full chunk).
- Emit markdown with frontmatter (question, category, sources) + body.

The Q&A page renders Sources for every entry; entries with no usable sources are skipped.
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

# Hosts whose URLs are private / inaccessible / shortlinks — never expose as sources.
URL_BLACKLIST = (
    "canvas.cornell.edu",
    "lnkd.in",
    "lnk.bio",
    "bit.ly",
    "buff.ly",
    "ow.ly",
    "t.co",
    "tinyurl.com",
    "ecornell.cornell.edu/cms",
)

PREFERRED_SOURCES = {"Forbes", "LinkedIn", "linkedin", "forbes", "Intereconomics"}


def usable_url(url: str) -> bool:
    if not url:
        return False
    u = url.lower()
    if not (u.startswith("http://") or u.startswith("https://")):
        return False
    if any(bad in u for bad in URL_BLACKLIST):
        return False
    return True


QUESTIONS = [
    # About-themed bio questions are answered on /about/ — the RAG doesn't
    # have a self-bio so retrieval here produces weak answers. Skip them.
    ("What is Generative Engine Optimization (GEO)?", "Search & GEO",
     "Why being discoverable to AI assistants is the new SEO.",
     ["LLM search optimization GEO discoverability ChatGPT",
      "answer engine optimization AEO brands"]),
    ("Is Google search dying?", "Search & GEO",
     "What changes when LLMs become the search interface.",
     ["Google search future LLM ChatGPT replacement",
      "2025 year of search prediction"]),
    ("How is AI changing e-commerce?", "Search & GEO",
     "Fine-tuned models, attribution, category death.",
     ["e-commerce AI mistakes brands fine-tuned",
      "online retailers GEO playbook"]),
    ("What replaces SEO in the LLM era?", "Search & GEO",
     "Strategies for being discoverable to AI assistants.",
     ["SEO is dead LLM citation strategy",
      "AEO answer engine optimization"]),
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
     ["healthcare data quality measurement",
      "metrics quality of care treatment effectiveness patient satisfaction"]),
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
    ("Is AGI near?", "AI Predictions",
     "Lutz's stance on the AGI timeline.",
     ["no AGI killer app 2025 prediction"]),
    ("What is the killer app of AI?", "AI Predictions",
     "Where the durable AI value will accumulate.",
     ["killer app AI 2025 prediction"]),
    ("Why is energy the AI race?", "AI Predictions",
     "Energy and infrastructure as constraints.",
     ["energy race wins AI race grid"]),
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


# ── Helpers ─────────────────────────────────────────────────────────────────

def clean_passage(t: str) -> str:
    if not t:
        return ""
    t = t.replace("​", "")
    # Strip leading "# Heading\n" markdown (real heading line — has a newline).
    t = re.sub(r"^\s*#{1,6}\s+[^\n]+\n+", "", t)
    # Strip *[Image: ...]* markers and their leftover ']*' fragments.
    t = re.sub(r"\*\[Image:[^\]]*\]\*", "", t)
    t = re.sub(r"!\[[^\]]*\]\([^)]+\)", "", t)
    t = re.sub(r"^\s*\]\*\s*", "", t)
    t = re.sub(r"\s*\]\*\s*", " ", t)
    # Collapse whitespace
    t = re.sub(r"\s+", " ", t).strip()
    # After collapse: drop a leading "# Title-like-string" up to the next sentence
    # boundary if it looks like a title (Title Case or all-caps run of ≤80 chars
    # ending without a period). Only do this when the chunk clearly begins with
    # a heading rather than a sentence.
    m = re.match(r"^#{1,6}\s+([^.!?]{1,120})\s+(?=[A-Z])", t)
    if m:
        t = t[m.end():]
    return t


def split_sentences(t: str) -> list[str]:
    # Reasonable English sentence splitter — keeps short ones intact.
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z\"'(\[])", t)
    return [p.strip() for p in parts if p.strip()]


STOPWORDS = set("""
a an and as at be by for from has have how in is it its of on or s t that
the their them then there these this to was were what which who why will with
""".split())


def tokens(s: str) -> set[str]:
    return {w for w in re.findall(r"[a-z][a-z0-9]{2,}", s.lower()) if w not in STOPWORDS}


def best_window(text: str, question: str, max_sentences: int = 3, max_chars: int = 480) -> str:
    """Pick the most question-relevant sentences from text. Returns a short
    quote (≤ max_chars) centered on the highest-overlap sentence."""
    sents = split_sentences(text)
    if not sents:
        return text[:max_chars]
    q_tok = tokens(question)
    if not q_tok:
        # No salient keywords — use first 2 sentences.
        out = " ".join(sents[:2])
        return out if len(out) <= max_chars else out[:max_chars].rsplit(" ", 1)[0] + "…"

    # Score each sentence by Jaccard overlap with the question.
    scores = []
    for s in sents:
        s_tok = tokens(s)
        if not s_tok:
            scores.append(0.0)
            continue
        overlap = len(q_tok & s_tok)
        scores.append(overlap / (1 + len(q_tok - s_tok) * 0.1))

    best_idx = max(range(len(sents)), key=lambda i: scores[i])
    if scores[best_idx] == 0:
        out = " ".join(sents[:2])
        return out if len(out) <= max_chars else out[:max_chars].rsplit(" ", 1)[0] + "…"

    # Expand a window around best_idx.
    lo = max(0, best_idx - 1)
    hi = min(len(sents), best_idx + max_sentences)
    window = " ".join(sents[lo:hi])
    if len(window) <= max_chars:
        return window
    # Trim from the end to fit.
    return window[:max_chars].rsplit(" ", 1)[0] + "…"


# ── RAG query + filtering ───────────────────────────────────────────────────

def query_rag(col, queries: list[str], k: int = 8) -> list[Excerpt]:
    pool: dict[str, Excerpt] = {}
    for q in queries:
        res = col.query(query_texts=[q], n_results=k)
        docs = res.get("documents", [[]])[0]
        metas = res.get("metadatas", [[]])[0]
        dists = res.get("distances", [[]])[0]
        for doc, meta, dist in zip(docs, metas, dists):
            meta = meta or {}
            url = (meta.get("url") or "").strip()
            key = url or (meta.get("title") or "") + str(meta.get("chunk_index", ""))
            score = 1.0 - float(dist) if dist is not None else 0.0
            existing = pool.get(key)
            if existing and existing.score >= score:
                continue
            pool[key] = Excerpt(
                text=clean_passage(doc or ""),
                title=meta.get("title") or "Untitled",
                url=url,
                date=meta.get("date") or "",
                source=meta.get("source") or "",
                score=score,
            )
    return sorted(pool.values(), key=lambda e: e.score, reverse=True)


def pick_excerpts(all_excerpts: list[Excerpt], n: int = 2) -> list[Excerpt]:
    """Strict: keep only excerpts with usable URLs from preferred sources."""
    seen_url: set[str] = set()
    preferred = []
    other_with_url = []
    for e in all_excerpts:
        if not usable_url(e.url):
            continue
        if e.url in seen_url:
            continue
        seen_url.add(e.url)
        if e.source in PREFERRED_SOURCES:
            preferred.append(e)
        else:
            other_with_url.append(e)
    out = preferred[:n]
    if len(out) < n:
        out += other_with_url[: n - len(out)]
    return out


def yaml_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def slugify(s: str) -> str:
    s = re.sub(r"[^a-z0-9\s-]", "", s.lower())
    s = re.sub(r"\s+", "-", s).strip("-")
    return s[:80]


# ── Main ────────────────────────────────────────────────────────────────────

def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for f in OUT_DIR.glob("*.md"):
        f.unlink()

    client = PersistentClient(path=CHROMA_PATH)
    col = client.get_collection(COLLECTION)
    today = date.today().isoformat()

    written = 0
    skipped: list[str] = []
    for i, item in enumerate(QUESTIONS, 1):
        q, cat, framing, variations = item if len(item) == 4 else (*item, [])
        all_ex = query_rag(col, [q] + list(variations), k=8)
        excerpts = pick_excerpts(all_ex, n=2)
        if not excerpts:
            skipped.append(q)
            continue

        sources = [{"title": e.title, "url": e.url} for e in excerpts]
        fm_lines = [
            f"question: {yaml_str(q)}",
            f"category: {yaml_str(cat)}",
            f"updated: {today}",
            "sources:",
        ]
        for s in sources:
            fm_lines.append(f"  - title: {yaml_str(s['title'])}")
            fm_lines.append(f"    url: {yaml_str(s['url'])}")

        body = [f"_{framing}_", ""]
        for e in excerpts:
            quote = best_window(e.text, q, max_sentences=3, max_chars=440)
            cite = f"— [{e.title}]({e.url})"
            body.append(f"> {quote}")
            body.append("")
            body.append(cite)
            body.append("")

        slug = f"{i:02d}-{slugify(q)}"
        OUT_DIR.joinpath(f"{slug}.md").write_text(
            "---\n" + "\n".join(fm_lines) + "\n---\n\n" + "\n".join(body).rstrip() + "\n",
            encoding="utf-8",
        )
        written += 1

    print(f"Wrote {written} Q&A files to {OUT_DIR}")
    if skipped:
        print(f"Skipped {len(skipped)} (no usable Forbes/LinkedIn sources):")
        for q in skipped:
            print(f"  - {q}")


if __name__ == "__main__":
    main()
