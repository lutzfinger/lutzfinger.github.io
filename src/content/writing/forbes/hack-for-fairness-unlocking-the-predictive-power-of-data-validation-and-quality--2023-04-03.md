---
title: "Hack For Fairness: Unlocking The Predictive Power Of Data Validation And Quality Assurance In Education"
date: "2023-04-03"
source: "Forbes"
sourceType: "column"
url: "https://www.forbes.com/sites/lutzfinger/2023/04/03/hack-for-fairness-unlocking-the-predictive-power-of-data-validation-and-quality-assurance-in-education/"
canonical: "https://www.forbes.com/sites/lutzfinger/2023/04/03/hack-for-fairness-unlocking-the-predictive-power-of-data-validation-and-quality-assurance-in-education/"
excerpt: "Hack For Fairness: Unlocking The Predictive Power Of Data Validation And Quality Assurance In Education [Image: The power of Data Validation and Quality Assurance — Lutz Finger & Midjourney] Have you ever wondered how…"
tags: ["fairness", "unlocking", "predictive", "power", "validation"]
wordCount: 410
bodyAvailable: true
---

# Hack For Fairness: Unlocking The Predictive Power Of Data Validation And Quality Assurance In Education

*[Image: The power of Data Validation and Quality Assurance — Lutz Finger & Midjourney]*

Have you ever wondered how to bring fairness to the classroom using "data validation" and "data quality assurance"? We've developed a toolset, built on the foundation of the Peer Review Process, to achieve just that.

Take Cornell Johnson's course "Designing Data Products" as an example. As demand grew, we expanded to more schools at Cornell. The real challenge was providing personalized feedback for the final capstone project — reviewing data sets, code, models, and business ideas takes time. We turned to peer reviewing using Cornell's FeedbackFruits platform, which automatically distributes materials to various reviewers. Studies show that peer reviews foster greater engagement and enhance collaborative problem-solving. However, we couldn't ignore the fairness factor — what if a student doesn't take the process seriously or is graded too harshly due to bias or self-interest?

The solution is called "data validation" or "data quality assurance" — reviewing, verifying, and validating the accuracy and consistency of labeled data. High-quality labeled data can lead to better model performance, while poor-quality labels can result in suboptimal or erroneous model behavior.

We developed a data validation process based on total review time, time spent on each review, the number of comments left on each project, and more. Most variables followed a Gaussian distribution, allowing us to use various statistical tools similar to those that identified cheating sumo wrestlers or overlooked baseball players. Based on predicted values, we built distinct "student personas": Lazy Graders (students who select largely the same answer for all questions regardless of whether responses are warranted, or spend minimal time on reviews), Harsh & Happy Graders (students who were unexpectedly strict or lenient on one project compared to others who graded that same project), and Misaligned Students (students who consistently rate all their projects significantly more positively or negatively compared to the rest of the class).

Examining just three to four projects from a single student typically gave us enough insight to determine whether they fit into any of these personas. For such students, we would re-evaluate their feedback. Employing "data validation" and "data quality assurance" has been a game-changer for the class. As instructors, we can now concentrate on the most critical reviews, ultimately elevating the course's quality. Our toolset is coded in Python and can be adapted for various courses using FeedbackFruits.
