---
layout: page
icon: fas fa-file-pen
order: 4
math: true
---
Here are some notes, generally from various math talks. Be aware the quality of the note may experience exponential decay as you scroll back in time. If you find any typos or have any comments or suggestions please send me an email!



## Course notes
{% assign course_notes = site.data.notes | where: "type", "course notes" %}
{% include notes.html notes=course_notes %}

## Other notes
{% assign other_notes = site.data.notes | where_exp: "note", "note.type != 'course notes'" %}
{% include notes.html notes=other_notes %}

