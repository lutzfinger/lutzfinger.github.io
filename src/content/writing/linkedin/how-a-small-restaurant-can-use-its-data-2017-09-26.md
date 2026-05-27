---
title: "How A Small Restaurant Can Use Its Data"
date: "2017-09-26"
source: "LinkedIn"
sourceType: "article"
excerpt: "How A Small Restaurant Can Use Its Data How A Small Restaurant Can Use Its Data Created on 2017-09-26 15:33 Published on --- How can small businesses leverage point of sale data to make informed decisions? Big Data…"
wordCount: 994
bodyAvailable: true
---

How A Small Restaurant Can Use Its Data

How A Small Restaurant Can Use Its Data

Created on 2017-09-26 15:33

Published on ---

How can small businesses leverage point of sale data to make informed decisions? Big Data sounds often like Big Business, but the power of data is available even to small businesses without extensive resources. Point of sale data coupled with Excel and basic statistical knowledge can be leveraged to drive informed decisions and make businesses data driven.

A group of Cornell University graduate students from my class “Designing Data Products” set out to help an iconic yet small family owned restaurant on the Jersey Shore to leverage its point of sale data, to make informed decisions around inventory management.

The Circus Drive-In Restaurant serves approximately 100,000 customers looking to explore the beaches in the summer. Due to its close proximity to the shore, the primary driver of customer numbers is the weather. “The unpredictability of the weather makes inventory management extremely difficult,” says Richard Rose, co-owner, and general manager. The restaurant’s top sellers are the fresh, made-to-order burgers. “We do not use frozen meat for our burgers”, says Rose.

This approach makes the logistics even more challenging. If the restaurant overstocks its meats and has leftover inventory, the meat is not used and has to be thrown away, leading to spoilage costs. On the other hand, understocking of meat will lead to dissatisfied customers and lost revenue, both of which are detrimental to a seasonal business.

The restaurant manager manually tracks inventory usage on paper. The forecasting process is a combination of channeling the manager’s inner meteorologist, economist, and restaurateur. It is a gut feeling based on invaluable experience which helped get the business to where it is today. However, in the world of data ‘gut’ and ‘experience’ can be augmented by predictive data analytics.

The Cornell team created a model to predict demand for hamburgers. The model utilized point of sale data from 2015 and 2016, along with weather, seasonality, and holidays. Often getting data is a challenge. However historical weather data is particularly easy to obtain from web archives. The statistically relevant variables were maximum daytime temperature, average humidity, and the likelihood of thunderstorms. The holiday data was obtained from the website OfficeHolidays. Once the data had been collected, as usual, most of the work involved getting the data into the right format. The team had to spend some time to transform the data to make it usable, for example, converting holidays into Boolean dummy variables for the model.

Approaches to forecasting can range from simple moving averages via autoregressive integrated moving average (ARIMA) to probabilistic forecasting and ensemble forecasting. Often simpler algorithms and easy tools are powerful enough to get a quick win. In this case, the team used Excel with a XLMiner plugin. Not fancy but sufficient!

Running a regression is a two-step process. First, a partition process creates randomly selected training and test datasets from the original dataset. Second, a build and test process produces the regression model and performance metrics. The graph below shows how effective the model is by comparing under-estimation vs. over-estimation per season. To explain the graph, there are two curves, the Random Predictor and MLR Predictor, which when compared express the benefits gained by using the model. To ensure that the restaurant has sufficient hamburger inventory at all times, the restaurant will need to massively overstock, representing over 4,200 patties wasted. This is shown by the intersection of the Random Predictor (red curve) with the horizontal axis. If the restaurant is willing to run out of patties on occasion and experience accumulated lost sales of let’s say 500 hamburgers, it still would need to stock 3,800 patties more than needed. Using our model (blue MLR curve) under the same circumstances, the amount of waste can be reduced to 700 patties, saving 3,100 hamburger from being disposed of.

Under vs. Over-Estimation — Using A Random Guess vs. The Model

This frees up working capital, improves the baseline return and prevents food spoilage as well as freeing up the manager’s time to focus on the restaurant’s operations instead of gut-feel forecasting.

In the area of big data, we often forget that the success of data is often based on the actual questions. Small business owners know their businesses best, and know what to ask the data: in this case, “how can I stock hamburger meat up correctly.”

Small businesses often have good control of their data. If the wealth of information from their own point of sales system is not sufficient, one can easily merge publicly available data, as the team did with weather and holiday information. Often no complex tools are needed to make data work. With that, let’s get down to the beach of the Jersey Shore and enjoy a burger — hopefully data driven!

This article was co-authored by Jean Maldonado, Jiangjie Man, Rick Rose, and Riya Sarkar. Jean Maldonado and Jiangjie Man recently finished their Masters degrees in Information Science from Cornell University, and Rick Rose and Riya Sakar will be completing their Masters in Business Administration at the Johnson Graduate School of Management at Cornell University in 2018. All of them will focus their career in a data-heavy environment. Jean Maldonado is a Data Management and Analytics Consultant at Eccella Corporation, Jiangjie Man is pursuing a career in software engineering, Rick Rose is pursuing a career in brand management, and Riya Sakar is pursuing a career in technology strategy. Please reach out on LinkedIn to them if you would like more information about this project that was developed for the Designing Digital Data Products course at Cornell, taught by Lutz Finger.

Lutz Finger is Data Scientist in Residence at Cornell. He is the author of the book “Ask, Measure, Learn”. At Snap & LinkedIn he has built Data Science teams.

This article was originally published on my Forbes Blog.
