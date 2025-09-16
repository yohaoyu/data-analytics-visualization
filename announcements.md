---
layout: minimal
title: Announcements
nav_exclude: true
description: A feed containing all of the class announcements.
---

{% include course_header.html %}

# Announcements

A place for all class announcements. All announcements will also be published on Ed Discussion.

---

{% assign announcements = site.announcements | sort: "date" | reverse %}

{% for announcement in announcements %}
<div class="announcement">
  <div class="announcement-left">
    <p>{{ announcement.date | date: "%B %d, %Y" }}</p>
  </div>
  <div class="announcement-right announcement-body">
    <div style="text-transform: uppercase; font-weight: 600;">
      {{ announcement.title }}
    </div>
    {{ announcement.content | markdownify }}
  </div>
</div>

---
{% endfor %}



{% include course_footer.html %}