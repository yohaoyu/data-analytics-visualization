---
layout: minimal
title: Resources
description: Resources.
---




<button id="toc-toggle"><i class="fa-solid fa-bars"></i></button>
1. TOC
{:toc}

{% include course_header.html %}
# Resources
{:.no_toc}

## Reference Text
- [Real Estate Analysis in the Information Age: Techniques for Big Data and Statistical Modeling]({{ site.baseurl }}/re-in-information-age) - by Kimberly Winson-Geideman, Andy Krause, Clifford A. Lipscomb, Nick Evangelopoulos (2018).
- [Visualize This: The FlowingData Guide to Design, Visualization, and Statistics](https://www.wiley.com/en-us/Visualize+This%3A+The+FlowingData+Guide+to+Design%2C+Visualization%2C+and+Statistics%2C+2nd+Edition-p-9781394214860) - by Nathan Yau (2024)
- [Data Visualization: A Practical Introduction](https://press.princeton.edu/books/hardcover/9780691181615/data-visualization?srsltid=AfmBOoogKnXuOrY1HeepuYDVq4UVDMgUn_wpWWyQpNY18sIJFCrxYY9p) - by Kieran Healy (2019)
- [Modern Data Science with R](https://mdsr-book.github.io/mdsr3e/) - by Benjamin S. Baumer, Daniel T. Kaplan, and Nicholas J. Horton (2024)
- [Posit Cheatsheets for R](https://posit.co/resources/cheatsheets/)
    - [RStudio IDE]({{ site.baseurl }}/assets/pdfs/rstudio-ide.pdf)
    - [rmarkdown]({{ site.baseurl }}/assets/pdfs/rmarkdown.pdf)
    - [Data import with the tidyverse]({{ site.baseurl }}/assets/pdfs/data-import.pdf)
    - [Data transformation with dplyr]({{ site.baseurl }}/assets/pdfs/data-transformation.pdf)
    - [Data tidying with tidyr]({{ site.baseurl }}/assets/pdfs/tidyr.pdf)
    - [Data visualization with ggplot2]({{ site.baseurl }}/assets/pdfs/data-visualization.pdf)
    - [Shiny]({{ site.baseurl }}/assets/pdfs/shiny.pdf)



    
    

## Tools and Softwares

- [Tidyverse (R)](https://www.tidyverse.org) - a collection of R packages designed for data science
- [ggplot2 (R)](https://ggplot2.tidyverse.org) - a graphics language for R
- [Shiny (R)](https://shiny.posit.co) - R package to create interactive web applications 
- [Pandas (Python)](https://pandas.pydata.org) - a package data for manipulation and analysis in Python
- [Matplotlib (Python)](https://matplotlib.org) - free library for visualizations in Python
- [Vega-Altair (Python)](https://altair-viz.github.io) - Jupyter-friendly Python API for Vega-Lite
- [Seaborn (Python)](https://seaborn.pydata.org) - a package for statistical data visualization, built on top of matplotlib
- [Tableau for Students](https://www.tableau.com/academic/students) – a free Tableau license for students
- [Tableau Public](https://public.tableau.com/app/discover) – a free platform to explore, create, share data visualizations, and connect with data analysts worldwide.
- [Adobe Color](http://color.adobe.com/) - free color palette generator
- [Viz Palette](https://projects.susielu.com/viz-palette) - picking colors for data visualizations
- [Visual Studio Code](https://code.visualstudio.com/) - a popular integrated development environment (IDE) and code editor
- [Anaconda](https://www.anaconda.com) - platform for data science, simplifying the development and deployment of projects
- [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/) - command-line shells for Windows
- [GitHub](https://github.com) - a developer platform to create, store, manage, and share code

## Datasets

<div id="tag-filters">
  {% assign all_tags = "" | split: "" %}
  {% for item in site.data.resources %}
    {% if item.tags and item.tags.size > 0 %}
      {% assign all_tags = all_tags | concat: item.tags %}
    {% endif %}
  {% endfor %}
  {% assign unique_tags = all_tags | uniq | sort %}

  {% for tag in unique_tags %}
    {% assign count = 0 %}
    {% for t in all_tags %}
      {% if t == tag %}
        {% assign count = count | plus: 1 %}
      {% endif %}
    {% endfor %}
    <label style="display:inline-flex; align-items:center; white-space:nowrap; margin-right:6px;">
    <input type="checkbox" value="{{ tag }}">
    <span style="margin-left:4px;">{{ tag }}</span>
    <span style="color:#888; font-size:0.75em; margin-left:2px;">({{ count }})</span>
    </label>
  {% endfor %}
</div>

<p><strong style="font-weight: 500;">Please filter the tags you’d like to use and review the details of each dataset. Let me know if you notice any issues.</strong></p>

<!-- Dataset list -->
<ul id="dataset-list">
  {% assign sorted_resources = site.data.resources | sort: "name" %}
  {% for item in sorted_resources %}
    <li class="dataset"
        data-tags='{{ item.tags | jsonify }}'>
      <a href="{{ item.link }}">{{ item.name }}</a>
      {% if item.tags %}
        <span class="tags">[{{ item.tags | join: ', ' }}]</span>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<script>
    document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('#tag-filters input[type="checkbox"]');
    const datasets = document.querySelectorAll('#dataset-list .dataset');

    function getTags(el) {
        try {
        return JSON.parse(el.getAttribute('data-tags') || '[]').map(t => t.toLowerCase());
        } catch (e) {
        return [];
        }
    }

    function update() {
        const active = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.toLowerCase());

        datasets.forEach(ds => {
        const tags = getTags(ds);
        const show = active.every(a => tags.includes(a));
        ds.style.display = active.length === 0 || show ? '' : 'none';
        });
    }

    checkboxes.forEach(cb => cb.addEventListener('change', update));
    update();
    });
</script>


{% include course_footer.html %}
