---
title: "How Ultimate evolved from hundreds of supervised models to UltimateGPT"
date: "2023-05-12"
kind: "podcast"
show: "The Edge"
showId: "the-edge"
sourceUrl: "https://content.rss.com/episodes/204999/948491/lutzandjasper/2023_05_12_05_23_40_7d5e0751-50a4-4b9c-bce1-592e638ae355.mp3"
---

This week, we're in for a special treat and we're joined by Retu Kainulain of Ultimate AI, which is helping businesses scale and augment their customer service workflows with, as you can guess, artificial intelligence. But they have built their own model and just released Ultimate GPT on their own data and with a lot of already very successful customers using the product for years. So let's jump in. With us from Finland, Retu from Ultimate AI.

Good afternoon. Good to be here. You flew me in five and a half years ago and I'm still here. Long time no see.

All right. The title of today's podcast is Ultimate GPT of Ultimate AI. So we have a lot of ultimates in here. And since everybody seems to be hopping on this marketing train and putting GPT next to their names, the name Ultimate.

So we want to talk about why you have a GPT there. But maybe we start with a little bit of history, Retu, how you came up with the company and the name, and then we move into that. Well, let's start with the name. I think that's the easy part.

So obviously, the name came from my brilliant co-founder, Jakko, who's the chief science officer, who's the smart one. And obviously, he was really good with names. Yeah, I remember back in the day, we started the AI company. We were looking at .ai.

I think we started. It was just available. It was very new. So there was a lot of domains available.

And I think Jakko just mentioned Ultimate. He said there would be jokes as, well, as Finns, we're a bit, let's say, self-deprecating and modest. So why not compensate that with the name? And ultimately, the AI was available.

And that's it. That was like a five-minute conversation. So that's the depth that goes into company names. But I think we got lucky in that sense.

So let's tell us, what is it? What's Ultimate ultimately doing? It's a brilliant name because I think also when people hear the name, they subconsciously start using the word more. And I can see that like everywhere.

At Ultimate, there's Ultimate. Or maybe it's just my bias. But I think the thesis is we are a support automation platform. So we work in the industry of customer service.

So what we're doing is making customer service more accessible for mostly consumers, which means that it saves a lot of their time. And there's a lot of those people out there like me. Which means. That those people can use their time, hopefully something more productive.

And also enable businesses to do it easier. But I think the thesis behind everything is, especially now, I think there's a lot of proof points that using AI, conversation AI especially, you can build a solution that is very human-like. I don't think the point is to be human, but the point is to be natural towards the user who is a human. And by doing that, you can start automating.

Conversations, emails, tickets, et cetera, and customer service at scale. And we always said that if you reach this point where you can do let's say 51% majority of level one customer service, you can resolve those cases automatically. You can do them instantly with the same or better customer experience as the busy human agent would do. Of course, if there's a one-to-one mapping between users and customer service agents, I think all AI tools will lose.

But I don't think that's the reality. Everybody's very busy. That's why support is usually a bit slow and bad. But if you can do that better or at the same level as human, but the 10th of a cost, that will shift the whole industry.

So everybody will obviously use these solutions. And that's kind of where we see the world is going. And then last thing, the humans who work in support, who are busy, they're like the, you know, the industrial supply chain workers are putting pieces together as fast as possible right now. So that's, that's where we're heading.

It's still a long journey, but it's been. Absolutely. Absolutely. And we're still in the middle of a pandemic.

And our last call, we actually compared the interface to an API. Would you say here, just to make the loop to the last chat that Jasper and I had, that customer service is actually the human API for companies to engage with? Yeah, that's a very cold way of putting it. I want to take the humanity of support.

I used to work in customer service and IT help desk, so I can talk about this. But I think in support, there's two kinds of cases. You have the transaction. You have the participants.

my order i just want to know where's my order i don't want i don't technically want to connect with a human being and then there's the cases where i don't even know what my problem is i have issues you know there's something wrong with the service that i can you help me or i was treated wrongly etc that's human right but those transactional cases yeah in the end what the agent is doing what i was doing is i read the question i understand the question and i know which system usually this answer comes from because i can't hold everything in my head i carry the system the system returns me the information and then i write the information back to the user and i do that very slowly right so that in a way that's the that's the connection between the consumer and the back office and let's i would like to stick a little bit with the product here until the point where we deep dive into let's say more the technology because you mentioned right where you moved to berlin five and a half years ago something like that yeah and and before that you were in in finland and actually you were part of tech stars and i remember we had this coaching conversation and i had this guy sitting in front of me telling me i'm gonna kill chatbots and we had a very nice conversation there because i didn't like chatbots at the time because they were not really smart and then you started actually building something that was a bit different than a chatbot and maybe you can tell the listeners just briefly why you did that why you did it differently and then i think we should come more to the t and gpt the reality is that chatbots have been and still is mostly at least the ones who haven't adopted this new wave of technology they're quite bad right so let's say they are great experiences maybe you can automate 30 of the cases which means 30 of the cases they work well or well enough to resolve your case but are they great not really because they are rules right i mean they can only do what you tell them to do they're not creative and in the back office they're the ones who are building them they manage this complex house of cards and rules and then you change something something breaks and yeah it's it's kind of like i think a lot of bots even nowadays especially i don't know what is even a bot people call bots when there's just buttons you click one button to another for me that's a menu yeah but there's an ivr as a bot so i think it's also really let's say there's more nuance into what a bot is you have a chat gpt and then you have three buttons in a row i don't think you can say that these two are bots but in general i suggested that participants suggested that participants suggested participants suggested that participants suggested that participants suggested participants suggested that participants to use it and it's very transactional it's very easy to kind of map out the process just the language part is hard but if it was so great why did you guys decide to make it more complex and not just do the same copy paste we're always especially my co-founder marcus is very i love how brutal he is about value he hates hype he hates like he just wants to like really focus but one thing we saw was hey it's very complicated and difficult to create the automated experience where the consumer talks to the bot so it's good so we turn it around and we said hey let's give this to the agents so maybe we can recommend agents some responses and answers they have more tolerance for failures because they can ignore them they still can do their job but if it's correct they get value out of it and maybe they can train the system at the same time so and then maybe gradually we can move to the phase where okay now the technology of the models are good enough that we can now turn it back to the users what i actually liked about this approach as i first met you right man the whole discussion of everybody is doing it manually copy paste right and but they assume that no matter how fancy or non-fancy that technology was is that actually the chatbot can take over you guys had a way more a nimble approach to it in terms of saying well we use technology to supercharge humans and we actually help the agents to become faster and better by giving them the tools it's essentially a like a fully automated search on their side running and telling them what to say which if you look at how like kasparov talks about chess computers same thing right the the computer became very very strong and nobody can be the chess computer anymore however the strongest players are still the chess player with the computer and you yeah exactly there is difficulties in that approach too because first of all when you have a bot versus a human it dumbs down the conversation usually so and that's good because it's easier than the map that out when you have human to human conversation and then in the sideline trying to predict what to say it's it can be challenging and especially in the beginning we realized that it was easy to get there let's say the top half of the conversation the greetings the first questions the first context and the end of the conversation the resolution and then the goodbyes etc but in the middle people kind of like they start going the deep in the nuance and the chit chat that's the difficult part actually contain the whole context so it's also very challenging but it's just less stressful space to operate when you're building products you can iterate you can learn you can fail a lot without completely ruining the experience i mean you you really build nice models there you had a lot of very very strong logos enterprise customers and were growing you were raising a lot of money but i remember we had this conversation of how can this be more efficient how can this better be better in terms of cost-effectiveness And then you had a longer discussion, I think, also with Lutz, Jakob. What happened there? Why did you come up with something new? Well, I think a few things.

Back in the day, the architecture we had helping the agents. I feel like now large learning models are excellent for that approach because they don't need a lot of... They can truly be trained on just the customer conversations. So technically, it was a difficult challenge back then.

But I think the biggest problem was at that stage, even if it worked, it was... Especially when it comes to emails. I think with chat, you could cut down maybe 20%, 30% of the conversation. That was meaningful.

But email was one of the biggest challenges. And then if you get... Let's say you cut down five seconds for the agent not to have the search for the macro that they already might have. And their average response time is four to eight hours.

That doesn't really move the needle. So again, agents love it. This is great. But then every customer was saying like, Hey, but now can we start automating?

Can we start automating? How do we automate? So then we say, Hey, we have to go to automation. We have to solve that because if you map out the future, it will get better in terms of actually automated conversations.

So the sooner we start that journey, the sooner we're there. And I think that the really interesting part here is you could just have sticked with the bots like all the other companies out there that raise funding. But you really wanted to build something larger. Because they only did chat and you tried emails.

Yeah, I think it's again, it comes down to working with the customer. So anyway, we're not in love with the technology. We love the technology. It changes constantly.

Even IaaS is very modular. Like we keep changing that whatever classifier or whatever piece of embedding piece there is as new things come out. So we're not never been too in love with the technology. I'm a product person.

I love elegant products, but in the end, when customers saying, Hey, New technology has suggested that New technology has suggested that one or two times back and forth and then it was solved versus in the chat, it might be 20 messages, very human-like. So it was just obvious for us. Like, okay, let's give it a try. I actually remember quite well, we were sitting, us three actually were sitting in this one bar in Berlin and chatted about the system.

The way you guys had set up at that time is you went to a customer, you analyzed what the problem is, what the intent are. Somebody is calling like 30% call because of X or like because they want a flight number, 20% call because they want a cancellation. So you build a model for each of those intents, right? And the strength was that you had the automatization, that you had the ability to forecast what is the best model to use and that you actually pinpointed it.

But it became pretty annoying because for every customer, you had to run many new models. And the reality, the reason why I love this story of your development so much is, you know, the whole world talks about narrow AI and the way how we go from narrow AI now to big models, which have become more and more generalized. And you lived this through. Your first models were very narrow.

Yeah, very narrow. One thing we had and still have, which is a key value driver still, is the ability to analyze and cluster the historical data, right? Because we did see that we're always, although Jasper, thank you for giving us money back then, but I think it was like 500K. That was, that is time for seed rounds.

So we didn't have much to play around with. But what it meant is that we saw a lot of our competitors, for example, back then saying, hey, we do the onboarding. We do the building for you because you have to, first of all, you have to create, it's a classifier in the end. It's back in the den.

You have to create what are the intents we call them you want to classify. What are the categories of questions? You need to create that taxonomy and then you need to create training data for it. And usually what happens is that, oh, let's take your FAQs from my website.

And then somebody, they call it AI trainers. They manually create, where's my order? Hey, can you give me information about an order? Like you create 50 to 100 different ways of asking the question, which is, we tried it in the beginning.

We had a Slack bot that you kind of, like we had this whole team just writing, snatching the bots, giving the training data. It's very difficult. Once you try to say 50 different times, where's my order? I would say after 20, you start really using your imagination.

And then once you do that, what happens in the end, you just train it for yourself, not for the world, right? So we couldn't afford having AI trainers or outsourcing the people. So of course, again, referring the brains of this company, which is Jakob, we looked into it like, hey, well, aren't those conversations already in the CRM, in Salesforce or whatever, between the agents, the humans, can we use some other technologies to source them there? So then we built this clustering pipeline.

So you find, hey, here's the 100, 200 most common questions you get. Here's all the ways those questions have been actually asked by a user. So that's the 30,000 different ways of asking, where's my order? I can guarantee some of them are really difficult, even as a human to understand.

And then we create this pipeline where you can kind of, first of all, even show the customer. I think that's a lot of value that they already get. Hey, here is your actual top 100 frequently asked questions, because I can guarantee that they're different than from an FAQ page, because usually the FAQ page solves the easy cases and then the rest go to support. So we still have that.

Even now, with customers, we say, hey, even before you talk to us, just do it even yourself, because we don't want to tell you that we can automate. We don't want to tell you that we can do everything for your support. It really depends on what kind of questions, what is the process behind those questions, etc. So that was also a key driver of faster setup, right, with a small team.

It was time to value. I remember that was one of the KPIs you followed, time to value for the customer, because other chatbots, you would have to create the rules. It was pretty tedious. It wouldn't work.

So that sounds already pretty cool. But why didn't you stop there? Why did Jako still had to do some research and test things? Well, it always can be better.

It always should be better. If you want to get to this, most Level 1 support cases are handled across channels, across languages, across talking to different systems. It takes a very smart and elegant solution to just cover all of those cases. So I think, for example, we have different models for different languages, although it was, we have language agnostic, the model itself, but we still, if you want to support a hundred languages, you have a hundred different models you need to run per customer.

That's it, a hundred different models for customer. I mean, somebody who is doing model, like model ops, that's like, that already sounds super painful, right? Dear American listeners, you would probably wonder why are there a hundred languages, but those guys speak Finn. Welcome to Europe.

No, but luckily their product philosophy is more of a, you know, business in the front part, in the back, I think. So you can make it clean. In the product side, but then in the back office, yeah, there's a lot of things happening. So yeah, you constantly, you need to make it more simpler.

So if customers have only, let's say they have chat and email, if you can only do chat, even if you automate a lot, you limit yourself. So, okay, we want to increase the channels or depth, meaning I want to automate more. I want to make the conversation better. I want to do instead of 30%, I want to do 40, 50, 60.

And there's different challenges you face. To put a bow on that state. You were at that time, one of the top notch companies, because you did AI models. However, the problem of the customer interaction was different for every customer, slightly different.

You were missing a general model for customer interactions. Therefore you had to, for every use case, you build a model for every customer you built for every customer, for every use case, for every language, which is a model explosion, which is nothing else than you actually manually, breaking down the problem because you were missing an ability to have it in a generalizable way. Right? When we talk about AGI, then the G is for general, then you had a very narrow AI and you have many from it, and you work very hard in order to get more and more on it.

But in your time to value, that screwed you because like meaning you get a new customer and you have now to run more and more and more involved models. So you had to do a lot of work on the AI side, which makes you an extremely powerful company, but you knew like at some point in time that is a little bit the conclusion we had over the beer at that time, it will run into an upper ceiling. Yeah. And like in the end, but the point was that we didn't optimize for scale, right?

I guess this is like two things that don't scale and the AI side, but like we're optimizing on the value. Like we really had to do whatever it takes for that end experience to be good. So if we can have a simpler solution in the backend, but it means that we got core, right? And we have the best orders and the experience that's not going to get us anywhere.

So we kind of have to take the hit ourselves. How did we come then with Bart and the transformers? What is that? Maybe what happened there?

How long did it take? And what was the change for the customer? And maybe to add, when did you do it? Because you were so early.

This was impressive. Yeah, actually I did too. I mean, Yaka might have the actual timeline, but it was years ago. At least three and a half years.

Three and a half years ago. Because I think it was three, four years ago when we switched and started to work. So again, simplifying. So now we were looking into models that can do, let's say all those 109, et cetera, languages in one model, right?

So you go into this, I heard from the Brits, the polyglot version of the model. So it's a one to many, which was great. Again, simplifies things. Then another thing with transformers is just what it became kind of, the study is called really quickly.

But if you look at the models, in the beginning, when we started like the first-tourist models, I don't think we should have started maybe at deep learning or maybe we did because we always took the painful road and we learned really quickly. But yes, we have this nice deep learning pipeline. I think Yaka's working on their hyperparameters for like six months because, you know, it's kind of, sometimes you change something, something breaks. It's very frustrating.

And how was the experience when you really saw it working? Was it kind of the glue that would tie together all these hundreds of models? Or was it rather, let's say, a more, more slow progress? Hold on, like just to make sure this is actually the model Yaka introduced was, it was not the glue.

It actually took out the existing models, right? Because it actually started to use over the database. And I just looked it up. Bart was initially introduced 2018.

Pretty sure it was three and a half years ago because I was in Greece by the time you discussed it. So that was three and a half years ago. Yeah, it was a long time ago. But yes, it's the glue.

It's kind of the clear next stage. It did simplify basically not everything, but a lot. But then in the end, because we always kept the user interface, tried to get as simple as possible for the user, like they didn't see a lot of, a lot of differences, except we were able to support more languages easier for the end user. That's for sure.

We were able to say that. I think that one cool thing there was because you could kind of do a little bit zero shot fashion of, you know, you train the bot in English, right? And then you ask questions in finish. It was like, okay, quite good ish to be able to actually detect those.

So then you have this kind of paradigm where you can just run it on one language and then a trade it on one language and run it all. And then of course, that's never good enough. I'd say finish. Still, if you're trained in English, if you ask questions and finish, like you would benefit giving some finished training data, but not as much.

So I think that was huge. And also we use that, of course, in the cluster. So we're able to say, here's your, where's your order question. And you can see all the different languages in the set of example questions.

And you could filter search. You didn't have to worry about the language. You could see, here's some finish. Here's some Spanish.

Here's some German. Here's some English. But they all semantically meant the same thing. That's very cool.

Actually, it's funny, right? Because just to put this in the context of what a transformer is, and let's geek up for a second, right? Because it transcoded like a transformer is, you have a, encoder and a decoder. You encode the text you have into a latent image of whatever this is.

And then you decode it into whatever, whatever language you want to do. Or if you do the original transformer, it's encoder decoder pair. Now you, before you got this technology, you actually tried to create human-like, what are my most important use cases? So you created this map of problem statement manually.

Now by using it, encoder decoder pair, you actually automated half the transformer create this map because the transformer would now map out. Okay. These are the typical questions I'm hearing. I have a vectorial space where they are very close to each other.

So I create for me a latent space, the weights in a model, essentially, which describes that. So the complexity you had by mapping out the complexity of every customer's problems, you transfer that, you transfer that into the model, which is pretty brilliant. Yeah. But also one funny thing, because in the past we had model language, we immediately knew what language we're using, but when we switch models, the model doesn't really know what actual language it is, right?

It doesn't know. So we have to build then an extra layer of language detection because when we sent the question, the model, whether it's in Finnish and English, it gives us the right category. Oh, there's an order status. It doesn't really know what the language was.

So then we had to build another layer to know, okay, but now we should speak Finnish back instead of English, for example. So it did, we did have to add something. And now of course, LLMs came in and we kind of like throw that away again. So it's a, it's a changing process, but that's the exciting part.

And Lutz and I, we had in the last podcast, we had a discussion around what is actually defensible. And I don't want to jump too much here, but maybe along the path and maybe a little bit teasing Jakob, it feels a little bit like, you know, people started with chatbots, you did it better. Then you did the transformers, others did transformers, and now everybody can access those APIs and they can build their chatbots exactly like ultimate AI. Now Lutz and I, we were debating the mode of proprietary data, or actually data that you can train your models on to ensure output and quality for the customer.

So would you say, oh no, everybody can now build an ultimate AI product? Or is there more defensibility, what you have built and what you can do? The very nice description, Retu, on the language needs. However, in the, also that is the next level, which you probably very soon will integrate as much as I know you guys into it, because the, if we have this latent image, we essentially have a world language from a computer in between.

So we saw this Google, the new Google model was never, was never trained in Bengali, but you can actually ask a question in Bengali because it just translated it into the latent image and then answers back in Bengali. And up till now, this has not been seen. So for you guys to, you needed initially this language transfer and you use the transformer for simplifying the customer problems and still have the language level over it. But very soon you probably will actually have a, have a second, like you can use the same model to actually superimpose different languages, including it.

You go from narrower to less narrow to very general approaches. And actually now, if you use LLM, basically you can just say, ask politely, can you answer in the language of the user? It's not always great. It's like the language indication of the model itself is not always perfect.

So if you say, you know, ciao or something, hi, hi, it's very difficult. Sometimes, but yeah, technically you can just reduce that stage completely. Very cool. And back to Jasper now.

Yeah, question, question for Lutz and I is always, where's the defensibility? If you have some open models, if you have APIs that you can use very easily and integrate, everybody could build maybe ultimate AI nowadays. But we were also discussing the data mode. So having proprietary data, labeled data, trained models that I maybe even understand how the interaction with the customers are, have an interface.

Where do you see the defensibility of your business model right now? And maybe also, where do you actually see weaknesses in that defensibility with the new trends? Okay, I have, I have two answers. So one is that I think what people always want to hear that there is some, you know, silver bullet, there is some secret that if you hold this, no matter what the rest of the world do, it's almost like holding an IP.

Like you always win. And I think when it comes to that, let's say large-time models, et cetera, everything will converge because you know, you have these jokes of open AI goes down and you look all these billion dollar companies, they're probably actually working because everybody's leaning on that one end point. So then the question is open AI empowering ultimate? With the GPD products, there's open AI.

We also have access to the Google vertex platform. And then in the works, there's the, our version of the, of the LM. But again, modular, we'll see what works the best. We keep changing stuff.

Even on the open AI side, there's different versions of the model itself. GPT-4 is very expensive, for example. So yeah, we'll see. I think it's for us right now, it's time to market and time to market.

I mean, time to learn how the user, our user, and then the end user gets the most value of the product. What are the use cases, et cetera. And then the back office, you can switch around later. What are your two answers?

Reto, let's go, let's get back to them. Okay. My two answers is, one is on the data side. I think, yes, there is some, let's say, we case some modes there in terms of having proprietary data.

So for example, we stream the live conversations of a lot of big companies and between the customers. It's all a very secured way, but we still have that data. And we have a lot of people looking at that data and saying, how can we provide more value for them? And no one else has access to that data.

So if we build our models, I think we have something that other people might not have. So if you start today, you don't have that. You don't have those hundreds of millions of conversations. And that's good, right?

But what can you accomplish with that? So even if the beginning you say, well, now I can do 10% more automation or 5% this point, better experience, et cetera. That's cool. You know, that's a little data, but you can sell it to the end user, to the customer.

But if you can choose one thing you're good at, you're going to win at, will it be some data modes, some technical modes of the products? I think a lot comes down to the user experience. The distribution of the product has a big impact. So is it easy to see the value?

Is it fast to see the value? What is the user journey? I, for example, love these products to be complicated, but I love, I have a customer, one of my best customers, someone who has a Shopify memo, investment memo. And one of their customers, I love Shopify because it takes 10 minutes to learn, but years to master.

And I think someone said, Excel is very similar, right? It's easy to get started, but it's there's so much depth to it. So you can keep learning for years. So if you build a product like that, versus you build something that is, for example, really complicated to use, but the models are better.

They have some data that actually is, it's more accurate than model itself. So I think my philosophy is always that the end user experience, the distribution, the brand you build, you make it solid. That matters much more than some little silly bullet in the back office. This is awesome.

Let's double down on this because this has to be underlined. What matters more than the actual model is the user experience. And that is so important because we see so many companies actually running around and saying, I can do AI here. I can do LLM here, but it is a UX experience.

But it is a UX challenge overall, because the LLM is an interface. And because it's an interface, it doesn't necessarily mean this itch, which is better in accuracy will help you. It is how can the user or the person interacting better use it? Yeah.

We even dropped that. We used to be ultimate.ai as a company name. And we dropped that .ai because we're like, let's stop talking about the AI. Let's talk about the product, the value and the company we are, the people, right?

So in the end, I don't want to say, it doesn't mean that to say AI doesn't matter. Tech is the thing that enables things, but where the competitive edge is, I think people like to feel that they have some magic secret sauce, you know, the McDonald's Coca-Cola secret sauce that if they just hold onto that, no matter what they do, they will win. Cool. But now we started the interview, Reto, with Ultimate GPT.

And I saw that Zalando, I think you're very close with them, also has GPT. So what is about Ultimate GPT and why did you start it? And what does it actually do? I'm going to talk about the generative nature of these models, right?

Because of course there's a lot of use cases with these models. And what is a large language model in the end? But what is large? I think that's the question.

But the generative nature, I think became really interesting towards the end of last year. I think it was, was it 3.5 or something that came out from OpenAI. It became quite robust. Actually, before I go there, I want to talk a little bit about the company.

The funny thing is when we started the company back then, we built this generative bot. It was like 2016, summer. Just as like a cool thing, we just played around. We, when we started the company, we won a hackathon with similar, a little bit similar idea.

We got 3,000 euros from the hackathon. The first thing we bought was Nvidia's Titan X Pascal GPU, because you have really very available GPUs in the cloud. So we bought a real GPU. Just shove it in my own computer.

And I was hosting that GPU to be able to use with Jaco and others. But with that, we train this, it was generally model that read the Finnish Epic called Kalevala. It's almost like the Greek, they have the Epic. So we also have our Epic where I think a lot of the Lord of the Rings got inspiration on that language too.

So it was this collection of poems, right? And he had a really specific structure of the poems. I think it was like eight syllables. And it was structured in a specific way.

And he learned that really well. And then we create this Twitter bot that started to tweet. We call it Kalevala 2.0. And he tweeted these poems and they were correctly structured.

So it actually, it looked exactly like the poems in the past, in the original version. But back then it doesn't really make any sense, but it was old, you know, I can't remember that year, but like old school poems. So even the original ones, it didn't make a lot of sense. And that got a lot of hype in the Finnish media.

We got a lot of press. We got the linguistics and university people commenting on the poems. One professor said, he tweeted really nicely. It was like the style and the grammar is correct, but it's lacking soul.

It's lacking its soul in Finnish. So yeah, that actually was a funny generative, let's say, start of the whole company. And that's how we got a lot of the big enterprises from Finland. Coming like, Hey, I saw this whole, you guys are doing Finnish AI.

Not like that. Can you help us automate our support? So that was kind of the origin story of the company. But now six years later, we jumped back on the train because I think the soul is, maybe it's still not there, but it starts to make sense.

You can produce stuff that actually makes sense. So we started to work on those. And yeah, we mapped out all the use cases, but we also started to work on the, you know, the, A lot of people are using this in terms of creating synthetic data for their previous models. They're maybe also doing some recommendation for the agents.

But we said, hey, let's start with automation. Let's start with the thing that actually talks to the user because that's the hardest thing to do. But we'll learn really quickly. And let's just build.

And that's how it started. And we got it to a really good point reasonably quickly. But I think with this model, still the issue is that the last 10% is a painful mile. You get to that 90%.

But tweaking it towards that 100% takes a while. But let's actually talk about this quality, right? Because what we saw is, so we totally understand now, like specific case generalization is amazing. That drives your time to value.

Completely get it. And it makes sense to use the technology here. However, what we see is those models tend to hallucinate. And how do you avoid?

That the model doesn't make up things, but they can't find it. Yeah. And I'll respond to your question of like, why would somebody just use ChatGPT instead of product ultimate? There's a lot to that.

But the hallucination part, well, that could be one reason, for example, because if you take ChatGPT and you put it to your, I don't think you should just put it in your support talking to consumers. But if you do that, it will hallucinate. It will say God knows what. It will answer questions that you don't want it to answer.

So what do you have to do with these models? You have to build a lot of guardrails. I think people are even complaining now that now that ChatGPT has too many guardrails, but in our world, there's not enough. So if you ask, you could say, if you ask a recipe pancakes, like, I don't think you should answer.

Although we still have some customers saying, well, actually we're kind of brand that we would like it to answer. But if you ask about our competitor, then don't answer. So now it gets a bit too difficult. So better to say, Hey, let's ground the model to something.

So what we did, for example, for the first version of product, we grounded the model into the knowledge base of the customer. So it's a collection of articles or the FAQs, et cetera. And we use it as a QA system against that. So again, it's not replacing the whole of the product.

It replaces the simple cases, the FAQ cases. So you can ask, where's my order, but you get a textual answer. You just get an answer. Okay.

You can check your order from this tracking link versus the actual way of solving this is to talk to the system. So. Yeah, we ground it to the knowledge base and that helps to restrict it. So it should not say anything that is outside of that.

So if you ask who's Elon Musk, it should say, Hey, my job is not to make me talk about Elon Musk, but how can I help you about this company's support cases? I actually have the question there because that's words matter, right? So you're using OpenAI, using many different language models and OpenAI is one language model. Now, ChatGPT is a very defined with guardrails defined chat interface.

Are you using OpenAI with your own guardrails or are you using ChatGPT as chat interface plus guardrails plus data? Yeah, I think the latter in terms of we can use different models. So whether it's OpenAI, whether it's 3.5, whether it's 4, 3.5 turbo, which are the ChatGPT models and they have their guardrails, but their card rates are designed for different things, right? So we need more, more strict.

Guardrails, right? Yes. So that. The important part here is you have the model, you say actually, okay, I want the generalizability in terms of a human interaction, which is a chat prompting, ChatGPT prompting.

And then on top of it, you need, still need to have guardrails so that people do not talk about Elon Musk or whatsoever. So that you actually guide the conversation. You want an open conversation, the general conversation, that's the ChatGPT prompting of the model. And then on top of it, you do your own.

The guardrail prompting in order to avoid that this model goes off, which is pretty amazing stacking. Yeah. And I think the key thing here also is that you have to know which case you can actually extract the answer from the model itself and which case you use the model to, let's say, analyze a knowledge base article and then synthesize the answer. So basically the model, it's just a talking head of read an article and then summarize the exact answer for the customer.

But nothing comes from the model. It's just the model itself. I have one other question actually, when you know the user models, because side note, I actually wanted to become your customer and you didn't want me. We can't say that.

No, but at Marpey, we wanted actually to use some interface to work more with our members and we couldn't because obviously clinical and healthcare data needs to be HIPAA compliant and so on and so forth. If you talk to you, you have your own. So you're a retail customer and you work with open AI. The data you are using goes back currently into the cloud.

Is that a problem? Do people react to this? And are you waiting for open AI to change that? How do you see this?

It's okay because it's a problem for everybody, right? So first of all, when we talk about the future, I'm going to talk about, you know, I don't think people rely on these open AI models, et cetera, in the future, at least completely. But for example, we use their models that are served by Microsoft through Azure. They serve us on Europe.

You can actually opt out from the training so they don't use the, and it's Microsoft's. They serve enterprise customers. So that's, you can trust. So that actually helps a lot.

But it's more about the just, you know, this CISOs and privacy people, their heads must be spinning. I actually used to study information security because they see this chaos that is ChatGPT and different countries banning it. But then for example, Italy banning ChatGPT doesn't mean that the API. API is banned.

It's completely different than ChatGPT. That's the consumer product. So there's a lot of this confusion of like, Ooh, ChatGPT dangerous, right? Totally.

Even the confusion of the whole European community is at the moment hunting where does the data reside? But that's not the topic. As soon as you train the model and move the model weights, you actually have used that data for model training and people don't get this yet at the moment. Yeah, exactly.

So it's a problem in terms of you have to go through a couple of hoops and have those conversations and give that information. So then on the business side, people are like, but we need this, right? And it's amazing how when something is so exciting, how it kind of sometimes even the logic goes off there. Like you just, whatever, we just want this when something is very shiny.

But it's also great because I think maybe last year was a very difficult attack. By the end of the year, suddenly there's a spark of excitement that again, innovation is here, startups are innovating. So it's also amazing. But I think on the long term.

I just don't see the world where there's these big companies providing their models and that's it. So I think even Altman was saying that the future is maybe smaller and more narrow. Like we don't need a model that knows how to write code. Okay.

We need models that are very good at having conversations and maybe interacting systems. Not even that, very good at having conversations. So I think in the future, we start, instead of making this giant piece of model and try to restrict it in this tiny use case. We're going to have our own models that are just straight for this one use case.

May I challenge you on doing this one? Because the discussion which we had up to now is that we said your models were too narrow and that actually created problems for you. So you like one of the big things you guys did as Altman is that you went to more general models. Maybe it's a more fair way to say you want specific use cases and in that specific use cases, you want the general use cases.

Yeah. Yeah. The general approach of a human language interface that you can say it anyway, but it should be very general so that I can use many different ways of phrasing my question. But the use case should be very narrow because your activity following this use case is a linear activity.

I look up your cancellation number. I look up your flight or whatever. It's a very linear use case and therefore you want the model to hone in on something linear. But the end.

The point is that you want to be as broad as possible. Yeah, that's actually a good point because, for example, you to ask questions of, you know, like, can you give me a recipe for pancakes, for example? Like, if you do have that, some a little bit of that information, the model itself, you can maybe even handle that case in a way that, hey, I'm not here to give you recipes, for example, versus to say, like, I have no idea what you just said. But then you hone in the actual use case.

But I do think also, I think there's a. I think there's a big impact of. Cause of a control, right? So then when you rely on this third party models, they come from an API.

You don't have a lot of control. You don't really, it's hard to make them really, really good for your specific use case because you just use whatever is available and that's not much. And it will improve. And I think there is an argument for those big models say like, Hey, but those companies will iterate the models faster.

You know, but I think if you give it enough time, right, we will start seeing everybody working on. On. The. Model.

So there's some, maybe there's a module architect as a camp. You can switch to, if you want to use GPT six or seven or whatever, that's fine too. But, but if you want to use a model that is built for supports run here in Europe or Germany, even that's a good thing. I shouldn't be in Germany.

When you say we are based in Germany, people kind of start trusting you in terms of security because you have to be. But yeah, I think that's the direction we're going to go, but we'll see where it ends up. Do you see any other. Things that will happen in the next.

Two years? I know you, you think very strategically about this, but I mean, we already touched upon. Maybe there's a bit too much hype. Maybe the quality of the output is not good enough for all the applications that people are currently imagining.

It's not just the fine tuning, but the prompting of the model is pretty tedious. I'm still trying to tame mid journey, which is probably not possible, at least not right now, but anything else where you would say, dear listeners, be aware this is happening in a positive or negative way. Well, I think. There's a lot of hype, right?

And hype as a concept means that there's. Maybe expectations or something that is not real. So once you get into the actual weeds, you start realizing that last 10% actually prevents me maybe getting what I originally thought. So I have to compromise and then, you know, the hype kind of starts to die down a bit, but that's great.

But in the end, these models, this technology, it is a new paradigm. It changes the game a lot. For example, internally. But when we think about, you know, we want to build more capabilities, let's say we want to build a sentiment classifier, which I know those hates, it's just a one big false positive, right?

But you want to build these different use cases in the past, you kind of do research, you look at which models are best for this, you study them, you build them, you test that at all. Maybe now you get good enough results as using an LLM, but just kind of prompting it and fine tuning into this specific use case. So it's a speed. up things a lot.

Actually, and sentiment classified, this is an awesome topic, right? Because again, in the old traditional world where we had sentiment classified, this was super narrow. I wanted to understand, is it positive or negative? So what?

What can you do with it? Now the LLMs actually, and we see this in clinical research now where people testing LLMs as a doctor's voice, the LLM is showing empathy and reacting. So when you trigger an LLM for the generic one, like if I come to you, Richard, and I scream at you, right? You told me the funny story that the machine would then answer, but we all try to do our job here.

Please don't scream at me, and in reality, it's a computer generated answer. But LLMs have the ability not to measure the LLMs, but they can measure the LLMs. So what can you do with it? And I think that's a really positive or negative.

No, they have the ability to act in a way which we understand as empathy. So actually, I don't like sentiment analysis because it is zero or one, and it's completely not useful very often. But for LLMs who kind of have this more nuanced way of interacting, it makes actually a lot of sense. Yeah.

And I think right now, the exciting part is that the vision we had in the beginning or have is, and kind of the things we wanted to do back then, but it was very difficult to do, now start to become much easier. And we can kind of, it's almost, you can see it, right? And even in our space, I think in the beginning, even like all of our partners that try, you know, there was a bit like hesitation around AI, but even investors, although there was a lot of investment back then, but suddenly it kind of flipped the switch and said, oh, this is happening. Like now we can see that it's going to happen.

And that's why it's nice to be in this position because we've been building this product for six years, right? And again, why not? Just to plug in JetGPT, it's not just have a, like a conversation model that you just unleash it with your customers and hope that it does the work. I think that actual product you have to build on top of it.

How do you plug this to the different systems? How can you actually command it? How can you analyze the data? There are a lot of value just in the data itself.

Companies want to do QA, company want to do, there's a lot of stuff that they want to actually do and control the model. So that's kind of where the value comes in. It's almost like those transformers. Why don't, why won't I just take a transformer and plug it into my support?

It's classified. Okay. Yeah, you can, but that's, again, it's a lower level where you operate versus where the user actually needs to be. I like this.

This is like so important. It's not about the model. And you said this earlier, earlier, so neatly, you said we test our different models. And because we test our different models, we become agnostic later on to the model.

The model is not the value. It is the UX as we discussed. And the other thing, which you now said, which the whole world get excited about, and just when I talked about in our last podcast about this is connecting those models to different use cases, meaning your ability to connect into the actual systems of your customers and get the right information for those models to act on. That is an extremely high value for the customer as for you and the, which LLM you use, OpenAI, Lama, whatsoever, is becomes for you a secondary effort.

It is UX and it's a connectivity. These are the two main value drivers. I love that. That's exactly, that's exactly the case.

So we do see now, again, I think it's one of these things that we're overestimating the impacts like in the next six months or 12 months, but I don't know, maybe this game don't underestimating, but at least the value that comes in from two to five to 10 years from now, it's going to be massive, right? So I think this is the exciting part here. And our problem, we can have a hundred different use cases where it's just thinking like, what is the chess you want to play in the space in terms of what are the first things you do? Do you build your own models?

How do you manage them, et cetera, et cetera. So I think this is kind of the great thing that it's almost like you have abundance of value you can create, but you just can't do everything at once. And now it's about the strategy, how you go forward. But we do, again, like it's just, you keep grinding, you keep grinding, there's waves, they come and go, but it just feels very validating now.

And I think it's a great thing to do. And I think it's a great little Christmas gift that came in a very, let's say difficult times economically, the whole world. And now everybody's excited. And now you're kind of in the middle of the storm, but yeah, it's going to be a wild ride.

Perfect closing words, Datoz. Thank you so much. We went way over time, your precious time. So thank you for taking the time, all the insights.

Thank you so much. Bye. Bye-bye.
