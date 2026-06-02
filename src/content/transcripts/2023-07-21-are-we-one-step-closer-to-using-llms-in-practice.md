---
title: "Are we one step closer to using LLMs in practice?"
date: "2023-07-21"
kind: "podcast"
show: "The Edge"
showId: "the-edge"
sourceUrl: "https://content.rss.com/episodes/204999/1047097/lutzandjasper/2023_07_21_10_32_51_23970de7-c922-46c3-9622-80f5faf78826.mp3"
---

Hello and welcome yet to another episode of Lutz & Jasper. We are here, beautiful morning in San Francisco and beautiful afternoon in Berlin. Today we're talking about rugs. It's a relatively technical topic.

Essentially a rug is a combination of vector search plus large language model. We go into the technical details of what is vector search compared to simple search. We go into the details of why large language model is just an interface. We show that this might be a solution for models.

And we show that this is absolutely needed for enterprise search to be used. And we discuss the challenges which are still out there. And there are, because of those challenges, we have space for a lot of niche applications. As well as we will discuss the investment in contextual AI.

So join us for another episode. Now let's kick off. Yes, rugs. Essentially we come always back to the same topic.

Large language models, as much hype as there are, they are just nice interface. And just isn't quotes. Because or cursive or italic or however you want to say. Because it's huge that we have now an interface which any human can use.

So if we start talking to text, documents, databases, we have the problem that the answer might not be 100% correct. We have this encoding, right? You, the listeners who saw my LinkedIn post and reacted to it, if you actually can easily ask a database now and you can use open AI or chat GPT with an interpreter. And that code gets actually generated, tested before it is then executed.

So because it might not be right in the beginning. Now for the code interpreter, it's easy because there is an error if it's not right. But what is happening if we are retrieving some language, human code, text, and that is wrong. That's what we call hallucination.

What are we doing then? Yeah. And I think. One other example is it's also not up to date.

So if you would ask the model who won Wimbledon Women's Championship for today's data, you could get an answer because we know the women's winner for the men's. You don't know because they play tomorrow after our recording, but the model would still give you an answer there. Right? So you need to make sure that the data is accurate, correct, up to date.

And this is not easy to do. I wanted to tap on that kind of challenge because we spoke about it before. You might. You could probably solve this with an LLM if you retrain it every day with new data.

But what happens then? Very often in machine learning, and this is part of machine learning, right, is you have many ways to do one thing. It's similar to working with wood. You can use a chainsaw or you can use a pickaxe.

All of those devices somehow cut, but they are different. And if you want to look who has won some tennis championships. How about you search for it? And an LLM is an interface, as I said, a retrieval interface, and it's not a search.

There are other tools which we can use for search, right? And the easiest tool is you take text, you tokenize text, meaning each word becomes a token. And now you count the tokens and then you make a map and say, you wanted Wimbledon. So how often does the word Wimbledon come up in the text?

So let's find a document which has a hundred words. Right? So there's a high count looking exactly for the word match. And then the next evolution was like, yeah, but what if I didn't say Wimbledon, but I wanted to say tennis.

And then if you don't have the exact word matches, you actually start to do vector representations. And I like that you want to tap into this a bit deeper. We spoke about vectorization. We spoke about Pinecone, VVA vector databases receiving a lot of funding.

So it's probably interesting just to do a little bit of deep dive. Totally. Now I could say. Like you picture a tree.

Now we have a tree. If I write the word tree, you're saying this is a tree. But what if I say the word of a tree, right? The birch, pine tree, right?

And I don't use like pine. You in your mind, you know that this is a tree. Now let's sketch out for a moment, two dimensional space where you're saying plants on the bottom and I'm not on the top. I need to change my arm movements.

And on the right is comic. And on the left is real images, for example. Right. And I'm doing this for images.

Text is the same thing. You can imagine it for images better. Now, if I give you a tree, you know, okay. Tree is a plant goes to the right basket.

And depending on whether it's a picture or a comic, it goes to the right or to the left. Now you start being able to sort it. If I tell you I'm looking for a tree. In comic style, you go to the right corner of your two dimensional space in this case and start retrieving everything which is out there, which might be a time, a birch and whatever.

Right. So that is called vectorization. You actually created a space in case of two dimensional, the real spaces are way more dimensional. So we can make as many dimensions as we can count and you put everything in there which belongs here.

So when you take a dot virtual. Document and in this word document, you talk about the tree or you wanted to talk about Wimbledon. Then we say, okay, Wimbledon. What does Wimbledon stand for?

Oh, Wimbledon stands for. Let me place this in the corner of tennis as well stands for a city in the UK. So yes, put it into different corners. But at the end of the day, if I get it right, this vectorization also means I make it readable, understandable, comprehensible for.

The model by putting this into numbers. It helps us to not have to work directly with search terms. I built my company Fisher analytics long time ago. And one of the big things which we did is we used a vector approach.

Elastic search in this case, by now it's old news, but we married elastic search together with SQL. Rags are very similar because you marry now. SQL. As a retrieval language, the large language models is a retrieval effort.

And you're Marius was a vectorial search, which is super excited. Let me explain why. If you look for Wimbledon, but you didn't type Wimbledon, but you type tennis, then the vector search goes into the right corner and finds there. Oh, tennis close to tennis is Wimbledon.

Let me read back Wimbledon as well. So that is the way you do vector search. Note that vector search is what we call a non parametric search, meaning there is no parameters involved. You just define places in a dimensional space where you keep your information and then you go to that space and you look around and you take everything you can find and bring it back.

Yeah. And I guess when for the listeners, if you use a search function somewhere, just put in something you're searching for and you didn't type it just exactly as it should be written and you don't get any results, then this is not in place. Although. It should be because everybody could do it nowadays.

So you should probably write an email to the company and say, honestly, guys, what about vector search, elastic search? You can't change the LLM all the time. That's what we learned. It's way too expensive.

So you have to attach something to the model. Let's call it like that to make the prompt that I'm ingesting or asking. I'm actually asking the model something to make it better. Life is like a box off.

Prelude. Wow. Very good. Okay.

Not chocolate. In this case, because you trained your model with something else. Now, how do I convince you, Jasper, to use a different word than chocolate? Because you say, well, it's like very traditional.

People talk about life is like a box of chocolate. This is what all my language model tells me. But I have new information and that new information has precedent or is more important. And therefore I should use that piece in the new structure.

And that's essentially what we are trying to do. We are using the large language model to create the language understanding, to create a latent image, to put it somewhere in a space where we're saying, this is the question. I think that's a bit too complicated, right? Well, the word latent image is the latent representation is actually what deep learning is all about.

Unfortunately, we have text which we humans somehow understand. So the large language model creates from that text. A latent representation. A latent representation.

Yeah. And then so far, large language models would then take this and do from that an answer to the question. No other additional information. What they do now is they take the latent representation, go into the vectorial space, which I described, grab information they see, which is additional information.

And that information says, pralines are now the new thing. It's not chocolate anymore. And therefore they're saying, okay, well, I think. Normally life is like a box of chocolate.

But in this case, we're talking so much about the new marketing slogan from Jasper's new company about pralines. Therefore, I grab the word and the answer is pralines. So the language model takes information from a vectorial space and adds it to the answer and then does the same thing what language models are good at, converts this back into a complete sentence and tells you. And the good thing is, if I understand that.

Right. I'm a corporate or smaller company. I can just again, I can just attach this to a large language model of my choice and I make this better. So my, I can use my own data and I can make sure that large language model, whatever it does in search, whatever it does in my prompting, it would focus on my data.

Is that right? Well, no. And this is where we need startups. So as the.

The initial idea came all about to saying we use large language model just as an interface. And then we are using the vectorial search, non-parametric search to look up the right information. And then we use a large language model again to distill that piece of right information back. That in theory would tell us, oh, there is no hallucination because it always uses the right information.

Yeah. I did the following thing. I asked the uploaded data about. Healthcare data.

And then I had them ask the question to the data. Now the model would answer me with the right code by tapping into that data source, running it, right code, but as well would add on information. I asked like, what is the most statistical important variable? And they would say, okay, this is how you calculate statistical importance.

Have a T test. You have an F test, you have a P value. So it explained all of this. That information did not come from the database.

That information came from the corpus, the model that trained on. So the model in itself uses both sides, the train side, as well as the new side. The question is how much weight does it give to each side and how does it control that something is right or wrong? Yeah, because the big question is, I mean, just to remind everyone, there is a lot of input data in the context of LLMs, the whole internet.

And then I ask a question that maybe might be answered by. I just give one number 001% of the data found on the internet is probably even much less. So how does the model know it's exactly that and not something else, but this is where the RGs are supposed to help. They should even be possible to give me the source where they found this kind of information.

I think I read about kind of who's the president of the United States and then it says, yes, well, my data is from September 21. Remember the open AI issue there. But I found this new information on the website of the White House and the White House might be more right than the general internet. True.

But here is we had a lot of discussion in our society about what is right and what's wrong and meaning now the RG needs to take a decision about what's right. So I tried yesterday the following thing. I took open AI, checked GPT. I made a document describing myself as Captain America.

Yeah, I love that. I actually. I used to write a document about Captain America and then I just replaced Steve Rogers with Lutz Finger. So that's what I did.

I said, I'm Lutz Finger is Captain America. It's a very nice document. It's out in the open. It's public.

I published it and then I pointed to it and said, read this. And then I tried to get to actually saying that Lutz Finger is a superhero. But says, no, there is one document which you told me to read. And I think that's fake.

So then check GPT had understood that there is more information about Lutz Finger being a professor or a president and so on and so forth. Then this document. But guys, honestly, readers, look at me. I'm a typical superhero in a different metaverse.

Definitely. Anyhow, but chat GPT didn't want to go down that route. Yeah. And we discussed in the last episode that the human factor.

So there's a lot of quality control by humans. But this in this case, this wouldn't have been possible because no human would have had the time to read the Internet quickly or anything. So it must have been open AI in this kind of context. But there is a problem.

What if I'm really Steve Rogers in the next Marvel movie? What if this just got announced? Let's come down to business because we have a solution now to use the LLM as interface. As we always said, we have a solution to look up.

Data and like data in a vectorial space, which makes search pretty powerful. We do not yet have a very good solution to actually manage that difference. At what time do you actually want to be a Lutz be a real superhero? Because that's the right information.

Who is taking that decision? Is the LLM taking that decision or the rack taking the decision that I'm not a superhero? Or am I as enterprise want really to say? Let's should be a superhero.

So there needs to be some control and observability and we do not yet have that ability. So amazing startups to come will help to create this observability. We will solve as well access control, different story events, and we will actually see how to manage the difference between what the corpus was trained on and what our corporate data sets. To your point, we also saw this in cloud adoption.

Okay, now startups. So as I was just looting to we had, for example, data doc observability, you just mentioned it. We have the same issue here, right? There was cloud.

People didn't know what was going on. Same with security with Orca, all these kind of startups when cloud came up and probably something will happen here as well. We mentioned that we have a head around. There are many startups funded right now.

Just one example, just quickly contextual AI as a company, maybe the listeners want to check contextual AI. Okay. Okay. They came out of Hugging Face and other companies, so they want to address the issue of I want to control my model and then actually also on the cost side using smaller models.

Now we discussed this a little bit before Lutz and you weren't so convinced yet, but I think it's also because there's not just a lot of information, but still it sounds again we are in this discussion. Will this be a commodity or solved by the larger platforms? Or is there really? And that participants suggested that participants suggested that participants suggested that participants suggested that participants suggested that in the Microsoft Cloud are now becoming the core knowledge for your enterprise.

I give you a way to ensure that you have now a super smart person, super smart person, super smart tool, which is an LLM, which has read all the documents and know about which document they are supposed to talk to whom. Yeah. And now you can access all enterprise knowledge at the right moment. You don't even have to ask the question because when you ask something which is close to it without me using the right words in the vectorial stage, that's the reason why we do a vector search.

It comes, figures out the right document and gives you the feedback you need to have to take the right decision at the right moment with the right information from your company. Yeah. And that's actually pretty nice, right? Because I'm not just, it's kind of a faster search, but I'm still in power and can read the document.

It might even highlight the part in the document that might be relevant for my question. And then I can, I see the model answer, but the model said, hey, maybe you read it. And by the way, if the answer is wrong that I gave to you, please let me know so I could even be retrained. Thank you very much.

Therefore, for me, the investment, I think the use case makes perfect sense. The use case, absolutely. It's needed. What Rags are aiming to do is highly needed.

There are questions about how do I? Steer as we discussed, how do I find the balance between pre-trained and the actuality of a document? And, but this is all technical solvable. Yeah.

But who is best positioned to enter that space? These are the companies who already have today, all your enterprise documents, meaning it's the Googles and the Microsoft of this world. Yeah. But what you can still do, probably if you think about, I mean, now everybody starts talking about, hey, we need vertical AI.

And it's always the same, right? First comes the general application, then comes the infrastructure, then comes the tools. And now we're back to vertical applications. Still, Microsoft, there are, Microsoft offers products that have competitors because they don't have very specific solutions.

So it's always a bit more general. So you can, you could still build this probably in a case of, I don't know, blue color workers more on the production side, but that's then a product challenge rather than an AI. Yeah. Yeah.

I challenge or would you disagree? No, I actually agree because now you could look, we said rocks are awesome, but they don't completely stop hallucination. Rocks are awesome, but you have the difference in is let's a superhero or not. That is still an issue.

And now what we could see or what we will see is that we are overcoming this issue by more industry specific solutions where we. For example, we had this amazing interview with Tor from LegalOS. That's an industry specific solution, but he is doing exactly that. He using large language model as an interface and he uses, he talked about Pinecone, which is a vector database, which is exactly to do vector search.

He uses vector search on top of Pinecone using the LLM as an interface and then splitting out the answer with LLM as an interface. That's a rug. 100%. However, he knows that he has to give a high weighting to the document more than to the pre-training.

He knows that he has to have certain guardrails and access controls. As long as we have not solved them in a generalist approach, which would work for Microsoft and Google, there will be a lot of companies which can, and I mean, think about the typical applications. This could be a chatbot. That could be a translator.

That could be a documentation effort. It could be content creation. Write me a document. This could be question answering, and this could be even about business development tool.

Those specific niche applications will exist and it will thrive as long as we haven't solved the general problem. Yeah. And I also love, and maybe then we move more into questions you should ask yourself when you build something around it. I also love the documentation case.

Yes. There are already some companies around that. Yeah. You can imagine when it comes to code documentation to your example of Microsoft, obviously someone is active there, but just think of your corporation, even maybe smaller companies and what kind of documents you have, knowledge you have, and who's doing the documentation for that.

I hate documentation personally. I would love to have some tool that just tells me, Hey, ask me a question. I will at least guide you to a certain space and then you can read again and dive deeper, but you don't have to search and read everything. Now when I want to get an answer to the question, LLMs and now RACs, these guys are telling me I should use RACs.

Probably the first thing that jumps into my mind is why should I try it out? And we discussed it various times. If you don't think about AI applications in your company, somebody else, some competitor might do. So you might end up with a problem.

Yes. Still, this is a challenge. It's not easy. Yeah.

I would say. I think the question is what is your business all about? If your business has some form of knowledge retrieval, some form of access to knowledge, then you probably are using already today Elasticsearch. You probably already are looking up data.

Now that looking up data, that Elasticsearch user experience might be that you have an analyst team, types in SQL code. In order to generate then your Elasticsearch. And there is a translation layer built between the person who has the question, the business person, then the person who transforms it into Elasticsearch, searches the database, comes back. That translation layer can be replaced by an LLM.

If you have a very specific enterprise need on retrieving information from text, then RACs are your thing. Yeah. I would say even if your whole business is around clicking buttons, moving sliders, that's also, that's a way of inputting data, asking questions. It's just in a different form.

And even that could be done by AI as an interface and then a RAC. Because maybe you can ask even deeper questions. Right now you just have a few buttons, but if you just ask the personas working on SAP, on Oracle interfaces, maybe they want to ask deeper questions. We spoke about using MySQL.

I think that's a good example of how you can use MySQL through the AI as an interface for non-technical users. So all these kinds of things probably get around, you have people in your team that could ask deeper questions that want to use the knowledge in the company more that are frustrated by that. And every previous attempt around it was either too costly or too complex or would take too much time. The only question some people might ask them themselves is, do I have to give my proprietary data?

And if you do, how do I get my proprietary data to some LLM that then uses it and trains for it and some server somewhere outside of Europe? That's at least our issue here. But you can already do local solutions. I heard about many companies, just spoke to one last week that train their own LLMs locally.

It might be worthwhile for listeners as a summary. If you think about an LLM writing code, SQL code, that's not a rug. So if you use an LLM. To access your text document, then most likely it's a rug.

So how does it work? LLM for SQL code. The LLM is trained in languages as well as one language of the language like French, German, Italian, as well as one is SQL. So it understands it should write some code in SQL.

It writes the code and it might hallucinate and do bad code, but that code wouldn't execute. So what you do is you use the code, you write the code. You execute it. You figure out there's an error.

You feed it back and let it write again. Nothing visible to you at the end. The code is executable and nice as an end user. For a rug is who is the president of the United States?

The rug doesn't know, but it has a document where it can now look something up and saying, actually, let me look in the vector corner of your residence and grab the documents, which I find there and summarize them in a way so that you understand it. Then it's a rug. Yeah. But I would say still the one question might arise.

Do any technical people in my company, if I really want to build around this? Yes. You probably need much less technical people, much less people buy them in total than six, seven years ago. But it's still nothing that you could just do easily unless you probably work with a consultant and they're very good ones out there.

But yeah, I guess my recommendation at least would be have one persona in your company that understands what this thing is doing. Yeah. That's an interesting comment. I would say it depends on who you are, right?

If you are a company, like if you're a startup and you're looking for funding and you have just one persona, I would like saying, hmm. Yeah, at least one. I said at least one. Go on.

Yeah. All right. So that's the end. Thank you very much everyone for listening up to this point.

I would love to summarize a little bit. So what I enjoyed today discussing with Lutz is we discussed the next step of applying large language models in practice, so real applications. And it's all around how not just to tame them, to make them more efficient, create better outputs, build an application that is for your specific company, for your specific use case. We explained a little bit how that works technically.

Didn't get into much more detail. We can provide you much more links if you want to read this up. Just ask us that question. Ask us more questions if you want to dive deeper into other topics.

We're very happy to cover them. If you know anyone we should speak to as well, please intro us. And then obviously we're always happy to speak about your startup idea. Until the next episode, thank you very much, Lutz, for this and have a pleasant weekend.

Bye.
