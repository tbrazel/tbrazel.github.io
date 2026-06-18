---
layout: page
icon: fas fa-flask-vial
order: 2
math: true
---

<link rel="stylesheet" href="{{ '/assets/css/publication_list_style.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/research_summary.css' | relative_url }}">


<div class="research-tabs">
  <input type="radio" id="for-non-mathematicians" name="research-topic" checked>
  <input type="radio" id="for-experts" name="research-topic">
  

  <div class="research-tab-list" aria-label="Research topics">
    <label for="for-non-mathematicians">For non-mathematicians</label>
    <label for="for-experts">For mathematicians</label>
    
  </div>

  <div class="research-tab-panels">
    <section class="research-tab-panel for-non-mathematicians">
      <p>Ancient Greek geometers were interested in <i>counting</i> solutions to geometric problems. For instance, a problem (dating back to Apollonius in ~200BC) is the following: if we draw three circles on a piece of paper, how many other circles can we draw which are tangent to all three? The answer is 8:
      </p>

      <div class="research-image-pair">
        <div
          role="img"
          aria-label="Animated diagram of circles and marked points"
          style="background-image: url('/assets/images/research/app1.png');"
        ></div>
        <div
          role="img"
          aria-label="Diagram of a real plane curve with many tangent lines"
          style="background-image: url('/assets/images/research/app2.png');"
        ></div>
      </div>
      The study of problems of this flavor is a subfield of mathematics called <b>enumerative geometry</b>. Attached to any enumerative geometry problem is a slew of other questions you can ask -- for instance the <i>Galois group</i> of the problem governs the complexity of solving for the equations of the purple circles, provided you have the equations for the black circles in hand. Throughout the 19th century, mathematicians laid the framework for investigating <i>solvability</i> of these types of problems: if you are given the equations for the black circles, can you solve for the equations of the purple circles, using only basic arithmetic (addition and multiplication) as well as square roots, cube roots, fourth roots, etc?<br>
      
      The problem above is solvable (yay!) but there exist <b>unsolvable</b> problems. One of the first unsolvable problems in enumerative geometry originated from an 1849 paper: it is the problem of solving for the equations of the "27 lines on a cubic surface." A <i><a href="https://en.wikipedia.org/wiki/Cubic_surface" target="_blank">cubic surface</a></i> is a shape which is (in a sense that can be made precise) the very next shape you might discover after already discovering a flat plane and a cone:
      <div class="research-image-strip">
        <figure>
          <div
            class="research-image-thumb"
            role="img"
            aria-label="rotating plane"
            style="background-image: url('/assets/images/research/01_rotating_plane.gif');"
          ></div>
          <figcaption>A plane</figcaption>
        </figure>
        <figure>
          <div
            class="research-image-thumb"
            role="img"
            aria-label="rotating cone"
            style="background-image: url('/assets/images/research/02_rotating_tilted_cone.gif');"
          ></div>
          <figcaption>A cone</figcaption>
        </figure>
        <figure>
          <div
            class="research-image-thumb"
            role="img"
            aria-label="rotating cubic surface"
            style="background-image: url('/assets/images/research/03_rotating_cubic_surface.gif');"
          ></div>
          <figcaption>A cubic surface</figcaption>
        </figure>
        <figure>
          <div
            class="research-image-thumb"
            role="img"
            aria-label="rotating cubic surface with lines"
            style="background-image: url('/assets/images/research/04_clebsch_cubic_with_27_lines.gif');"
          ></div>
          <figcaption>A cubic surface with its 27 lines</figcaption>
        </figure>
      </div>
      This problem is <i>not solvable</i>, meaning if you are only handed the equation for the cubic surface, you should not expect to be able to write down the equations for the 27 lines using only square roots, cube roots, etc. You necessarily need some more complicated algebraic operations.<br>

      My current research focuses on how <i>symmetries</i> in enumerative geometry problems manifest in the solutions and affect the solvability of these classical problems. Upcoming work proves that for a few classical unsolvable problems, any amount of symmetry can make them solvable! Once you know solvability, it becomes much easier to animate geometric problems as the initial parameters change. See an amazing <a href="https://www.shadertoy.com/view/3ctyzS">shadertoy visualization</a> made by <a href="https://claudiojacobo.com/">Claudio Gómez-Gonzáles</a> <a href="https://ruppec.github.io/2026mathcomps/posts/symmetric_cubics/" target="_blank">and his students Katie Hess and Charlie Ruppe</a>, which animates the lines on a special family of symmetric cubic surfaces called $S_4$-symmetric cubic surfaces. 
      This animation is based on <a href="/assets/papers/K4.pdf" target="_blank">a recent paper</a> of myself and <a href="https://www.svraman.com/" target="_blank">Sidhanth Raman</a>, where we proved the problem of finding the lines on these special cubic surfaces is solvable, even though the classical problem is not.<br>
      <b>tl;dr</b>: my research is about when symmetry makes unsolvable geometric problems solvable
    </section>
    <section class="research-tab-panel for-experts">
      <p>I work primarily in applications of motivic and equivariant homotopy theory to enumerative algebraic geometry. In graduate school I worked a lot on the theory of $\mathbb{A}^1$-Brouwer degrees, developing tractable formulas, expanding their scope, and making them <a href="https://macaulay2.com/doc/Macaulay2/share/doc/Macaulay2/A1BrouwerDegrees/html/index.html" target="_blank">available to computer algebra software</a>. I am broadly interested in the Levine-Wickelgren-et. al. program of $\mathbb{A}^1$<i>-enumerative geometry</i>, which leverages tools from motivic homotopy theory to "count" solutions to enumerative geometry problems over arbitrary fields using quadratic forms. I proved an equivariant enhancement of the Poincaré-Hopf theorem from differential topology, which allows for an equivariant enrichment of Euler classes using homotopical bordism $\text{MU}_G$. This provides an equivariant version of Schubert's principal of conservation of number, and states (roughly) that the solutions to any two $G$-equivariant instantiations of an enumerative problem are in $G$-equivariant bijection; that is, symmetries are conserved.</p>

      <figure class="research-centered-figure">
        <div
          class="research-centered-image"
          role="img"
          aria-label="Visualization of algebraic surfaces and lines"
          style="background-image: url('/assets/images/research/clebsch-s4.gif');"
        ></div>
        <figcaption>Any two cubic surfaces defined by symmetric polynomials have the same $S_4$-symmetry on their lines. Moreover these lines are solvable <a href="/assets/papers/K4.pdf" target="_blank">using only two radicals</a></figcaption>
      </figure>

      <p>My ongoing research has been on how this affects solvability of the Galois/monodromy groups of these problems, in the sense of Hermite and Harris. This particular kind of problem can be attacked with tools ranging from Hodge theory and hyperbolic geometry, to computer-aided numerical algebraic geometry, to the theory of stacks.</p>

      <p>In general I like anything geometric, with pictures, which is accessible for coding.</p>
    </section>
  </div>
</div>


## Preprints
{% assign preprints = site.data.publications | where_exp: "pub", "pub.status != 'published' and pub.status != 'to appear'" %}
{% include publications.html pubs=preprints %}

## Publications
{% assign pubs = site.data.publications | where_exp: "pub", "pub.status == 'published' or pub.status == 'to appear'" %}
{% include publications.html pubs=pubs %}

## Software
- [`CpMackeyFunctors.m2`](https://macaulay2.com/doc/Macaulay2/share/doc/Macaulay2/CpMackeyFunctors/html/index.html){:target="_blank"}, a Macaulay2 package for doing homological algebra computations with $C_p$-Mackey functors. With D. Chan, B. Mudrak, C. Vogeli, C. Wang, M. Zeng, S. Zotine.
- [`A1BrouwerDegrees.m2`](https://macaulay2.com/doc/Macaulay2/share/doc/Macaulay2/A1BrouwerDegrees/html/index.html){:target="_blank"}, a Macaulay2 package for computing local and global $\mathbb{A}^1$-Brouwer degrees, and manipulating the associated symmetric bilinear forms. With N. Borisov, F. Espino, T. Hagedorn, Z. Han, J. Lopez Garcia, J. Louwsma, G. Ong, and A. Tawfeek.



<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>
