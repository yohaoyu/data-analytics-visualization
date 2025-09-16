---
layout: minimal
title: Announcements
nav_exclude: true
description: A feed containing all of the class announcements.
---

{% include course_header.html %}

# Announcements

{% assign announcements = site.announcements | sort: "date" | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}

{% include course_footer.html %}



