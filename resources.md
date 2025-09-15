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


## Tools and Softwares

- Tidyverse (R)
- Pandas (Python)
- Tableau for Students – a free Tableau license for students
- Tableau Public – a free version of Tableau which publishes to the web
- D3 (JavaScript) - A JavaScript library for data-driven DOM manipulation, interaction and animation. Includes utilities for visualization techniques and SVG generation.
- Altair (Python) - Jupyter-friendly Python API for Vega-Lite
- Seaborn (Python) - Python library with nice defaults, built on top of matplotlib
- Vega-Lite (JavaScript) - A high-level visualization grammar that compiles concise specifications to full Vega specifications.
- GGplot2 (R) - a graphics language for R
- Shiny (R)
- Leaflet - a popular open-source mapping library
- [Adobe Color](http://color.adobe.com/)
- [Viz Palette](https://projects.susielu.com/viz-palette)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/)

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
    <label>
      <input type="checkbox" value="{{ tag }}"> {{ tag }} ({{ count }})
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
