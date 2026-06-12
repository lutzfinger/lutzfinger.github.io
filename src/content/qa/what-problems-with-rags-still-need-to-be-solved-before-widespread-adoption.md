---
question: "What problems with RAGs still need to be solved before widespread adoption?"
category: "RAG Implementation Challenges"
tags: ["ai-product", "risks", "startup"]
updated: 2026-06-02
sources:
  - title: "Are we one step closer to using LLMs in practice?"
    url: "https://www.lutzfinger.com/transcript/2023-07-21-are-we-one-step-closer-to-using-llms-in-practice/"
---

_The observability and control challenges that remain in RAG systems._

RAGs don't completely stop hallucination yet. The model uses both the trained corpus and new data, but we don't have a very good solution to manage that difference. Who decides when new information should override training data? Is the LLM taking that decision or the RAG? We lack observability and control. For example, I created a document saying I'm Captain America, but ChatGPT rejected it as fake. What if that was actually true breaking news? Amazing startups will help create this observability, solve access control, and manage the difference between what the corpus was trained on and corporate datasets.

— [Are we one step closer to using LLMs in practice?](https://www.lutzfinger.com/transcript/2023-07-21-are-we-one-step-closer-to-using-llms-in-practice/) · _The Edge_
