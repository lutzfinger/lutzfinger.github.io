---
question: "How did LinkedIn use knowledge graphs to solve the job title problem?"
category: "Knowledge Graph Applications"
tags: ["ai-workflows", "analytics"]
updated: 2026-06-02
sources:
  - title: "The synergy between LLMs and knowledge graphs"
    url: "https://www.lutzfinger.com/transcript/2023-08-24-the-synergy-between-llms-and-knowledge-graphs/"
---

_Structuring 150 million job titles required more than simple categorization._

LinkedIn had over 150 million unique job title strings, which was impossible to model effectively. We decomposed titles into four facets: seniority, employment status, role, and specialty. For example, Senior Software Engineer contains seniority information, a role, and a specialty. We then built knowledge graphs for each dimension to show how values interrelated. This helped us understand completeness and vagueness of titles. A VP at a bank means something completely different than a VP at a tech company. Taxonomies alone were not expressive enough to capture these nuances.

— [The synergy between LLMs and knowledge graphs](https://www.lutzfinger.com/transcript/2023-08-24-the-synergy-between-llms-and-knowledge-graphs/) · _The Edge_
