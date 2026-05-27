#!/usr/bin/env python3
"""
Generate the static Q&A from the Lutz-author RAG.

Each Q&A entry has:
- question, tags (multiple), updated
- 1-2 source entries with title + URL (the URL determines the citation link)
- Body: a short framing line + the most question-relevant excerpt(s) with inline citation

Source types:
- Forbes / LinkedIn — direct URL to the public article
- Book ("Ask Measure Learn") — link to /book/ on this site
- Course (PDF) — link to /ecornell/ on this site (course material isn't separately addressable)

The page renders Sources ONCE per quote, inline. No duplicate bottom block.
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from dataclasses import dataclass, field
from datetime import date

try:
    from chromadb import PersistentClient
except ImportError:
    print("ERROR: chromadb not installed. `pip install chromadb`", file=sys.stderr)
    sys.exit(1)

CHROMA_PATH = os.path.expanduser("~/Lutz_Media/rag-index/chroma")
COLLECTION = "lutz_author"
OUT_DIR = Path(__file__).parent.parent / "src" / "content" / "qa"

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


# (question, category, framing, [variations], [tags])
# Tags drive the index grouping + per-tag pages + visual chips.
QUESTIONS: list[tuple[str, str, str, list[str], list[str]]] = [
    # ── Search & GEO ─────────────────────────────────────────────────────
    ("What is Generative Engine Optimization (GEO)?", "Search & GEO",
     "Why being discoverable to AI assistants is the new SEO.",
     ["LLM search optimization GEO discoverability ChatGPT", "answer engine optimization AEO brands"],
     ["search-geo", "ecommerce"]),
    ("Is Google search dying?", "Search & GEO",
     "What changes when LLMs become the search interface.",
     ["Google search future LLM ChatGPT replacement", "2025 year of search prediction"],
     ["search-geo"]),
    ("What is 2025 for search?", "Search & GEO",
     "Predictions about search changing in 2025.",
     ["2025 year of search prediction"],
     ["search-geo"]),
    ("How is AI changing e-commerce?", "E-commerce",
     "Fine-tuned models, attribution, category death.",
     ["e-commerce AI mistakes brands fine-tuned", "online retailers GEO playbook"],
     ["ecommerce", "search-geo"]),
    ("What replaces SEO in the LLM era?", "Search & GEO",
     "Strategies for being discoverable to AI assistants.",
     ["SEO is dead LLM citation strategy", "AEO answer engine optimization"],
     ["search-geo", "ecommerce"]),
    ("Why do LLMs convert better than search?", "Search & GEO",
     "Trust, personalization, and conversion lift from AI traffic.",
     ["LLM conversion 9x AEO traffic better", "personalized recommendation AI trusted"],
     ["search-geo", "ecommerce", "measurement"]),

    # ── LLM moats / strategy ────────────────────────────────────────────
    ("What is the missing moat in AI?", "LLM Moats",
     "Eval data as the durable moat.",
     ["missing moat AI eval data", "OpenAI moat eval data race"],
     ["llm-moats", "ai-product"]),
    ("Is OpenAI going bankrupt?", "LLM Moats",
     "Lutz's take on OpenAI economics and moats.",
     ["OpenAI bankrupt model moat economics"],
     ["llm-moats", "risks"]),
    ("Why don't AI models create moats?", "LLM Moats",
     "The structural reasons foundation models commoditize.",
     ["LLM model not a moat commoditization transformer math"],
     ["llm-moats"]),
    ("Why is eval data a moat?", "LLM Moats",
     "Evaluation data as the strategic differentiator.",
     ["eval data moat AI race", "evaluation data competitive advantage AI"],
     ["llm-moats", "measurement", "analytics"]),
    ("What is the competitive advantage of LLMs for business?", "LLM Moats",
     "How enterprises can build durable AI advantage.",
     ["competitive advantage LLM ChatGPT business strategy"],
     ["llm-moats", "leadership"]),
    ("Should you trust OpenAI blindly?", "LLM Moats",
     "Vendor risk and architectural diversification.",
     ["should not trust OpenAI vendor risk"],
     ["risks", "ai-product"]),

    # ── Healthcare ──────────────────────────────────────────────────────
    ("How does AI change healthcare?", "Healthcare",
     "AI applications, value-based care, regulation.",
     ["AI in healthcare large language models", "healthcare AI value-based care"],
     ["healthcare", "ai-product"]),
    ("What is value-based care and how does AI enable it?", "Healthcare",
     "VBC framing and AI's role.",
     ["value-based care VBC AI transformation"],
     ["healthcare", "measurement"]),
    ("How do you measure quality in healthcare data?", "Healthcare",
     "Quality metrics for healthcare ML.",
     ["healthcare data quality measurement", "metrics quality of care treatment effectiveness patient satisfaction"],
     ["healthcare", "measurement", "analytics"]),
    ("Why isn't autocomplete understanding in healthcare AI?", "Healthcare",
     "LLM limitations in clinical settings.",
     ["healthcare autocomplete understanding LLM clinical"],
     ["healthcare", "risks"]),

    # ── E-commerce ──────────────────────────────────────────────────────
    ("What mistakes do brands make in AI-driven e-commerce?", "E-commerce",
     "Common pitfalls and how to avoid them.",
     ["three mistakes brands AI e-commerce"],
     ["ecommerce", "leadership"]),
    ("Why does e-commerce need fine-tuned AI?", "E-commerce",
     "Why general-purpose LLMs aren't enough.",
     ["fine-tuned AI e-commerce brand state"],
     ["ecommerce", "ai-product"]),
    ("How is the Amazon homepage dying?", "E-commerce",
     "Retail unbundling, AI assistants as the new aisle.",
     ["Amazon homepage dying AI retail unbundling Walmart Best Buy"],
     ["ecommerce", "search-geo"]),

    # ── AI product / workflows ──────────────────────────────────────────
    ("Why does 'good enough' beat perfect for AI products?", "AI Product",
     "Shipping iteratively vs chasing perfection.",
     ["good enough beats perfect AI product minimum quality"],
     ["ai-product", "leadership"]),
    ("Why are AI workflows the real moat?", "AI Workflows",
     "How redesigning work around AI beats model upgrades.",
     ["AI workflows redesign operating model agents permissions evals"],
     ["ai-workflows", "ai-product", "leadership"]),
    ("Why are people frustrated with AI agents?", "AI Workflows",
     "What actually breaks in production agents.",
     ["frustrated AI agents production failure"],
     ["ai-workflows", "risks"]),

    # ── Policy & ethics ─────────────────────────────────────────────────
    ("Should AI be regulated?", "Policy & Ethics",
     "Lutz's view on AI regulation.",
     ["AI regulation Biden central control", "Macron AI over-regulation"],
     ["policy-ethics", "leadership"]),
    ("What about deepfakes?", "Policy & Ethics",
     "How society will adapt to synthetic media.",
     ["deepfakes danger AI manage"],
     ["policy-ethics", "risks"]),
    ("Why does AI fairness matter and where does it fail?", "Policy & Ethics",
     "Bias examples and demographic effects.",
     ["algorithmic transparency Biden bias", "AI fairness predictive power data validation"],
     ["bias", "policy-ethics"]),
    ("Is AI hurting people with non-Western names?", "Policy & Ethics",
     "Concrete bias outcomes in hiring and promotion.",
     ["non-Western names AI promotion bias"],
     ["bias", "policy-ethics"]),

    # ── Data / measurement / analytics ──────────────────────────────────
    ("What is the 'Ask, Measure, Learn' framework?", "Data & Measurement",
     "The framework from Lutz's book.",
     ["Ask Measure Learn framework book", "ask measure learn system data"],
     ["measurement", "analytics"]),
    ("What is a data product?", "Data & Measurement",
     "Definition and how to build one.",
     ["data products you need to know"],
     ["analytics", "ai-product"]),
    ("How do you spot social media bots?", "Data & Measurement",
     "Detection heuristics.",
     ["spot social media bots lonely"],
     ["analytics", "risks"]),

    # ── Education ───────────────────────────────────────────────────────
    ("How is AI changing education?", "Education",
     "What AI does for and to students, teachers, and curricula.",
     ["AI education students teaching MBA classroom Cornell"],
     ["education", "leadership"]),
    ("Why does Cornell use an AI Teaching Assistant?", "Education",
     "What an AI TA actually does in a Cornell course.",
     ["Cornell AI teaching assistant integrated OpenAI eCornell"],
     ["education"]),

    # ── Startups & investment ───────────────────────────────────────────
    ("What patterns appear across thousands of AI startup pitches?", "Startups",
     "Radical lean teams, SMB software, overlooked compliance plays.",
     ["6000 startup pitches lean teams SMB compliance Blue Moon"],
     ["startup", "investment"]),
    ("How do venture firms use AI in their own operations?", "Investment",
     "AI in sourcing, diligence, portfolio construction, and founder support.",
     ["venture firms AI operations NEA Lila Tretikov sourcing diligence portfolio"],
     ["investment", "ai-workflows"]),
    ("Why are radically lean teams the future?", "Startups",
     "How AI compresses the team size needed to ship.",
     ["radically lean teams AI agents fewer people scale"],
     ["startup", "ai-workflows"]),

    # ── Future of work / jobs ───────────────────────────────────────────
    ("How will AI change jobs?", "Future of Work",
     "Disruption, enablement, and the skills that matter.",
     ["Meta laid off AI jobs different skills"],
     ["future-of-work", "leadership"]),
    ("What does 'AI as an operating model' mean?", "Future of Work",
     "Why the winners redesign work around AI rather than just adopting tools.",
     ["AI operating model layoffs enablement workflow design"],
     ["future-of-work", "ai-workflows", "leadership"]),

    # ── Predictions ─────────────────────────────────────────────────────
    ("Is AGI near?", "AI Predictions",
     "Lutz's stance on the AGI timeline.",
     ["no AGI killer app 2025 prediction"],
     ["risks"]),
    ("What is the killer app of AI?", "AI Predictions",
     "Where the durable AI value will accumulate.",
     ["killer app AI 2025 prediction"],
     ["ai-product"]),
    ("Why is energy the AI race?", "AI Predictions",
     "Energy and infrastructure as constraints.",
     ["energy race wins AI race grid"],
     ["risks", "policy-ethics"]),
    ("What is BioAI?", "AI Predictions",
     "AI applied to biology — new molecules, new medicines.",
     ["BioAI biology cancer Earli synthetic biopsy"],
     ["healthcare", "investment"]),

    # ── Book / teaching ─────────────────────────────────────────────────
    ("What is the book Ask, Measure, Learn about?", "Book & Teaching",
     "Topics covered in the O'Reilly book.",
     ["Ask Measure Learn book O'Reilly Lutz"],
     ["measurement", "analytics", "education"]),
    ("What does the eCornell AI certificate cover?", "Book & Teaching",
     "The five-course program structure.",
     ["eCornell Designing Building AI Solutions certificate Cornell"],
     ["education"]),
]

# Human-friendly tag labels.
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
        # Book references → /book/
        if any(b in title_l for b in BOOK_TITLES):
            return BOOK_INTERNAL_URL
        # Course PDFs without external URL → /ecornell/
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
    """Strict: only hits whose display_url() resolves to a real URL.
    Prefer external Forbes/LinkedIn URLs, then book, then course."""
    PREFERRED_EXTERNAL = {"Forbes", "LinkedIn", "linkedin", "Intereconomics"}
    seen_url: set[str] = set()
    primary = []
    secondary = []
    for h in all_hits:
        url = h.display_url()
        if not url or url in seen_url:
            continue
        seen_url.add(url)
        if h.source in PREFERRED_EXTERNAL and usable_external_url(h.url):
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


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for f in OUT_DIR.glob("*.md"):
        f.unlink()

    client = PersistentClient(path=CHROMA_PATH)
    col = client.get_collection(COLLECTION)
    today = date.today().isoformat()

    written = 0
    skipped: list[str] = []
    for i, (q, cat, framing, variations, tags) in enumerate(QUESTIONS, 1):
        all_hits = query_rag(col, [q] + variations, k=8)
        excerpts = pick_excerpts(all_hits, n=2)
        if not excerpts:
            skipped.append(q)
            continue

        sources_yaml = []
        for h in excerpts:
            sources_yaml.append(f"  - title: {yaml_str(h.display_title())}")
            sources_yaml.append(f"    url: {yaml_str(h.display_url())}")

        tag_yaml = "[" + ", ".join(yaml_str(t) for t in tags) + "]"

        fm = [
            f"question: {yaml_str(q)}",
            f"category: {yaml_str(cat)}",
            f"tags: {tag_yaml}",
            f"updated: {today}",
            "sources:",
            *sources_yaml,
        ]

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

        slug = slugify(q)
        OUT_DIR.joinpath(f"{slug}.md").write_text(
            "---\n" + "\n".join(fm) + "\n---\n\n" + "\n".join(body).rstrip() + "\n",
            encoding="utf-8",
        )
        written += 1

    print(f"Wrote {written} Q&A files to {OUT_DIR}")
    if skipped:
        print(f"Skipped {len(skipped)}:")
        for q in skipped:
            print(f"  - {q}")


if __name__ == "__main__":
    main()
