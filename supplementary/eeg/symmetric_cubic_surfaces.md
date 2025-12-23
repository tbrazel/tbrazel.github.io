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

Some facts about this (data omitted from the table above):
- For each of the 11 groups $G$ *except* $S_5$, we have that $N_{W(E_6)}(G)$ is solvable
- For each of the 11 groups $G$, we have that $C_{W(E_6)}(G)$ is solvable.
- For each of the 11 groups $G$, we have that $N_{W(E_6)}(G)/G$ is solvable.

## Subgroup lattice

Here is the subgroup lattice, where an edge indicates subconjugacy in $$W(E_6)$$.

{% include subgroup_graph.html
   id="deps-graph"
   json="/assets/subgroup_lattices/cubic_surfaces.json"
   width="90%"
   height="65vh"
%}

