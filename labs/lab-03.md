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

## 

## Part B - Descriptive Statistics and Tables

Using the National Mortgage Database data create a very pretty table of descriptive statistics using any table package. I suggest either looking at the **Outstanding Residential Mortgage Statistics** for **States** or **Residential Mortgage Performance Statistics** for **States.**

[https://www.fhfa.gov/data/national-mortgage-database-aggregate-statisticsLinks to an external site.](https://www.fhfa.gov/data/national-mortgage-database-aggregate-statistics)

In your table, show basic summary statistics such as mean, median, min/max, 25th/75th percentiles, for both Washington and the rest of the US. 

Additionally, create 3-4 ggplots that would make sense to view side by side in a grid and try to make the plots in the grid connect together (ex. similar legend, color scheme, title) as well as tell an interesting story. You may want to connect state-level statistics from ACS with the NMDB data (make sure you are comparing data from the same year). 

Be sure to review the technical documentation to understand what the statistics represent. You will likely need to filter or pivot_wider() the data since it is in a long format. 

Add one paragraph explaining your table and charts.

\-----

Helpful resources:

[https://rfortherestofus.com/2019/11/how-to-make-beautiful-tables-in-rLinks to an external site.](https://rfortherestofus.com/2019/11/how-to-make-beautiful-tables-in-r)

[https://epirhandbook.com/new_pages/tables_descriptive.htmlLinks to an external site.](https://epirhandbook.com/new_pages/tables_descriptive.html)

[https://r-graph-gallery.com/table.htmlLinks to an external site.](https://r-graph-gallery.com/table.html)

Multiple plots next to each other:

[https://cran.r-project.org/web/packages/gridExtra/vignettes/arrangeGrob.htmlLinks to an external site.](https://cran.r-project.org/web/packages/gridExtra/vignettes/arrangeGrob.html)

[https://rfortherestofus.com/2021/11/multicolumnLinks to an external site.](https://rfortherestofus.com/2021/11/multicolumn)

Facets (Creating multiple plots split by one categorical variable):

[https://bookdown.org/yih_huynh/Guide-to-R-Book/facet-wrapping.htmlLinks to an external site.](https://bookdown.org/yih_huynh/Guide-to-R-Book/facet-wrapping.html)




{% include course_footer.html %}
