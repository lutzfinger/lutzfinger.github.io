---
title: "AI on the Front Lines, with Alexander Fink"
date: "2026-04-30"
kind: "keynote"
show: "The Keynote on AI"
guest: "Alexander Fink"
host: "Lutz Finger"
sourceUrl: "https://ecornell.cornell.edu/keynotes/view/K043026/"
---

🎵 🎵 🎵 Thank you. Welcome. Welcome to yet another eCorner. I teach AI, tech, data, product strategy.

My work essentially centers around the concept of what does AI change? Not in theory, no, in real life and real systems. How do people deploy it and how do people live with it? I spent years at Google, Google Health, Snapchat, LinkedIn, just looking at how data and AI is shaping decisions and systems.

And I founded also two companies. My recent company, R2D2Side, is an AI platform for e-commerce workflows that I sold last year. that a little bit. So let's get started.

There are five general aspects to build agents. But today's discussion actually goes a little bit further. Today's discussion, we're talking about autonomous systems in active combat. And that impacts, obviously, pretty much the stakes.

When AI fails in an e-commerce conversation, well, then the recommendation might be just off and you would just buy the wrong jacket, which you then send back. When AI fails in a drone swarm, for example, then people might die. So AI is changing our society and AI is changing how we do conflict and how we fight wars. So therefore, it's extremely important for us that we have today's discussion.

And I was fortunate enough to be able to talk to Alex Fink and he joins the show. So he is the US CEO from Schwarmar. Schwarmar was born out of the war in the Ukraine. Its software has already supported more than 100,000 combat missions.

It just recently went public. Congrats, Alex. And this week, actually, it announced a strategic partnership to integrate jam resistance communications. We will talk about what that means.

But it's very clearly Schwarmar is moving towards a full stack operating system based on AI. So, Alex Fink, welcome to What Schwarmar Makes and a little bit about the philosophy about AI and war. Welcome. Thank you.

It's great to be here. One of the first things I always do when we have the shows, I kind of like talk a little bit about your personal origin story. Like, who is Alex, right? Like, who are you?

Where did you come from? Since when did you join? Tell us a little bit about it. Yeah, so my background before going into the military market, right, I was building cameras and imaging devices.

So I had that tangential relationship with AI, right? But I was closer to the hardware. Right. And I was building all sorts of cameras.

Some of them were military or paramilitary things that were helmet mounted for special forces, things that went on shotguns, rifle scopes. But some of it was baby monitors. And that was the first thing that I was doing. And I was building all sorts of cameras, like jet monitors, and cameras for self driving trucks.

And so it was basically anything that needs to capture an image and then process it in some way. And so I was typically interfacing with the computer vision and AI people. And one of those people that I was interfacing with ended up being my co founder here, who was the head of computer vision and AI at Ring in Kyiv. Right.

Ring was acquired by Amazon. And then sometime later, the full scale invasion started. And I think he decided at that point that perhaps doorbells are not the most important thing to be working on right now. Squadrons started helping out startups in the ecosystem.

And at some point, he called me up and said, I know what the problem is, we want to launch millions of drones, but we don't have millions of pilots. Let's automate this. And that's how Swarmware was born. Super fascinating.

When you say we don't have millions of drones, actually, let's, we have a small little video, I normally don't play videos, but for Swarmware, I think we should play a video to actually show a little bit what Swarmware is all about. So if we could roll this video, it's a promotional video, obviously, but I think it's a quite good idea of what Swarmware is all about. And for the record, this video was created for the IPO. That's something that we needed to do for the roadshow for marketing purposes.

But yes, it illustrates a few things. But ultimately, most of the things that our system is used for, we cannot show. Well, I think the main important part is actually those pictures here. Sorry for this, you can see that like the coordination between hundreds of drones that is important, right?

It's not one drone, which you are setting up, it is many drones, which are coordinating together. And I will go a little further. And I would say there are some companies out there that have swarms where basically what they're doing is flying in formation or following the leader or sometimes self-healing formations where they're supposed to be in some formation. If a few of them are shut down, then they rearrange themselves.

From my perspective, this is choreography. It's not actual swarming. Actual swarming for me and for the company as a whole is where every single member of the group knows everything about all the other members and makes its own independent decisions. So there is no leader.

There is no single point of failure. They all know what the objectives are and they negotiate among themselves who does what to achieve the objective. Then it's a swarm where they are all equal partners just with different capabilities because you might have different types of drones in the same swarm. This is a super important topic.

We actually let me drill into this in a second. This is the whole autonomous versus assistive. Before we do that. A note as always to the audience.

We have a packed room which is amazing. Which shows Alex how interesting the topic is. I don't want to really say exciting. It's not the right word.

But how interesting it is. We have a huge line up of folks. Remember guys, you can ask questions. Write them down in the chat below.

We have a whole team looking at your questions. Then I can bring them in. And ask them to Alex. So live questions are like always welcome.

Now Alex pointed out something which we have as well in agent workflow discussions. Just mundane things like I want my email answered. I want customer care. The question is always how autonomous versus how assistive is a system.

Autonomous doing it completely independent. Assistive. Supporting an existing workflow and existing human. Now how do I need to think about autonomous versus assistive in a war context.

Because you just said each agent or each drone should be completely autonomous. I wouldn't say completely autonomous. It should be able to make decisions within the rules of engagement given to it. So you can think of it almost like the difference between a deployed soldier and the officer.

Yeah. The mission has to be defined in advance. Right. In our case, human set the objectives.

They set the targets. Engagements are when do you need to abort? What do you do in every fall back scenario if this piece of hardware is malfunctioning, if this didn't work out the way you plan, all of this needs to be planned as part of the mission template. Now, once the drones are launched, and they're going to execute that mission, according to what humans decided.

now they need to be able to make their own autonomous decisions because things are going to go wrong. And the first thing that is going to go wrong is you will go into a denied environment with no communication back to home base, right? Jammers are everywhere. So you have to assume that one- Explain jammers for a second, everybody.

Like jammers are not, it's not jam. Jammers. What are jammers? So it's essentially a device that emits a lot of white noise across all the frequencies through which you're trying to communicate or to receive communication.

So you can assume that your connection to the GPS satellite that tells you what the location is, that goes first because the satellite signal is relatively weak. And so it's pretty easy to just generate noise that drowns it out. And your connection to home base, to the place where the human that launched you likely sits, is jammed second because now you're 10 kilometers away, the jammer is closer to you than home base. And so again, you're hearing the noise from the jammer.

The one thing that you probably still have is communication to each other because the drones are close together, right? They're only a few hundred meters apart, let's say, and the nearest device emitting noise is going to be a few kilometers away. So you can still work together as a group. You can still exchange information, but you have to assume that at that point, you no longer have information from home base or you might receive it intermittently.

So you have to be able to communicate with the device. And then also be able to continue with basically information from home base arriving on a best effort basis. Can you, we saw those drones, we saw combat scenes, we saw drones firing targets. For somebody who is not knowledgeable in warfare, what are typical tasks drones do?

We hear about drone attacks in the Ukraine, we hear about drone attacks in the street of Khornoghuz, or Moose. What is... So, attacking a target is definitely one task, but there are many other tasks those drones actually can do. Give us an overview here, please.

Well, first of all, I want to emphasize how wide the area is. When we say drone, we don't just mean the unmanned aerial vehicles, right? Anything that has a processor and a radio and no person sitting in it is a drone. You have unmanned ground vehicles in Ukraine right now, mostly used, let's say, to evacuate the injured from the battlefield because sending four people to evacuate somebody who is injured is impossible in that environment where basically there's a very wide area in which anything that moves gets attacked by drones, typically.

You have unmanned surface vessels that are the reason why Russia doesn't have a Black Sea fleet anymore. Right? That entire fleet was hiding in port, and then it decided it's not even safe in port. It's now hiding upriver inland, right?

And that's all because of these jet ski-sized boats that are unmanned and controlled remotely, right? And then you have aerial drones where yes, attacking targets is not the only use case, but it's worth noting that the latest stats I've heard from people in the Ukrainian government is that more than 90% of the casualties on both sides right now are caused by small drones. So they have essentially replaced bullets, artillery, mortars, all the other things. They still exist to some extent, but drones are right now more than 90% of everything.

Now, to your point, drones are used primarily for surveillance because first you have to figure out where to aim the attack drones. So the first thing that drones are supposed to do in the battlefield environment is figure out where there are targets. Then humans tend to identify what those targets are and prove them. And then those targets are engaged also by drones.

Typically, it's different types of drones, right? You also have different types operating at night and during the day. At night, usually it will be larger drones because they can hide in the darkness. They're not that easy to target.

And they will have IR cameras to actually see things moving in darkness. During the day, you cannot launch the big birds because they will be shot down out of the sky. They're too easy to see. So what you're seeing during the day is smaller drones with regular visible light cameras.

Now, the use cases you described in terms of attack or surveillance or rescue, all of them seem to be a single vehicle, single item drone. Now, the AI value is that you have a coordination between different independent drones. In this case, how do you, like, why is this so important? How does this work?

Well, first, let's start with very simple scenarios from the attack drone world, just to understand why coordination is very useful, right? So let's say we have an area in which we think the enemy might be advancing, right? But we don't know exactly which vehicles, where, how are they advancing? So we send a few surveillance drones to the area.

They send the video feedback to the other drones. They send video feedback to the other drones. There's also a trying to determine which process has to run on which core of the CPU. I don't expect that to be a task for a human when you do it at scale.

That part should be automated. Humans decided what needs to be done. But once you get to that level, it's basically scheduling, coordination, selecting the flight path, maybe tracking the target if it's moving. At that point, autonomy is already better than a human.

And now once you try to scale it up, you have to consider that even if communications are not jammed, we already know what jamming means, but even if communications are not jammed, humans are not that good at communication. When I speak on the radio, even if I speak fast, that's 150 words per minute. That's roughly 75 bits per second. That's not a great networking interface.

But you can speak fast on the radio. You have to speak slow. You have to repeat yourself. Sometimes the other side doesn't hear it properly because of static.

So that is not a scalable system. 500 humans cannot coordinate a joint attack like this. So you have to have software at that point, which is why at some point I think it is an inevitable transition now that we've moved from a world in which the entire world is making 10,000 drones per year into a world in which last year Ukraine alone made 4.7 million drones. At some point, we have to switch away from human coordination and human scheduling to all-in-one.

All of these things are better done by software. Software is even better at reacting to things in real time, right? The humans just need to decide what is the mission and what are the rules of engagement. So if you bring this to the business world, where I'm obviously mostly active in, you have those two different concepts.

One is distribution and latency, right? Which is when you look at a workflow, this is always a problem. How can you decide faster? That's the latency discussion.

It takes too long. Humans in the loop take very long. And distribution, how do you create a system that is resilient? That's the reason why we have distributed server infrastructure and so on and so forth.

So for drones, it's exactly the same discussion. I love it because it's very parallel in the setup. I'm doing at Cornell, I'm doing actually a course on enterprise scale AI agents. We have exactly the same.

The link, if you want to join, the link is actually below in the show notes. So those enterprise scale and latency questions are overlaid by what you then talked about, autonomous decision making. You also say, and we had this in our pre discussion, right? You also say the human sets the target.

The US military, I think, has a very defined setup. What for them is autonomous? Can you talk a little bit about this and can you take a shawarma perspective to it? Yeah, I will preface this by saying that I think all of the doctrines you see right now are in flux, right?

They're going to have to adapt a little bit, because if you look at the processes that most Western militaries have right now, not just for target selection, but also for figuring out which type of hardware is going to engage which targets, airspace deconfliction. Right? All of these things right now are in the best case multi hour processes, which then cannot adapt to something changing in real time in the middle of the mission. Right?

So a lot of these things, the way they are currently done in Ukraine are already not quite the way we're supposed to do it in Western militaries. And I think it will have to adapt because current doctrine is not quite suited to what the technology is able to do. Can you drill into this? May I?

Yeah. When you say it's not quite, it has to adapt and it's not quite how we used to do it. Like, give us an example. Remember, most of the audience is from the business world, and so they won't probably know.

Yeah. So again, just you launch a swarm of drones to perform a mission. Something changed, right? The part of the airspace that you were planning to enter is actually right now.

Unpassable, right? Something is going on there. You notice there's anti-air batteries around that corner. New information you didn't have before.

In current doctrine, that means a lot of people need to get together in the room and start replanning. You cannot do that in the current environment, right? The drones are already in the air. They probably don't have even the ability to go back and then fly again.

If they go back and fly again, by the time replanning is done, the targets move. So you have to be able to make these changes. You have to be able to make these kind of decisions faster. What is the way to do that?

Why do Western militaries have a way to do that yet that follows all the rules? Ukraine has developed these rules. Would you describe this autonomous decision? Is this autonomous decision making in this case for you?

Not necessarily. I would say that the human could be involved. And in our case, if they have connectivity, they have a UI, they can mark a new no-fly zone right there on the map. And our drones will just fly around it.

But again, if you're just thinking to existing doctrine, no easy way to do that. We need to think how that works. So I don't know that it makes sense for us to go into a military doctrine discussion. Plus, I'm not enough of an expert in it either.

I'm seeing more what happens out of necessity and what rules we basically came up with ourselves to do this ethically and correctly. Because there is no government body that has already thought it through. Right? Sorry, to add one more thing.

To the extent that there is a government body in Ukraine, my co-founder is a member. Got it. I think the challenge of the area, not so much about the doctrine. I think the area which is super interesting to discuss is how autonomous a decision should be.

If we take a missile, a missile which is targeted at a target. Which is targeted at a plane. And there are fighter jet. And the fighter jet is changing course.

The missile will change course as well. Right? So that is a decision the missile does without any human in the loop. For drones, as you just explained, you decide the aerospace might be closed because there are the defense systems, which you didn't know before.

Therefore, there might take a different route. How far is that stretchable in terms of autonomy? It's an interesting open question, I would say. So we have units right now that don't even want complete autonomy.

They want semi-autonomous missions. Right? They want our drones to arrive to the target area. But that's the longest part of the mission.

So we save them a bunch of time. They want one pilot to be able to control many drones one by one. But they do not want drones to even take the final shot. They want to have a controller and use it to take over the drones one by one.

Deliver the final shot. And then click return to home and switch to the next drone. So that's something we call fire rate. There are units that are a bit more comfortable with autonomy.

And they do what I described to you earlier, which we call seek and hit. Travelling drones find the targets. Send video feed back to the operator. Operator marks the target.

But then terminal guidance. And tracking of the target while the drones are incoming. That is done by the drones themselves. The next step, which is not running in the field yet.

Just to be very clear. In this case, it is the drone knows the target. And will follow the target wherever the target goes. Correct.

Without asking the human. The human decision was hit target. And the drone will take on from there autonomously. Well, that's true.

Let's be even more precise. The human decision was. The thing that is in these coordinates at this timestamp is your target. Right.

Then that was transferred from the surveillance drones to the attack drones. The attack drones decided among themselves who engages this target. That is not a human decision. And then whoever was assigned the target starts following that object wherever it moves until it engages.

And if something changes in the environment. And it no longer is the best candidate to engage that target. They reassign the targets among themselves and another drone can engage. Yeah.

So that is the level of autonomy allowed to them. But again, they have to only follow the thing that was at these coordinates at this particular timestamp where the human marked it. I think I want to outline two things which are super important for this discussion. You used the word.

This is the autonomy allowed to them. You will in a second explain that they could have actually allowed way more. I want to bring up one discussion we both had in our prep planning. You said many of the missiles we sent today after a target cannot be recalled.

Right. Meaning as soon as you launch them, the missile will take autonomously following discussion like decisions. But we cannot stop it anymore. Correct.

Which basically says that we already had this to some extent. Yeah. We already had human in the loop where the loop was already 10 minutes long as opposed to just a few seconds long. Right.

It was just perhaps not jarring to people because the projectile had very little brains. Like it could follow a heat signature or it could fly towards particular coordinates. But it didn't make decisions that seem more complex than that. Right.

Now, the only thing that has changed is we suddenly have a lot more brains. We have more brains at the node and the node is much cheaper. So we have more of them. Yes.

Those are the primary changes. And therefore you need coordination. Now let's go like so the first one was clear direction, clear stepwise approach. By the way, like if you are an executive and you think about workflows, first one, like first one is get my email, answer that email and schedule the meeting.

And it's very, very clear workflow. No autonomy, just stepwise assistant. The second workflow is like give it a target, meaning like, you know, I could have set up an email. I didn't like just to say, but I could have set up an agent to kind of send hunt down Alex Fink.

I want him on the show sent to a few people an email. And if you get to know, send to other people, I don't care how long you send emails as long as he gets to the show. Right. That's the autonomous with a clear definition and then release it even further.

You get it. You can like because there is more autonomous efforts in the go. Yeah. So releasing it even further.

We have a type of mission that's actually foreseen by Western military doctrines called kill box, where you basically decide in this particular area. Let's say this square kilometer. Any vehicle that moves is a valid target for the next 15 minutes. Right.

And of course, you only do this. If you as the human could certify that. There are no friendlies in that area right now. And there are no friendlies that could get into that area in the next 15 minutes.

Right. Because otherwise you would need to recall that order and you may not be able to once you launch. Right. But if you're you have that degree of confidence, you're willing to take that responsibility.

Then you just launch a group of drones. And what they do is hunt down any vehicle in that area for the next 15 minutes. And at the end, they come back, come back to base because they're done. Now.

That is a much higher level of autonomy because now you're trusting the drones to recognize that this object is a vehicle. Right. They don't have something pre approved that was in particular coordinates and all they need to do is track. They don't just track.

They recognize. Yes. And then they target and track. At the same time, the humans still had to certify that there are no friendlies.

Right. Which is means human is in the loop. It's actually fairly similar to a cruise missile in this regard. Because cruise missiles also serve as a vehicle.

Cruise missiles also tend to take 10 to 15 minutes to get to the target if you launch them from afar. And they also can sometimes be recalled. So launching a cruise missile in some cases is essentially the same level of responsibility. You're going to cause damage in a fairly wide radius.

And it's going to happen not now, but in 10 minutes. Now, by the way, again, to the audience, if you want, you can ask questions. We have a lot of questions already from Martin, Shira, Dimitris and a couple of others. Shira asked.

One to this last level of autonomous, which is actually relevant here. How adapt are those drones differentiating between local partner forces from enemy comments? Meaning if you send those kill drones over and you say attack vehicles. Then the answer is they are essentially attack vehicles.

And it was the human decision to make sure that there is no friendly party involved. Right. So you do not trust the drone to actually differentiate between friendlies and enemy forces. Right.

If they are targeting tanks, trusting a drone to differentiate the model of tank or the markings on the tank. That is not a level of trust that you want to give it for now. I don't know how good tech is going to be. But right now, even vehicles are not a simple task, given that the enemy is going to try to disguise it.

Put bushes on top. Put something else that makes it look like something other than a vehicle. Right. So that is difficult enough by itself.

Trusting markings or trusting, recognizing different uniforms. That's not going to work. Let me let me switch here. The topic so far we talked autonomy versus assistive.

Awesome. And I think you gave us a very, very good view of the range we have. Let's go now on when you say you don't wouldn't trust the drone. This is a technical limitation of the drone.

And which has something to do with edge computing versus central computing. Because if you have an image, you would be able to trust the image to recognize with a high certainty whether it's a friendly or an enemy target. Correct. Let me actually then make my statement a bit harsher.

I wouldn't trust AI with this yet. Interesting. Okay, cool. Explain.

This is awesome. So maybe, yes, you go first. Explain. Well, I will say even more.

There were instances in the world and the last few years where AI was used to recommend targets with human review after the fact. With some stats showing that at some point the humans were spending only 20 seconds reviewing the recommendations before approving the targets. I think even that is a bit too audacious. Right.

I would want any target or any type of target to be. Chosen by humans at this point. The idea that we can trust an AI system to decide whether somebody is a friendly or an enemy. But then who's responsible if we hit the friendly?

Yeah. Somebody needs to be responsible. We need to be able to do the after action review. We need to be able to figure out how to make sure it doesn't happen again.

And that is why, by the way, I'm jumping ahead here because I'm sure you're going to ask me about it. Why large parts of our systems are rule based. Because even things that could be solved slightly better by ML, if they could be rule based, I prefer that because the after action review is going to require perfect explainability. It would require everything to be deterministic.

And if we find a specific problem, then I would like to be able to do a specific fix as opposed to let's retrain and see what happens. Yeah. Let's explain the rule based. Forgive me, my faculty.

I'll nudge you. But the rule based is actually something which we see for any systems we set up, right? If you go over and you tell an AI agent, answer all my emails, it's going to be a disaster. Even if the agent is smart.

What you want to do, the agent to do is create a classifier, classify the emails that can be answered rule based. Hey, that's an uber receipt. Send it over to my QuickBooks. For example, that's a very clear step and it's rule based.

The rule based is way more secure than free flow. This is true for humans and this is true for doctors. And this is true for AI agents. So I totally agree here.

Now, you say I would not trust AI in general with this. And in Schwarm has actually you made a very conservative stance on this as well publicly. And because you're saying like we use AI for coordination, we're not using AI for essentially target identification. If I look at the reality in the Ukraine, I would say the reality is that way more targets are selected by AI today than by humans.

Is that right? Like, do you see the same thing or is it? Yeah, I'm a bit curious about that statement. What gives you this impression?

I like as I prepped for the setup, it was like that more because you use surveillance data from aerial drones and then you use AI to mark them. And then you identify targets to attack. And you're 20 seconds. Discussion is like the 20 seconds of a human looking over it is the identification is done de facto by AI.

The human just rubber stamps it. Yes, I will say that the 20 second figure did not come from Ukraine. I will not name which country this was in, but it was not Ukraine. Now in Ukraine, the data collection, of course, some of it is automated, but there is a lot of manual review, manual markings.

All the data ends up in essentially a unified system, a situational awareness system. And that includes satellite data, data from surveillance drones, data from partner countries that also share their intel. All of that is synthesized, combined, arrives in a giant, somewhat noisy repository where, you know, if you see five tanks in a particular area, you're not quite sure if it's the same tank or five different ones. And you need additional filtering based on that.

But then even if you have a giant, somewhat noisy repository, where, you know, if you see five tanks in a particular area, you're not quite sure if it's the same tank or five different ones. And you need additional filtering based on that. But then even after this, to launch a mission and to actually select the target, the human is selecting the target. There is never a target that just was basically AI passing things to AI all the way through.

Yeah. The folks who have me in my courses, they don't know that the two main metrics to look at are precision and recall, right? So whenever you identify a target, there is a precision. In some parts, you're wrong.

And recall means have you found all the targets? So AI as humans has a precision and recall number, and it's not perfect. And therefore, like, I personally like, obviously, your conservative stance of having the human in the loop. I wonder whether this is really the case for many of the combat situations which we are having.

There was a discussion, and I don't know how much you can talk to this, but there was a discussion on Anthropic. And Anthropic actually made the argument our precision recall is not good enough. Therefore, you should not use our AI for certain decision-making efforts. And can you, like, do you have an opinion to this?

Well, my opinion is that I don't quite understand the need for large language models at the node anyway. Yeah. Like, drones should not be speaking. Yeah.

They should be speaking in English. It's a very inefficient way of communicating, of thinking. They have much more precise ways to represent information to one another. So to me, the entire discussion on that was somewhat moot.

I don't want to load an Anthropic LLM onto a drone to begin with, at least not for a long time. I think, again, I don't want to comment on the technicalities of that discussion too much, other than to say I don't think they had a real dispute on substance. I think that everybody agreed that you shouldn't have a large language model on the drone selecting targets. Their dispute was on whether the contract should say that or not.

Because if the contract says that, then even if U.S. law changes, the contract now supersedes U.S. law. So I think it was more of a technical dispute on where it should say so.

The U.S. government's stance was we're already saying that we're not doing it, but the contract shouldn't add that in another discussion. We should add that in another layer of limitation. Again, I don't know anybody who thought that LLMs should be at the node and should be selecting targets autonomously, at least in the Western Hemisphere.

I'm not quite sure what people in other countries that aren't a part of NATO or NATO-aligned nations would think. Super fascinating. And I think actually the LLMs do not belong in a node is actually a very important pointer. It's a very important point.

There are two things I think we can learn from this if you just think about the technology. First of all, human language is not ideal. It was not ideal for coding. And now we have all vibe coders out there who actually use English to drive code.

And all of them are frustrated because human language is not so easy to use. Yes, you can code faster, but you still need to understand how computers think in order to do good vibe coding. The second point is you don't want to have it on the edge of your device. Meaning, even if you have a technology to identify friend versus foe with an image recognition system, it's heavy.

It takes energy. There is a lot of things which are not good for drones if you want to have a lot of computational power on the edge. That's the reason why you can't do it. You can't create them as swarms, correct?

Because now you could have actually specialized drones in the swarm for different tasks. Yes, I wouldn't want to make a generalized statement like this because it all depends on the particular task that I'm solving. I'll give you another example that probably illustrates this better. Reconstructing a full 3D map versus figuring out where you are in it.

Yes. Clearly, one of those is much heavier than the other. So yes, we reconstruct the full 3D map from all the available services. All the available surveillance data on a server and not on a drone.

But each drone has enough processing capacity to figure out based on what it is seeing where it is in this map. That's essentially visual navigation. So you can push things that require some AI and some processing onto the node. But if the drone is going to cost 500 bucks, there's only so much fancy hardware you can put on it.

Yes, Totally get it. Looking at the list of questions the audience is asking, let's come back one more to the trust discussion. How would you, at the end, and this is down to the core argument of Anthropics discussion with the military. The military needs to decide which technology they use, right?

They are putting this in. Now, how would you advise anybody? Yes. I would say thinking about, and this is a question that a person calling himself Jay asked, reliable metric.

Whether the drone can be trusted or not. How do you use quality? I would say precision recall, but maybe there is more for you to advise to. How do you define trust?

Can we trust an AI system? I don't know that I have a simple answer yet. I know that we're definitely not there yet. Yeah.

Because I know things like target selection. I would say that because explainability and the ability to investigate what happened is so important in the military. Even if we know for sure that AI became better than humans. It's too early to switch.

It needs to be an order of magnitude better. Before we can remove the responsible party from the discussion. Because humans have moral agency. And AI does not.

And so. decision with moral ramifications, we have to let the human do it unless it is just so inefficient that we cannot possibly do that or we will lose every war. This is, and like, I wanted to come to this part of the discussion. This is actually awesome.

Humans have agency. And this is what I tell my students all along when people like, they look at AI and saying like, oh my God, we are all getting replaced. And you think about like AI taking over your jobs. No, it won't because humans have agency.

Meaning while drones might fly now, actions which humans wouldn't have done or which would have been very costly and very dangerous for humans, the drones cannot do it. But the agency of setting it up, putting it together still stays with the humans. And just talking about jobs, there are way more people actually designing. Those systems and scheduling them than there was before as we had only one fighter flying in or one group of fighters flying in.

Yeah. So I think futurism is definitely above my pay grade. So I will not define whether we're going to get to the point where AI is a threat to humans being gainfully employed. But sticking to what we're discussing now, I would say I know that Elon Musk has been using this argument that the most important thing is that humans are not going to be able to do what they want to do.

And that is true. And I think that the moment the number of accidents per mile driven is better in autopilot than in human drivers, we should all switch to autopilot. And I think no, the standard is actually much higher. Right?

I don't know if it's 3x or 10x or how many, but AI needs to be an order of magnitude better before you can take it from the human and give it to the AI. Just because this is going to sound perhaps like suboptimal if you quote it. But we need to have somebody to blame if things go wrong. Right?

And it's the human right now, right? And so you should only switch when it's an absolute no brainer. You just have to switch. But until then, it is very important to have a human that made that decision and that is responsible for the outcomes.

Yes, I very much agree with you. I would probably, I mean, the blaming part is definitely part of it. Which is a human structural thing. For me, the reason is that it has to be three times more effective is because you scale it up way easier.

I give you an example from healthcare. We like, we know that nobody should have colon cancer. The way to avoid colon cancer is to colonoscopy. Nobody likes a camera stick up your ass.

Therefore, not everybody does it. And people don't get reminded. Now, let's say we have a system to remind everybody because people use Google or we have Google Health. Suddenly we're out there and we do this automated.

Suddenly we scale up. The precision recall of the investigation is still the same. But we scale up the investigation and therefore we actually would need to change how good our system is because we just have more people. And I think whether it's cars, whether it's drones, whether it is a reminder for people, whether it's a colonoscopy, it's always the same.

If you use an AI, you scale it up. And if you scale up, your requirements for quality are different. That's absolutely true. And in your example, too, you have to then consider what is the false positive rate of the test and Bayes' theorem will essentially lead to you knowing that there's way more false positives than actual cases that you're discovering with that additional testing.

That is the risk with testing for rare diseases that at some point there is actually a risk of a rare disease. And that's the risk. And that's also the risk of falling into these drones defending against drones uh we know that um um the uh that russia ramped up their drone attacks on uh ukraine um how do you think about uh effective defense against trauma or is this part of trauma well it is both to some extent so first of all interceptors are absolutely a market where we are seeing a lot of demand and as i mentioned anything with a processor and the radio is a drone from our perspective and interceptors are often drones that just happen to fly faster than the thing that they are trying to intercept right and they're hitting a target that is itself moving in 3d space but you're seeing this quite a bit in ukraine essentially the two primary ways of shooting down the drones that the russians are launching are either smaller drones or machine guns and clearly machine guns are what works initially but the future has to be smaller drones and i guess the next step of the question is well what if the enemy launched a swarm and now shooting down some of them is not enough you have to shoot down all of them because they're going to reassign targets among themselves the only way to counter that is with a swarm of interceptors i want to point out one more thing which is even if what the enemy launches not a swarm but they launched let's say machine gun or machine gun machine gun machine gun machine We've had cases right now in the Gulf where eight Patriot missiles were launched to shoot down one Shahid. The Shahid cost $20,000, each Patriot cost $4 million.

So that's $32 million to shoot down 20,000, which only makes sense if you also account for the fact that what's behind you is a multibillion dollar refinery that you're protecting, right? But what I'm trying to get to is if 30 of these are launched at you and you have an interceptor that hits half the time, right? That becomes also an unsolvable problem if you're launching the interceptors one by one. Because if something has 50% chance of not being hit by the interceptor, you want a 99% takedown rate, you need to launch seven at each one, right?

Well, seven times 30, 210, you probably don't have this many. But if you launch 60, then you're going to get a lot of interceptors. If you launch a lot of interceptors that can reassign targets among themselves, you probably took down all 30. So swarming among interceptors is perhaps even more important.

And it's easier to explain why it's important than swarming in attack drones. And the whole point here, bringing this back to like the typical business discussion, is distributed systems, right? And we see this in the street of Hormuz. You might have one big tanker.

If you have, in this case, a swarm of boats attacking it, even if you have, like, only one of them needs to come through, right? So you need a swarm to answer a swarm, meaning distributed systems is the way to go. Now, let me throw a curveball here. Like, it wouldn't be fun if I don't do that.

But let's go back to Schwarzenegger and Terminator, right? Like, Skynet was a distributed system. And the whole idea was distributed systems. of Skynet was you couldn't take out one single area.

It was distributed and therefore it became relatively invincible. Now, what's your view on this in terms of like we are distributing all systems, we are now fighting distributed systems, distributed systems, how much can we actually expect to have agency and how do we need to design systems to keep us as agent? Well, I think this comes back to what we were discussing, who determines the objectives, right? If you let your distributed system determine the objectives, there is a good argument that it could at some point go rogue, right?

But if humans always determine the objectives and the systems just implement, then it's much closer to the operating system on your computer, right? If I click a button on my screen right now, like it's not the computer deciding what to do, it's me deciding what to do. But I have no idea how many processes will be launched, which cores of the CPU they will use, and so on. So, I think it's a good argument that it could at some point go rogue.

What commands are underneath and in what order they will be scheduled, right? I don't know any of this, but I do know what the button is supposed to do. So, this is my view of how these systems should be designed as well. Humans should be the ones clicking buttons, but how they are implemented, that is better left to software and whether it's distributed or not, that's just determined by the technical complexity, the constraints of the problem, what works best.

Yes. Now, this sounds all very dramatic because we talk about life and death, but I think the same principle apply for everybody who is actually listening. Because whenever you apply an agent in machine learning decision or whatever it is, you need to have that agency structure in it. You need to have the ability to ensure that the human is in the loop.

So, I think while and I can see this from all the discussions here, like while AI and war obviously drives a lot of fears, the same principle on the same problems actually apply to any other industry. Now, if you as Alex would give to the world advice on how to think about autonomous versus assistive or if you would give an advice about kill chains, what would it be? What would your like guidance be? Yeah, I don't think that an answer to the question advice about kill chains.

You're right. And like stick to like stick to the like the kill chain is the most totally right. That was not a like not a fair interception here. It's not about kill chains.

It is kill chains is obviously something you are faced with. You are faced with a lot of things that you are not supposed to do. But the whole point is how we discussed two main topics distribution as well as autonomous decision making. If you advise to anybody out there who is designing systems, not kill chains systems, and how should they think about those?

I would just start by saying whatever it is we're looking at is probably not as unique as it seems, right? You notice that they used a lot of analogies from operating systems, right? You notice that they used a lot of analogies from operating systems, basically concepts that we all learned in the 80s, right? Because I think in many cases we're solving a very similar problem.

It just happens to involve a different set of hardware, right? I would also say delivering a package that explodes versus delivering water or delivering medical supplies. Those are not different problems either. It's the same problem.

So the fact that right now most of our demand is coming from the military market, well that's unfortunate that most of our demand is coming from the military market. Well, that's unfortunate that the military market is not the same as the military market. It's just the place that the world is in right now, right? But we're hoping to see past that and we're hoping that once the current conflicts are hopefully over, we'll probably have a rearmament phase where every western military is going to throw away a lot of the stuff that they have in stock that is obsolete right now and rearm themselves.

But after that, we're hoping that civilian will be the primary use case for this kind of technology, hopefully for a very long time. So none of these things are unique. And I face this question a lot with regards to AI in general. Like, aren't you afraid that AI does X?

And I'm thinking, okay, but tools don't do things. Like, my kitchen knife will not murder me. A human wielding my kitchen knife might. So I'm not afraid of my kitchen knife, but I do want to make sure that I control who gets to hold it.

Which becomes, when we have a discussion about like the skill your drones have in coordinating itself, of themselves, is an AI skill, right? And meaning there is a security prerogative for a nation to have that knowledge. And now you went to Nasdaq, you started out in the US, you probably, this is a very strong signal, and your IPO was a very strong signal. How do you see the security prerogative for like, who controls AI?

Well, I think we definitely need to have a security prerogative for like, who controls AI. to develop it faster than the bad guys. There's a group of countries in the world that are obviously working on the same problems. We will never sell to any of those countries, and we need to work faster than they are working, right?

Because we want the West to develop it first. And by the way, we talked a lot about ethics before. I don't think that they follow the same ethical rules. And so if they get there first, not only will they have this tool that we don't want them to have, but it will serve as a signal to everybody on our side that we have to develop it the same way.

If we get there first, then we are showing to the world, you can do this ethically. You can do this in this conservative approach where you only let AI do what it's supposed to do, and it still works better than what the bad guys are doing. Therefore, this is the way to develop it. So I think that in itself is an important signal.

But again, I want to go back to the point that this is not unique, right? I think if you look at the... long arc of kind of the development of computing, we started from computer being a human profession, right? People who just sat at the desk and computed.

Then we developed this device called computer, and then you had the new profession called programmer, which would program in machine language what the device is going to do. Then we came up with compilers, and now you had people writing high-level software that was compiled into machine language, et cetera, right? So you have these additional layers of more automation or more autonomy all the time. Well, now we have AI that can write code.

Okay. That's certainly one level above, but it's not a new thing. It's just one more layer. I totally agree.

And for everybody who believes that they will be replaced, think about that in all of those layers, as you just described, like people just got busier. They didn't get less because we have now tools to work for us means those tools create more opportunities, more probability. More opportunities for us, which we then need to follow through. Yeah.

Now I will give you one caveat. I know we might be running out of time. Those replacements or those transition cycles could be painful if they happen all at once very quickly. I think 1920s in the US is probably the best or the worst example of mechanization of agriculture led to a lot of people being displaced all at once.

You had the giant migration of people from the agricultural regions to essentially the factory. There was unemployment in the unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment unemployment world war right um so um that's that's definitely the the very dark and negative side to it the positive side to it is obviously that we create more and more coordination between those systems which then create more opportunities for us and the clear impetus for the whole discussion and you said it earlier everybody is working on it and then the way to defend against the swarm is not using a couple of falcons or birds to fight them is to have another swarm to get against it so we do need this level of coordination and therefore i'm extremely happy that um to see you guys on nasdaq i i think um it was an amazing discussion i could go for on forever i highly appreciate your um relatively conservative discussion and i think it's a great perspective on perspective on what ai should do and you push towards what ai should do and you push towards agency agency that's that's the way to go i think for that's that's the way to go i think for many of the ai systems and i hope the many of the ai systems and i hope the audience audience took away the main points of any took away the main points of any workflow workflow no matter whether it's strong or or a workflow for know your customers has a difference between autonomy and assistive and has the human as an agent in that loop and that's the main important part all right thank you so much thank you alex it was awesome you
