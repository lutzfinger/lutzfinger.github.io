#!/usr/bin/env python3
"""Test 2 — authored entries render verbatim (no RAG query); legacy entries
still query the RAG. Uses a fake collection + a temp out dir, so no chromadb
and no live src/content/qa mutation.

Usage: python3 scripts/_test_generate_faq.py
"""
from __future__ import annotations

import importlib.util
import sys
import tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent


def _load_module():
    spec = importlib.util.spec_from_file_location("genfaq", REPO / "scripts" / "generate-faq.py")
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod  # dataclasses need the module in sys.modules (py3.9)
    spec.loader.exec_module(mod)
    return mod


class FakeCollection:
    """Records queries and returns one canned Forbes hit."""

    def __init__(self):
        self.queries: list[str] = []

    def query(self, query_texts, n_results):
        self.queries.extend(query_texts)
        return {
            "documents": [["LLMs change how people discover products and brands. " * 3]],
            "metadatas": [[{
                "doc_id": "legacy::0",
                "title": "The Future Of Search",
                "url": "https://www.forbes.com/sites/lutzfinger/2025/01/01/future-of-search/",
                "date": "2025-01-01",
                "source": "Forbes",
                "chunk_index": 0,
            }]],
            "distances": [[0.2]],
        }


def main() -> int:
    mod = _load_module()
    fake = FakeCollection()
    authored = {
        "question": "What is the qa-website-generator skill?",
        "category": "AI Workflows",
        "tags": ["ai-workflows", "ai-product"],
        "updated": "2026-05-28",
        "body": "_A skill that turns recent writing into Q&A._\n\n> Reviewed verbatim text.\n\n— [Origin Article](https://www.forbes.com/sites/lutzfinger/2026/05/01/x/)",
        "sources": [{"title": "Origin Article",
                     "url": "https://www.forbes.com/sites/lutzfinger/2026/05/01/x/"}],
    }
    legacy = {
        "question": "Is Google search dying?",
        "category": "Search & GEO",
        "framing": "What changes when LLMs become the search interface.",
        "variations": ["Google search future LLM"],
        "tags": ["search-geo"],
    }

    with tempfile.TemporaryDirectory() as td:
        out = Path(td)
        result = mod.generate(fake, [authored, legacy], out, "2026-05-28")

        # Authored: verbatim body + sources, and NEVER queried.
        a_slug = mod.slugify(authored["question"])
        a_text = (out / f"{a_slug}.md").read_text(encoding="utf-8")
        assert authored["body"].rstrip() in a_text, "authored body not verbatim"
        assert authored["sources"][0]["url"] in a_text, "authored source url missing"
        assert authored["question"] not in fake.queries, "authored entry must not query RAG"

        # Legacy: produced from the fake query.
        l_slug = mod.slugify(legacy["question"])
        l_text = (out / f"{l_slug}.md").read_text(encoding="utf-8")
        assert "forbes.com/sites/lutzfinger" in l_text, "legacy source missing"
        assert any("Google search" in q for q in fake.queries), "legacy entry must query RAG"
        assert result["written"] == 2, result

    print("OK: authored verbatim (no query); legacy queried RAG")
    return 0


if __name__ == "__main__":
    sys.exit(main())
