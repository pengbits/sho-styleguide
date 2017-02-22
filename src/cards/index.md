---
name: Cards
collection: components
---

# Cards
Cards provide an abstraction layer for promos - the focus here is on handling how the 
body content is arranged in relation to the container across mobile/desktop contexts. 
Cards are intentionally agnostic about the contents of the body

<article class="card-examples">
  <section class="card-examples__sidebar">
    <h3>Base Card</h3>
    <p>Initial rules common to all cards. By default, a landscape ratio is enforced across all breakpoints. 
      At sm and up, body content is docked to the bottom of container, at xs and below, it  simply stacks underneath.</p>
    <figure class="card">
      <div class="card__mask"></div>
			<figcaption class="card__body">
        body content can be of varying length 
      </figcaption>
    </figure>
    <h3>Landscape -> Square</h3>
    <p>Sets landscape ratio at xs, square at medium and above</p>
    <figure class="card card--landscape-to-square">
      <div class="card__mask"></div>
			<figcaption class="card__body">
        body content can be of varying length
      </figcaption>
    </figure>
    <h3>Square -> Landscape</h3>
    <p>Sets square ratio, landscape at large and above</p>
    <figure class="card card--square-to-landscape">
      <div class="card__mask"></div>
			<figcaption class="card__body">
        body content can be of varying length
      </figcaption>
    </figure>
    <h3>Split Right</h3>
    <p>At sizes medium and below, body content is reduced to 50% and docked to the right</p>
    <figure class="card card--split-right">
      <div class="card__mask"></div>
			<figcaption class="card__body">
        body content can be of varying length
      </figcaption>
    </figure>
    <h3>Split left</h3>
    <p>At sizes medium and below, body content is reduced to 50% and docked to the left</p>
    <figure class="card card--split-left">
      <div class="card__mask"></div>
			<figcaption class="card__body">
        body content can be of varying length
      </figcaption>
    </figure>
    <h3>Sticky</h3>
    <p>Body content is always absolutely positioned, even at smallest breakpoints (used in 3ups below)</p>
    <figure class="card card--sticky">
      <div class="card__mask"></div>
			<figcaption class="card__body">
        body content can be of varying length1
      </figcaption>
    </figure>
  </section>
</article>











