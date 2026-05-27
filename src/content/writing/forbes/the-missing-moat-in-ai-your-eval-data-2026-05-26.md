---
title: "The Missing Moat In AI: Your Eval Data"
date: "2026-05-26"
source: "Forbes"
sourceType: "column"
url: "https://www.forbes.com/sites/lutzfinger/2026/05/26/the-missing-moat-in-ai-your-eval-data/"
canonical: "https://www.forbes.com/sites/lutzfinger/2026/05/26/the-missing-moat-in-ai-your-eval-data/"
excerpt: "The Missing Moat In AI: Your Eval Data [Image: AI chats don't just generate answers. They generate eval data. The company that harvests it best wins. getty] What wins the AI race? UX? Access to users? The foundation…"
tags: ["missing", "moat", "eval", "data"]
wordCount: 1041
bodyAvailable: true
---

# The Missing Moat In AI: Your Eval Data

*[Image: AI chats don't just generate answers. They generate eval data. The company that harvests it best wins. getty]*

What wins the AI race? UX? Access to users? The foundation model? The data? All of them matter, and all of them are being fought over. But the real value may sit in the one thing OpenAI, Anthropic, and Gemini have not yet made central: your own eval data. Sure, there is the occasional thumbs-up button. But who is really using that signal? The real answer to the AI race may be hiding there.

By now it is clear that the AI race will be decided by the race to build AI agents. They are the future of software. We no longer click through menus, we delegate, and that shift is already rewriting [every workflow in the enterprise](https://www.forbes.com/sites/lutzfinger/2025/01/05/ai-agents-in-2025-what-enterprise-leaders-need-to-know/). My own AI agents schedule meetings, cut video, draft replies, and watch my inbox, and their number grows daily. What makes an AI agent platform successful? We see two main discussions: the foundation model and the user access. Both matter. Neither is sufficient on its own. We need a way to work with eval data.

## User Access: Google Shows Off

This year's I/O was all about user access. Google poured AI onto every surface it owns. There was no single story except this: every surface has a UX, and Google now wants AI inside each one. It might not sound visionary but it makes sense, since Google owns the surfaces: Search, Android, Chrome, Gmail, Docs, YouTube, Maps, glasses, and the Gemini app.

In AI workflow language, the equivalent is not the surface but the harness: the layer that lets an agent act through tools, permissions, memory, and guardrails. Different word, same strategic point: the LLM found new ways to direct the product. Spark to run your digital life, Omni to generate and edit video, Antigravity to manage coding agents, a redesigned Search box, glasses, and more.

But Google, being Google, showed up with the model argument too. The claim that Google will build the stronger model was delivered by Demis Hassabis, talking about AGI and the foothills of the singularity. It was hidden near the end of I/O, overshadowed by all the harness and user-access discussions.

Do not get me wrong. I believe this I/O had the right focus, even if the overall vision was missing. I believe in the harness and the user-access utility. It is also why I would not write off Apple, which missed the AI train completely yet still owns the surface where agents will live. But the surface is necessary, not sufficient, for building a platform.

## Workflows Are Moats, But Workflows Are Brittle

I argued back in 2023 that [AI models do not create moats](https://www.forbes.com/sites/lutzfinger/2023/08/18/is-openai-going-bankrupt-no-but-ai-models-dont-create-moats/). Workflows do. That is the whole reason [SaaS is not dead](https://www.forbes.com/sites/lutzfinger/2026/04/24/saaspocalypse-is-deadthe-future-of-saas-is-saas/), despite a year of obituaries. SaaS can build the new AI-driven workflows on top of its user data and customer surfaces. But workflows are brittle. One new prompt, one model update, and the whole chain quietly breaks. I watch this every time I get students [coding agents in my Cornell workshops](https://ecornell.cornell.edu/courses/artificial-intelligence/building-enterprise-ready-ai-agents-from-prototypes-to-production/). It is easy to start and just as easy to break. It breaks silently because the workflow has no idea what the right outcome looks like. It is missing eval data and it cannot self-correct itself.

## Evals Are The Answer Key

Evals data is this missing link. It's the unit tests for a workflow, the answer key that lets it notice when it has drifted. We produce eval data all day long. Every time you approve a draft as written, that is a positive label. Every time you rewrite the AI generated email before sending, the rewrite is the exact distance between what the AI produced and what you wanted. Every time you reject some recommendation, that is a negative example. Email, calendar invites, documents, browser actions, all of it is ground truth, and it is the one signal no general model owns, because it is yours. Silicon Valley started to invest millions into startups managing evals, as it knows the answer key is worth more than the model alone.

### Won't Smarter Models Not Be Sufficient?

The standard rebuttal is that this is temporary. Make the model smart enough over time and it infers your preferences, so why bother with evals? Because your preferences are not a reasoning problem. They are private, specific, and nowhere in any training corpus. No amount of raw capability tells a model that you answer your MBA students more bluntly than your investors, or that you never let an agent book a flight. A bigger model is still a better stranger, and being autoregressive, one wrong guess about you cascades into the next.

## AI Platform To Manage Eval Data

But eval data has to be managed. When, and how much, should the eval dataset reshape the prompt or the reasoning? So far I do not see a single product that lets you own and direct that eval loop. Everyone is racing to put agents on every surface, and nobody closes the loop back to what you call good.

Anthropic is the current leader at building the workflow and the harness. But it splits the work across three products: Chat, Cowork, and Code. You design a skill in one surface, run it in another, and chat in a third. In theory the three are connected through Skills. In practice as [I discuss in the LinkedIn Post](https://www.linkedin.com/posts/lutzfinger_claude-openai-activity-7456972312282578945-9la2), none of them can actually change a skill based on eval data. Designing and running a workflow sit in separate hands, so feedback in the form of eval data never gets implemented.

## Eval Data Should be First Class Citizen

How could eval data become a first class citizen? I have been building a small [thin client](https://github.com/lutzfinger/SAI-baseversion) that sits on top of Claude, an agentic setup that captures your eval data and creates an improvement loop. It is vibecoded, and it should be read as a demonstration of the idea, nothing more. We need tools that use our own eval data. The frontier will not be smarter models alone. It will be how well we interact with our own data.
