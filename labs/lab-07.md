---
layout: minimal
title: Lab
description: Lab 2
---

<button id="toc-toggle"><i class="fa-solid fa-bars"></i></button>
1. TOC
{:toc}

{% include course_header.html %}
# Lab 02 - Explore Data

## Part A - Model Creation

Create 3 specifications (different models) that connect some outcome of interest with some variables that could plausibly explain that outcome variable and arrange in a stargazer table. **Be sure to use the function I have in the .Rmd to correct the standard errors for heteroskedasticity.** 

- Your first specification should be a naive model, the most basic kind of regression that connects two variables together.
- Your second should include multiple regressors (while being cautious to avoid introducing perfect/imperfect multicollinearity, i.e. variables that are highly correlated with each other) 
- Your third specification should include some sort of controls for fixed effects (such as at the state level, MSA level etc.) 

Select the model you think explains the relationship the best using adjusted R2, F-statistic, AIC, BIC (use what you think makes sense). Then **interpret each of the regression coefficients**. What does the intercept represent in your chosen model?

Write one paragraph that explains why this relationship might exist in the data. Even if you are not confident in the accuracy of the coefficient, its sign might give you some information about the relationship between these variables.

[ModelVisualization.Rmd](https://canvas.uw.edu/courses/1692283/files/136712532?wrap=1)[Download ModelVisualization.Rmd](https://canvas.uw.edu/courses/1692283/files/136712532/download?download_frd=1)

\-----

Play around with how you enter the variables into your model, such as taking the natural log, introducing some terms that are squares or cubes, or interact two variables. Remember that when you introduce a higher order term such as Var^2 you must also include its lower order in your specification ex: var + var^2. The same is true for variables that are interacted together. 

This lesson could be, and often is, an entire class, so just try and get the gist. I want to expose you to these types of statistics because they are used often by data analysts and will lay the foundation for forecasting.

## Part B - Descriptive Statistics and Tables




{% include course_footer.html %}
