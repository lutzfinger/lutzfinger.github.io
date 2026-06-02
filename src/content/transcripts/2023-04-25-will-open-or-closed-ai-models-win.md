---
title: "Will open or closed AI models win?"
date: "2023-04-25"
kind: "podcast"
show: "The Edge"
showId: "the-edge"
sourceUrl: "https://content.rss.com/episodes/204999/923736/lutzandjasper/2023_04_25_08_29_16_0b35cf0d-fdf2-4ed5-a2bf-6d4163be3e6e.mp3"
---

There will be more open source coming up and there will be an emerging leader and they will dwarf all the others. There will be an ecosystem around that similar as we saw in image generation. Good morning, Lutz. How's your coffee?

Good morning. Coffee is good. Great. And a lot of things have happened already.

Yeah, I think I already had a couple of coffees just to keep up with the pace. But the last week was very busy in AI and we thought we should maybe recap this time on what has happened. Every time I drink a new coffee, there will be a new LLM. Since so much is happening, we should really be brave here and predict the future a little bit, right?

Oh, yes, let's do it. Predicting the future. Predictions are hard, especially about the future. Cool.

So, yeah, let's talk about what's new. It's a lot. So let's highlight. Last week, we saw Stable Diffusion bringing out their own LLM and we kind of thought that this would be happening.

We were waiting for it, right? Yeah. Stable Diffusion is the company which essentially offered the open source model for image generation. We talked about this last week, right?

In terms of if you think about generative AI, it's an interface, but there has two different areas. One is generating images and the other one has generating text. So Stable Diffusion. Stable Diffusion dethroned essentially the magic of OpenAI, I would say, on the image side, because now Stable Diffusion is pretty much the standard in image generation and it's not DALI anymore.

And we were waiting for the text to happen and that happened. Hopefully, now I can tell it to remove some stuff in the graphics and change the graphics and not just see alterations of the picture like a million times until I find the right one. But I guess that's a different use case. But it's big, right?

We're talking here 1.5 trillion tokens. It's a 7B model, right? So it is big that this is an announcement. Now, it's early on.

My good friend Guido tested it and he kind of like said, I looked at it, like he's just posted all the things they got wrong, distance between Paris and the moon, like 45 miles. So it's not check-trained. It's just a base model. But the very fact that it's open source is actually pretty amazing.

It is, however, not under Apache license. So you can use... What does it mean? Well, essentially, the license they're using, if you do changes to the model, it's a Creative Commons.

So the stable large language model is under Creative Commons license 4.0. Essentially, it allows modifications and allows redistribution. However, if you do modifications, you actually have to publish those under the same license, which might be turning off a few, right? Now, we saw the meta model was very hard.

So we had to do a lot of work to actually commercialize, right? And I don't think that this is changing anytime soon. But everybody is trying to move fast. And now even so fast that even now, Mr.

Musk found a use for his x.ai domain. Finally, I still don't know what it really does, but I think he just published something, right? Well, with Musk, you never know what he really does. He is a meme generator, right?

So he found this amazing x.ai. And now he says, oh, I want to do an LLM as well. And shortly after he said, LLM is going to kill all of us and it's going to be terrible. And we should pull on the brakes because I'm actually just investing in x.ai because truth, truth.

AI is his new thing. Yeah. What is more relevant is probably that AWS as a kind of open model. I think that's a very interesting one.

Yes, absolutely. It looks like a little bit more like the OpenAI service Azure. Yeah. Not surprising.

But it's not open source if I got it right. You still have to use it with AWS. You can't get into all the details for fine tuning and everything. Oh, it's actually in a connector.

It is like it puts all the different services together. So it is the end for any startup who kind of like dreamt about doing private cloud service for bring your own data. We train your own model in a secure setting. It's very much expected that Google will have something soon.

I bet. I don't know. Obviously that those three different like big cloud providers are offering a service to train, to bring it in, to connect, maybe to have a app store, something like that. But then I think, so these were a few things we saw and we would expect something like that to happen.

I mean, we saw Dolly from Databricks coming up. People want to try at least the large platforms that every application when it comes to LLM and obviously also vision or AI image generation happens on that platform more. And they want to ensure that this is the case and not that they use a different one. So apparently a lot has happened this week.

This was just a summary, but we can very likely do this every week. And because everybody's talking about larger models, more parameters. We came from, I think BERT has kind of 300 million, then 2 billion for GPT-2. And now we're at 1 trillion for GPT-4.

But is that really the challenge? Just scaling these models in terms of parameters? The parameters are very, very important. So all the new and interesting models, there are a lot of models out there.

NLP is a thing which exists like natural language processing. It's a thing which exists for once in a while. But only the modern transformer architecture. Actually has changed the game.

And a huge part of this change is actually what we call attention modeling. Because how do you keep information? So the listener might now remember that you said every week there will be more models coming out. You just said it a second ago.

And you as a listener, you kept that information in the background of your mind. And that is because you have an attention span. And we didn't have computers with attention span. So the model.

Models with tokens give us a longer and longer attention span. If I'm like. The question I always get then is, but why are they not saving it somewhere? This kind of information.

Why is the attention span not infinite with all the data storage we have out there? This is an interesting one because we tried this in the past, right? We had first neural networks, zero attention span. And then we did recurring networks where we kind of had an attention span of one.

Yeah. And then we did LSTMs where we kind of said, actually, this is exactly it. We save it and we make a prediction how much we need to save. Right.

But we cannot save everything and then run over everything again. If I'm, and this is what I tell my students normally. I was born and brought up in Germany. I have a master's degree from the Technical University of Berlin.

And I speak fluent. German? German. Absolutely.

Now, you remember the word German. German. And you remember the word German. So you don't remember anything in between.

And whether it's a master's degree or bachelor's degree or who cares, right? This is not so important anymore. Or whether I used half or like a did in between, you probably skip this word totally. So we as humans, we put an attention to each of those words and keep them into our short memory.

And the LSTM is actually short-term, long-term memory. Problem was it didn't scale. A problem was it didn't work. So now with transformers, the big thing to change is that we have an attention modeling and those we have on tokens.

And this comes down to now what we see in the market. Every time there's a new announcement, there is a new announcement on a bigger token number. And essentially, it's a context window. The more tokens you have, the token length influences how well the model understands the context and how well the token length influences the context.

And so, yeah, I think that's a big thing to change. And how well, like how far it can go backwards. You don't want to have it too short. You don't want to have it too long.

Same thing about understanding text. Same thing, how if you generate text, if you understand text, token length is important. I think the simple question then is, is it input? So how much I can input as text, or is it also the output, how much the model can create as text?

Or is it both? It's both. It's both. So it goes even further.

It's like, how much can you transfer learning? Transfer learning is a big thing. I published this article recently about saying it's actually the data underlying, right? So transfer learning comes very much down to how do I use the knowledge in the model with data sets I have?

And also their token length is important. So token length is similar to computer chips. It's an important piece to look at. And however, similar to computer chips, having more lags on a computer chip, having more bits on a computer chip, not necessarily makes your business case.

Yeah, but it's not limited by physics, I guess, at least from the fact that computer chips get smaller and smaller and smaller. But here- It is, Okay. So we are talking about a finite state machine, right? So large language models, and you see this over and over again.

By the way, the more tokens, the more trainings material you need, right? Like in order to keep it. So the more tokens, the more complex it is. And you know this from humans, right?

Also humans have certain limited attention span, some more than others, I would say. Maybe, yeah. Maybe, right? Not that we know.

So it's still a finite thing. Now there is diminishing returns at some point in time, depending on your token length. That's a limitation. It's not just about scaling the understanding or the memory of the model in that sense.

That's not so easy to do, which, also transfers kind of into the use cases I can throw those things at. Because right now everybody is throwing it at every kind of use case. We see an explosion of tooling and also startups, obviously. Do we already see limitation in increasing token capacity?

Not really, because when you go and check in with your startups, it is, the industry is very much like, wow, how cool is it? I have a language understanding. How cool is it? This interface actually can talk to me.

Like a human, right? So that is the excitement. And if we have a longer token length, it just becomes more expensive. And it's the thing which people hunt to.

But let's ask large language model to do a complex math problem. It goes up. Last week I talked about it, how to do a summarization of a non-existing website. It goes up.

Or think about what happened to this guy from the New York Times, where suddenly the model tries to blackmail him because it just picks up a certain idea which the model wants to follow through. So token length in itself is not the savior of it. It makes models more powerful. But the question is, what are we actually going to do?

So what we see in the world now is very much that we combining a large language model together with something else, like for example, and we can talk about this later on, the langchain, to actually do things. And this is what OpenAI went out and said, I do the plugins. But again, they're not the only ones. Now we see every week a lot of new plugin stores or plugin abilities.

One of the predictions will be plugin stores will become a huge thing. And the question is, who will dominate the market? And I think we also spoke about it, but maybe just to highlight here, not for every application you need an LLM, right? Sometimes you have very clear rules.

And then... And you can use those rules. You can also use decision trees. You can, for mathematical challenges, there's a lot of statistics and math solutions that you can use.

And as you highlighted, the LLM might not even be the right choice there. It's a funny thing. When I talk to companies and they pitch me ideas and come to me and tell me things, right? Then you can tell who knows their stuff and who doesn't.

If they throw LLM on everything, it's like, hmm. You probably don't understand technology, right? Yeah. We're getting a bit off here to our topic, but I think just to highlight now, I mean, there are limitations.

And I think this is a good leeway into the next one. We see challenges, right? I mean, you spoke about GPUs or hardware, this being very, very expensive. Last time we touched upon proprietary data.

I mean, still, if you don't have the data, what shall the model do? I can't answer it because it doesn't know. It simply doesn't know. What else do we see as limitations at the moment?

I think the main one is GPU response times. LLMs take a long time. So you see actually now all the companies trying to iterate around. There was yesterday, I recall another announcement on it, which was actually pretty neat of kind of saying, how can we do this in a one iteration answer, right?

We still have the unresolved areas of making sure that the LLM is actually linking to the right, correct information, that it doesn't come up. Right. So we can't do it with stupid ideas that it doesn't go off. Yeah, because we can't control this essentially, still not.

Well, you can actually, if you talk to the LLM, and by the way, this is the same thing with you need all the criticism who has been done now on stable LLM kind of saying, hey, use me as a chat bot. Say I'm the user and you are the AI. Well, if you train those, now you can train LLMs. I'm saying, dear LLM, you are only allowed to use information, which I give to you now.

Many people kind of trying to develop prompts to stay very much course. Mm hmm. And then I think we still have this question of is it open or closed models? Who is the winner here?

So where do I when I build my startup, when I figure out which part of my product should be proprietary, which part should be with Microsoft or Amazon? I still don't know. Right. Well, yeah, totally.

That's an amazing part. Now, I would say if the industry goes the same way, as we saw it with stable diffusion image generation, then we will have an open source solution. And around that open source solution, we will have an ecosystem. And you and I, we joked why I would have not invested in open AI.

And it seems stupid, ridiculous party pooper like that. I didn't want to invest in open AI. And I was like, well, everybody is in hype at the moment. But what is their business model except getting money from daddy Microsoft?

Right. If you look at what they are doing and what the new development we just spoke about, everybody said this is why they will be having a great business model. And now you see all these commoditization open models coming out, people giving free models. So, yeah, it's kind of a question.

But then it is 100% the time of all the startup founders, because now we can go out, we say we have a platform, we have an idea how we can this interface, as we discussed last time. Yeah. Yeah. We can use language as an input, can have language as an output.

Where is the use case? Where are the good use cases to make sure that it works? So it's not so much about the tokens. And by the way, similar to the chip industry, nobody cares anymore so much about how many bits the computer has.

They care about the applications. Yeah. So when we think about, or let's imagine, and I think there are already some proof points, how these elements work. Like the application of LLMs will develop over time.

It's really how you interact with this model, how you use the model. We called it the AI or the AI interface moment or something like the mobile moment that we see. So what's kind of the interface with these external system that you might have? Or cases, FixieAI, I think we mentioned it's a Redpoint finance company that helps with automation by applying large language models.

Sequoia, they say. Valuedland chain now with $200 million. So there is something, maybe the next big thing, already a couple weeks later. And what are your thoughts there?

What's kind of the development of all the LLMs now? I mentioned this early on. We are with Bedrock. Bedrock is creating the ability to connect different services into Amazon Cloud.

We saw it in Azure. I suggested that we will see something in Google. The question is, how do we... bring the LLM into a productive environment.

So now we need to fine-train the model with data, we need to connect it into our systems, we need to have an interface, and we need to give more services to it. So at the moment, we all know we can make an LLM goof up if you just ask them a few complicated math questions. But I can make Jasper goof up if I ask them just strongly enough math questions, right? So however, Jasper will be actually pretty good if I give him a calculator.

So I need to give LLMs a calculator. So what we see is how do I make an LLM actually being able to interact with those worlds? We talked last time about it, that it's the human and the computer together, which will be strong. Same discussion here.

Now we have LLMs, it's just an interface. How do I do this? There are many approaches. We talked earlier, one approach, is the plugins from OpenAI.

Again, a closed shop situation. Then we have the open source community not waiting, and they came around with long chain. Pretty amazing, because now you can actually tell the LLM, break down your question, break down what you have heard into steps. For those steps, I give you now plugs to actually look for.

If it's a math question, I give you the calculator. If it's a knowledge question, I give you the calculator. If it's an ordering question, I give you your favorite food ordering service, whatever this is. Now we have seen this before.

This is called If-Then-Then-That or like Rule engine. Rule engine, whatever. I normally don't like rules because humans have complicated rules, but here it actually allows the computer to decide which part of an ecosystem of tools they actually need to tap into. That's pretty cool.

This is called If Then Then That or like Rule Engine, whatever. And I normally don't like rules because humans have complicated rules. But here it actually allows the computer to decide which part of an ecosystem of tools they actually need to tap into. And that's pretty cool.

But it's still, if you look at it, I mean, you said, yes, this is a closed system that OpenAI is giving us. But they also want to give us some kind of security, I guess. Say this really works. Now, Langchain is an open source community.

So I don't know if it's working as a corporate user, as somebody who wants to put this into production. However, it also creates a lot of creativity, I guess. And now finally, people can play with the models and try out things. So I guess we all have to observe this community, what they are building.

And then there will be business cases coming out of it. Or do you actually see this open source as a core? Core that will remain in the future? I think the open source will remain as a core.

So the security discussion. Yes, if you install a Linux server, open source, right, then you have a security topic. And there will be companies mainly focusing on LLM ops and trying to make security better. You see them already coming up.

Now, only because it's closed, it doesn't mean it's secure. The moment closed only means you have limited access. I applied for access. With my canal account, I didn't get it.

Please give Lutz access now. Yes, access. Me, At least I think it shows that the community is asking for it. People want to use it and they want to try out things and it seems to be a good one.

But it comes down to, it just doesn't help to be good at talking. Yeah. You need actually to have content to be good at talking. So LLMs are good at talking.

The consultants. But we don't want to talk about them without knowledge. I mean, we all know what we think about them. So give them knowledge and it will be amazing.

And although Lutz lives in the Silicon Valley and I live in Berlin and we don't like rules, I think here it really makes sense. So we give the LLMs a little bit more rules so that the output is even better. Yeah, I wouldn't actually call them rules. I would call them structural plugins.

I think plugins is actually pretty cool because the LLM decides at what point in time it would use what type of tools. Cool. So we're coming to an end, but we don't want to end like this. We would love to give you some predictions that we made up, and they probably will be different next week, maybe at least in a month time.

But we would put them into writing and please challenge us on those. Lutz, what do you think? It can only go wrong. Lutz, what's your first one?

At the moment, OpenAI and ChefGPT is still number one. And I think in the next 12 months, we will not only see an emergence of an open source LLM or like stable language model, but there will be more open source coming up and there will be an emerging leader and they will dwarf all the others. There will be an ecosystem around that similar as we saw in image generation. Yeah, I'm a bit boring and I think I'm stealing this.

I think we will see app stores because Amazon, Google, Microsoft, they all have their own models. They have the capacity to train and maintain them. But they need use cases. They need to earn more money.

And as we said, there's a lot of commoditization happening. So it's about the application and people want security. They want like kind of a rule set in SDK to build products around it. So it will be app stores coming up, platforms.

They are platform players. They know how to play this. So yeah, I think this is what will happen. Next 12 months.

I'm going to continue to be boring because we had this last time, but text will be the new hype and the new interface. And with that, I actually think that the chat version of open AI large language model, not the fully integrated large language model, but the chat version of that will become a new consumer product because it's very easy interface and people love it and people will act on it. So watch out, Google. What's happening here?

Yeah. And I don't think it's boring, by the way, because it's voice as well, right? It's I can speak English and it answers in Spanish or understand Spanish. We saw Zalando, our friends from Zalando just released a chat GPT interface.

So you can buy shoes now by talking to it. Let's see how that works. But yeah, try it. Okay.

Yeah. Talking about voice, I think Siri and Alexa will find it useful. I mean, honestly, most was very simple input so far. Very simple actions.

But thanks to the large language models, this can be much more complex. We spoke about the token, the attention span there. So we just have to wait probably for new releases. Fortunately, it doesn't feel like this is a startup game because there are already some people in place.

But yeah, voice input will be useful. Totally. And I think if we are talking about input and voice input, then yet another one would be for me. I actually believe that because we have this input possibility, we will actually see an emergence of a new high level coding language.

I don't think that we will completely move. Away from coding to human text. This is still not good enough. Humans don't are not precise enough.

But I think there will be in the next 12 months, there will be an emergence of this mixed new language approach towards programming, towards image generation. And we see certain things happening already that you use a better prompt that you ask your language model to do the prompt for your image generation. But we see as well. Use language to get SQL queries and this will become more structured.

So there will be a new emergence. We saw language models talking to each other, creating a type of language. We see tokenization into data stores talking about language. So my prediction is there will be the whole self-attention networks will create a new language model for at least one area.

And if you talk about. Programming computer science, there's always a DevOps involved. The stuff that is tedious and tough. And I think, yeah, we have to tame the beast as well.

So LLM ops or ML ops. We had that also in the past for fine tuning and other things will just become a part of a category. It will be a job description. As we know in these, in this tooling area, it's always tough to build a company, a startup at least, because yeah, the question is Amazon, what will happen on that, on, on the AWS platform, but still, this is very, very important and yeah, would love to see something happening there.

Also startups building more. Totally. Because I actually think the, the big guys, they have very mainstream use cases. And I think on language model ops, there are way more fine grained niche areas and it will be interesting to see who's coming up there.

The next prediction here, what is Amazon for the server space is we all, everything needs to be powered, right? And video. It's definitely. At the moment making the right moves here.

They are having the right hardware. They're having the right way of programming the hardware. They are combined hardware and software company by now, I would say. Yeah.

But we will see specialized use cases come up and I think there will be more and more on the hardware sector. Fast followers who try to do specialized cases, which are cheaper and faster and operate on your large language models and do the operations. As we said, one of the problems is speed and cost. Yeah.

And we will see new companies coming up there. And talking about that, I hope the rumor that Sequoia wrote down that Graphcore investment zero is wrong because that was an amazing hardware case from Europe, but we see more of those companies coming up from the Netherlands. We just saw a few, so let's see. Yeah, I think talking about challenging the big guys, if you think about what made TikTok strong and also Spotify, and there's a lot of machine learning involved, they can now be challenged in various areas, right?

It's not just the recommendation, but how you create music, how you analyze music, what you build out of music, how you repurpose music. We saw this Drake and The Weeknd fake music. Amazing. I hate autotune, sorry.

But yeah, I think they're up for a challenge. They probably know this, but this is the time. Just to say why I'm totally in line with you here, Jesper. It used to be that we had our music taste or story taste put together in a magazine or put together on an LP, everything bundled, right?

And then we had the great unbundling, and then we had the great interface. So now my music taste or my story taste was defined by my friends. And then it became my friends plus the feed. And suddenly Facebook told me what I should look at from my friends.

And it was the Kardashians, right? So now it wasn't my friends anymore. It was those influencers because they were easier to put into your feed. And then TikTok came around and said, I don't need your friends.

I don't need Kardashians. I just do everything in a machine learning approach. And now why do I actually need anybody to create anything? Because if I know what you want, and we saw this was, replica if you want a friend get an ai like earlier and you said if you need a friend get a dog and now it's get a get an ai and they will do it for you i think we should really interview someone from spotify about that let me try like they have actually a challenge in my view spotify's big thing is getting good contracts with labels and i believe what do you need labels if you can generate the music somebody wants listening to well okay there is an emotional attachment there's a marketing thing all of this we still need to figure out but like spotify's business model is counted maybe we do an episode so you're next you're avoiding your next uh prediction oh oh i just got to her like yeah um like i just hyped it up and now i'm saying i actually believe the concerns worries hype about agi is a thing that that kind of will die down i'm in i think there is a lot of fair commentary on what are the unintended consequences right unintended consequences from having social networks where suddenly we had impact on democracy we had other things those were unintended we will see unintended consequences from this new technology and we need to figure out how to deal with it but there is a lot of completely ridiculous hype around agi is going to happen artificial general intelligence i don't see this and it will die down and then maybe supporting this it's not just about the general intelligence i also think there will be a lot of hype now about use cases what can finally be done with ai computer vision in industrial cases all these kind of things but we spoke about it and the hype will happen the startups will happen which is great we like to invest in those but many many will fail because the application the output the actually integration in the use case um how you how you change behavior of people because what the ai is doing is that participants how you change behavior of people because what the AI is doing, this will be a challenge.

And that's why we will see a lot of new startups, but a high death rate as well, because the challenge is to understand what the AI can help and where it can help not. Now, the big question, Jasper, is are we overhyping it? And will we see another AI winter? What do you think?

I don't think we see another AI winter because we've seen companies at scale working with AI being very successful. But I think still it's about trial and error, which is great. That's why we love this kind of business. And we will talk about more of those cases.

So we're trying to help you guys out there to pick the right model, to pick the right application. Please give us feedback. Thank you very much for listening. Yeah, yeah.

Thank you.
