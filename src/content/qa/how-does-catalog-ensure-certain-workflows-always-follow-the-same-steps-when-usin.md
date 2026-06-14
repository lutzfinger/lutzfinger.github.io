---
question: "How does Catalog ensure certain workflows always follow the same steps when using LLMs?"
category: "Workflow Determinism"
tags: ["ai-workflows", "ai-product"]
updated: 2026-06-02
sources:
  - title: "Large Language Models: one interface to rule them all?"
    url: "https://www.lutzfinger.com/transcript/2023-08-15-large-language-models-one-interface-to-rule-them-all/"
---

_A rules engine ensures critical workflows always execute consistently._

We built a workflow engine underneath our LLMs. The LLM generates a workflow on the fly every time, but users can design deterministic journeys inside our system using workflows (like Zapier but internal). If a request matches a workflow definition, it triggers that workflow every time instead of a dynamically generated journey. It's no code, so users can do it themselves. First, the LLM does a workflow lookup to see if there's something you always want to do, then for the rest it goes into free flow logic.

— [Large Language Models: one interface to rule them all?](https://www.lutzfinger.com/transcript/2023-08-15-large-language-models-one-interface-to-rule-them-all/) · _The Edge_
