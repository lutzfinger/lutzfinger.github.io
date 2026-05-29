#!/usr/bin/env python3
"""Test 1 — data-equivalence check for the QUESTIONS -> JSON refactor.

Asserts that load_questions() (reading data/qa-questions.json) returns exactly
the same set of legacy question-specs that were inlined in generate-faq.py
before the refactor, field for field. Pure data; never runs the chroma
generation, so RAG drift cannot make this flaky.

Usage: python3 scripts/_qa_equiv_check.py [fixture.json]
Default fixture: ~/Claude-Logs/code-plans/data/qa-website-generator/pre/questions_inline.json
"""
from __future__ import annotations

import importlib.util
import json
import os
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
FIXTURE = (
    sys.argv[1]
    if len(sys.argv) > 1
    else os.path.expanduser(
        "~/Claude-Logs/code-plans/data/qa-website-generator/pre/questions_inline.json"
    )
)


def _load_module():
    spec = importlib.util.spec_from_file_location("genfaq", REPO / "scripts" / "generate-faq.py")
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod  # dataclasses need the module in sys.modules (py3.9)
    spec.loader.exec_module(mod)
    return mod


def _norm(entry: dict) -> tuple:
    return (
        entry["question"],
        entry.get("category", ""),
        entry.get("framing", ""),
        tuple(entry.get("variations", [])),
        tuple(entry.get("tags", [])),
    )


def main() -> int:
    mod = _load_module()
    current = [_norm(e) for e in mod.load_questions()]
    expected = [_norm(e) for e in json.load(open(FIXTURE, encoding="utf-8"))]
    if set(current) != set(expected) or len(current) != len(expected):
        print("DIFF")
        missing = set(expected) - set(current)
        extra = set(current) - set(expected)
        for m in list(missing)[:5]:
            print("  missing:", m[0])
        for x in list(extra)[:5]:
            print("  extra:", x[0])
        return 1
    print(f"EQUIVALENT ({len(current)} entries)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
