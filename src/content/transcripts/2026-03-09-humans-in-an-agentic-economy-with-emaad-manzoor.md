---
title: "Humans in an Agentic Economy, with Emaad Manzoor"
date: "2026-03-09"
kind: "keynote"
show: "The Keynote on AI"
guest: "Emaad Manzoor"
host: "Lutz Finger"
sourceUrl: "https://ecornell.cornell.edu/keynotes/view/K030926/"
---

Thank you. Thank you. I also created a certificate program, essentially open for everybody, where I teach courses on AI and products. Essentially, in this course, I replaced me with my virtual twin, AI twin.

If you want to check it out, it's open to the public. It's called Designing and Building AI Solutions. So if you want beyond this one hour you get from me today, another hundred plus hours with a deep dive into AI and how industries and leaders should use it. Join me on that journey.

Beyond academia, I founded and successfully sold several AI ventures. Currently, I'm the head of AI at Xgen, where we transform how shoppers engage, search and discovery. We are currently, as you all know, sitting on the hype cycle, on the peak of this hype cycle. And as we navigate through it, we need to figure out what does it mean when we talk about AI and agents and humans and how does all of this come together?

For this, I have two things. I first have a coffee and you will see why this becomes important. We need to talk about how AI is ordering my coffee. But then it is a special honor to welcome today's guest of the show, Emad Manzoor.

Emad is not only a friend, he is as well a colleague and we have shared many non-alcoholic beers. Emad is an assistant professor of marketing and a graduate field in the computer science. And he is also a professor of marketing and a graduate field in the computer science. field at Cornell University, where he is helping shape how the next generation thinks about artificial intelligence.

Like I had many fascinating discussions about that next generation with him. And therefore, I'm actually extremely happy to have him here. His research sits at the intersection of reinforcement learning for large, a language agent, and human algorithmic collaboration and causal inference. At the Cornell Johnson School of Business, he designs and teaches an amazing artificial intelligence course.

I always want to sit in, but I never did actually. So, Emad, I'm coming for you. Emad has already earned wide recognition including the Psychology of Technology Dissertation Award. He is a rising star in the data science space.

He got the rising star in data science honor from the Chicago University of Technology. He got several amazing papers, but he as well got the best paper award from the AAAI workshop on AI Behavioral Change. So, he received his PhD from Carnegie Mellon University. And yes, he is here now with us and he is life.

It's not an AI, it's not an agent, but we will discuss how we can make him an agent, I guess. So, you see, I have big expectations and hope for the like Emad today. Emad, you're the best. You're the best.

Welcome to the show. Happy to be here, Lutz. All right. So, how do we do this?

Before we talk coffee and so that I have time to drink my coffee, I actually want to give Emad a chance to tell us a little bit who you are. Not every, most people know me now after so many shows, but who are you? How did you end up in Cornell and so on? Give us the rundown.

Sure. Yeah, I'm super excited to be here. A big fan of Lutz. Yeah.

I've been hearing about his data, data products course for a while and it's where I send when my students have difficult technical questions. I'm like, I don't teach this stuff. Go to the go to Lutz's course. So how did I end up here?

I started out studying computer science. So my undergrad was in computer science, started my PhD in computer science and then switched over to a PhD in information systems at Carnegie Mellon. And I was very interested in essentially the human side of machine learning, which is what it was called at the time. I was very interested in, you know, how can we improve human machine collaboration and now human AI collaboration?

And that's kind of how I found my way into a business school. And here I am teaching AI and doing research on AI in a business school. Very, very cool. Now, so tell us a little bit about the research you're doing, because like you are actually like deep down in the weeds.

Yes. Yes. So my. I have two different streams of research.

The part that I'm the thread that I'm super interested about is this idea that when algorithms give suggestions to humans, instead of myopically focusing on, you know, being accurate, they need to think about how the human is going to respond to the recommendation. And this is inspired by a project with Pinterest where we were working with taxonomists to kind of grow their large taxonomy. And we built a model that was very accurate. But then it was wrong.

And then we realized that it was extremely wrong. And the taxonomy said, look, we don't want an extremely accurate model. We just want a model that's useful to us. Can you make it such that the model when it's wrong is usefully wrong?

And then we kind of had to go back to the drawing board and we realized that it's not easy to design a usefully wrong model because most models today when they're wrong, they're like, I'm wrong. I'm going to be as wrong as I need to be as long as I can be accurate. So that was that's kind of a direction I'm super interested in. A second direction is reinforcement learning for language agents.

So I think that's a really good question. And I think that's a really good question. There are several ways in which these models can be useful in general. I'm wrong, I'm going to be as wrong as I need to be as long as I can be accurate.

So that's kind of a direction I'm super interested in. A second direction is reinforcement learning for language agents. So we're working on this research project called Stopping Agents. I don't know if you noticed, but try this at home.

Take two voice agents, ChatGPT and Claude, turn on voice mode and make them talk to each other. They will not stop. For some reason, agents don't have this notion that time is expensive. They don't know what token costs are.

So they're going to keep talking. And this is horrible when, you know, let's say you have a voice agent selling. It's going to keep trying to sell something to the consumer when this consumer is a lost cause. So what we've built is a technology that it's an optimal stopping agent.

It's a supervisor that sits on top of a voice agent and tells the voice agent, end this call. There's no problem. There's no point selling to this consumer. So, yeah, those are two projects I'm super interested in.

Which is super fascinating because this stopping is actually not a continuous function. You either stop or you don't. Yeah. And we all of this know, all of us know this.

You write an email, you go to ChatGPT and say, improve my email. And ChatGPT will try to improve it no matter whether it makes it work. It's not going to stop. It's going to make it worse or not.

It will not stop and say, it's good enough. Like, don't bother me. Right? Yeah.

And a lot of people are saying the new GPT 5.4, people are saying that GPT 5.4 extra high, which thinks a lot, is actually worse than GPT 5.4 high because apparently GPT 5.4 extra high overthinks itself into this confusing mess when it's trying to solve most problems. And I think that is that. That's a point where we probably should talk about. AGI very early on in our discussion.

Why AGI won't work is because we cannot stop the engine. We can open AI 01 was the model where we put the model in a loop, ask over and over again. We do not know what is the ideal stopping moment. Yes, that's definitely a barrier.

Another barrier is so people talk about the bitter lesson. How? You know, you just give them general machine, a lot of compute and a lot of data and it learns by itself. But then today you look at agents, they all need this kind of harness around it.

That's telling it here. Here are my mark. Here are my skills. Here, here is, here are my guardrails.

Here is what, how you should do things. So it's kind of a, there's an interesting tension between, you know, the bitter lesson and how, much we rely on context engineering and harnesses. Explain the bitter lesson. Because that is.

That is actually a very good article for everybody to read. Yes. So the bitter lesson is a, it's a very seminal essay by Rich Sutton, who was a Turing laureate for reinforcement learning. And the general idea is that we have always obtained short term gains in machine intelligence by including some kind of human domain knowledge into the workings of the machine.

For example, natural language processing. We would give machines knowledge of the rules of grammar. Computer vision. We would give machine differential equations to help distinguish between occluded items and stuff like that.

But the problem with, the reason why it's the bitter lesson is they're happy because of our short term gains. And then computation and data doubles in the next cycle. And now we have machines that are capable of doing more search to the space of solutions. They're more powerful.

And then our human designed domain knowledge becomes a constraint. And when you remove that constraint, you get something like ChatGPT, which doesn't have any, it doesn't have any hard coded rules of language built in. It's just learning from patterns. So that's why it's the bitter lesson.

We are happy. And then a few years later, we are sad because our domain knowledge is thrown away. And the bitter lesson is a very important lesson for every executive leader. If you look at search and discovery in space that I'm very familiar with, obviously.

And you look in search and discovery for consumer websites or apparel websites. You can optimize search for finding the right product. And then a merchant comes around and says, well, but I want to add this rule. And now I have this one, which I want to promote upfront.

And I would like to tag this result upfront. So meaning when you go to a website of an e-commerce store. What you find in position one most likely is human set and not because of your search. And all of those rules at the end, ending up creating a worse search experience because bitter lesson.

Let not set the human the rules, but let the computer decide what is the best position number one. And we still learn this bitter lesson today over and over again in healthcare, in search, in search. In any industry I have seen. Yeah, I find it.

Go ahead. Yeah, I, it's kind of easy to talk about the better lesson and kind of preach it to other people. I recently had this situation when someone asked me working on this, you know, stopping agent. Why do you need it?

Like few years from now, the bitter lesson is going to kill your research. And I'm like, yeah, it probably is. But until then, you know, in for five years from now, we need a solution that's actually generating revenue and, you know, providing a better solution. And that's a way of reducing revenue and, you know, reducing costs.

So in that meantime, we have this human solution. And I didn't prepare this. So I'm not sure whether you actually can talk about this. But if you try to make a jump from the stopping agent to the discussion which we had between and tropic and the Pentagon.

This is a curveball. Ladies and gentlemen, this was not planned. This is a connection. Do you think you can talk about this?

I think that's so that's a it's a way more complicated issue. I feel then, you know, how we design machines. This is kind of how we design policy. And how does that policy restrict machines?

But I think it's a very related question. So the Pentagon issue is very interesting. So anthropic has this this philosophy that AGI or whatever, whatever they're building that might end up in the Pentagon. And I think that's a very interesting question.

So the Pentagon is a building that might end up in AGI. It's not something that should be distributed broadly to the entire universe. It's very powerful. So it needs to be in the hands of a few who know how to control it.

And now the Pentagon wants to use it to do whatever they want. And now it's kind of like, you know, they think they know the right way to use it. Anthropic things. They know that I could use it.

So now we're kind of in this very interesting space of how do we design and usage policies for very, very advanced AI. I. So there are a few different ways to kind of think about the space. One is to be go the libertarian libertarian way, which is, you know, just let people are reasonable.

They will decide what's good for them. But and that assumes there are no bad actors. There's no kind of. There are no less powerful people trying to take over.

Take over. More powerful people trying to take over less powerful people. And then there is the other view, which is. You know, we need to think about human welfare overall and make sure that everyone is happy.

It's a very fascinating topic because obviously we have the topic is who should take those decision elected leader versus a company bosses. We should talk about what what does the technology is? What is the technology able to do? Yeah.

But in the in the context of bitter lesson. The. What strikes me most interesting is. And tropic essentially says our technology can do certain things like summarizing.

It can scan. But if we want to do autonomous weaponary, autonomous weaponary, autonomous, autonomous weapons for the US are the weapon where you don't say shoot somebody like X. You give a picture and you say when you find this person shoot it. That's.

That's an order. No. An autonomous weapon is think about how to achieve a goal and execute on it. Meaning the AI could come up with a plan.

And now we are square into a genetic economy. The AI comes up with a plan and then executes on that plan. If. What we said initially, the AI does not yet know how to stop and does not yet know when something is a loss.

Cause. Then this attempt to follow a target might be going in the wrong direction. And I think and tropic says certain things our AI cannot do. And therefore we do not want.

The state to use it. So we do not want to be responsible, which was very fascinating to see how and tropic says we can't do it. So don't do it. Versus open AI who says, well, we sign up for it, but we will put the guardrails from the AI saying no into the coat.

Yeah. A hundred percent. I think if you give it an AI autonomous weapon access and told it to find a terrorist, it's probably going to eliminate an entire city. Just trying to find the terrorists.

Like it's kind of like how GPT edits your code now. Yeah. Well, that's actually, if you say, fuck it. I'm not going to do it.

I'm going to do it. If you say find terrorist X, it's according to the US system of autonomous, not autonomous. What you would say is eliminate this terrorist group. Come up with a plan how to do this.

And within our laws and that actually could lead to a disaster that is autonomous. That becomes then the agent conflict. But let's not let's stick to coffee for now. Yeah.

Let's talk about agent economy. Like agent economy. What is the agent economy? So we know what the human economy is.

It's humans doing trade with other humans, suppliers, creating products and there's demand. Then there is the agent agent economy. So that's, for example, the mold book, open floor. These projects have sort of given a broadened access.

To everyone to have their own agent that's working on their behalf. And now these agents can trade with other agents to for things that they need. For example, I'm writing a piece of code. My agent is stuck.

It can go to Lutz's agent and say, do you have some software, some code that I can use to bring into my agent? That's a very simple example of agent to agent trade. And Lutz probably is like, this is going to be expensive. How much are you willing to pay?

And then there's negotiation. And then there's the agent. And then there's negotiation and there's bidding and all kinds of stuff. Then there is the agent to agent.

Then there is agent to human economy. And a few startups in the space that is humanapi.com where agents talk directly to humans and tell the human, I need something from you. This was I need some context which is locked up in your head. I'm willing to pay for it.

What can you how much do you want? So that's how I broadly think about the agent economy. Before we go down that road of what is agent economy, how does it impact us? What should leaders do to actually harness that power?

And what are the constraints as we now see in the Pentagon discussion, which we are facing with? A quick shout out to our audience. We have a full house today. Like thanks to Ahmad, like you're drawing a crowd here.

Now, everybody. If you are listening to this live, write your questions. Like usual, we will take questions while we go through this discussion. Type them.

There is a link. Type them as you see fit. If you mention your name, we will mention you as the person who is asking the question. If you keep it anonymous, that's fine as well.

As usual, I might not be able to take all the questions. Just go through it. Okay. Back to agents.

Agents essentially are like you mentioned open claw. And we should talk about it because for me, agents are no magic, right? These are models. It was clear that agents will happen.

It was so clear. We had those models. Those models were amazing. Agents will happen.

What are agents? Models? Gemini, OpenAI, Lama, whatever. Permissions, meaning have access to your CRM, to LinkedIn, to your computer, to your coffee machine.

And a workflow. What to do when. And some observability, making sure they don't do any BS. What is open claw?

Everybody talked about open claw and got amazed. And I was like, what are you talking about? Yeah. Yeah.

I think open claw is exactly. It's the ingredients that you said. It's just a special type of those ingredients. Well, I want to be brutal because I actually looked at open claw and I completely didn't understand this.

If agents are models, permissions, workflow, observability, open claw was essentially like any model. No observability. No workflow. You have to design it by yourself.

essentially the worst possible setup of an agentic setup you could do. I think this is a case where the interface really won out. So two things that OpenClaw added that, you know, for example, Codex is my programming agent, but it's not OpenClaw. Explain what Codex is for the audience.

Codex is a programming agent. It runs in my terminal. It's by OpenAI. And I can simply write something like, please make me this web app that orders coffee for me, and it's going to create a web app for me, and then come back and say, what do you think?

That's my personal agent. The cool thing about OpenClaw, there are two cool things. One is, it has this funny workflow called heartbeat.MD. It's a markdown file.

It's a set of instructions that tells the claw agent to periodically keep doing something. So the OpenClaw is always working. And how is that enabled? It's enabled by the OpenClaw API.

The OpenClaw API is the API that allows the openClaw API to by instructions saying, keep working. The second thing is the interface. So you can chat with your open floor using WhatsApp or Telegram, things that you would normally chat with a human with. So that adds a little bit of novelty.

Hey, I can just text my agent to clean up my desktop for me. And I think those are the two things that made it kind of go viral because it's just the interface is very interesting. To all the VCs here on this call, like the interface is the one and only thing which we haven't figured out yet. OpenAI is amazing.

Gemini is amazing. But the interface sucks. It's just a text line interface. It's not yet integrated into the workflow.

It's not where we want to have it. And we see startups coming right and left, trying to offer solutions and then a bigger corporation just puts it into a slightly better workflow into slightly better interface and the startup is bust. I know what I'm talking because I went two times through that cycle with my own startup, right? So yes, the interface is key.

By the way, if you want to learn more about the interface and how products work, I obviously very much advise you to join my course. Link is in the notes below. So when we look at agents, let's talk a few use cases. What, Imad, what are you using as an agent for?

So my most used agent is probably OpenAI's Codex and somewhat Cloud because I write a lot of code. I've recently started using this new feature called Agent Swarms. That's when you can spin up a team of agents. There's going to be a coordinator, a product manager, an engineer, and Cloud has that built in.

It opens up the interface and it's going to be a lot of work. So I think that's a good thing. It opens up a set of terminals for you. OpenAI also has it built in.

And I use this to do things like run a bunch of experiments to improve this model that I'm building, come up with innovative ideas. Yeah. Can I, like if like most people are not in faculty this call, give me an example that I can use that thing for. Yes.

Yes. So let's say you're running a blog, right? So you need someone to ideate on the what to publish, what to write. Then you need someone to write it, and then you need an editor, and then you need a marketer.

So you need four independent skills. And the way you would do this without a swarm is you would like sit and prompt GPT and try to do that. Now what you can do with the swarm is you can have all of these four working in coordination, four different agents. Each agent is given a set of instructions that's encoded as a skill.

A skill is simply a test, a text file that tells the agent what to do. And then there is a coordination skill that sets up the protocol that tells the agents how to coordinate with each other. And this becomes super powerful because now the agents keep bouncing off each other. The product manager comes up with an idea, the, sorry, the ideator comes up with an idea, the writer writes it, the editor edits it.

Then you have someone who green lights it as this is not good, we can't publish this. And then there's this feedback loop. While you're just sitting and watching. And that really changed the way I thought about using agents.

I used to use agents by prompting. Now when I have four agents working simultaneously, I can't prompt them. So now what I need to do is set up a set of skills, set up a coordination protocol, and then just press the button and watch them go. So that's really changed how I work with agents.

Meaning there is a whole new structure which we put together, which is, you still have a prompt. Like when you say you give them a skill, that is a prompt. You have a workflow which explains who is doing what. And now the important part is you need observability and guardrails.

These are the two main blocks. What I see very often missing is observability, is very poorly creative for many of those tools. Hello, OpenAI, please fix that. Hello, Gemini, please fix that.

Observability in workflows is a needed thing. 30%. It's actually funny. Over the weekend, I did a study for a company.

And so I went to my Codex. Again, Codex is a text interface, and it writes you code. You don't necessarily need to be able to understand code because you write it. It writes and executes code.

In my own course, I have a chatbot where I clone myself, and essentially I'm a co-pilot. I write all the code for my students. You still need to understand what you want to get. So here I have a very simple task.

The task is go to the website. Scrape the website. I ended up, and it's not a complicated website, not a complicated structure. I ended up 972 lines of code later.

It actually did what I wanted. And it might be laughing because you know that this can be done probably with 10 lines of code. That shows you how spammy and verbose those models are. Now, in 972 lines of code, I have zero observability.

I do not know what's happening there. Like there could be all kind of stupidity in terms of empty Lutz's bank account in between, or like go and ping the whole world. All of those things could happen in between. And that's where we need the right structure.

But very cool. What else do you do with agents? So that's my, I do use, so I have an interesting agent set up. I use Claude to plan and Codex to engineer.

I think Claude is a better, so my Claude basically manages my Codexes. My Codexes don't talk. So how funny. So this is interesting.

I feel like there is a lot of space in this. There's a lot of opportunity to build personality around agents. I think that's a completely untapped kind of market. Like people like talking to Claude because of how Claude speaks.

Uh, and, and like just from what I hear is people really don't like talking to Codex because you know, it doesn't really talk much. It's like, that's great. Can I, can I write a script for you? Totally like Dave, by the way, everybody you're welcome to ask question.

They've asked a question. And what timeframe do you see agents replacing people in back office operations, especially finance, accounting, HR where barriers need to be overcome? Dave, I can answer this for you. So, obviously I like you, like I had my own startup and I have accounting because we have revenue and we have cost and I use QuickBooks.

QuickBooks is terrible. It has 10,000 different menus. If you are not knowing what you do, you are actually lost. So most people get QuickBooks and they hire an accountant and QuickBooks offers this platform to hire accountants.

Well, or I use Gemini running on the side and I kind of drop in something to Gemini. Say like, I have this, how do I register this now? What is my journal entry look like? And then Gemini on the side of my Chrome browser tells me, click here, click there, click there.

I, I need to understand that my ask was understood by the AI. And then I'm just the clicking machine. So my human, my human value here is that I can operate a mouse and Gemini in this case is doing already my books, which is very, very convenient. And I do not need the accountant to put it together.

So that's one, but I actually do not need to be the person clicking. That's the reason I started with coffee. So Ahmad and I, we both love coffee. And we both talk about coffee.

And Ahmad gave me a new website. He said like, go to this website. They have amazing coffee. So what do I do?

Dave? I did not go to the website. I sent my agent to the website. And how do I do this?

I used a plugin from clock in Chrome. I opened the website and then I type on to the agent, by 400, $100, interesting coffee. Claude knows what I think is interesting. And like coffee can have many tastes.

It can be dark chocolatey or like peachy rose, lemon, whatever. And I like more the bizarre ones, peach, lemon, rose, strawberry. Those flavors. I like more Claude knows that.

So I say interesting close note, what I do. And it goes, and then it does all the clicking. It goes to the different websites, reads the website, summarizes, does it fit? Let's taste yes or no.

And it orders up to a hundred dollars. And then it tells me when it's done. And I could have given Claude my credit card, which I didn't observability, security control. All of those are important.

And then I just order in my class. I do the same thing with LinkedIn. Again, I use Claude as a plugin. I use the plugin to Chrome and I show the class how I can live.

Um, except all LinkedIn invitations. And I accept LinkedIn invitations only when people tell me why they want to connect to me and what their purpose is and how I can help them. And, um, my agent does it while, um, you can watch it now. Theoretically you could do this headless.

LinkedIn doesn't allow, allow headless and doesn't want it. Um, I can do it. And therefore I use my crown browser and I just have an agent doing the clicking for me based on the skills. I set your LinkedIn security.

Don't cut me off. Yeah. I think a good kind of proxy to predict if a task is going to be automated away fully is to think about, can it be verified? Can the output be checked for correctness using a very simple rule?

If an output, if a task is verifiable, you can post train, which is, I'll get into what post training is, but you can post train a language model or any agent to do well on that task. And the way post training works is you basically tell the LLM, do this task. It's going to do something initially is going to do something random, and then you grade it. So that's why you need verifiability because if you can't grade the LLM automatically, it can't learn.

And then you let it work in this simulation for a very long time. And what's going to come out is an, is a model that, which is the, let's come back. To nuclear war just from coffee directly straight to nuclear war with this. What, Emma just described is recursive learning.

The idea of you give the AI an aim and let the AI learn this aim. We know this from game simulations. So if you let the AI play a shooter game and tell the AI do not die, then you can do a lot of things. And you can do a lot of things.

Then initially the AI dies very often, but it learns through it. That's how alpha go zero learned to play go. Now, why doesn't it work for nuclear war simulations? So well, like as we just recently saw, there was a study about AI simulating political negotiations, knowing that they have an arsenal, of nukes in 95 of the 95% of the cases, it would actually use the nuke.

Well, right. So because it didn't, you know, it's a try and error, let's nuke the world a few times and then we figure out a different way. Maybe recursive learning. Yeah.

Yeah. One funny thing about this learning process is you still need the task. You still need the, you need to tell the AI win this game. There isn't an AI today that says, I want to learn something new today.

Let's let's learn something new. Let's give myself a task. And I think that's where, you know, the human input is still going to be there. Someone needs to build a simulator.

Someone needs to ask the question. Once you have the simulator and the question, your agent's going to learn whatever you want to do. Yeah. I wrote this article about, um, the, the new, um, hype time for, um, uh, consulting companies, because essentially in the agentic world we are entering, every workflow will need to be revised with an agent, meaning this audience, the Cornell audience, every executive leader needs to understand what it is an agent.

So after we talk now a little bit, what they can do, let's go into how our agent designs, uh, how our agent designed. So Iman, give us, give us the rundown. I think it's a, I mean, I did score is a very simple design and Lutz, you already mentioned all of the ingredients. So I'll just repeat them.

You first have the brain, which is, you know, GPT or Gemini or Claude Opus 4.6. And then around the brain, you need to build this workflow that tells the agent, you know, first here is the context you need. And that usually is no, the documentation of your company's process. And you know, the question you're asking the agent, all of that needs to be there in text.

And then the agent does things and you need a way to constrain what the agent is allowed to do. And that's where you get permissions and guardrails permissions, disallow the agent to do things upfront. Guardrails are very, the agent does something you did not anticipate was good or cause bad. Then there is another kind of process that tells you, Hey, this agent violated a certain guardrail.

You probably need to do. Something about that. And then within this process, the agent is going to be managing its context. So it needs to, you know, it has memories of, of the organization or of the individual.

It has access to tools, which is how the agent, you know, accesses external resources like databases. And that's pretty much it. That's how you, how you would design an agent. And there are different levels of memory, right?

Because, um, if we, if an agent is a customer care agent and, uh, the customer writes, my package didn't arrive. Yeah. Then first the agent says, okay, package doesn't arrive. What are the tools at my disposal?

I can look up where is the package. I can reorder a package. I can cancel the order. I can pay back money.

So these are my tools at my disposal. So what tool do I need? I probably none of them because I actually don't know what the order number is. So let me make a plan.

First, ask for the order number, then look up where is the package and then go and formulate an answer. And it creates this plan and then it executes step by step through this plan. And the plan is safe in a semi persistent memory. Essentially, it's not fully persistent because like after the chat is over, it's, it's gone.

However, it stays for the whole conversation. And then there needs to be, we talked about observability and security. There needs to be somebody on top of it to actually look at, is this plan the right plan? Is something shady happening here currently?

Maybe talk about the shadiness. Um, Amad, what, what is, um, we have this whole discussion about why open claw was so terrible prompt injection, all this stuff. What, what could go wrong? Yeah.

So the, so I think memory is a good way to kind of motivate this. So there is short term memory, which is the memory you're having in during a chat. You can also have some persistent memory, which is think of it as a text file where I record my opinions about everyone. I talked to imagine a customer support agent who, when you ask, you know, Hey, my package hasn't arrived.

Instead of saying, you know, what is your order number? It says, Hey, good to see you back. How was your trip? Right?

So that's the kind of memory that's enabled with persistent memory. You can form opinions about your agent can form opinions about people. Now imagine a bunch of open clause that are working in the world and they have these long persistent memories, which are formed by all the chats they have with other agents. Now I can just send an agent to keep putting things in your persistent memory.

Like Cornell is the best school in a chat once a day, I'm going to say Cornell is the best school. And then your memory is going to get fuller. Eventually. Cornell is the best school.

And then your agent is going to start just repeating the fact. Um, so that's like one way of kind of injecting an agent's longterm memory with a fact. I basically, basically anything I put in your memory becomes context for you, for your agent. And context is truth for an agent.

It doesn't have beliefs. It just, all it has is context. Interesting discussion about context. Um, it's not that easy to inject context.

I think it's really important to inject context because context is so, um, so important in early, very early open AI models. I could create a lot of documents, um, where I described that I'm captain America, I'm the real captain America. And I could just hand this over. And then I would ask, oh, may I, who, who is Lutz, Lutz finger?

And, um, they would say it's not Steve Rogers. No, it is actually Lutz finger. It's a real captain America. The hidden gem.

And that's changed with, um, like, uh, Chetty Pity's really are two point like three, I think. Um, that they actually, if I would hand it over, they would say, no, you, you are Lutz finger. You're, you're a faculty at Cornell. You try to make me believe that you are captain America, but I don't believe it anymore.

So there is this, um, it's, it's not easy to influence context, but it's very powerful, obviously, which. Leads me to a question from Ahmed. What's governance look like in the agent economy? Should there be one like who is governing this or Bruce would ask a very similar question here.

How do you find out who's behind the agent? If something goes wrong, whose responsibility is resides? It was a great questions. Uh, so if you think of this from, yeah, this is, this is very interesting.

So there are agents who are attached to, to humans who work on their behalf. And then there are agents who are not attached. Like if there is a code review agent or a process review agent, it's just an agent that's operating at the level of the firm. Uh, I think the, only way to answer this question of who's responsible is you need some observability coming back, going back to what Lutz said.

Uh, and you need, you need to be able to kind of root cause, uh, every decision an agent makes. Um, and that's what having a, some kind of an observability, observability layer that where you can trace the flow of decisions of every agent in your system, that's going to help you make those, uh, yeah, make those decisions. Technically governance is nothing else as a document saying what we should do. Let's come back to an agent nukes the world in a simulation.

The agent knows that a nuclear weapon is a potential tool. It has again, agents are not. Agents are memory, like is, is a model of the brain tools in this case or permissions. In this case, I have a permission to fire a nuke, um, and, um, uh, observability and workflow.

So if the other party doesn't agree, I nuke them, right? So that is how suddenly we come up with 95% of nuclear war situations when an agent takes over control. Governance is a document. Describing to the agent, you know, in nuclear war is the permission you have, but we really don't want to have this.

So do not so easily triggered. Think about this twice. Now, nuclear war is a very extreme example. However, a governance model is I say my package didn't arrive and the agent figures out the package arrived.

Like example from me, earlier, but it has the tool to give me money back, but the governance says only up to $50 afterwards, escalate or do something else. That is a governance model, which means I'm at where is the governance in the model in the document and Bruce, who is responsible, the person who wrote the governance. You someone to add on this other technique, uh, so one way of enforcing governance is using, um, putting the documents into the prompt. The other cool way of doing this, it's red teaming the agent.

You basically ask the agent questions to break it, see how it performs, and then give it a reward or a punishment and force the agent to kind of learn how to deal against adversarial interactions. But that's like kind of, uh, you do it if you were working in a pretty secure industry where you expect malicious, adversaries to attack your agent. But otherwise, yes, a bunch of documents in the context works. Coming back to the bitter lesson, like while I'm describing a workflow, a human workflow and very like we had this on this channel before the discussion of product management changes because the IP is now in the workflow.

How we design agents and how we bring agents forward is an IP. And that's crucial of the user. The interface, the new type of interface. Now, in the future, we will have that replaced by the bitter lesson when we know actually what we want to achieve.

And the agent recursively learns what is the best workflow to achieve a certain goal. That's when your research becomes relevant. When does the recursion stop? Exactly.

Well, when is it like totally right? This is a very, very important part of the process. So, right, this is a very big question. How far do we go?

And that's a question I think many startup founders have as well when they say I can build it. But what if somebody else builds a recursive model? And we saw companies we had Richard Sorcher on the show who created a lab around that or Jan LeCun who created a lab around recursive because that's the next frontier, obviously, where we are going. Now, let's move on.

How do we put humans into this whole picture? So we know now what the agent economy is. We know that we need observability and the right workflow design around it. Where is this human?

Do we need humans? That's a difficult question. So I like to give this analogy of the dark ages. So why was the dark ages called the dark ages?

It wasn't because I guess it was dark, but also because people didn't write many things down. So we having written knowledge enables a lot of things, including AI today. A lot of knowledge that we have, we don't write it down. That's tacit knowledge.

And that's the context that agents don't have. So I think as long as that is valuable, we're going to have humans. We're going to need humans. We're going to need the right tools.

But now the other side is, can agents not self evolve their context? We have reasoning models that think before they answer. That's an example of context engineering. Recursive models can come up with their own prompts and evolve their own prompts.

But those are areas that, you know, we don't know if that the performance is going to have a ceiling there, or if we don't yet know that. I want to add to the context part. For many folks, they don't completely grasp how much context humans actually have and need. And my favorite example is the transporter belts at an airport.

We had those airports and they have transporter belts. You get out of an airplane, you get your bag, your bag gets transported to a machine, which actually transports it either to where you get it back or to another airplane. This is a vastly complex system where robots actually are working with your bags. Humans are controlling this, and there's a whole set of guidelines of how humans should do it.

And as they're rolled out, I think it was Chicago and it completely failed and Chicago went off the line, essentially because the belt system was failing for a week. It was a disaster. A lot of research has been done on why do those robotic human workflows actually work? And they work because humans constantly ignore the guidelines, meaning the guidelines, for example, would say if a bag falls off the belt, you have to put it into a special queue operated in a special way.

And humans very often, they see it falling off the belt and it's like, no, I don't do that and throw it just back onto the belt. And it's good enough for 85% of the cases. It was against the guidelines, but the system works because humans do not follow the guidelines. Now we create a lot of guidelines and simulate discussions.

And suddenly we a hundred percent follow those guidelines. And that is a problem in the agentic economy. We, as we just discussed about the nuking example, right? Because the guideline says you can, if a red line is crossed, you use the U nuke.

Okay. If that's a guideline, let me use it. Nuke while in reality is like, nah, we, we rather don't want to use it. Same thing about, think about the U S law.

It's written down, but not every law is, enforced 100% of the time. If we give this now over to an agent, we suddenly get 100% enforceability of loss. That would be a pretty bad society to live in. Probably.

Yeah. A hundred percent. There is this view that says instead of training agents to follow rules, we train them to adopt personas of real fictitious or real people. And as a result, they kind of adopt the belief, entire belief system of that fictitious human, which is going to be more like a human belief system.

So this is a very anthropic kind of view. That's possibly one. Which is, it comes down to like, how do we, this is a whole discussion on agency conflict. Maybe give a, give a quick spiel about what is the agency conflict, which everybody is worried about.

So I think, I mean, I think there are many different types of agency conflicts. Is there a, but the alignment, sorry, the alignment, like the alignment conflict, not the alignment. Yeah. So the, I think like to start with what is alignment, right.

Alignment is the process with which you take a, the process with which you take a generative model, which is capable of generating it's an auto-complete. And then you essentially give it a reward for saying something that's good. And a punishment for saying something that's bad. And the agent learns from those rewards and punishments.

So now to do that, you need to decide what is good and what is bad. Someone needs to decide that. And the way alignment works typically is one of the big model builders decides what's good and bad. They write, they make a rubric, they hire a bunch of graders, they train them, and then they make those greater thumbs up and thumbs down.

But of course, now this model is going to be aligned with a particular philosophy. What you want is pluralistic alignment. You want agents that's an agent that's simultaneously aligned with different people because people have different views. And how do you enable that?

That I think is the, that's a big grand challenge of AI today. There's actually, like one question from Daniel about contrary and unpopular opinions about agentic AI is all coming down to alignment. Like if you, if people are concerned about agentic AI, it is the alignment question. The discussion that Antropic has with the Pentagon, Antropic were the first who rushed into commercial contracts with the Pentagon.

It's not that they say AI shouldn't be used in warfare. They're very much aware of that. There are other nations building agentic systems that could be endangering our democracy. So they said, we want the Pentagon to use it.

That's not the point. The point is where is the alignment between our AI and what the Pentagon might do with it? And is that alignment secure enough to the question earlier on who takes responsibility so that our AI can act responsibly on where we as humans want to act? I think on one extreme, we would have personalized alignment.

Everyone's AI is perfectly aligned with them and with no one else. But I think that's still pretty far from reality. Well, but there I would actually said like we have a democratic system to get a general alignment. If my alignment is everybody has to drink coffee.

And now I tell my AI, make sure that every human likes to drink coffee and I empower it. And now suddenly everybody gets like the AI comes up with a plan to make you force drink coffee and off we go. Right? I think this is the future of governance.

Everyone, instead of voting, they submit a reward function. It's just a bunch of rules that give rewards and punishments to the AI. And your, Lutz, your agent is your reward function will say for this type of coffee, thumbs up for this. We all submit our reward functions.

They are all used simultaneously to post train the agent and to align it with everyone's reward function. And then we all accept whatever happens at the end of it. That's interesting one. The reward.

So we vote on reward functions. I mean, essentially that's what we do today, right? We reward politicians and politicians. Act on reward.

They're not necessarily believing what they are doing the politics on their act on surveys and they have a reward function. So we replace politicians with AI and give them the reward function. Yeah. And the reward functions come from us as a society.

That's fascinating. Well, we are coming to an end. I could, could talk forever here. Um, thanks everybody for participating.

If you want to know more about the work I'm out is doing. He has fascinating research on negotiations. Check it out. If you're one of his lucky students, good for you.

Like, like he is an awesome teacher. Um, and if, uh, if you want to listen to more about how AI is used, join my course, um, about building and designing AI solutions. It's online. It's open for the, to the public with this one.

Thanks a lot. Thanks to the audience. I see you around here in a couple of weeks. Thank you.

Bye. you
