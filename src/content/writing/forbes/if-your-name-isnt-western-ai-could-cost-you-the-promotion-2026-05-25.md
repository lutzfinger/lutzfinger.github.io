---
title: "If Your Name Isn't Western, AI Could Cost You The Promotion."
date: "2026-05-25"
source: "Forbes"
sourceType: "column"
url: "https://www.forbes.com/sites/lutzfinger/2026/05/25/if-your-name-isnt-western-ai-could-cost-you-the-promotion/"
canonical: "https://www.forbes.com/sites/lutzfinger/2026/05/25/if-your-name-isnt-western-ai-could-cost-you-the-promotion/"
excerpt: "If Your Name Isn't Western, AI Could Cost You The Promotion. [Image: The future of work will be AI driven transparency. That's not without risks.getty] Imagine a company where every meeting is recorded, transcribed, and…"
tags: ["western", "could", "promotion"]
wordCount: 800
bodyAvailable: true
---

# If Your Name Isn't Western, AI Could Cost You The Promotion.

*[Image: The future of work will be AI driven transparency. That's not without risks.getty]*

Imagine a company where every meeting is recorded, transcribed, and read by a machine. Good ideas no longer die because the loudest person talked over them. Contribution gets measured by what you said, not by the title on your badge. The junior analyst who keeps pushing the conversation forward finally gets seen, even though she never had the corner office. Tools like Granola, Read.ai, Fireflies, and Avoma now routinely track talk time and participation, and firms like Amazon and Meta are folding AI-surfaced contribution into how they review people.

## The Flat Company, AI Is Becoming A Toolset for HR

For most of corporate history, being heard was a function of power. You spoke, others wrote it down, and ambiguity protected whoever was already in charge. AI changes that physics. When the transcript is the record, ideas can propagate on merit, and people can no longer hide behind vagueness. I have argued before that AI augments knowledge workers rather than replacing them, that it makes good people more valuable, not less. See my view in Is AI Replacing Us. A flatter, faster, more transparent organization is the upside of that same shift. So far, so good.

## AI Bias in HR, AI Discrimination

AI is not perfect. It learned from us, and it inherited our blind spots. For example, large language models screening resumes favored white-associated names 85% of the time, and never once favored a Black male name over a white male one  (University of Washington). The bias is not only about names on paper, it is about voices in the room. Speech models such as Whisper produce significantly higher error rates for non-native and accented speakers, because the audio they trained on skews American and native.

None of this is new. Years ago I wrote: It’s The Data, Stupid, explaining that the main problem with AI is biased data producing confidently wrong answers. Let me show the issue in a real-life demonstration: my own classroom.

## AI Bias In Action

I teach at Cornell and at INSEAD, where class participation is a graded part of the course, scored either by me or by my teaching assistants. To show how the AI discriminates, compare its judgment against mine. The graph below splits my students into two groups: names a Western, English-trained system handles easily, and names it does not. The vertical axis is how often the AI heard a student’s name across 28 sessions; the horizontal axis is my own participation rating. In a perfect world each line would climb together. One does. The other stays almost flat.

*[Image: Same participation grade, very different AI attention. The AI system "heard" Western names about 5x more often than non-Western ones.Lutz Finger]*

For the Western names, my ratings and the AI's count move together, a correlation of 0.53. For the non-Western names the link falls apart, a correlation of 0.27, statistically indistinguishable from noise. The AI also heard the Western names about five times more often. In plain terms, for half my class the AI's "objective" measure of contribution had almost nothing to do with how much they actually contributed.

To be precise, my count tracked name mentions, not transcription quality, and the sample is small, so this is a demonstration rather than a controlled study. It surfaces how easily an AI can systematically fail the people whose names and voices its training data underrepresents.

## We Are Not Helpless

The good news is that this is a data science problem, and data science has tools for it. We can reweight a training set so underrepresented groups carry proper signal. We can transform features to break their correlation with sensitive attributes before a model ever learns. We can add fairness constraints during training, and we can audit predictions afterward against tests like demographic parity and equalized odds. The fix is not to switch the AI off. It is to test it by checking whether its score holds up across every group, not just the easy one. I describe one of those data validation approaches in Hack For Fairness, where I keep peer reviewers from gaming the process.

AI will improve how we work. AI will flatten hierarchies. And yes, AI will help decide who gets promoted. But the same tool, used carelessly, will do real harm. What we need is algorithmic transparency and a clear-eyed acceptance that every one of these tools is biased. The encouraging part from my classroom is that the bias is measurable, and what is measurable can be fixed. Get that right, and we keep the rewards without quietly deciding that some people were never in the room.
