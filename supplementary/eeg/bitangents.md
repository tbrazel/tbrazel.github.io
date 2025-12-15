---
layout: supplementary
title: Symmetric quartics and their bitangents
math: true
---

# Symmetric quartics and bitangents

It is classical that a smooth plane quartic (in fact a general plane quartic) admits 28 *bitangents*, which are lines meeting the quartic at two points, each of order two. This is a classical question in enumerative algebraic geometry, and we can ask how it interacts with symmetries of quartics. Since a plane quartic is a canonical smooth curve of genus 3, its automorphism group lives in $$\text{PGL}_3(\mathbb{C})$$ and therefore acts on the bitangents. There are 12 possible automorphism groups, and their action on the lines was [worked out by me and Candace](https://arxiv.org/abs/2410.09242).

Listed below are the 12 automorphism groups, a picture of the real bitangents where available, and some info about how the group sits inside the Galois group of the problem, which is $$W(E_7)/\pm1$$, or $$\text{PSL}(6,2)$$ if you prefer.

{% include render_table.html
   columns=site.data.supplementary.eeg.quartics.column_data
   rows=site.data.supplementary.eeg.quartics.row_data
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

## On the Galois group
The Galois group of this problem is $$W(E_7)/\pm 1$$. This is a finite group of order 1451520, and it is unsolvable.