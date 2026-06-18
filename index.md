---
layout: page
# Index page
math: true
---

# About

I am a mathematician, working in enumerative algebraic geometry and homotopy theory. This fall, I am an Uhlenbeck Postdoc at the [SLMath program on motivic homotopy theory](https://www.slmath.org/programs/384){:target="_blank"}. Starting in Spring 2027, I will be an Assistant Professor at Vanderbilt University. 
<!-- I completed my PhD in 2023, co-advised by [Mona Merling](https://www2.math.upenn.edu/~mmerling/){:target="_blank"} and [Kirsten Wickelgren](https://sites.math.duke.edu/~kgw/index.html){:target="_blank"}. -->

My CV is [here](/assets/misc/CV.pdf).

## Mathematical interests

I work primarily in enumerative geometry, which is the science of counting geometric objects satisfying some geometric conditions. My background is in homotopy theory and algebraic geometry. Broadly speaking I like anything in geometry that I can enumerate, solve, and visualize. More about my research [here](/research/)

<div class="image-row">
  <figure>
    <img src="/assets/images/research/clebsch-s4.gif" alt="Lines on Clebsch">
    <figcaption>Lines on the Clebsch cubic surface with their $S_4$ symmetries</figcaption>
  </figure>

  <figure>
    <img src="/assets/images/research/IV_max.png" alt="Description of second image">
    <figcaption>Symmetries of the 28 bitangents to an Edge quartic</figcaption>
  </figure>

  <figure>
    <img src="/assets/images/research/29_web.gif" alt="Description of third image">
    <figcaption>An $\text{SL}_3$-web emerging from the geometry of maximally inflected quintics, c/o Frank Sottile</figcaption>
  </figure>
</div>

<style>
.image-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.25rem 0;
}

.image-row figure {
  margin: 0;
  text-align: center;
}

.image-row img {
  width: 100%;
  height: auto;
  border-radius: 6px;
}

.image-row figcaption {
  margin-top: 0.35rem;
  font-size: 0.85rem;
  color: var(--text-muted-color);
}

@media (max-width: 768px) {
  .image-row {
    grid-template-columns: 1fr;
  }
}
</style>
<script>
  document.querySelectorAll('.image-row a.popup').forEach((link) => {
    link.replaceWith(...link.childNodes);
  });
</script>

