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


The primary objective of this course is to familiarize planning students with methods and
techniques they are likely to encounter and use in planning departments and
organizations. Planners must be quite versatile, in that they must be knowledgeable of a
variety of analytical methods, including statistical analysis and techniques, demographic
techniques; economic analysis, project planning techniques, geographical and spatial
analysis techniques and analysis, and various forms of transportation analysis.


Visualize This: The Flowing Data Guide to Design, Visualization, and Statistics. Nathan Yau. 2024. <br>
Data Visualization: A Practical Introduction. Kieran Healy. 2019.
## Schedules
<a href="#recent"><i class="fa-solid fa-square-arrow-up-right" style="color: #000000;"></i> **Go to the recent section**.</a> This schedule is subject to change and please check back regularly for updates. All readings and materials can be directly accessed via the links below, although some may require a UW NetID login. 

{% for module in site.modules %}
{{ module }}
{% endfor %}

{% include course_footer.html %}


