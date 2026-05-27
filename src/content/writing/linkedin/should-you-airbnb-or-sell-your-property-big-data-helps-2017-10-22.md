---
title: "Should You Airbnb Or Sell Your Property — Big Data Helps"
date: "2017-10-22"
source: "LinkedIn"
sourceType: "article"
excerpt: "Should You Airbnb Or Sell Your Property — Big Data Helps Should You Airbnb Or Sell Your Property — Big Data Helps Created on 2017-10-22 17:24 Published on --- Data-driven decision making is a practice in many commercial…"
wordCount: 1441
bodyAvailable: true
---

Should You Airbnb Or Sell Your Property — Big Data Helps

Should You Airbnb Or Sell Your Property — Big Data Helps

Created on 2017-10-22 17:24

Published on ---

Data-driven decision making is a practice in many commercial industries now. But especially the real estate industry is using data. Companies like Zillow or Redfin provide estimates of a given house in a given neighborhood for renters and buyers alike using historical data. But, there is a third option besides ‘selling’ or ‘subletting’ a house. You could rent it out via Airbnb. There’s no tool that predicts your income from this third option. Let’s build one.

Students of my class at Cornell University created a small neat tool to help you with that decision. Real Estate Advisor lets you enter the address of your spare property (in L.A. only for now) that helps you evaluate the two options on hand — AirBnB and Sell. Check out this video on how data could help you make a decision quickly:
  https://www.youtube.com/watch?v=RMlZcY0IL4E

Let’s look at what happens in the backend when you hit the “Predict” button. Real Estate Advisor predicts the potential selling price of your house today and compares it to the potential revenue that you could make using prices as seen on AirBnB for similar houses. Like house prices, the potential AirBnB income depends mostly on the number of rooms. Thus, much like a hotel the more rooms there are, the higher the income. Airbnb, however, has a higher rate of seasonality. (Note: The Airbnb prices in the US see a seasonality which we did not include into our discussion here.)

Below, the team of Cornell University students shows how they predict both the property price and the expected perpetual income via Airbnb.

How to calculate the selling price of your property?

Predicting housing data is a typical exercise that many data scientists do. To predict the property price, we need the real estate data. And in this era, there’s no dearth for datasets (for instance, here are many datasets at Kaggle). But data is like vegetables — it perishes easily. Thus, for Real Estate Advisor to work, recent data is needed. Websites like Redfin, Zillow or Trulia can be rather easily scraped to obtain the required data such as the size of the house (in sq.ft), property type, number of beds and baths, lot size (in sq.ft) and, property age. Additionally, we added the quality of the school districts into our model. The proximity to the top schools was calculated by computing the minimum Haversine distance between the schools and the property on sale. The distance to the closest school was then used as a variable.

Using a multiple linear regression model and the student t-test, we selected the variables that passed the test of significance. The R2 of our model was 0.39, showing that there is room for improvement. Also, while comparing our predictions to those on Zillow and others, we can see that we are missing variables and maybe, even need to consider nonlinear models in further iterations.

How to calculate the perpetual AirBnB income of your property?

To create a level playing field for both the sell option and the let out option on Airbnb, the income from Airbnb is assumed to be a perpetuity with a present value.

InsideAirbnb offers great insights for all the regions via a public dataset (insideairbnb.com) that allows us to calculate the assumed price at a given location. In real estate, location plays an important role. We found k-nearest neighbors (k-NN) algorithm the best to capture the significance location has on the rent your property commands. Essentially, if your house is close to houses that are expensive on Airbnb, it’s likely that your house will command a higher rent.

Using k=5, we calculate the average income per guest for each of the 5 nearest listings and arrive at what would be the income per guest from your property and for simplicity, we assume that two guests stay in a room. Then, based on the number of rooms your property has, we calculate the weighted average daily income from your property on Airbnb. The properties closest to yours will have a higher significance. To capture this, the weights used are the inverse of the Haversine distance between each of the nearest Airbnb listings and your property.

Nearest Neighbors used to define the value

Arriving at the daily income from your property on Airbnb is only half the battle. We need to also predict the annual occupancy rate of your property to compute the total annual income from your property on Airbnb. Annual occupancy rates vary by location — while everyone wants to get the nice chalet in the snow in the mountains for Christmas, the demand for the same property will be lesser during the rainy spring season. Occupancy rates are neither publicly available nor easily obtainable. As a proxy, we used the average and standard deviation of the number of reviews per month for all the Airbnb listings and used it as a normal distribution function to calculate the annual occupancy rate. The weighted average of the number of reviews per month of the 5 nearest Airbnb listings is used to predict the annual occupancy rate of your property.

Reviews per month represent the occupancy rate

Once we have the annual occupancy rate, we calculate the total annual income from your property on Airbnb. We treat this income as a growing perpetuity and compute the present value of this perpetuity using your desired return on investment (ROI) and annual growth rate of the income (Inflation) with the formula: Annual Income/(ROI-Inflation). The present value of this perpetual income from Airbnb is compared with the predicted selling price to arrive at a decision to either sell or let out your spare property on Airbnb. If you decide to let out the property on Airbnb, the tool suggests a target annual occupancy rate you need to maintain to remain profitable. The annual occupancy rate of your property on Airbnb is paramount. If you’re able to maintain an occupancy rate of 60–70% on your property, Airbnb would almost always be the most profitable option.

How can you improve the tool?

There is certainly room to improve the tool, both qualitatively and quantitatively. The model does not factor in the fact that Airbnb demands time and effort to maintain your property, while property sale is a one-time transaction. Also, the tool doesn’t take into account other qualitative factors such as the importance of liquidating assets, or the importance of a steady annual income, for property owners.

The predictive accuracy of the tool can be significantly improved with data. We need to consider additional variables such as the number of parking lots, the floor an apartment is on, the presence of a swimming pool etc., to predict the selling price of a property. Similarly, the annual AirBnB income is influenced by other factors such as the annual maintenance costs, proximity to tourist attractions etc.

However, with relatively little effort, we were able to create a tool to help you with the age-old Sell vs. Rent discussion. The availability of data enables everyone to make more informed decisions.

This article was co-authored by Akshay Joshi, Chawisara Uswachoke, and Lihong Lao, who are students at Cornell University. This project was done as part of the Designing Data Products course at Cornell University that Lutz is teaching. Akshay is currently an MBA student at the Cornell SC Johnson College of Business, and will graduate in May 2018. Chawisara is a recent graduate who majored in Information Science, and is looking for data-driven job opportunities. Lihong is a Ph.D. student in Materials Science & Engineering, and will graduate in 2018 as well. Please reach out to them directly via LinkedIn if you would like them to join your team.

UPDATE — Oct 19th — 9:41pm

The dataset used is not offered by Airbnb but by Inside Airbnb an organization founded by Murray Cox. Inside Airbnb is independent of Airbnb. The data from Inside Airbnb is offered under the Creative Commons CC0 1.0 Universal (CC0 1.0) “Public Domain Dedication” license. Additionally, Murray commented that the model has an oversimplification which is the assumption that all rooms in a house can be rented out. There are housing and zoning regulations that affect Airbnb rentals and would not allow the house to be rented out in full.

Lutz Finger is Data Scientist in Residence at Cornell. He is the author of the book “Ask, Measure, Learn”. At Snap & LinkedIn he has built Data Science teams.

This article was originally published on my Forbes Blog.
