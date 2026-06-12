---
layout: supplementary
title: Symmetric quartics and their bitangents
math: true
---

# Symmetric quartics and bitangents

It is classical that a smooth plane quartic (in fact a general plane quartic) admits 28 *bitangents*, which are lines meeting the quartic at two points, each of order two. This is a classical question in enumerative algebraic geometry, and we can ask how it interacts with symmetries of quartics. Since a plane quartic is a canonical smooth curve of genus 3, its automorphism group lives in $$\text{PGL}_3(\mathbb{C})$$ and therefore acts on the bitangents. There are 12 possible automorphism groups, and their action on the lines was [worked out by myself and Candace](https://arxiv.org/abs/2410.09242).

The Galois group of the bitangents to a smooth planar quartic differs from the Weyl group of $$E_7$$ by order 2. Explicitly, by presenting the group $$W(E_7)$$ in $$\text{GL}_7(\mathbb{Z})$$ in terms of the $$E_7$$ root lattice, we can consider the determinant map $$\text{det} : W(E_7) \to \{+1,-1\}$$. The kernel is denoted $$W^+(E_7)$$, and the determinant is split by the inclusion of $$-I_7$$, hence we obtain an isomorphism
$$W(E_7) \cong W^+(E_7)\times \{+1,-1\}$$. The Galois group of bitangents is this group $$W^+(E_7)$$, which admits an exceptional isomorphism $$W^+(E_7) \cong \text{Sp}_6(\mathbb{F}_2)$$.

Listed below are the 12 automorphism groups, a picture of the real bitangents where available, and some info about how the group sits inside the Galois group of the problem.

{% include render_table.html
   columns=site.data.supplementary.eeg.quartics.column_data
   rows=site.data.supplementary.eeg.quartics.row_data
   sort_by="id"
%}

## A presentation of the group
By Harris, the Galois group of the 28 bitangents to a plane cubic curve is isomorphic to the symplectic group of $$6\times 6$$ matrices over the finite field $$\mathbb{F}_2$$. This can be presented in e.g. Sage as:
```
Sp62 = MatrixGroup([
   matrix(GF(2),[
         [1, 0, 1, 0, 0, 1],
         [0, 1, 0, 0, 0, 0],
         [0, 0, 1, 0, 0, 0],
         [0, 0, 0, 1, 0, 1], 
         [0, 0, 0, 0, 1, 0], 
         [0, 0, 0, 0, 0, 1]
         ]),
   matrix(GF(2),[
      [0, 0, 0, 1, 0, 0], 
      [1, 0, 0, 0, 0, 0], 
      [0, 1, 0, 0, 0, 0], 
      [0, 0, 0, 0, 1, 0], 
      [0, 0, 0, 0, 0, 1], 
      [0, 0, 1, 0, 0, 0]
      ])
])
```

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