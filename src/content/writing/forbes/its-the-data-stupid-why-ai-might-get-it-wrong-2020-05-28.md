---
title: "It's The Data, Stupid! Why AI Might Get It Wrong."
date: "2020-05-28"
source: "Forbes"
sourceType: "column"
url: "https://www.forbes.com/sites/lutzfinger/2020/05/28/its-the-data-stupid-why-ai-might-get-it-wrong/"
canonical: "https://www.forbes.com/sites/lutzfinger/2020/05/28/its-the-data-stupid-why-ai-might-get-it-wrong/"
excerpt: "It's The Data, Stupid! Why AI Might Get It Wrong. [Image: What's wrong with AI? — It's the data, stupid!] Much of the public outrage about clearview.ai was about the privacy aspect. Little however was about the fact…"
tags: ["stupid", "might", "wrong"]
wordCount: 570
bodyAvailable: true
---

# It's The Data, Stupid! Why AI Might Get It Wrong.

*[Image: What's wrong with AI? — It's the data, stupid!]*

Much of the public outrage about clearview.ai was about the privacy aspect. Little however was about the fact that those algorithms might just be wrong. A recent study found that the majority of commercial facial-recognition systems are biased towards race. Amazon took their system off the market after AI incorrectly identified 28 members of Congress as criminals. Image recognition problems are typically solved via machine learning algorithms. For them to work they need to be trained on data. And that can be an issue. The data used to train many algorithms might be: (1) not sufficient, (2) biased, or (3) outright wrong. If the data is wrong then the output might be wrong — and often we won't know.

(1) The training data might be not sufficient. The insights from machine learning algorithms are built on historic data. China used face recognition to spot who is jaywalking at a red stoplight. Dong Mingzhu was correctly identified and accused of jaywalking — but he was innocent. Dong's face was part of an advertisement displayed on the side of a bus. The algorithm had failed to identify the context since in the training data this kind of situation was not present. Missing context is often hard to identify because it's often unknown which context is needed.

(2) The data might be biased. Systematically missing data is called 'biased data.' If we look at large bodies of text then we will see that often nurses are women in those texts — the algorithm will learn exactly this, not knowing that society strives for gender equality. One of my Cornell teams showed that the stop and frisk program in NY was racially unjust despite the fact that race was not a direct feature for the algorithm — the training data was predominantly skewed towards a given race. In a world where men earn on average more than women, an algorithm might conclude that men are more creditworthy. This happened to Apple Card: David Heinemeier Hansson was offered a 20x higher credit limit than his wife despite the same shared assets. We know that society and beliefs change over time — even if a dataset was initially unbiased it may become so later through 'drift.'

(3) The data might be just wrong. Think about emotion detection. Algorithms were often trained on the JAFFE dataset, which contains images of 10 Japanese female models 'performing' seven facial expressions — the algorithm doesn't learn how someone looks who is angry, but how those women perform an angry expression. ImageNet went further, labeling real images. But pictures without context can hardly be labeled accurately. Some pictures were classified as a "debtor," "snob," "wrongdoer," or "swinger" — those are wrong labels but if not corrected they will offer clues to the algorithm. Researchers from China's Shanghai Jiao Tong University published a paper training image recognition on mugshots of criminals to predict criminality from face images.

Summary. Don't expect an easy fix. Beyond the technical difficulties, researchers struggle with the definition of what is fair. We need tools to check for biases and missing data in our models. We need the right incentives to check for drift and update algorithms as society changes. Machine learning and AI will be a powerful force for good, but only if the data used to train the algorithm is correct and fair.
