---
question: "What's the difference between how transformers are used in healthcare interfaces versus drug discovery?"
category: "AI Capabilities in Healthcare"
tags: ["healthcare", "ai-product", "llm-moats"]
updated: 2026-06-02
sources:
  - title: "Healthcare's AI Lesson: Autocomplete Isn't Understanding"
    url: "https://www.forbes.com/sites/lutzfinger/2026/01/16/healthcares-ai-lesson-autocomplete-isnt-understanding/"
---

_Transformers shine at interface tasks, struggle with mechanistic understanding._

Transformers excel as interfaces to messy healthcare data because they're great at sequence modeling like language and longitudinal notes. They summarize records, find context, and support decisions. They work well over EHR data or ICD-10 codes to predict likely codes or find patients for trials. However, for drug discovery, most transformers just do next-token prediction through autoregression. This creates impressive language competence but doesn't automatically give you conceptual understanding or reliable causal reasoning. Drug development needs mechanism understanding and generalization under uncertainty, and in regulated settings, outputs need guardrails and real-world validation.

— [Healthcare's AI Lesson: Autocomplete Isn't Understanding](https://www.forbes.com/sites/lutzfinger/2026/01/16/healthcares-ai-lesson-autocomplete-isnt-understanding/) · _Forbes_
