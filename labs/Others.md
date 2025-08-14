---
layout: minimal
title: Lab
description: Lab 1
---



{% include course_header.html %}

## Lab 2: Critique of Data Visualizations

*As we learn more about data visualization, we have begun to discuss some general principles. For today's lab exercise, please find an example of a visualization or infographic that impresses you- either in a good or bad way. Please attach the example image, give the link/source, and (1) describe what the visualization is trying to communicate; (2) discuss what it does and does not do well using the principles we talked about in class; (3) comment on two visualizations posted by classmates*

\---

A few probing questions to think about:

- Is the data visualization static, motion or interactive?
- Is it narrative or explorative?
- What kind of purpose do you think it serves? How would you order its objectives (appeal, comprehension and retention)?
- Does it contain the basic elements of a graph (e.g. title, axis label, encoding)? Is anything missing or not clear to audience?
- What kind of encoding does it use (e.g. position, length, slope, angle, area, color hue, etc)? How effective in terms of precision of such encoding elements? 
- What kind of organization principles do you observe (e.g.hierarchy, unity, balance, grouping and spacing)? Is principle lacking in the graph?
- Do you think your psychological needs have all been met by this source (e.g. autonomy, relatedness and competence)?



## Lab 3.2: Sketching Dataset

In this exercise, you will sketch (with pen and paper!) 3 visualizations of a small dataset and provide brief reflections of your designs.

Why sketch? Why not just dive right into coding or using some visualization tool? Sketching is a quick and cheap form of prototyping — a process of simulating how a finished product could look and work. Prototyping is a critical part of the design process as it allows us to test the feasibility of our ideas early on. 

But prototyping (and sketching, in particular) is also extremely helpful in *generating* ideas. Rather than grappling with the functionality of any given design tool (which can often influence your design process, even implicitly), or committing to any one specific design, sketching allows us to more rapidly explore the space of possible designs. 

In this assignment, you are going to gain some practice with sketching visualizations.

**Redfin Monthly Housing Market Data**

Each week, Redfin releases a dataset about the housing market, computed daily as either a rolling 1, 4 or 12-week window. The local data is grouped by metropolitan area and by county. The dataset contains information such as median sale price, home sales, pending sales, new listings, inventory, active listings, monthly supply, days on market, price per square foot, sale to list ratio, percent of home sold above list, percent of active listing with price drops, and percent of homes go off market within two weeks. The attached dataset contains the above information aggregated for all types of homes.

Dataset: [Redfin_SEA_Metro_Au2024.csv](https://canvas.uw.edu/courses/1692283/files/136712536?wrap=1)[Download Redfin_SEA_Metro_Au2024.csv](https://canvas.uw.edu/courses/1692283/files/136712536/download?download_frd=1)

Source: [https://www.redfin.com/news/data-center/Links to an external site.](https://www.redfin.com/news/data-center/)

Your Tasks

1. Start by **choosing a question** you’d like a visualization to answer.
2. Design **3 different visualization paper sketches** (low-fidelity prototypes) that you believe effectively tackle the question.
3. Write **one paragraph per sketch** about the rationale for your design decisions. What was your motivation behind generating this sketch? What Ire you hoping it would communicate? What worked and what didn’t?
4. Write **one paragraph** that reflects on all 3 of your sketches overall. Compare your designs with each other — what are their strengths and weaknesses? What new directions might you explore (e.g., synthesizing elements from every sketch, or describing why one of them is significantly better than the others?).

Your sketches should be interpretable without consulting your write-ups. Do not forget to include the title, axis labels or legends as needed!

The goal of this assignment is to *draft* different visualization designs. Thus, I do not expect your visualizations to be “perfect,” but rather communicate three ideas that you would plausibly be excited to continue exploring in the subsequent assignment. In fact, I encourage you to use sharpies/markers/felt-tip pens so that your lines are thicker and you are less focused on being “accurate.”

*Note: For this assignment, you should **not** analyze or visualize the data with tools such as Excel, Tableau, or R. I instead expect you to just look at the dataset and create hand-drawn sketches.*

Grading

This assignment is scored out of a maximum of 10 points. I will determine scores by judging the diversity of your sketches, the creativity of your ideas, and the crispness of your write ups.

You can be awarded a maximum of 3 points for each sketch and its related reflection. The remaining 1 point will be awarded for communicating your overall reflection across the 3 sketches as described in the above section “Your Tasks”.

Submission Details

This is an individual assignment. You may not work in groups.

Submit your assignment on canvas. Compile your sketches and writeups as a single PDF or WORD file. Make sure your images are sized for a reasonable viewing experience — readers should not have to zoom or scroll in order to effectively view any sketch!

Tips and Inspiration

- Use a sharpie/marker. Thick lines free you from worrying about the fine-grained details and accuracy of your sketch, and instead focus you on sketching the big picture ideas.
- Similarly, I recommend using pens over pencils — not being able to “undo” your mistakes by erasing them can be remarkably conducive to generating designs.
- You are free to use different colors and any other sketching techniques you can think of (e.g., dotted patterns, cross hatching, etc.).
- You may sketch on touchscreen-enabled devices (e.g., iPads).
- [How to Sketch, Doodle, and Draw Data Visualization Drafts by HandLinks to an external site.](https://depictdatastudio.com/how-to-sketch-doodle-and-draw-data-visualization-drafts-by-hand/)
- [Sketching with Data Opens the Mind’s EyeLinks to an external site.](https://medium.com/accurat-studio/sketching-with-data-opens-the-mind-s-eye-92d78554565)



## Lab 4: ggplot & Redfin

Exercise: Try to translate your sketches into reality using ggplot. With your partner, determine which three sketches would be best to try and adapt. 

Create **three ggplot visualizations** of some aspect of the Redfin data and write **one paragraph per visualization** that explains the chart and any trends or outliers. In your paragraph, try to think about *why* you're seeing what you're seeing. What's causing these trends or relationships in the data?

 

[Redfin_SEA_Metro_Au2024.csv](https://canvas.uw.edu/courses/1692283/files/136712535?wrap=1)[Download Redfin_SEA_Metro_Au2024.csv](https://canvas.uw.edu/courses/1692283/files/136712535/download?download_frd=1)

 

[Redfinggplot.Rmd](https://canvas.uw.edu/courses/1692283/files/136712538?wrap=1)[Download Redfinggplot.Rmd](https://canvas.uw.edu/courses/1692283/files/136712538/download?download_frd=1)

 

Submit both the .Rmd and .html files. Only one submission per group should be required.

**This is a group assignment.** 

Class "Wikipedia"

[https://docs.google.com/document/d/1gZIjbEMfjgQUGqdMuf_kjH9Z3UZc0opeNB3SFoeif6E/edit?usp=sharingLinks to an external site.](https://docs.google.com/document/d/1gZIjbEMfjgQUGqdMuf_kjH9Z3UZc0opeNB3SFoeif6E/edit?usp=sharing)

Cheat sheet you may find helpful:

[https://posit.co/wp-content/uploads/2022/10/data-visualization-1.pdfLinks to an external site.](https://posit.co/wp-content/uploads/2022/10/data-visualization-1.pdf)



## Lab 5: Seattle permit data

Exercise: Using either the Seattle permit data, or other data from the Seattle Open Data portal, create 3 ggplots that show the relationship between the variables. Write one paragraph that explains each visualization. What is causing these trends/relationships in the data?

 

[BuildingPermitSeattle.Rmd](https://canvas.uw.edu/courses/1692283/files/136712521?wrap=1)[Download BuildingPermitSeattle.Rmd](https://canvas.uw.edu/courses/1692283/files/136712521/download?download_frd=1)

[Building_Permits_20240918.csv](https://canvas.uw.edu/courses/1692283/files/136712522?wrap=1)[Download Building_Permits_20240918.csv](https://canvas.uw.edu/courses/1692283/files/136712522/download?download_frd=1)

[Detached_Accessory_Dwelling_Units_(DADUs).csv](https://canvas.uw.edu/courses/1692283/files/136712530?wrap=1)[Download Detached_Accessory_Dwelling_Units_(DADUs).csv](https://canvas.uw.edu/courses/1692283/files/136712530/download?download_frd=1)

Submit both the .Rmd & .html

[https://data.seattle.gov/Permitting/Building-Permits/76t5-zqzr/about_dataLinks to an external site.](https://data.seattle.gov/Permitting/Building-Permits/76t5-zqzr/about_data)





## Lab 6+7: Census data I & Introduction to Spatial Data

 

**Part 1**

Create three visualizations of some aspect of the census data. Include median household income in at least one of the visualizations (B19013_001). 

Write one paragraph that explains each visualization. What is plausibly causing these trends/relationships between the variables?

 

[CensusData-I_final-1.Rmd](https://canvas.uw.edu/courses/1692283/files/136712526?wrap=1)[Download CensusData-I_final-1.Rmd](https://canvas.uw.edu/courses/1692283/files/136712526/download?download_frd=1)

 

**Part 2**

Spatial Data with ACS

[Introduction to spatial data.Rmd](https://canvas.uw.edu/courses/1692283/files/136712531?wrap=1)[Download Introduction to spatial data.Rmd](https://canvas.uw.edu/courses/1692283/files/136712531/download?download_frd=1)

Looking through the census data, make one thematic heat map of the United States and another of just Washington. I suggest making a map at the county level, but you could experiment with a more disaggregated level at the census tract "tract" or census block group "cbg" levels. Remember that more disaggregated data may result in more NA values and requires taking from the 5-year ACS "acs5" instead of the 1-year.

Write one paragraph that explains each visualization. What is plausibly causing these trends/relationships between the variables?

 

In total, I'm asking for 5 charts: 3 simple plots such as scatterplots, line graph, bar chart, radar chart... and 2 maps one of Washington and one of the US disaggregated to at least the County level. I am also asking for one paragraph for each chart that explains each visualization and provides a plausible explanation for why these trends/relationships exist in the data.

 

Submit both your .Rmd and .html files. 

\-----------------------

Suggested reading:

[Walker Ch 1-3Links to an external site.](https://walker-data.com/census-r/the-united-states-census-and-the-r-programming-language.html)

Some possible inspiration

[https://r-graph-gallery.com/Links to an external site.](https://r-graph-gallery.com/)

Wikipedia to share helpful code and variable IDs from ACS:

[https://docs.google.com/document/d/12wC-nzlQvqF-3_plPwIR7fzzvqI7NLQMt7vPEPEuFB4/edit?usp=sharingLinks to an external site.](https://docs.google.com/document/d/12wC-nzlQvqF-3_plPwIR7fzzvqI7NLQMt7vPEPEuFB4/edit?usp=sharing)

## Lab 8: Census data and tidycensus II

Completion of this assignment will demonstrate competency in the essentials of tidycensus and ggplot.

**Your task is to create 4 visualizations:**

Create two scatter plots of US counties. On both x-axis is percent earning above 100,000 (B19001_014 to B19001_017 and B19001_001) at the county level.

- Figure 1 - percent owning home (B25003_001 & B25003_002)
- Figure 2 - percent African American (B02001_001 & B02001_003)

 

Create a county map of the US with the percent of households earning above 100,000 as the variable coloring each county.


Lastly, recreate this ggplot to the best of your ability (variables: B19001_002 to B19001_017):

*Note: to calculate percent change I use the natural log: log(value2/value1) in R.* 

 

Please write one paragraph for each chart that explains the visualization and provides a plausible explanation for why these trends/relationships exist in the data.

Submit both .Rmd & .html

## Lab 15: PDF Scraping & Introduction to Time Series

Simple demonstration of scraping a pdf and applying text manipulation tools:

[PDF.R](https://canvas.uw.edu/courses/1692283/files/136712533?wrap=1)[Download PDF.R](https://canvas.uw.edu/courses/1692283/files/136712533/download?download_frd=1)

![img](https://prod.ally.ac/static/ally-icon-indicator-medium-circle.c796ae96b97e7e83a1451c8f277544b5.svg)[SeattleMarketRateHousingNeedsAndSupplyAnalysis2021.pdf](https://canvas.uw.edu/courses/1692283/files/136712539?wrap=1)

**Task:** 



Try to scrape another table either from this pdf or another of your choice. Then create one visualization and write one paragraph that explains the visualization and the data. Upload your .Rmd and .html files.

**Required reading:**

Read Ch 1 & 2 from this textbook on forecasting.

[https://otexts.com/fpp2/intro.htmlLinks to an external site.](https://otexts.com/fpp2/intro.html)



{% include course_footer.html %}
