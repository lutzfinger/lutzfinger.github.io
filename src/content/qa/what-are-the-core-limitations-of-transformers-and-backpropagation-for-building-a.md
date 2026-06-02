---
question: "What are the core limitations of transformers and backpropagation for building AGI?"
category: "AI Research"
tags: ["transformers", "backpropagation", "catastrophic forgetting", "continual learning"]
updated: 2026-06-01
sources:
  - title: "Rethinking the AGI Race, with Benjamin Goertzel (eCornell Keynote)"
    url: "https://ecornell.cornell.edu/keynotes/view/K052826/"
---

_The train-then-freeze design of today's models is the wrong shape for a mind that keeps learning._

> Because of the underlying backpropagation algorithm, learning and inference are separate phases. You train a model, you freeze it, and then you use it. If you try to fill the network up with knowledge and keep going, at some point you get catastrophic forgetting: adding a little new knowledge causes it to forget a lot of old knowledge. These systems know a lot, but they don't reorganize themselves in real time the way parts of the human brain do.

Source: [Rethinking the AGI Race, with Benjamin Goertzel (eCornell Keynote)](https://ecornell.cornell.edu/keynotes/view/K052826/)
