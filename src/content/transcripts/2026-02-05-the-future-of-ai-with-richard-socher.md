---
title: "The Future of AI, with Richard Socher"
date: "2026-02-05"
kind: "keynote"
show: "The Keynote on AI"
guest: "Richard Socher"
host: "Lutz Finger"
sourceUrl: "https://ecornell.cornell.edu/keynotes/view/K020526/"
---

🎵 Welcome, to yet another Cornell Keynote. I'm your host, Lutz Finger. I'm a faculty member of the Johnson Graduate School of Management, where I teach several courses on AI to MBAs and software engineers. I also created a certificate program where I replaced myself actually with a virtual twin, AI twin.

That program is open to the public and is titled Designing and Building AI Solutions. So if you want 100 hours more of me and a deep dive into AI, please join that course. Beyond academia, I founded several successful startups, which I sold. Currently, I'm the head of AI at Xgen, where we transform how shoppers engage with search and discovery products.

Now, we are currently sitting on the peak of the AI hype cycle, and there's a lot of discussion. So if you follow me on Forbes or on my LinkedIn profile, you will see a lot of discussion on that hype cycle. But how to put this all into the right framework is complicated. And now we have a new year and we should talk about the outlook for the year.

And therefore, it's my special honor to welcome today's guest, Richard Sautcher. Richard is a wonderful guy. Richard is a well-known name in Silicon Valley and beyond. He's a German computer scientist.

And you hear I have a German accent, but no, we won't do this in German. He is an entrepreneur. He is a venture capitalist. He's recognized as a global pioneer for natural language processing.

So he is currently, one of his roles is the CEO of U.com. And Richard and I actually had a coffee, and we had a conversation about this. And on that day, as he started U.com, and we will talk about it, it's like, I mean, it's insane. He reached an valuation from 1.5 billion.

He's also spearheading a super interesting new venture, Recursive, aiming at the holy grail of the AI field in itself, automating AI research. We definitely need to talk about this one. And also, Richard is the founding, the founder of AIX Ventures, where he mentors the next generation of AI startups. Maybe a point of disclosure at this point, I'm a proud member, like a proud LP for Richard, because as he opened this fund for me, it was clear, like, yeah, damn, I have to be there.

So, yes, that's me with this one. Welcome, Richard. I'm so glad to see you here. Thanks for having me.

I'm excited to be here with you. So tell me a little bit about yourself. And audience, we, like this, like Richard drives audience, we have a full room, I see this here. So as usual, ask any question you want.

If you put in your name, I will call out your name. If you want to be anonymous, don't put in your name. Not every question will get answered. But as we walk through our 2026 projection, as we walk through why AI is what it is, yeah, you know, ask questions.

But Richard, first question to you. Like I know you now since a while, like Germans in the valley know each other. You have done many things, PhD at Stanford, chief data scientist at Salesforce. You have done all those amazing AI ventures.

But like, how did you get there? What's your, Richard Sorcher's life story? I guess without going for too long, I'm originally from Dresden. And in 2003, I loved languages.

I love math. I love programming. And thought the best place to combine those would be in what was then called linguistic computer science, natural language processing, AI. And started that at Leipzig, went to Montpellier for a year, went to eventually Saarbrücken at the Max-Main Institute there, and then looked at where are all the most highly cited AI researchers.

And a lot of those were, you know, at Stanford, MIT, Berkeley. And so applied there. Got rejected and applied a couple more times and eventually got into Stanford. And then, you know, like really felt like, wow, now I'm, I succeed here.

And I'm, you know, like win the best thesis award or something. Like I think that might really matter to the world. And my impact could really be more profound. And so worked super hard.

Had the good fortune of seeing how, you know, how I was doing. And then, you know, how 90% of the early NLP papers back in 2010 were about beautiful statistics and beautiful statistical models and physics inspired equations. But then 90% of the actual work was hacking up features and thinking about how to represent language to these statistical models. And then at the same time, Andrew Ng, I was working with Chris Manning at the time, at the same time, Andrew Ng was talking about how, in computer vision, you just take raw pixels and then you learn features from those raw pixels.

And I was like, couldn't we take those ideas, be inspired by them and actually apply them to natural language processing? And so that's what I did. And eventually I was happy to win the best computer science thesis award. No one was teaching this in the world.

And I was thinking about becoming a full-time professor, but then also felt like clearly this technology could now be useful for real companies and real people. Can I talk, because when we talk about statistics and NLP, like fun fact, Richard, my first startup actually used the Stanford NLP box, which you probably worked on, put a nice interface over it and created a couple of million on revenue, just like with the NLP box. But just tell the audience so that we, because when we talk about transformers, people get lost, right? When we talk about statistics, people are like, yeah, whatever.

Like just explain the basic idea of what you're talking about. And then I'll just, I'll just kind of go through it. But I'll just kind of go through it. So you can kind of explain the basic idea of NLP, like counting words kind of thing, and how you then actually come over to Andrew and because it's a fundamental thinking shift, which we will need to cover at least from the technology before we go over to your new venture.

Yeah. So, you know, at a high level, it's very hard to represent words to a, to an AI model, to a transformer and so on. You need to think about how, how you actually give them to such a statistical model. And what ends up happening is like statistical models want numbers, right?

But words aren't intuitively numbers for normal people. And it just like dog is here and that's just dog and cat is a different word. And you could kind of look at, well, are there like character overlaps? No, like they're very different, you know, and you can look at, are they similar length maybe, but that doesn't tell you anything about the meaning.

And so what you find is eventually, you can use the idea of statistics and actually say, well, words are kind of similar if they appear in similar contexts. And if the context was a number, then maybe the word could be a number. And then if you say both of them are lists of numbers, vectors, then you can actually feed them into a neural network. And then all of a sudden, a lot of cool things unlock is now the neural network can learn how to combine words, combine contexts, combine tasks, descriptions, and all of those things.

And so that was kind of the, leap on using neural networks to keep merging words together into phrases and sentences. Yes, because before that we just counted, right? And we said like, okay, dog comes up a hundred times, cat comes up a hundred times. So both seem to be equal.

And now we actually have those, we call them embeddings, ability to do a better representation of those words. Now you made, you like, we see you very much in AI research early on. And you tell like, there's one story you tell from times to times about your idea, which led to get later onto you.com. And it, people kind of gave you a cold shoulder.

They're not feasible. Tell us a little bit about this. This is a cool origin story. Yeah.

There are a few, there are a few cultural as I've gotten over the years. Certainly in the early days, no one believed that neural networks should or could be used usefully for any of natural energy processing. I've had famous professors, famous professors scream at me at conferences saying makes no sense. Some nicer ones say you're just wasting your career on this dead end thing of neural networks for NLP.

And, and, you know, encouraged me to do something else. And so I think the latest and maybe biggest one was when we back when I was at Salesforce. So did the PhD was a professor on the side, but my main job was metamined creating neural nets for other companies. Then we got acquired by Salesforce and became two scientists there, build out a research team.

And in that research team, I kept on wanting to unify the field of natural language processing. And we had moved from feature engineering to architecture engineering. And so every task had its own architecture. And I was like, that's better than doing the original feature engineering.

But now we're just like, say, Oh, for sentiment analysis on Twitter, I need this kind of model for translation. I have a completely different kind of model for summarization or question answering. I have yet another model. And I thought about how could I unify all of this?

And ultimately all of it is language. Everything is some kind of context. You ask some kind of question over that context. You prompt this model with a question and you get some kind of text as an output.

And so I had these two papers, ask me anything and Deca NLP with various coauthors where we wanted to unify it. And we could show, look, everything is just one neural network. You can train one very large neural net with a bunch of different attention mechanisms, similar to transformers and so on that came out around that time. And before and after I'll need those two papers.

And you just prompt that one model with different questions. What's the sentiment of the suite? Here's the tweet. Give me the sentiment.

What's the translation into German? Give me the outcomes of German. And so that paper was also very famously rejected, completely taken apart by the authors, by sorry, by the reviewers at one of the sort of more future leaning AI conferences, ICLR, all of that is public. You can actually find like if you look for open review, Deca NLP, the natural language processing, Decathlon, you can read those old reviews still online.

And they're just like, it is so ill conceived. It makes no sense. There's not even humans have a single model. I'm like, have you looked at the brain?

Like, do you really change your brain when you ask, answer different questions? It's one brain. And so people thought it was too crowded because there are too many good results in one model and one paper. And so unfortunately that paper got rejected, but fortunately it was all public and it did inspire a couple of folks at various startups, including at OpenAI to then go into that.

And they nicely cited it. And the rest is sort of more well-known history. Which is cool, right? I mean, like you, you link the foundation and essentially around sentiment.

There are so many things which we tried on sentiment. And this is where the model architecture actually makes a lot of sense. And let me like, I tried to dumb this, like, like to make this very simple that we can keep this in the short range. But if you just count words, negative and positive, you don't catch irony.

You don't catch context. You like nothing of this work. So for a long time, people worked around sentiment said, we want to have sentiment. You just were in divorce and we need to come to it.

My first thought, my first customer was actually the World Economic Forum. And I worked with them on sentiment in a very dumb, dumbed down version. And it never really worked. Now, the new models allow to do this.

And we see OpenAI and everybody strive now. You went to divorce because you are seen as rightly so as one of the leaders in that space. And you kind of like made your 2026 predictions. Like, and I, I'm like, the list here is already full.

Thank you, Zoltan, Dan, and Gurav and everybody else who is writing at the moment questions, John, keep on doing those. But let's first to get the structure in. Davos predictions and then we weave your questions in. So my predictions for 2026?

Go for it. Boy. We will definitely keep you accountable because you're alive here. I love it.

There are There are a lot of them. maybe one that could be interesting is that a lot of folks are wondering about different kinds of jobs. The job landscape will change a lot in the next couple of years. And we will often find new jobs.

But in the moment, it's very hard to predict what those are. Like 150 years ago, over 90% of people worked in agriculture. If you told them, like, hey, by the way, big automating machines, we call them tractors, will take 90% of your jobs, they would be, like, freaked out and be like, what else are we going to do? There's, like, you know, we just need food and shelter once in a while and, like, build that and then that's it.

And so I basically predict that one of the main types of new jobs will be that of a reward engineer. It's a little bit like a prompt engineer, but instead of just with text, a reward engineer will have to... have to think about all the ways to define what success actually looks like for an AI when you delegate a task, right? And so all of us will have to get better at delegation of tasks.

And so I give you an example. You're in something fairly simple and, like, at a high level, which is customer success, customer service, right? You get a message and now you tell your AI, just get my customer satisfaction scores up. Like, CSAT scores.

A very sort of main metric that customer service organizations often look at. Most companies have some form of that, right? And so the AI will say, okay, easy. And it just goes and creates a million bots that auto-robocall your customer support hotline and then leave a five out of five star rating.

And you're like, wait, no, that wasn't what I meant. And you're like, well, that is what you said, right? And so now you have to think about, like, how do I refine this reward? And it's like, well, it has to be with real people.

You might then say. And then the AI goes off and says, easy, I'll just give a thousand dollar gift certificate to everyone who, you know, has a $10 DoorDash problem with their order. And you're like, no, no, wait, that's not what I meant. And you're like, well, you have to be very explicit about what you mean when you talk to this AI that can be very, very smart and do all kinds of things and, like, capture all kinds of rewards that you might give it.

But you have to be very unambiguous. You have to be very good at delegating. Those jobs. And you need to think about how to manage ultimately an AI, how to trust and verify in the right level what kinds of things are good enough already and can be done by an AI that aren't.

So that is one prediction. That would be the first kind of job that will, like, a new kind of job that we'll see. And that is a general theme, I think, that all of us have to become better manager. Now, if.

Okay. So one. Like, the way we work with AI is changing, right? Because now we have those agentic workflows and you described it.

This is like now we need to have the right alignment between us and the AI, which is a managerial question, which we are working with since ages only. We did the alignment between humans and managers or humans and humans. Now, if you see those MIT studies, which says, well, like, people tried and, like, they did all those tests. And.

There's these machine learning machine learning machine learning machine going to be black and white. It's not going to take all the jobs within the next two years. But it's also not just a bubble that will burst and then be irrelevant. Most of the biggest companies in the world in 20 years are probably the ones that are starting right now.

Just like even with the internet bubble, yes, pets.com, for instance, was too early. But ultimately, they were right. Now people order their pet food online, right? And so I often like to say this.

If you're a professor or researcher and you're ahead of your time, you're eventually called a visionary. If you're a startup founder and you're ahead of your time, the company is just dead and nobody cares. It's a really rough time. You have to be right at the right time as a startup founder.

And if you're ahead of your time, you know, and companies or customers or users don't quite see yet the appeal and whatnot, it's over. And so I think... What you're really saying is you and I, we are hedging our bets by... Being both?

A little bit. A little bit. Yeah. But I do think in the next few years, like every single industry will change.

You can predict how much it will change based on how much data is available for a given task, right? So plumbing, as an example, I've been given for a while, no one's even collecting data about what a plumber does. And hence, there's no automation potential. A lot of jobs that are all digital, and especially the kinds of jobs where the outputs are publicly available to everyone on the internet, those are the kinds of jobs where AI can learn a ton from the collective knowledge of humanity and then actually automate a ton.

And we're going to see some pushback on some of those automations as we've seen in all previous iterations of automation. Totally. So it's actually, it's super fascinating that you say so. Essentially, the humanity's biggest shift is the manager of AI.

And we used to have product managers in Silicon Valley, which kind of tried to think of AI as a way of managing the data. And now we're trying to think of AI as a way of managing the data. And so I think that's a really good point. And I think about the most average interface, which appeals to most users, right?

And Salesforce is a very average interface. And now every of those changes to a workflow management tool. I actually just, this weekend, I updated my online course certificate around that topic, right? So that evals become the new structural setup for those managers.

Meaning, maybe talk a little bit about the new structural setup for those managers. And I think that's a really good point. And I think about the most average interface, which appeals to most users, right? And Salesforce is a really good about how do we, how do you envision to interact with AI?

If we say like, if it's evals, if it's descriptions, if it's guiding docs, if it's prompt design, there have been discussions around prompt design being dead. So I mean, yeah, tell a little bit, what do people need to learn if they want to become this future manager? There are a lot of things to unpack there. And you, I would say yes to all of the above.

But I think it's a really good point. And I think it's a really good point. Yeah, it depends on where who you are and what your role is. I think in general, you can see how well a company is positioned for the AI age based on what benchmarks they have and how high quality those benchmarks are that they have that they that would allow them to automatically evaluate how well an AI does on a certain task, right?

So if you have a clean, like you want to find a vendor to do automated question answering over your internal database. There might be a couple of examples in there. There might be examples in there. There example from you.com that we see a lot.

And you have like here 100 questions, maybe ideally 1000 questions. And here's what the right answer would be across our entire knowledge base inside the company. Right? Now, if you have that question answer pair, now you can quickly evaluate different vendors on and see who is the best one that is going to be an important task in this AI age is building out those benchmarks and then optimizing your organization to basically find the best tools or in some cases, if it's really core to your business, build those tools yourself.

If you have the money and the power and the people and so on, you can build and it's very core to your industry, you want to build some of these tools in house. So that's one thing now, once you are a user of that, then it's about how well can you delegate these tasks to different agents. And there, indeed, is a lot of work that you can do. And that's what we're going to talk about today.

But before we get into that, I want to talk about some of the things that you can do. So let's get started. There are several ways to select who is the best machine for一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定一定 freelancer, then everything you do, you can actually train your own AI so that when you've done it five, 10 times, the AI will do it for you. And now you just automatically generate work products that you can charge for.

If you have no ownership, you don't even have equity ownership in the startup you're working at, and you're doing work just paid by the hour, then you're creating training data for an AI. And with that training data, the AI will eventually be able to do exactly the same job. And so that is going to be a big divide. And I think there are different ways that that future can go.

But one positive way is that we will all become and are much more likely to become entrepreneurs. Awesome. So there are two topics which we should discuss. One is the unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment Awesome.

So this is actually like, so there are two topics which we should discuss. One is the, because you made this separation early on between the user and the person creating, and we should have a discussion about how those merge. And the other one is the question about, like, can you replace yourself with an AI? Since I replaced myself with an AI in a course, I know how dumb that AI is at the end, like reacting to new trends.

And we can talk a little bit about u.com. But let's first start with the separation, because you actually talked in your Davos note, by the way, it's very like on u.com, you find Richard's prediction, and it's worthwhile a read. You talk about the Pegasus area, the billion dollar C-trance, you talk about the 10 people unicorns. And then, and this is about the, about creation, then in the audience, ask about what's your opinion about AI eating software?

Where is the market narrative? Right? Is it like, is it right or wrong? Like, tell me, tell us about it.

And this comes all together. Pegasus is like the big founding rise, like the ability to create your own code without many engineers. And yeah, what's your reaction? So, so Pegasus is this term I, I call sort of a play on unicorns in that, you know, it used to be an amazing achievement to make your company worth a billion dollars.

And that's what we call a unicorn in Silicon Valley. Now, there are some companies that be, that are worth multiple billions of dollars at the foundation when they, when they're just starting to raise their seed round. And it almost feels weird because like unicorn kind of suggests to some degree, like a huge amount of traction. So it feels weird to just call them a multi corn or a decker corn or something.

And so I call them Pegasus. You know, they, they can like already fly very high. They have multi-billion dollar valuations from the get-go. Usually that is because of the team and the vision, right?

When you have an incredibly strong team of people who have already delivered incredible value to the world in multiple different ways, and you put many of them together, and then you have also a vision that if they success, if they succeed in that team with their vision, it would change all of humanity. Then it can make sense to actually go big and really lean into and invest in companies that are very highly valued because if they're successful, you can still have incredible a hundred X returns. And that's kind of what Silicon Valley looks for. And I think Pegasus is a, is sort of a signal here that with the right AI, a lot more automation potential can come.

And that's what a lot of investors sort of see also and, and hence invest in. But is, is the reason that we have those Pegasus as a potential new setup because AI is eating software development? Is it because you don't need software engineers anymore or like what's, what's your viewpoint here? I think we need, we will need software engineers for a very long time, but the type of role and who is can call themselves a software engineer will change and massively expand.

This is what I love in invention and creation of new ideas and scientific discoveries is actually not a zero sum game. It's value creation and you can create more and more value, right? In once, once there's a market now it's about value capture and value capture can be zero sum, right? So I think there's a big separation here.

AI especially as it automates the scientific method which we've done manually, you know, creating ideas, implementing those ideas, validating those hypotheses and models and so on, like that has elevated all of humanity so much, right? Like, like in history, since we've had the scientific method really figured out like we've seen so much progress around physics and chemistry and biology, and there's so much more to come there. So I, I want to really push people and, motivate them to say, Hey, I, there are certain things that if we can automate them, like knowledge discovery, right, it will be an incredible advantage for, for humanity over the next millennia. Yeah, I totally.

Now there is a fun side story here. Like, so I see in the audience, there are a couple of my former students. It used to be like, I teach now since over 10 years, right? And it used to be that I had MBAs and I tried to pair them up with computer scientists in order to get prototyping up.

Right. And so I, wanted to ask was you saying if you are a sole entrepreneur and you do stuff, then you can copy yourself. And I mean, I tried this in my course and it works for static content. But obviously, if you go to my virtual alerts and ask them about Moldbook, for example, and put Moldbook in a structure, Moldbook is something where it's a Reddit for AI talking to AI and we can talk about the content here in a second.

But obviously, my Lutz AI would not be able to comment on this. You built u.com and you should tell the audience a little bit why you built it and how do you overcome this recency problem which I'm describing here? Yeah. So, in many ways, LMs are amazing.

They're certainly a massive amplification of human intelligence across all these different tasks. They might even be called AGI in a simple form of general, right? It's rare to find one model. Now you can ask not just any kind of question, but ask it to do your tax returns, to write a poem, to look through medical results and give feedback on how to improve your biomarkers, like all these different things.

And so, what's the most important thing for you? What's interesting though is that what we needed to do for these LMs to make them that good is to build AI search infrastructure underneath them and teach them when to use that tool and when not to use that tool, right? So, if you just want to write a poem, the AI can just write your poem. You don't need citations inside your poem.

But if you ask about the latest medical results on something, then you do need to have citations and you do want to actually understand where that information is going to be. So, if you're going to write a poem, you don't need to have citations inside your poem. You don't need to have citations inside your poem. You don't need to have citations from.

And so, basically, that's what we've innovated. That's where we're the first search engine to ship a large language model inside back in 2022, already even before ChatGVD came out. And so, what we're now basically offering is that AI search infrastructure to other companies, to companies that want to have their LMs be up-to-date, accurate, and have citations for their phones. And so, that's what we're doing.

And so, the way we do that is we basically allow the LM to say, if you're not sure, or if it's helpful to answer that user's prompt or question, go on the internet and find the information. And so, we essentially build a Google for LMs. And that now allows the LMs to be up-to-date. And we've seen a huge rise in our revenue and now have wonderful partners and many customers like Alibaba and Siemens and Salesforce.

And so, we're now able to do that. And we're now able to do that. And so, we're now able to do that. And Winsurf and even OpenAI's partner, GPT-OSS, and you can actually see how to incorporate inside the open source software version of GPT, how to incorporate a search engine into that and browser use and things like that.

So, yeah, it's been a really exciting ride to see how the technology kind of has moved. Hallucinations aren't as big of a problem anymore. You can actually really start to rely on this if you put it all together. And so, we're now able to do that.

And so, all together correctly. Yeah. Now, so what you just described is an LLM not only being a neat interface, but an LLM having up-to-date information, like through this lookup method. It's a rag model, essentially.

Now, Helen in the audience had another question. He's like, okay, I understand it. Like you can copy yourself, but how do you think about value judgment and cultural reward? Because the point you just had on the write a poem, how you write a poem depends obviously very much on what your expectation is and how the poem will impact.

There's different ways of doing this. So LLMs have not necessarily the judgment where humans would come in. I don't know how you see the future happening there. I do think LLMs will have better and better judgment.

Of course, it's interesting. There's actually research on sort of the theory of mind. Like imagine you were this person, here's the situation, how would you respond? And it turns out LLMs have a decent theory of mind in that sense.

There are also, you know, you can kind of push and there's some interesting research that just came out actually yesterday from Princeton, where they showed that indeed a lot of people actually have a lot of medical benefits in terms of their well-being and mental health from talking to an AI. Like they can work through problems. It's a little bit like you can journal, but also your journal can talk back to you, you know? And so it's kind of sad if you say, oh, you don't have real friends, you have an AI.

It's like, well, but it's not sad if you're journaling, like that doesn't seem like a sad thing, right? And so you're just like, it's all about how you phrase it. And I do think there's some moral panics also, you know, for a while. It was quite a bit of a struggle.

But I think that's also just like, who can wonder who can wonder who can wonder who can wonder who can wonder who can wonder who can published Die Leidende Jungwerte and people like, you know, just like they're very tough subjects in that, in that novel. And people like it's ruining our youth. They're just like their heads are in these books and they're not living the real, in the real world and living these dream fantasy worlds and so on. Long story short, I think the same thing is happening to some degree with with chat agents.

Now it doesn't mean that we shouldn't regulate them in some capacity. Maybe they should have a rated limit, you know, like a rated R or, you know, rated PG 13 kind of thing, depending on what kinds of topics they're willing to engage in and discuss. But overall, I think the sort of theory of mind will get better and better. And the AI might not know exactly how you, you know, how you have the poem you're asking it to write will be perceived by all the different people that you may send it to.

But I think there's also some that sort of where the agency of the people will come into play. Like you have to decide and you have to iterate with that. And you're like, I don't like this rhyme. I don't like this metaphor.

Maybe rewrite it, make it a little friendlier or less dark or whatever you might want your poem to be. Yeah. Now I think this is like the agency is still with humans, right? The selection process.

So whenever I'm actually at the moment writing one Forbes piece together with one of my former executive students where we look at content development, right? So the, the idea of will this all be replaced? Yes, we will. The creation process becomes easier, but selection process is still based on agency, right?

Now what you, there is another important point you raised around discussion between an LLM and a human. I, found like I helped to build Google health at Google. I was one of the first PMs there and humans tell Google so much about the human, right? And I, And my favorite example of how trust, like how trustful a human is towards Google is you find searches like, for example, cocaine gazoos.

Somebody took cocaine, had bloating afterwards, and now comes and want to know, is this normal? They don't go to a doctor and ask them that, right? So they go to Google, Dr. Google in this case.

So we have loads of those examples. And therefore, LLMs, being a better interface to us human, have obviously a huge ability to create a new level of trust and a new level of information. And u.com being search and discovery is extremely important. You actually make this point in Davos that search and discovery is super important.

Do you want to dwell on this a little bit more? You talked about search. Search isn't important. Not going away.

That search becomes a key cornerstone for us in that new AI paradigm. Yeah. I think like at the highest level, what we're seeing here is that a lot of tools that people build for other people are becoming infrastructure layers to AI. Yeah.

And so, you know, AI is now using a browser. So it starts to make sense to build browsers. They don't need to visualize a bunch of stuff, right? They're just like trying to do the right thing.

We see this with search engines. Like AI is using search engines. Now it starts to make sense to build a search engine custom build for AI that you can say, all right, give me like 50,000 words back instead of just a very short snippet because the AI could read them very, very quickly and then summarize them for you. So you could say, I want to be super fast.

Or I want to spend a lot of time. Imagine you ask an AI, like here's an input, a hundred page PDF. Are all the facts in this PDF correct or not? That will require a lot of different searches depending on the PDF, right?

And so you want to basically adjust all of those. And that's kind of what we build at u.com. Like any developer who wants their LLMs, their chatbots, their agents to be up-to-date, accurate. We have integrations with CloudBot, with OpenAI.

And lots of other relevant sort of MCP servers and skills and all of those things are all like available within u.com. And so that is kind of how we think about that search as an infrastructure layer now. Yeah. I like this very much.

I'm 100% with you, Richard, on search as an infrastructure. I actually, I don't know whether you remember, but as I started my last company, my last startup. Yeah. that search is not only the infrastructure layer, but that search has a dedicated notion for different companies.

So if you're a brand, you need your fine-tuned LLM to represent the brand towards an LLM, towards your customers, and so on and so forth. And therefore I created R2Decide, which was essentially the idea of represent a brand in a fine-tuned model. I sold the company in September to XGen. So this is like, yeah, it went totally, it was totally great.

And we are now building this out as a larger, because XGen has way more customers than we acquired. So now we're helping them with fine-tuned models here. Now coming, let's go in one direction because now we're talking search and discovery. And you had, and I just talked about XGen and the space of retail.

LLMs not only talking to humans, it's not only us, you and I, and you and I, but it's humans talking with ChatGP team. LLMs have a brand recognition. LLMs have, are now the new search. There's this whole discussion about SEO, the way we impacted Google as being replaced by geo, general engine optimization, or LLMO, large language model optimization, or AEO, answer engine optimization.

There are many terms, meaning the industry doesn't know what the heck what they're talking about. You talk to people, you talked in Davos about it. You said, you know, there is marketing to machines, M2M and the new playbook. What is this new playbook?

So partially things don't change as quickly as people think because the chat engines, especially when it comes to like, what's the best corporate credit card, right? Or something like that. What the chat engine will do is it will run a search. And so it will then summarize what the search engine, gave it.

And so, you know, at u.com, we actually provide a billion plus search results a month. So a billion times like companies and customers and their LLMs and end users, and some of our B2B to C use cases, like get answers that are highly influenced by our unbiased search results. And so that's a lot of responsibility. And so that is a big part, but then there is, if you have full control of the LLM, you could add biases, new biases, to your search results.

And so that's a big part. And so the more you have a bunch of new biases to it, to favor certain products and certain things. And so, you know, that's going to be a really tricky transition. Ultimately, you know, Google's advertising model is one of the most powerful business models ever.

You can love them or hate them. And I certainly, you know, understand both sides on the ads, but at the same time, like people keep using Google and it's the one of the most successful and profitable companies. companies ever created. And so even though we can be skeptical of them, I think if you make them work well, people are clearly okay with it.

And so, of course, in the chat context, it's even more tricky, right? Because you feel like it should be unbiased in a search and a list of links, you can kind of skip it. But if there's only a summary of all of those 10 links, and that's a very short, concise summary, then an ad in there might feel more invasive. And so I think it will be a transition that we're going to see over the next few years, more and more companies will play around and try to make ads work, especially if they're on the pure consumer side, they're not an enterprise like you.com is.

And they're trying to just get as many users as possible onto their platform, that eventually, they will have to get paid for for all of that. And in many cases, chat answer engines are more expensive, because they'd still need to search engine. But then they also need the LM part. And so the costs are higher.

So they need that, they need that revenue from the advertisements. Now, OpenAI recently announced that they're going to do an advertisement placement, I actually was surprised that it took them that long, because the pockets of Google are just way deeper. And this is a race OpenAI has a hard time to win if they're not like getting, I mean, so far, like the money, like, the money flow wasn't that consistent, right? They have money from enterprise and money from the cloud.

They have money from consumers, but not as deep pockets as Google. So I was surprised that it took them that long. But advertisement is one bucket. The other bucket is, if I talk about, I want to pick up running.

And then I say what shoes I want to wear, I know there are many, many runner shoes, and which brands OpenAI now suggests to me or perplexity allows me directly to shop. I have this article in Forbes, and like, it's, now a year old. And I'm like, oh, my God, I'm so old that I wrote this. And I said, Amazon is dead.

Obviously, it's not another investment advice. But Amazon is under pressure because the aggregator function is gone, right? Now, this seems to be true. Now for brands, the question is, how do I get into OpenAI?

Any insights? What can people do in order to be represented? Beyond that? I think it's a lot of it, like 50 to 80% is the same.

As before, which is do good search engine optimization. That is, you know, like, we, you.com also look at, you know, clean websites that are up to date, all these things that you did for SEO, make still make sense for chat engine optimization. And so that's, that's number one. And then you can actually first like measure it, right?

And then you have to run new experiments. I think there is there just money, like there are fewer sort of well established, you know, published recipes for experimenting with that. What we found is like, novel, unique content is helpful. Like, being, you know, using clear, not exuberant language is likely helpful.

And then still, again, like making sure you do have a good search engine optimization, because that's the tool underlying a lot of these chat engines, too. Yes, let me repeat this, because this is important for the audience. If you would like to be, you know, heard by answer engines by OpenAI and perplexity, you need to help that model to learn. And that means it's unique content.

It's novel content. If I tell you the earth is round, there is nothing to learn. You knew this before, you will not save this. And you definitely will not connect this to my name, right?

If I tell you the earth is a cube, like, like, obviously, you will also not take this up. Because it's not trustworthy and useful. So it has to be novel, and it has to be unique. It has to be authentic.

That's the reason why I believe that Amazon is under pressure, but companies with a good brand are not. Let's move to the last area of like, the stuff you do. You talked about in Davos about the future frontier. You used the word AGI a moment ago, which made me shiver.

We have MoldBook going out and like have been a Reddit for chatbots. Where is the journey going? What do you think is feasible? In your article, you say, actually, that we will see in 2026, a glimpse of recursively self improving AI.

What does that mean? Yeah, in many ways, like, for me, in AI, and sort of my research, I was very happy to push for the changes from feature engineering, to architecture engineering. But then, you know, we started doing that too much and too much manual work. And so we, whenever we replace manual systems with learned systems, the capabilities improve.

And so then we went to unifying all of that with prompt engineering. But now people are doing manual prompt engineering. And so we're doing manual prompt engineering, and then we're doing manual prompt engineering. And so we're doing manual prompt engineering.

And so we're doing manual context engineering, and manually sort of onboarding, if you will, an AI into every single task and every single company and industry. And so it's still a lot of manual labor involved to actually get the benefits from a good AI. And so what I think the next and maybe last level is to allow the AI to do that itself. And that is one form of self improvement.

I think you can have many different levels of self improvement. The simplest form of self improvement is to do a lot of things. And that's what I'm going to talk about today. But the simplest form of recursive self improvement is just like you're an AI researcher, you're working on AI, and you're having AI that gives you some prompt, some prompted sort of code pieces back.

That is a very weak form, I think, of recursive self improvement. The strongest form is you have an open ended system that can really generate its own ideas, generate and implement those ideas and then validate those ideas and have a somewhat closed loop that of course, you can, you know, check on and see and evaluate how well it works and if it's safe and all of that. And so I think that is I think, the future of the whole field. If we can crack that nut, like then it'll be a whole new era for not just AI, but for all of humanity.

It's just like it will only then matter how much agency you have, and how much compute you have to, you know, delegate the AI and give to the AI to then delegate more and more complex tasks to it. Super fascinating. So Guha Rath asked the question about the mismatch between superintelligence and real world, right? And what you essentially say is, LLMs are amazing, but they still need what you propagated as like what you proposed as the new manager of AI guiding the AI.

And now you're saying the next frontier is to replace that manager guiding the AI by doing in a recursive way that the AI tests themselves. Is that the logical workflow or like outlook here? So I do think you will have like humans to kind of define the goals and the rewards, and then you have AI kind of execute more and more on all the details. And if the AI doesn't have certain capabilities yet then you can also say like improve those capabilities for yourself.

And that is what what we're working on at RecurseC一定一定一定一定一定一定一定一定一定一定一定 then you can also say like improve those capabilities for yourself and that is what what we're working on every person now jan lecun just left meta and jan lecun has been very like clear about that he believes that transformer models who are next word predictions are auto regressive and are therefore having exploding potential errors la di da di da and therefore he said it's the wrong path we are spending too much time on it now they're good for interfaces cool they are good for longitudinal predictions cool but if we really want to have some what he calls world models we are on the wrong path how do you see recursiveness actually solving this or is this not even needed to be solved uh i do think uh task. And so we already have superhuman capabilities in those domains. And that to me is very, very exciting. And then the question is, how do we expand the domains we can simulate and or verify?

How can we rephrase some of the domains to be that? And then how can we move beyond just simulation and verification domains? And that's where recursive self-improvement will come in. Ultimately, right now, we have a lot of smart people that do manual work.

They have ideas. They say, oh, I think my transformer model will be better if I make this modification to it, I have a state space model, or I have a different objective function, or I want to do something and join embedding space, whatever it might be. And then we implement those models and then we test them out. Once we can get AI to have those ideas.

And we just say, be better at continual learning, be better at sample efficiency, be better at longer term horizon tasks. And it itself can start to innovate. It will be a massive change on how AI is done. And then when AI can really lean into the fact that it is code and can code, and you close that loop, I think it will be very, really exciting.

And ultimately, we'll have more discoveries. And this is one thing that is important to mention here, which is, a lot of folks think about jobs in a lot of different industries. There are some examples where most people don't want more jobs in that industry, but they do like more outputs of that industry. And medicine and research in general are two such industries.

Most people don't go on the streets and say, we want more PhD students. But when a PhD student discovers a new drug, or, you know, like a new cure for a tough disease, or a new chemical, or better plastics that might dissolve themselves, and not be there forever, people love those outputs. And so I think that is something where AI can be incredibly helpful for all of humanity. Yes, I totally agree.

Now, the fascinating part from your answer is that the recursiveness of the idea to actually do many tests, the examples you brought, chess, Go, and other things, are very important. And I think that's a very important part of AI. And coding, all of those follow rules. So as long as we have a rule-based structure, we can use recursiveness to actually train the models.

It's interesting in search and discovery, because in search and discovery, or actually in image generation, we have seen Black Forest Labs getting a lot of money. We have seen Nano Banana from Google to being the counter argument and kind of like trying to build this up. And the idea here is that you not only create an image based on a prompt, but that you give the model certain rules in terms of when somebody says, I want to change text, then they want to change text, right? Or to create within the model a framework of rule-based.

So for me, this feels like actually the other direction as the one you showed. Because you say we released the model to be less and less rule-based, but actually Go, Chess, all of those are rule-based stuff. So for being a recursive model, you have to look for models where it's rule-based. Human world, by the way, is super rule-based.

We have gravity, that's helpful. But isn't that a contradictory rule-based on one side and embedding on the other side, more probabilistic outcomes? So I think it'll be helpful here to define what kind of recursion are we talking about? Because my mind is on the recursion side.

So I think it'll be helpful here to define what kind of recursion are we talking about? Because my mind is on the recursion side. So I think it'll be helpful here The recursion here refers to the fact that we have an AI that outputs a better model of AI, and that better model then becomes an input to the AI itself and say, how can I make that better? And then the inputs of the outputs of an AI model become the inputs to another AI model, and that is the recursion, right?

So that one is independent on any rules. It's It's just ideally you will have some kind of benchmarks. Those can be statistical. And you say, are things getting better along some dimension that I want here?

So that is the recursive aspect of superintelligence and this research direction. And in the case of my older research on recursive neural networks, it was basically also the output of one phrase vector and one neural network that described that phrase was the input to the same network again when you combine longer and longer phrases together into full sentences. So that is kind of the recursion that we're referring to here. And that is very independent of how you get the feedback.

Now, it's true that if there are simulations and or verifications based on rules, then it's easier to get that feedback, right? So in math, for instance, you could say it's rule-based. But most people will be like, well, even if I understand the rules, I don't know how to prove this. I don't know how to get from A to this theorem and then have a very clear proof that everyone agrees is the right proof.

And so you need still even inside rule-based things, you need some creativity. You need to have forward. You need to have a lot of planning and so on. And then when it comes to simulation, and this is something more like when you work with proteins, for instance, you can actually try to simulate some of them.

You can get measurements for some. And then you can also train when you have a ton of data. Then you also don't need the rules-based verifications as long as you can generate enough data for any tasks. So those are related.

Ladies and gentlemen, we don't have any time for questions. But I would be going on with Richard for hours now. I do this over the next coffee. Like, let's meet again.

But probably you understand now why I'm so excited that Richard came. We went through managerial tasks. We went through industry design. We went through model design up down to where we're going.

Richard plays on different levels here. And that's visible in his vitae, obviously. For example. For example, if you're going to do a lot of work, you're going to have to do a lot of work.

You're going to have to do a lot of work. From CEO to VC to research manager. I mean, it's an exciting time. And I think you hopefully got a gist of we are entering into a decade of new agentic models.

Meaning that creates the new recursive manager. This biggest shift, the reward engineer. We're entering into a new area where models start designing models. And those, hopefully, will us.

Give the glimpse of better and more decisive models. What will not change, and we got through this in the discussion over and over again, is the need for agencies. Humans have agencies. We need to decide what type of poem.

We need to decide what point of decision. So the actual agency, at the moment at least, is not taking over. With this one, I thank you so much. I can recommend all of you follow Richard on LinkedIn.

It is a pleasure reading him. He is very, very active. And his ideas, as you hopefully saw in the last 60 minutes, extremely thought-provoking. Richard, thank you so much.

And to all the people in the audience, I'm sorry if we didn't ask you a question. But thank you for all the input. Thanks for listening. Thanks for your questions.

Until next time. Bye-bye.
