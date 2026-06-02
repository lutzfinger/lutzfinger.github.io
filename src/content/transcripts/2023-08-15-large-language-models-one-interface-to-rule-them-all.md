---
title: "Large Language Models: one interface to rule them all?"
date: "2023-08-15"
kind: "podcast"
show: "The Edge"
showId: "the-edge"
sourceUrl: "https://content.rss.com/episodes/204999/1076201/lutzandjasper/2023_08_15_08_34_07_8ddc26fe-9192-4da9-b2bc-2443267199f4.mp3"
---

So hello again, and welcome to another episode of Lutz and Jasper. Today without Jasper because he is on his well-deserved vacation. However, we have Tarek here from Catalog. He is one of the CEOs which have really made a huge, nice business model around large language models.

And we thought it's worthwhile to bring him on to actually chat with him about it. So we talk about how he's using large language models to essentially become the one unified interface for all enterprise software. And how he is doing this and what the business and the product challenge are behind those. We dig into as well a little bit history.

We go from how UX interfaces are user interfaces, graphical user interfaces have involved. And they came from terminal and today everybody is terminal. Back to the old. School sort of say we talk about why Siri and Amazon might be challenged.

And then we dig into the technology about the different layers you use in LLM to actually guide as well as that you can have a rule based engine to force an LLM to actually do what you wanted to do as well as we do a throwback to last episode of Rags where we actually looking into how Catalog is using Rags. And! How they're using this to avoid that a large language model digs into deeper layers and start hallucination. So it's a it's a lot when we did.

It's a super interesting discussion. I hope you enjoy our episode. We are live. New participants participants participants participants participants participants participants participants participants participants participants participants participants Catalog, I have tested Catalog.

Catalog is actually a pretty interesting tool, a super slick interface. Thank you. And you're using at the core, I would say, a large language modeler, which is all the rave at the moment. So tell us a little bit about what is Catalog solving, which problems?

So the one you probably used on the website is probably just the onboarding, where it's onboarding is fully sort of pipelined by an LLM. And what we actually sell is an enterprise work hub. So we enable employees in a company to access information from across systems in real time and perform actions across tools in real time from a single pane of glass designed for the enterprise. And it's all entirely powered by LLM start to finish.

So if now all of the LLMs start to finish, we all very often kind of saying, you know what, LLMs are just a nice interface. What makes an enterprise software need an LLM? And how do you use this? Maybe just walk us through a sample workflow.

I can, I can. So it's less what an enterprise needs, and it's more what the user needs. So as a user, you might have a question of like, hey, when did we launch, you know, product X version five? And the LLMs are able to sort of understand and destructure that request.

And if you fine tune LLMs, into understanding all of the data repositories in the company, not the data, just the data repositories, and then you teach it how to access that, then it can essentially go and automate the act of you going and looking for that information. And it's not, we don't use LLMs for data retrieval. We don't think LLMs are a good sort of solution for that problem, but we use the reasoning and synthesis capabilities of LLMs to understand queries, understanding queries, and so on. And that participants can then suggested March 2023.

And it can then deconstruct that and say payslips are going to be in Workday. Workday has an API. There's an API for Workday for retrieving payslips. The user wants a payslip for March 2023.

What is the format for that Workday API? Convert that request into an API call, do a deterministic retrieval, and then give that back to the user. And we don't do this in a chat interface. We use something called a prompt interface.

So it's a single line that you enter into the system. And depending on what the requirement is, the UI changes. So if you do a search, it renders search results. If you ask for a summary, it renders a summary view.

If you ask for what's the revenue from Q223, it renders a graph. Very cool. I have so many questions here. So I just put them out so that we have a roadmap for us to discuss.

It's a whole challenge on the product. Design challenge about how do you define those use cases? Why do you change the interface of engaging with the user for different use cases? Is that not more confusing or is it helpful?

How do you guide the user? That's one. There is the whole question on how do you utilize an LLM for that use case? Because you said we are not using LLMs for information retrieval.

Yes. However, if you do for the journey, you use the LLM in the beginning, of course you use a prompt, and then at the end once you get the answer in a different interface, right? And then the third one is you talked about API access. I think you are probably doing something like chaining of a lung chain as well as rugs.

We talked about this. So let's dig into those technical depths as well. But first, tell me a little bit about your work with the LLM. What are your ideas on how to use the LLM?

The question is, how do you use the LLM for your application? The question is, how do you use the LLM for your Why is there even a need? Can I not just use my existing tools? Can I not just go to Workday or use Google Drive or whatever I need to have on my interface?

Why do I need a completely new surface towards my enterprise software? So there's two ways to look at this. So one is it's not a completely new surface. If you think about all the people joining the company into a new organization, let's say.

you have to introduce them to seven new surfaces. Like if you want to book your holiday, here's the surface for doing that. If you want guidance on policies, here's a surface for doing that. So when somebody joins a company and you say, here's the one screen into which you ask every question you have about the business and everything to have to do with your employment, I don't think it's a new surface.

I think it's surface compression. So that's one aspect of it. The second is workflow compression. So if you think about, if you decompose that, you know, a journey of booking time off in let's say a fairly large enterprise, you go into some sort of like a service layer, like Okta or OneLogin, and then you go into that, and then you go into Workday, and then inside of Workday, you navigate to paid time off.

And inside of paid time off, you say in a book time off, and then you give it the details. And then there's probably some sort of, you know, input that you need to go through there. That's already, you're at like three different surfaces and 11 or 12 clicks. You can compress that workflow to essentially one prompt and two clicks by using our system.

So one is surface compression. So surface sort of, what do you call it? Aggregation, you know, to put another word to it. And the other is workflows compress.

And what we're seeing consistently is that workflows are compressing from two, three surfaces, 10 to 15 clicks to one query, two clicks, one query, three clicks. And so it's a lot better for the user. It's a lot better for the business because the business does not need to train all of their employees and guide all of their employees into all these different systems. And it's a, it's a much cleaner, it's a much more effective, it's a much less error prone interface.

So for registering my, I'm taking a day off, I'm doing the company. I would need to know that I go to a tool like Workday. Now, obviously there is an intranet and somewhere in the intranet, I find the information and it's terrible and I don't know. So I normally ask my colleague, how do I do this?

Or my manager. And what I now do is I actually have the first part is an information retrieval. I said like, how do I actually get a day off? Which would be then the flow, which is an information retrieval flow.

And you're going even a step further. You're saying, actually, you know what? Instead of clicking on Workday, you just tell the tool. That's right.

How many days do I have? Can I already take a day off? I would like to get tomorrow off. Is that okay?

Please register this for me. That's right. Got it. Essentially, you're going to, to work with Workday.

No, we're working with Workday. Workday can slowly, because if you think about the complexity, that Workday has solved from a HRIS perspective, most of these sort of enterprise tools have a 95-5 distribution. Most of these things, you'll find it where 5% of the sort of users use like everything else in the application, but 95% just use one or two things. So if you, in the explicit example of Workday, and Workday might be a very poor example, but in the example of Workday, that's going to be getting my payslips and booking time off, or maybe looking at the directory.

And that's just like 2% of the interface of what you can do in Workday. And so for those use cases, you can keep Workday just headless to the business. And it's just the hiring managers, it's just the HR team, it's just the people team that is exposed to that extremely complicated, clunky and Amazonian forest that is Workday. And everyone else can get a very simple prompt interface where you just ask the business what you want it to do.

But then are you, so from that user flow, you are decoupling the end user who actually has a need. I want to get a day off. I want to know my payslip from the actual tool which is serving that user. That's right.

You are saying we are generating for enterprises a general interface. That's right. Anything interface. That's right.

Do you think there is, the future is, that we will see a lot of headless interfaces? I think the future is headless services. So Workday, Salesforce, a lot of these things that are essentially data repositories, they have domain-specific intelligence, domain-specific knowledge, domain-specific workflows. And they have done all the work around compliance and legal and all those things required to sort of operate in that domain of the business.

That's valuable. And that's what is giving Workday value. It's not the interface. It's not the fact that you can book time off.

It's all the things they've enabled to make help you book time off. And so they can provide APIs into as many copilots, as many services that exist for a business for them to do these 95.5 distribution work. And they can focus on the five and make that as robust as possible. Yeah.

And you can see this issue with a lot of enterprise tooling, you know, SAP, Concur, all of these things where the interfaces are really clunky because, you know, it's essentially from the 90s. And they haven't been able to change it. And they don't have really their business. The people who buy are the HR team.

They want the compliance. They want the system. They want the integration. They also want to have a nice interface, but they really, it's not highest product feature on the agenda.

Therefore, those interfaces tend to look bad. And you are seeing here your chance to saying because those interfaces are not a product in itself, let's make it a product in itself and offer a simplified version to all of those interfaces. That's right. Awesome.

Okay. So now here, my product challenge. Yes. The interfaces you see are tagged for better or worse.

And let's, yes, we have bad interfaces in the, in the eighties and they became better and technology played a role, but for better or worse, they are tagged to a given workflow. That's right. Meaning the workflow has to know certain things and because it needs to know certain things. Yes.

Okay. You want to take it. You want to take time off first. I need to know whether you are a temporary employee or full employee, whether you need to have a certain amount of vacation days, a cure before you can take off and whether they apply to you.

And therefore certain things have to happen before you actually can register. Right. That's right. And therefore they designed a certain interface.

Mm-hmm . Do you believe that with the use of language as such, you can overcome all of those complexities because essentially the interface can ask you all the questions they need to ask you before? So there's, there's two layers to it. One is the idea of you're starting a request and the request has state and the request has a certain set of requirements.

A request has a certain journey. That it needs to take you through. The second is the application itself has a certain amount of ergonomics around the API. So if they expose a book time off API, it's going to tell you what it needs to know to book that time off.

There's going to be validation. There's going to be failures if you don't give it that information and things like that. And most often you can compose multiple APIs to sort of achieve the goal that you're trying to see. First you would hit the get time off available time off endpoint.

Good. You can say, okay, I'm going to book 15 days off. Right. And the second thing would be, okay, book three days off.

And here's the reason for it. Here's the start date. Here's the end date. And here's the category for that.

And then, then you say, okay, book time is done, but that then the request is sort of completed. So we use LLMs at the first, you, mentioned earlier that we use LLMs at the start and we use LLMs at the end. We actually use LLMs at every step of that journey, including routing the next requirement, routing, planning, breaking down essentially for that set of APIs. What is the state required?

And what is the journey required? And are those APIs available and validate that flow before we even present it to the user? We don't use Langchain. We I think Langchains are an amazing prototyping tool.

But if you want to go into anything very specific and very, you know, highly bespoke, I think you'll have to build your own chaining mechanisms and build your own machine interface models. And we've essentially cooked up the whole thing internally ourselves. Nice. Let me stay on.

Before we dig into the technology. Let me stay on the actual value. So the value proposition is break down any interface you might have on a enterprise standard software because they are bad. That's that's essentially the value proposition.

I wouldn't say they're bad, but there's an opportunity to simplify them. So there's two things. That is not the core value proposition. The core value proposition is retrieval.

Then we have actions. So we also do. Yeah. To your point earlier.

You know, if you have, if somebody has a question about something. Yeah. And that information sits anywhere in their systems. And again, it's not just a one shot retrieval.

There's a breakdown of, Oh, you want to know this thing, we're going to go look here and find the information, come back and then process. There's a sequence of events that work for an information generation workflow, essentially that we execute to give the user back whatever it is that they need. You know, when did product X launch, who was responsible for this, when is our client due for a New World and if there is an answer for this anywhere in any of the systems, we'll find it and we'll give it back to the user. Okay, so essentially, the first level is you are creating this universal interface.

Yes, for information and actions. Yes, and I love this. And we will dig on. Let's only do this layer by layer.

So that's the first layer. If you do that layer, why? That's my product question. Why would you actually change the interface depending on what the user wants?

Because aren't you going down the same rabbit hole as those companies went down as they created their interfaces? So the way to sort of decouple the similarities would be they built very bespoke workflow level UIs. So booking time off is going to have a booking time off sequence. And it's going to be very bespoke to booking time off.

And the booking time off UI is not going to be like... It's going to be like anything else inside of Workday. Now, that explodes into you've now got 350, 400 deterministic flows inside the product in something like Workday. That could be like 2,000, 3,000 types of flows.

And there are deterministic journeys. Whereas for us, the abstraction is one level higher. So if it's a request, you need some information to collect from the user. So we render a form.

Oh. And if you want... If you want to render a form, you know, this is... These are the form elements and we can render a form.

And that's not... That's also dynamic. So we don't have code anywhere that says, for Workday, render this form. The LLM does that again.

So you get the generality that LLM is enabled by saying, for this type of interface, we've put the boundary conditions, but, you know, adapt it to whatever use case comes to mind. And then there's a information representation view, which is you've retrieved the info. How do you show that to the user? And so there's about a finite...

There's a finite list of maybe even 20 or 25 max. And I think the real answer is 90% of the use cases are going to fall within the first five. But we can get to like 25, for example. So it's 25 abstract views that we maintain, not 3,000 to 4,000 like in the previous paradigm.

And what's enabling that is LLMs and the ability to generalize a specific thing into many things in real time. Why would not? If I'm any of... If I'm any of those enterprise value tools, why would I not actually create my own interface?

And since I own the relationship with the customer, I would create this interface and would kick you out of the game. If I'm Workday and people are saying, okay, look, I mean, your interface is terrible. Nobody can use it. Have you heard about LLMs?

Can you not just make it smarter? Then if Workday says, no, I don't, then they bring a catalog in and put this up front. But now the user never sees really Workday. No.

Workday become... Headless. Just in the background, I register something. So Workday has the sex appeal of a database table within Amazon, which is essentially zero.

Right. And Workday would lose... All their leverage because, okay, they still do their workflows and whatsoever and have tables and privacy setting and access controls and all of this. But the actual product interface becomes you.

Yes. Why would Workday allow this? We don't just show a form. We say, you know, booking time off on Workday.

We show the logo. We show the activity that we are conducting. That also brings trust to the user in that. This is being done in the right place, for example.

So we do surface the service in the interface and say, you're doing this on Workday. So Workday isn't completely in the background. We do surface their visibility. But in terms of the user experience and controlling that user experience, that's all in our hands.

Got it. Got it. I mean, I used to work for Google Health and Google Health started to build a way easier... Yeah.

...interface for data retrieval than on top of CERN, the EHR. And I think, like, so they have the data, they're like the interface, you know, like you might have heard those stories, like... Yeah, of course. ...8 to 47 clicks to book an ibuprofen if you're in a hospital, right?

And doctors click themselves to death instead of giving care and giving health. Yeah. You could do actually quite a lot of things, and EHR, electronic health records systems, have definitely not a good user interface. But by doing so, the EHR of record, CERNA in this case, would lose access to their audience, right?

So it became very clear later on, and as we now know, CERNA went nuts together with Google to do this, because there is a separation between... the actual user and the actual underlying platform. Are you afraid that the same will be applied to you business as a business issue? If we were doing just interfaces, I think I would be worried.

But we do retrieval. And there's two questions, right? So there's two questions you asked. One is, why wouldn't Workday do their own sort of, you know, natural language interface?

And if they do that, why do you need something like this? And I think that's going to be true broadly for every app. You know, Office is going to have co-pilots. Salesforce has Einstein GPT.

I'm sure Workday is going to have WorkGPT at some point. And they will have these siloed co-pilots that will operate within essentially their world. And they'll have this chat interface that's sitting alongside the normal interface to help you do stuff. Yeah.

And. And I don't think that siloed approach is going to necessarily scale. So if you're going into Workday and then you're using the Workday co-pilot, the Workday co-pilot will know everything inside of Workday. But it does not know your calendar.

It does not know all of the other stuff. It does not know your documents. It does not know. Like, the access is siloed.

So we go back to the same problem from the SaaS fragmentation perspective of, like, you have all these wonderful co-pilots, but they have, you know, their own little worlds. I think the second thing of using chat as the paradigm for these co-pilots, I don't know if multi-tone interfaces are the right way to solve. Like you said, there's 47 clicks in an EHR system. You'll have 47 tons of conversation in every computer now, in every app to achieve anything.

Because if you say, even if you think about that simple use case of booking time off, you know, picking the day, what is the reason? What is the start date? What is the end date? What is the category?

Would you like to take this from your paid time? Would you like to take this away from? That's about 10, 11 turns back and forth. And I don't know if that's any better than going into, you know, workday and doing those 17 clicks.

So there is this thing of, there is appeal in that these natural language interfaces are going to solve something. But I think the chat paradigm, as Alexa has shown repeatedly, like, that's an exception for a stint to face. Turn-by-turn conversation is an exception for a stint to face. And so the amount of wiggle room that you give to the user to give you the wrong input, like, when would you like time off?

It'll say, and if you say sometime mid next week to the week after that, and be like, what exactly do you mean? Whereas if you say, I want to book time off and you're under a calendar to let you pick the date, then you've got the best of both worlds, essentially. Which is fast. And I think the Alexa example is actually a neat one.

Because Alexa thought they're doing a good job. By offering all the different tools. But that meant now that I had to take a decision where I would like to ask something. And then I would go into that tool, very much old school.

You open a tool where you're saying actually that the tools exist is a constraint of the computer world. What we do is we now just do the intelligent routing. You don't need to decide which tool you want to do. Exactly.

I'm working for Cornell as one of my jobs. So I always need to remember, where do I register my travel expenses in Cornell? Because I do this differently in different companies. Yes.

And here I do not need it. It's an old world system. I totally get it. That integration piece makes a lot of sense.

Let's dig into the technology a little bit. So you use large language models to deconstruct, but you as well said, you use large language models to do. Yeah. temperature one, prompt engineered sort of LLM.

I think you have the issues of like, are you constructing that every single time? But if you use a fine-tuned model down to temperature zero and you've trained it on 5,000, 10,000 journeys, you've essentially, and you can generalize that 10,000 to 100,000 sort of situations, it's fairly deterministic. And the cost is very, very low because the number of tokens you're putting into that is in the order of tens and it's close to nothing. And if you can, another way to sort of look at that cost is let's say every deterministic flow might seem like it not cost anything, but if you start to look at what it takes to manage that many flows from an engineering perspective, from a product perspective or maintenance perspective, from an error management perspective, that deterministic journey sort of explodes into a million permutations.

And so the cost of a deterministic flow is not any cheaper necessarily than one that is dynamically generated because the dynamically generated one does not have the fixed costs of maintaining all of those essentially flows. There's ways to sort of look at and evaluate both. And I don't think it's necessarily true in every scenario, but if you're using this approach in a specific space and there's complexity, it's worth sort of assessing what it takes to manage and maintain that complexity versus letting the LLM do that job. It makes perfect sense.

So you would reset those flows just to like, let's say I have my API and in the backend, my API changes or the workflow changes, you would actually automatically discover this. You would not need to actually rerun the complexity of it. That's right. And so as APIs change, as definitions change, as new capabilities get plugged in, there is no determination.

There's no harmonistic code anywhere that needs updating. That's pretty cool. That's pretty awesome. Now, how do you actually, let's say a typical workflow is I register my holiday and then I put an out of office reminder into my calendar.

How now would I always get those steps? How can you force the LLM to always follow those steps? So you're saying those two are actually very important. And if you redo the workflow every day on the fly through a logistical thinking process, and then you do the chaining of the logic, even if you don't use long chain, how would you ensure that this always the same, but still open enough to see changes?

So one thing that we didn't talk about is what it's using underneath our LLMs is a workflow engine that we built. So what the LLM is doing is it's generating a workflow on the fly every time. And in the case where you want to determine a mistake journey, like you say, you're filing a bug report in the company and you want to get the information, you want to get the user's name, the ID, which browser they're on, what system they're on, and all of these inputs from the customer or whoever the user is. And the second step was that you create a ticket in JIRA with these sort of information filled in.

And the third step is that you send a message, a message on Slack or Microsoft Teams into the specific channel, and that's done. You can design this journey inside of our systems. We call it workflows. And if you create a workflow, every time a request matches a workflow definition, it will trigger that workflow every time.

Then it goes away from a dynamically generated journey to a deterministic journey. So there is control for the user. Got it. So for the LLM, the first is there is a lookup, the workflow, lookup, whether there is something you always want to do.

And then for the rest, go into free flow logic and those might vary every time. But that means for you having implementation cost, right? Because now you have to design the workflow. It's no low code.

Users can do it themselves. Imagine it's Zapier, but internally for the business. The implementation would be defining those workflows and journeys. Ideally, it's down.

And that has suggested that participants participants Is that the solution to have an underlying rules engine? Is that the solution to avoid hallucination? The way to avoid hallucination is to stop the model from reaching into the model layers for information. Tell me more.

So if you're generating the next token and it's reaching into the model, then it's probabilistic. There's a chance it might find 17 matches for the next token. And it's going to roll the dice, essentially, on what that next, I mean, there's probabilities and there's temperature and all kinds of entropy to sort of change that. But it is probabilistic retrieval.

The way to stop it from hallucinating is to give it the information it needs to inference. So, for example, if you give it this morning's, if you start the generation with the context being the front page of the New York Times today. And you say, what was on the front page? What is the most?

What is the most important thing on the front page of the New York Times today? It can still hallucinate because you've introduced some sort of like, you know, variance in its understanding of what important is. But if you say, but if you say things like, here's front page of the New York Times, summarize it for me, it's going to give you exactly what you gave it. Whereas without the context, if you say, summarize the front page of the New York Times for me, it's going to make things up because it doesn't have access to today's New York Times.

So giving it the information in raw format. In sort of structured format, unstructured format, whatever it is. And then using that information to do what you need to do with it. Either summarize, either list, or create some sort of whatever else.

Which is what you were talking about in terms of retrieval augmented generation. Retrieval augmented generation is where you get it, and then augmented, and then you generate it. But this is fun. Because now, so, and we jump to RUX now.

But it's actually, let's stay on the workflow. What rule-based setup you have. Because you have a rule-based setup. You're saying this is what you always should do.

You should always send an email to the whole population about your vacation. As a bad example. But you set this as a rule, and that is in your rule-based engine. How do you, how do you, like, you can enforce the LLM to stick to this rule.

This is cool. And that's not a right. This is just a rule. You follow our rules engine saying, like, don't make up stuff.

Don't find logic. Just do it. Because I created this rule. It's a rule-based engine.

Fine. How do you decide in your design, in your product design, how much you do rule-based versus how much you do LLM? Because that's the, essentially, you don't give their choice. For a RAG, you actually give them a choice.

And saying, I give you structured text, and that structured text is so much better. That you should believe. And as we saw, and you had the episode where I tried to become a, have superpowers. It was not sufficiently structured for them to believe it.

If I would have made this a rule, saying, okay, when you get asked from somebody, whether LLM is, like, Captain America, you have to answer yes. Then this becomes a rule. There is no way around it. But here, how do you keep that balance?

So, in a way, remember that transition? From terminal to GUI. You know, when they're like, how much of, you know, GUI do we need? How much terminal do we need?

And. Maybe explain to the listeners a little bit, what is GUI? So, a terminal is essentially the terminal interface where you have a command line. And you have, you know, commands that we can put into it.

Like, MKDIR to make a directory. And then you do all these sorts of things. GUI is the graphical user interface. And.

When you click, you use the mouse. You can, you don't need to remember commands anymore. And over time, there was this, I mean, this is early in the 90s as, or late 80s when they started shifting. When you start thinking about, there's lots of pushback, you know, GUIs are a very suboptimal way to do things.

Engineers and programmers loved using the terminal because they had, you know, instant recall of what commands they need. And they can get things done much faster than you could get done. In a GUI. Now, there was a balance then where you did half the things inside of DOS and half the things inside of a GUI.

And that was the start of the paradigm. And. Interesting. And so, as that paradigm got stronger and stronger and stronger, the distribution of what happens in the GUI and what happens in the terminal went from 50-50, 70-30, 90-10.

Now it's down to just engineers doing engineer things in terminals. And everyone uses the GUI. Now it's actually shifting everybody using our language prompting interface. So we are now to 100 on the terminal.

But yeah, I hear you. But the thing, so I like this example, but there's one caveat to me. The decision whether to use the user, the graphical interface, or the terminal was the agent operating the system. And that agent took a decision.

And then like for the case that they wanted to do something funky and they realized, oh, I actually, you know, erase all doesn't work on a graphical interface. I actually go and type erase star dot star or delete star dot star on the terminal. And that actually works better. So who is taking that decision at a catalog?

Right. Because now you're defining this is a rule based. And your interface, your logic engine will adhere to it. This would be telling the human you only can use terminal for making a folder, period.

Right. How do you decide this? To your point earlier, everyone's now back to a terminal. And the entry point is now a terminal.

It's a prompt. It's not a chat, but it's a prompt. And this is where depending on the prompt, rendering the right interface is powerful. So if the prompt is I want to delete files.

Then the next thing would be enter delete star dot star. If you say I want to make an image of a cat, then it would open up Photoshop in the GUI. And so getting the intent of the user and then making that decision on behalf of the user where you take the agency away, as you were saying earlier, as a user, I had to decide whether I delete using the terminal or using File Explorer. But if you take that decision away from the user and we say this is what you want to do, which is what was.

Not available before. Before the intent was in the user's head, the terminals were dumb machines. But now we are moving to giving the intent to the machine and letting the machine make the decision of what the next step is. Got it.

And that's where. Sorry. And that's where the defining the workflow based off the intent is very powerful because this is a new paradigm. We haven't had systems where you started with the intent.

You started with an action. Perfect. All right. I got this.

So now we like just from let's take one layer deeper. We talked about the product challenge becoming the interface. We talked about now the way you connect actually the workflow. How much is workflow versus how much is logic from LLM?

Now everything is now over onto the LLM. And now you are trying to avoid that the LLM comes back with hallucination. Oh, actually, tell me your birthday as well. Because I will.

I think the best time to take holidays on a birthday. Right. And you suddenly have a in a wrong direction. And for that, you actually saying don't reach into deeper layers, which makes sense, but rather focus the whole LLM on a set of data which they use for augmentation.

So building the building the context around the user every time they have a request. And containing what's possible within that context. So if you go into catalog, if I go into, we use catalog catalogs. If I go into catalog and I say, who speaks Spanish is going to give me two names from our HR system because two people in the company speak Spanish.

If I go to chat GPT and say, who speaks Spanish, I'm going to get all kinds of answers. And so that context construction and containing essentially the breadth and depth to which the LLM sort of navigates to find the answer. Yeah. Is is where the control lies.

And that's what I think. It's not just about augmenting with information. It's also augmenting with the boundaries of that information. What was for you the challenging part to get down to this level of, again, specificity, how, who speaks Spanish?

The answer could be the king of Spain. Yeah. Right. Which is, by the way, a very true answer.

I don't know the name at the moment. Unfortunately, but like you could say that's a person who speaks Spanish. How do you and it would be a true answer. How do you validate that the augmented information actually gets retrieved?

So how do you technically how is it? So this is old school engineering. So if you think through who speaks Spanish, the first step is always get the information for where this thing would exist. So who speaks Spanish?

We've fine tuned the models to understand that's an attribute. The person. And so you might want to look into our system and for people with tags of Spanish or language Spanish and it comes back with a result set. You augment that result set and then you do the inference.

And if the result set is zero results, here is the query into workday and it's come back with zero results. Then the language model is sort of stuck in answering, staying in that context. It can't say, you know, the king of Spain is who speaks Spanish is like we don't have anybody who speaks Spanish. Because.

We have contained the scope of that specific generation with clear context in that this is the question. This is the data that you've got to work with. And this is the answer that you need to give back to the user. That's right.

Yes. Makes perfect sense. All right. Thank you so much.

All right. Thank you. Absolutely. Thank you.

Talk soon. Bye bye.
