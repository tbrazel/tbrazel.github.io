---
layout: supplementary
title: Symmetric cubic surfaces
math: true
---

# Symmetric cubic surfaces

{% include render_table.html
   columns=site.data.supplementary.eeg.cubic_surfaces.column_data
   rows=site.data.supplementary.eeg.cubic_surfaces.row_data
   sort_by="id"
%}


## Subgroup lattice

Here is the subgroup lattice, where an edge indicates subconjugacy in $$W(E_6)$$.

{% include subgroup_graph.html
   id="deps-graph"
   json="/assets/subgroup_lattices/cubic_surfaces.json"
   width="90%"
   height="65vh"
%}