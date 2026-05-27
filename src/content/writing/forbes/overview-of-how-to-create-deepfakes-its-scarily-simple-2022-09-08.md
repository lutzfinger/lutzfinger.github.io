---
title: "Overview Of How To Create Deepfakes - It's Scarily Simple"
date: "2022-09-08"
source: "Forbes"
sourceType: "column"
url: "https://www.forbes.com/sites/lutzfinger/2022/09/08/overview-of-how-to-create-deepfakesits-scarily-simple/"
canonical: "https://www.forbes.com/sites/lutzfinger/2022/09/08/overview-of-how-to-create-deepfakesits-scarily-simple/"
excerpt: "Overview Of How To Create Deepfakes - It's Scarily Simple [Image: Deepfakes are simple to make — scarily simple] Deepfakes are simple to make. Scarily simple if you are concerned about abuse. Early deepfakes were…"
tags: ["overview", "create", "deepfakesits", "scarily", "simple"]
wordCount: 489
bodyAvailable: true
---

# Overview Of How To Create Deepfakes - It's Scarily Simple

*[Image: Deepfakes are simple to make — scarily simple]*

Deepfakes are simple to make. Scarily simple if you are concerned about abuse. Early deepfakes were focused on pornography. More terrifying use cases include fake alibis in courtrooms, extortion, or terrorism. This article will focus on the technical side of how deepfakes work. Today, almost anyone can manipulate videos, audio, and images to make them look like something else. You don't need programming skills to create a deepfake. You can create it for free in less than 30 seconds using sites like MyHeritage, D-ID, or any of the many free deepfake applications.

Is it that easy? There is a big difference between using a model and training a model. Before we can reach the point where we have such a self-serve tool, we must first build a model that enables it. Underlying all deepfake tools are AI models. These models need a lot of training data — and creating them is not simple. These models are based on neural networks, which mimic an architecture inspired by the information processing of nodes in our brains.

AI Architecture for Deepfakes. A 2014 academic study by Goodfellow et al. reinvigorated interest in deepfakes through a new architecture called Generative Adversarial Networks (GANs). GAN sets up two neural networks to compete against each other. The first — a generative neural network — creates a realistic image from a random seed through decoding. The second — a discriminative classifier — checks whether the image of the first network is real or fake. This way, the two neural networks train each other and become more and more realistic. Today, most tools for deepfakes leverage either encoder-decoder pairs or first-order motion models.

Encoder-Decoder Pairs. Going from an original image to a latent image is called encoding. Going from latent back to image is called decoding — similar to how you close your eyes and picture a cat based on knowledge stored in your brain. To create a deepfake, we need an encoder-decoder pair. The encoder extracts latent features of face images, and the decoder reconstructs the face images from those features. To generate a deepfake, the decoder for the target draws the target image with the source's latent features (expressions).

First-Order Motion Model. A slightly different approach replaces the encoder with a motion model — the underlying AI detects facial expressions, eye movements, and head position, which are then superimposed on a destination image. Anyone who has used Snap will have used this approach. The neural network is trained on many hours of real video footage to recognize various important features of a person's face. Since a video is a collection of images (frames), this allows photoshopping each frame in a video.

It's just the beginning. Tools to create deepfakes are constantly improving. The amount of research done in this space is also rising exponentially. There's more to come.
