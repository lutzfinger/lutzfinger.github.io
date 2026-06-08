---
question: "What problem did transformers solve for Ultimate AI's multi-language support?"
category: "Technical Architecture"
tags: ["ai-product", "ai-workflows"]
updated: 2026-06-02
sources:
  - title: "How Ultimate evolved from hundreds of supervised models to UltimateGPT"
    url: "https://www.lutzfinger.com/transcript/2023-05-12-how-ultimate-evolved-from-hundreds-of-supervised-models-to-ultimategpt/"
---

_One transformer model replaced 100 language-specific models per customer_

Before transformers, we had different models for different languages. Supporting 100 languages meant running 100 different models per customer, which was painful for model operations. When we switched to transformers like BART about three and a half years ago, we could use one polyglot model for all languages. You could train the bot in English and ask questions in Finnish, and it worked reasonably well. It also helped our clustering pipeline show customers all their questions across languages semantically grouped together. You could see Finnish, Spanish, German, and English examples all meaning the same thing without worrying about the language.

— [How Ultimate evolved from hundreds of supervised models to UltimateGPT](https://www.lutzfinger.com/transcript/2023-05-12-how-ultimate-evolved-from-hundreds-of-supervised-models-to-ultimategpt/) · _The Edge_
