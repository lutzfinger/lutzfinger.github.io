---
title: "Healthcare's AI Lesson: Autocomplete Isn't Understanding"
date: "2026-01-16"
source: "Forbes"
sourceType: "column"
url: "https://www.forbes.com/sites/lutzfinger/2026/01/16/healthcares-ai-lesson-autocomplete-isnt-understanding/"
canonical: "https://www.forbes.com/sites/lutzfinger/2026/01/16/healthcares-ai-lesson-autocomplete-isnt-understanding/"
excerpt: "Healthcare's AI Lesson: Autocomplete Isn't Understanding [Image: A human-looking robot selling fake medicaments — Dutch artist Dries Verhoeven] I just got back from the JP Morgan conference. A few learnings that apply…"
tags: ["healthcares", "lesson", "autocomplete", "understanding"]
wordCount: 745
bodyAvailable: true
---

# Healthcare's AI Lesson: Autocomplete Isn't Understanding

*[Image: A human-looking robot selling fake medicaments — Dutch artist Dries Verhoeven]*

I just got back from the JP Morgan conference. A few learnings that apply to any industry, not just healthcare:Humans + AI will change the industry. Not AI alone.Cash flow matters. Not AI hype.The real AI revolution is operational.One of the most hyperbolic promises in healthcare in the last month was the claim that: "AI is going to design our drugs and will replace researchers." In my view, this is not true. The real shift is simpler (and bigger): AI makes clinicians and scientists much more effective: better priors, better search, better filters, faster loops. Humans stay in the driver's seat because biology is noisy, evidence is incomplete, incentives are asymmetric, and accountability is real.

## LLM and GPTs Are Only A Small Part Of Healthcare's AI

Nowadays, and JP Morgan participants were no different, AI seems to equal transformer architectures (ChatGPT being the most visible example). Transformers are excellent at sequence modeling: language, time-ordered events, longitudinal notes. That's why they shine as a better interface to messy healthcare data: summarizing records, finding relevant context, and supporting decisions. Text transformers are the ideal UX / interface over your own (health) data. No surprise that OpenAI launched ChatGPT for healthcare.Transformers can also be a better interface over EHR data or a string of ICD-10 codes. We can predict the next most likely ICD-10 code or find the best patient for a drug trial. This will mean faster identification of eligible patients, better screening lists, less manual work, and faster execution. Ambient clinical documentation is another perfect use-case for transformer. By summarizing clinical documentation, we can reduce friction, return time to clinicians, and increase trust between payers and providers.

## Healthcare's AI To Discover Drugs

However, most transformers are used as a next-token prediction. The predicted last token is the input for the next predicted token (autoregression). That creates impressive language competence, but it can have exponential errors. Moreover it doesn't automatically imply conceptual understanding or reliable causal reasoning. Drug development depends on mechanism understanding and generalization under uncertainty. In a regulated setting, "seems right" isn't good enough: outputs need guardrails and real-world validation. We were at this place before. In 2008, excited from google's ability to predict the next click, WIRED magazin proclaimed "the end of theory", say that all what is needed is data. That proved to be wrong and now we have better models for the same approach and yes, we still have not seen the end of theory.

## World Models Instead Of Next Token

To discover drugs, one need understanding of biology and chemistry. Transformers don't have this only in limited capacity. This gap is exactly what Yann LeCun has been calling out: token prediction ≠ conceptual understanding. One proposed direction is JEPA / world models. JEPA (Joint-Embedding Predictive Architecture) aims not to predict the next token but the latent embedding context. It aims to understand predictable structure instead of reconstructing raw pixels/words by predicting mechanisms. The ambition is to learn more grounded representations: concepts, invariants, and causal structure, all in embedding space (essentially the space where the model keeps its knowledge). It's a compelling direction, but let's be honest: it's still research, and not yet a proven industrial foundation for mechanistic biology or end-to-end drug design.

## It's Not About Healthcare's AI But The Bottom Line

So what's the real impact of AI on drug development today? AI gives us better priors, better search, better filters, and faster loops. It narrows the hypothesis space, surfaces weak signals earlier, improves decision support, and accelerates the cycle: data >> model >> candidate >> experiment >> data.This is also how to interpret the headline-grabbing "AI-designed drugs" examples of Exscientia and Insilico Medicine.These milestones don't mean "AI replaces scientists." They fit the pattern above: AI helps prioritize, propose, and optimize, and humans validate in wet labs and the clinic. The impact is real, but it shows up primarily as faster iteration and better selection under uncertainty, not autonomous discovery. As one of the leading investors said at the conference: "I don't really care whether they use AI as long as they deliver the bottom line results."This is exactly the big point that works for many industries. Don't hype AI as such. It's about the impact, and to create impact we will need humans. AI + humans making healthcare teams materially more effective, and that alone is a massive change.
