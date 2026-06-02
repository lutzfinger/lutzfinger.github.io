---
title: "The synergy between LLMs and knowledge graphs"
date: "2023-08-24"
kind: "podcast"
show: "The Edge"
showId: "the-edge"
sourceUrl: "https://content.rss.com/episodes/204999/1088492/lutzandjasper/2023_08_24_11_53_02_d7ac6359-5244-45fb-bed5-a405ee7ecc63.mp3"
---

Welcome everybody to yet another episode of Lips and Jasper and all the stuff which we want to talk about large language models and AI. Now today we will be without Jasper because he is on vacation. However, we are joined by no one less than Mike Dillinger. I know Mike from my time at LinkedIn.

This is a pretty technical episode overall, but it's a very amazing one. We spent time on knowledge graphs. Mike's area of expertise are knowledge graphs. So we spent quite a while to dig into explaining what are knowledge graphs, how did this come about, what is LinkedIn doing with knowledge graphs, what is graph search.

So we talk a little bit of those areas. Stay with us because then, we switch gears and put knowledge graphs into relationship to LLMs. And if you have listened to our past episodes, you know that LLMs or large language models are by no means perfect. They are really good stuff in the industry at the moment.

And we see a lot of businesses using them, but they are not perfect. They hallucinate. They need guardrails. We talked about legal OS using guardrails.

They have sometimes missing data and therefore they come up with wrong answers. Or, they have the right data, but still, because the prompt was not done correctly, they retrieve wrong data or missing data in their answer. And then obviously, as we have with any model, we have training challenges as well as prompting for large language model has been a challenge. In all of those areas, knowledge graphs are helping to make large language models useful.

So this is very important for all the companies out there who are starting to experiment with large language models. However, it is as well early on because you probably get a lot of mileage out of just doing prompt engineering and rule-based guardrails. But the most important next step for you is to look into knowledge graphs. So I hope you enjoy this episode, even if it's a little bit technical.

And off we go. Hi, Mike. Hi. How are you doing today?

I'm doing totally fine. This is awesome. Where are you at the moment? I see you are in the world, but where in the world?

I'm at my home office in San Jose, California. Nice. The heart of Silicon Valley. We are close by, close to each other.

All right. We chatted a little bit about large language models. And how to square the idea of the knowledge graph with large language models. And I thought this was a very, very insightful discussion.

So given that we have this podcast, I thought it's awesome if we are redoing a piece of this and chat more about it. Tell me first, you start. Who are you? And why do you have a word to say about knowledge graphs?

Who are you? I'm a big fan of knowledge graphs. Knowledge graphs. Oh, goodness.

Now you got me by surprised. So who am I? I've been working on things related to knowledge graphs since I was an undergrad in college. This was during the first generation AI work where in fact things that were very similar to knowledge graphs were the center of attention.

I remember knowledge graphs being all the hype, right? And then we had those graphs actually this line to show how the graph looks like. Yeah. At that time we both worked at LinkedIn and it was a complete mess because the graphs were too big to actually, they looked like hairballs and completely useless.

Yeah. They were messier than that actually. So when I started, yeah, the key piece of my experience here is the time that you're alluding to at LinkedIn. So I started at LinkedIn helping to deploy machine translation and I was part of the localization team.

And then someone came along and said, hey, we have a problem. And then someone came along and said, hey, we have these taxonomy kinds of things going on and we're finding that they're very, very useful for machine learning. So can you come in and help us out? Yeah.

So I started with a team of one, a contractor. And our job was to look at the data that we have. I think we started first with titles and see if we can systemize that, systematize that better. Okay.

Can you give an example? At the time we had- Why would we, and I recall this effort very neatly, but why in the world would we want to systematize or structure titles? That's the word, structure them. So one key reason was at the time we had 150, more than 150 million unique job title strings.

Okay. If you're modeling 150 million strings, then you know you're in trouble. Got it. So then the question is, can we add to that list information about how they might be related?

So VP means vice president, means manager. I don't think so. Something like that. There you go.

Okay. So is vice president a role or is it a seniority? So it turns out the first thing we had to do was take out job titles and find what kinds of information are packed inside a job title. So sure, we have seniority kinds of things like senior software engineer or staff software engineer, or vice president might be understood as a seniority for a manager.

Okay. So that's one piece of information was seniority. Another piece of information was seniority. Another piece of information was employment status.

So is this a full-time gig? Is this a part-time gig? Are you a contractor? Are you a consultant?

What kind of employment status relationship do you have with the company where you work? And then the key ones were, what's the role and what kind of specialty are we talking about? Okay. So your role might be architect, but that could be a software architect or an information architect or a submarine architect.

So essentially you are creating facets. Exactly. Facets, on-job title, seniority, hierarchy, and function. Seniority, employment status, role, and specialization or specialty.

Okay. Four, sorry. Okay. So you can call it facets.

It's a kind of semantic decomposition of the title. And that allowed us to say, okay. So we have a job title. We have these four dimensions of titles.

How complete is a title? Cool. That gives us a really clear concept of completeness of titles or vagueness of titles. What kind of information is missing?

What kind of information do we have to guess at based on what the member gave us? Got it. Okay. So that already, just doing that gave us some new capabilities.

Got it. And then we went along and for each of those dimensions, we said, okay, can we create some sort of taxonomy or ontology? Or knowledge graph only for that dimension to see how the different values are interrelated. So for seniority, it's pretty straight.

Yes. The listener, what is a knowledge graph? So I understand, we understand titles. We have a lot of titles.

This is where you started digging in. And why do we need a knowledge graph? So many titles, each title conveys different information. What's a knowledge graph?

Knowledge graph. So I like the way I like to think of a knowledge graph is a collection of information. A knowledge graph is a collection of facts that are interconnected in a kind of network. So it's like a much smarter database that imitates human memory.

A key difference from regular databases is that instead of storing mostly labels or numbers, a knowledge graph will store facts in terms of concepts. So the things that you're relating aren't just labels or strings, they're concepts. So let's store senior software objects. So let's store software architect in a, let's store this in a knowledge graph.

How would you store that? So we decompose it and we say the senior part is part of the seniority facet or dimension. Okay. And we know that above that was at LinkedIn at least was staff, but in other places it was reversed.

Staff was the first and then senior was above that. So we can see that there are relations between that and that's an IC track seniority as opposed to a manager. So we have all these different facts that are interrelated in different ways. And how do you store them?

Is it like, it takes the staff seniority example. Do you make a rule to saying if at LinkedIn, then staff over seniority or how do you get this into a knowledge graph? Yeah. So rules are usually too fragile.

So we do models. Okay. And that relationship got stored as alternative ordering. Okay.

So we have junior, we know intern, we know these are orderings that are fixed, that are reliable. But we notice then that staff and senior depend on the company that you happen to be at. Got it. Just like program manager and product manager.

So a knowledge graph is the structure which contains information. Awesome. Get it. Concepts.

Concepts. We talked in one of the last episodes, we talked about vector storage or vector storage. Yes. Or vector databases, not storage.

Yep. Forget the storage. Vector search. Well, vector search and vector database.

Hot topic. Yes. Isn't knowledge graph a vector base? No.

Knowledge graph is the input to the vectors. So the vector database, each row in the vector database is an array of numerical values. Okay. The question you want to ask is where do those numbers come from?

So they can come from a transformer model, large language model kind of thing. You have to generate those embeddings, they're called, from something. And you can use knowledge graphs to guide that process, or you can generate them directly from the knowledge graphs themselves. So you could actually take a knowledge graph and saying, okay, I have all my, what is it, like, VPs, senior, all my people, seniority.

Yeah. And then you can use the whole, the minorities and so on, store. That there are four facets, that's all I mentioned. You defined that, right?

You defined that there are four. And then you take any given word and trying to structure it in a way that is linked together in a knowledge graph. That's right. So that you know software is connected to software architect or software engineering, right?

While architect itself- And to Java. And to Java, exactly. Right. So, but Java could be as well connected to coffee, because if you are the central Java authority as a title, then this piece of two, like a bit of two, a bean.

That's right. Yeah. That's the ambiguity problem, which was all over the place. Yes.

All over the place. Is a principal someone who works at a school or who works at a law firm? Yes. So, I think that's the point.

But the whole point is that you take all those words and put them in relationship to each other, based on your facets, and that creates the knowledge graph. We map the words, the string to a group of concepts, and then those concepts are mapped to other concepts to add additional structure. Got it. Which is different as we, like, as we describe this, like if we take, if we say animals and plants, and an elephant is an animal, so it goes into the animal corner, a tree is a plant, goes into the tree corner.

That's right. It's the same kind of, we create facets, dimensions, we order topics to it, and now we are connecting them. And that- It's very similar. So, what you're talking about is taxonomy work, which is a much simplified version of knowledge graph.

Yes. Perfect. Yeah. So, you focus on this one characteristic of what kind of thing is this?

Yes. So, I could say an elephant is a mammal, but then in a taxonomy, you have no way of saying that elephants chase leopards or something like that. Exactly. But you can't relate, you can't relate entities of different types in taxonomy.

Which means now you have the right corners. You have all mammals in one corner and all plants in the other corner, but you don't have a connection of like animals eat grass. Correct. Exactly.

Grass is in that corner. While leopards, same corner as the animal, eat pigs. Squirrels. Squirrels.

Yeah, whatever. Uh-huh. Exactly. Like a leopard.

Leopards and squirrels, actually, leopards do not eat squirrels because leopards and squirrels live in different areas. So, now you actually- Picking up a random example. Yes, but I know, but that actually would come up because in your knowledge graph, you have a lot of different things. Yes.

So, you can't relate to the animals. You can't relate to the animals. You can relate to the animals. gazelle.

A leopard probably is a gazelle. There you go. There's a good one. So then what you're saying there is we're building out.

So we started hundreds of years ago in biology using taxonomies, which worked well for a whole bunch of things, but they're not expressive enough to capture things like leopards eat gazelles or elephants eat bamboo. So we had to expand our vocabulary for knowledge representation. Yes. So a knowledge graph is a knowledge representation, uses words in a given taxonomy.

Taxonomies equals what we call facets early on or dimensions. However, we overlay that by bringing connections between those different entities of representation. So it's notes by leopard eats gazelle. Okay.

Now we have our knowledge graph. This is awesome. That's a knowledge graph. Why?

And where at LinkedIn did you use knowledge graphs beyond only the title representation? Because the title representation you could have done with a very simple taxonomy as well. We couldn't. The simple taxonomy simply didn't work.

Why is that? Okay. Well, one, because... Because VPs don't eat anything.

Well, so the vocabulary for describing VPs, for example, only by saying there are a number of VPs in a particular category. So we have a VPs that are a kind of manager that doesn't give us a lot of information when we're trying to decide whether a VP at a financial firm has the same responsibilities as a VP at a tech firm. And it turns out they don't. Yes.

Okay. So the taxonomy wasn't expressive enough to store the information that we wanted. The second part of it was, as we talked about before, we decomposed each of these title strings into parts. And the taxonomy couldn't tell us anything about the title strings.

So we had to think about relations between those parts. Got it. Okay. Understood.

Because VP at a bank could be just the entry level, while VP as a tech company is a top level, meaning you need to understand actually an additional information, which you then connect through a knowledge graph as much as you would connect eating as an additional information to it. That's right. You're eating and habitat. I am the president of...

I was the president of technology at Marpay. And I first had a chuckle as they wanted to call me president. I was like, wow, I didn't know that I can be president. You and Obama have the same responsibilities.

There you go. Exactly. But since we have a very clearly different information, entity information connected to us, Biden gets the White House connected and president and White House in that connection means something completely different than president. And very small Nasdaq company.

Right. So yes, totally, totally get it. You asked a second ago where else we use them. Well, they use them at LinkedIn.

We built knowledge graphs for all of the key entities of the economic graph. So we wanted to do things like companies, right? The economic graph identified key players in the economy, like institutions that hired candidates, institutions that trained candidates. Like universities, organizations that manufacture things, that sell things.

So we have all of these different entities that we needed to model in great detail. Got it. So we had knowledge graphs for each. Would use as well as a knowledge graph because now we have the White House, which is different from any other house.

And you would see this because it has a president attached to as well as other information. Totally, totally interesting concept. Exactly. Yeah.

So you actually take taxonomies and it is a super, is it okay to say it's a multi-dimensional taxonomy approach because you connect those texts actually supercharged, not only multi-dimensional and supercharged because you connect different taxonomies and that's what we call a knowledge graph. Yeah. So there's so much knowledge. I would say that we have to really have to focus on different pieces of it to get things done.

And taxonomies is one way of focusing to focus on single kind of relation and a single kind of relation. But knowledge graphs will try to cover everything. Since we established now the knowledge graph paradigm, right? So now the listeners understand what a knowledge graph is.

If I am using today a large language model, I go to chat GPT or any of your favorite chat tools and ask, where does Biden live and who is Biden? I will get, depending on the age of the data used for my large language model, but I could do this with Obama. Like what was Obama's title? President of the United States, right?

A large language model would actually do fine, but they do not have a knowledge graph representation. So do we even need knowledge graphs? Yes, we definitely do. And I want to thank you for that question.

I wrote up something that's going to come out tomorrow about that. So it turns out that large language models can do many things, but not always reliably. And when the information is there, sometimes it's not retrieved. Sometimes the prompt is misunderstood.

So the information is not retrieved. Can you give an example of how this works? Are you talking about hallucination or are you talking about information is there, but it wasn't retrieved? That's one of the cases.

So the information is there and depending on how you formulate the prompt, you don't get the information that you want. So not hallucination. You're talking actually about the language model. You're prioritizing a different piece of information.

That happens. Yes. We talked about this example where I set the information about being a SQL hero and the large language model, unfortunately, deprioritized that information and took something else as more. Right.

And that deprioritization is driven to a great extent by the prompt, but it's also a function of how the language model is built in the first place. So there's a... There's a huge body of literature showing that at each step of the way, when you build a language model, if you use a knowledge graph, then the result is better. It's more reliable.

It's more accurate. So knowledge graphs give us control over language models. Okay. Okay.

When we build them. So that's the whole idea of retrieval augmentation generation, right? The rags to give control. How does knowledge graph give control?

So actually, and this is just for the audience, we have initially in the first few episodes, we had discussed a lot about large language model. We discussed a lot about business implications, but we do realize that large language model have shortcomings. So we started talking about rails. And more than just hallucinations.

Yes. What are the typical issues you see with large language models? Well, this is the one we just... So we talked about hallucinations.

That's one. The need for guardrails. It produces, it answers things that we don't want it to answer. We have guardrails that block the large language model from answering certain kinds of prompts.

Okay. There are gaps in the knowledge that the language model has encoded. There are gaps in what it retrieves, even if the information is there. Yes.

So there are a long list of these, what I call undesired behaviors. Undesired behaviors. Yes, absolutely. And those, to be very clear, if you build your business around it, you need to deal with it.

We saw LegalOS in one of our episodes talking about guardrails. We discussed the information. If the information is not there, be more specific. We have an interview actually coming up with one company who is doing this extremely well.

And now we have the information. The information is there. The guardrail would allow it. So we have to be very careful.

Yes. Absolutely. more accurate and more reliable. This is the whole idea.

If data is more structured, it's more helpful to actually... That's it. That's the principle. And we see it in all across the...

In every step of the process of creating large language models. So when you're creating the language model, you have a loss that you measure the loss, how well your current version of the model is doing to predict things. If we predict how well it predicts, the model predicts what's in the knowledge graph, as well as what's in the input corpus, then it improves. Okay.

So it's a two-part loss function in this case. One of the techniques for building language models is masking. Before you jump in, let's... So, okay.

Knowledge graph can help to train. Got it? Makes perfect sense. Lots of those.

And it can help to fine-tune. which is a subsection of train. It's not helpful for fine-prompting or prompting, but it's helpful for fine-tuning data set. For prompting as well.

For prompting. Okay. Then talk about prompting and then talk about retrieval and other areas we would use a lot. Knowledge graph.

So we're getting through all of the steps here. So like you said, knowledge graphs are really helpful, have been shown to have a significant positive effect on each of the steps of training. And fine-tuning. Cool.

So for prompt engineering, you can also use knowledge graphs to optimize the prompts, right? So you can actually embed a part of a knowledge graph, a subgraph in a prompt. Can you give an example? Can I give an example?

Well, that's what we do. That's the hardest question. That's the hardest question is giving examples. No, but I mean, so how would I prompt with giving a knowledge graph?

So I could actually do a retrieval of a knowledge graph and say, look for an elephant that is an animal and that eats grass, right? So essentially what you're doing with the knowledge graph there is you're disambiguating the prompt. And be more specific. So that means that I adding, so that's really, I actually, I didn't know.

I didn't know that you can use knowledge graphs for the prompt. So I'm making this up as I go here. But my understanding in this case will be. You are.

Using the structures you have in your dimensions in the knowledge graph to actually adding onto the prompt to make the prompt specificity over. Yeah. So if you have, what you end up with is a more semantically precise prompt for the system to work with. And experiments have shown that that helps quite a bit.

Okay. Yes. And what else can you do with a knowledge graph? Um, on, on retrieval, you talked about rags.

Um, one thing that they, that has been done is filter the candidate responses by a knowledge graph at the, at the end. So you have your guard, apply your guard rail. You, you start with a, a fine tuned language model. You apply your guard rails.

You have a bunch of possible outputs and you can find those by checking against a knowledge graph, which one, which of these responses are most consistent with this external resource. Is knowledge graph resource. Got it. Mm-hmm.

Meaning knowledge graphs are not that because we have LLMs, they actually just became even more important in order to drive away the shortcomings of an LLM. Exactly. Now you do quite a lot of stuff with startups. Um, let's go away from the technical part to be more, how do you see at the moment from those topics, um, uh, avoid hallucination of.

Yeah. Yeah. Avoid guard, like help with guard rails, help with information retrieval, help with the data is not there. How do you see those implemented at startups?

So actually I don't. You don't. What I'm seeing is significant reliance on the out of the box language models. And what I'm seeing is a lot of investment in prompt engineering, not only at startups, but with the larger companies as well.

So it seems that the zeitgeist as it were, is that cool. We have these wonderful resources and let's work on. Mining them as well as we can, instead of going upstream, instead of going upstream and making sure that we can drive as it were the language models. Got it.

So, and this is interesting to hear because I would actually say, and maybe it is because large language models like, or like knowledge graphs as a concept are actually not that simple and they are actually, um, difficult to build up while it is easier to think about many prompts and do prompt fine tuning. And there's are very often built as rule based and not as a knowledge graph based or knowledge based, but they're very often built as rule based and rule based is just easier to build. So it might be the zeitgeist is large language models are zeitgeist and the easiest thing is at the moment to just do rules data prompt engineering, put stuff on it. And over time we will see.

Um, that knowledge graphs actually come into the picture to support. Is that a fear? I hope so. I hope so.

So this, I think what you're saying is that the results from the research literature take time to get absorbed by practice practice. Practitioners. Right. It's actually an interesting one because I, if, um, uh, knowledge graphs search and, um, only entered later, like, you know, you first had.

Semantic search, then you had vector, like Victor, uh, search and only later you added this other dimension to it. Right. So, uh, we have no large language models. Again, the large language model does has the knowledge graph and told it because they have knowledge, right.

But it's not retrieved the bill in a knowledge graph structure. You disagree. It is actually retrievable. No.

So the knowledge graph, um, length, large language models can form spit out scoss format if you want. Oh, right. Oh yes, they can. They do a fine job of the formatting, but I want to back up.

And when you say that the information from a knowledge graph is in the language model, it is, but in an unreliable form. So there's no notion of coherence in a language model. So it will very happily produce things that are just contradictions. Right.

Okay. So all of this is part and parcel of the other half of the conversation, which is okay. If knowledge graphs are so important, how can we build them better? And it turns out that there's a lot of work being done in leveraging large language models to create candidate knowledge graphs that we can review and then feed back into the language model.

Okay. And this seems to be, to me, to be the most promising path forward. It's actually interesting. So I did, while we were talking, I did the following.

I asked, um, in this case, chat. Who is more senior, a VP at a bank or a VPN at a Silicon Valley company? The title VP vice president can a very significant and V meaning and seniority in different industries. So, and then it says in contrast, so VP Austin reprints in a relatively high level of seniority.

It's typical of role with consumer responsibility, like managing department, key business hours. However, in some larger banks. The title of VP can also be relatively common, sometimes used for middle management. In contrast in Silicon Valley, especially a startup or middle-sized tech company, the title of VC might be even more senior of representing the highest level of management.

So that is, um, so that is essentially the information is there and you just wouldn't need to have it encoded in a, in a structure. Now the question is the information is actually there on that relationship. And I could ask what a leopard is eating and it would probably give me all the animals eating. Then why do I need a knowledge graph to do it on top of it?

Because what does it bring to the world? If the large language model already has it. Two things. It brings reliability.

Okay. We started off the conversation by noting a long list of things that language models don't quite do. As we were saying. We're not going to talk about language models.

We're going to talk about what we would like them to do. Okay. And so reliability, uh, knowledge graphs help by increasing the reliability of the language models across the board at every step. And the second thing that they give is that they give us is control.

So it's very difficult to punctually go in and update a little piece of a language model because they're inscrutable. Okay. So knowledge graphs give us, um, a pretty transparent and very effective method for, for control over what's. In the language model and what will come out.

Awesome. This is very, very helpful. And it's interesting to see actually that you say this, this whole understanding will take time. And I believe the, point here is, or the key in the meta point is large language models have those hidden layers, have the, those layers where the information is encoded.

And when we ask the model something, it digs into those layers to retrieve that information. So the. Large language model knows that in the Silicon Valley company, BP is top level of management while at a bank, it might be just middle management. That's actually pretty fascinating.

It's somewhere in the layers. However, if we want to steer in any of the shortcomings, we need to go back to our old structured ways of doing machine learning. That's our controls and knowledge graphs are actually one representation of data, which helps us to give that control. This is very, very well said.

Meaning we will see more startups doing them, but in the good old genre of fake it till you make it, you actually would probably not start with a knowledge graph initially, but you actually will start with prompt engineering and then once you scale, you actually will come to the knowledge graph. You'll have to, or if you, if you're even at the beginning, if you're working on an application where accuracy and reliability are crucial, then prompt engineering won't do it. Won't be enough. Won't be enough.

You've been seeing this in evaluations because you get wildly different evaluations of the same language model, depending on how you formulate the prompts. So they're not a good tool for measuring language model accuracy or usefulness. Mike, this was amazing. It was a very cool discussion.

And I think we got to a very, very good conclusion. Thank you so much. No, my pleasure. Always.
