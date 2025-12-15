---
layout: page
icon: fas fa-chalkboard
order: 3
---

## Current courses

{% assign current_courses = site.data.teaching | where_exp: "course", "course.year == 2026 and course.semester == 'Spring'"%}
{% include teaching.html classes=current_courses %}

## Previous courses

{% assign prev_courses = site.data.teaching | where_exp: "course", "course.year != 2026 or course.semester != 'Spring'"%}

{% include teaching.html classes=prev_courses %}
