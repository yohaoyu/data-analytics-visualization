---
layout: minimal
title: Data Analytics and Visualization
nav_exclude: True
permalink: /:path/
seo:
  type: Course
  name: Just the Class
search_enabled: true
---

{% include course_header.html %}

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

<!--## Table of Contents
{: .no_toc}

1. TOC
{:toc}

## Announcements

Newest announcements below and check [all announcements](announcements.md).
{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% break %}
{% endfor %}-->


Real estate decision making requires the assessment of interdisciplinary datasets, which include socioeconomic, financial, and environmental data. Determining evolving patterns, analyzing and visualizing them is critical in holistically assessing an area and a real estate decision to be made. This course aims to provide you an opportunity to improve your coding ability and demonstrate that using [R](https://www.r-project.org) is more replicable and efficient than Excel.

We will work in groups to solve tricky data analytics & visualization problems. Of course, we will encounter a lot of new commands and new ways of thinking about how data is organized. However, we will most importantly learn how to understand the process of data analysis and how to best inform our audience and honestly describe the underlying data. The course is developed based materails from [Dr. Feiyang Sun at UC San Diego](https://fsun.ucsd.edu/), Siman Ning and Christian Phillips. 

## Schedules
<a href="#recent"><i class="fa-solid fa-square-arrow-up-right" style="color: #000000;"></i> **Go to the recent section**.</a> This schedule is subject to change and please check back regularly for updates. All readings and materials can be directly accessed via the links below, although some may require a UW NetID login. Some readings and links about R/coding are on each lab session page.

{% for module in site.modules %}
{{ module }}
{% endfor %}

{% include course_footer.html %}


