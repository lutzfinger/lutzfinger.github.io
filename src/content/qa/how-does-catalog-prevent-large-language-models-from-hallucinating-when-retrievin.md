---
question: "How does Catalog prevent large language models from hallucinating when retrieving enterprise information?"
category: "Preventing LLM Hallucination"
tags: ["llm-moats", "ai-product", "risks"]
updated: 2026-06-02
sources:
  - title: "Large Language Models: one interface to rule them all?"
    url: "https://www.lutzfinger.com/transcript/2023-08-15-large-language-models-one-interface-to-rule-them-all/"
---

_Stopping hallucinations by feeding LLMs the right information first._

The way to avoid hallucination is to stop the model from reaching into the model layers for information. If you give it structured or unstructured information in raw format and then ask it to summarize or list, it gives you exactly what you provided. Without that context, it makes things up because it's doing probabilistic retrieval from its training. This is retrieval augmented generation. You get the information first, augment the prompt with it, then generate the response based on that specific context.

— [Large Language Models: one interface to rule them all?](https://www.lutzfinger.com/transcript/2023-08-15-large-language-models-one-interface-to-rule-them-all/) · _The Edge_
