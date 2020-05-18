---
title: "Rainforest Degradation Analysis in Earth Engine"
date: "2019-12-06"
---

In this project I was able to take LandSat images and analyze them using the Common Metadata Repository in Python and using Google Earth Engine.
In python I was able to fit a few common image classification models which predicted the NDVI of an image collected using an xarray chunk. Using sklearn we were able to fit a random forest model and a gradient boosted classifier.
Using google earth engine we were able to remove cloud cover from each of the images and fit multiple random forest models using pre defined regions of forest loss, forested areas, non-forested areas, and forest gain areas. Below is an image of our random forest classifier with 9 trees on the google earth engine platform using javascript.

![picture](./ee.jpg)



