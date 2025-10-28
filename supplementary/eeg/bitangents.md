---
layout: default
title: Symmetric quartics and their bitangents
---

[back to all EEG data]({% link supplementary/eeg.md %}).

{% include render_table.html
   columns=site.data.eeg.quartics.column_data
   rows=site.data.eeg.quartics.row_data
   sort_by="id"
%}

## Subgroup lattice

Here is the subgroup lattice, where an edge indicates subconjugacy in $$\text{PGL}_3(\mathbb{C})$$. I haven't computed that this is the same as $$W(E_7)/\pm1$$ subconjugacy in each of these cases.

{% include subgroup_graph.html
   id="deps-graph"
   json="/assets/subgroup_lattices/quartics.json"
   width="90%"
   height="65vh"
%}
