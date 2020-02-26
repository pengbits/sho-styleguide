---
name: Headers
collection: components
---

# Headers

## Section Headers

A section header provides context for a section of content or collection of promos. It may contain a sub-headline or a link to another page. Note that the class name section--black is purely used for display purposes here and should not be used unless absolutely necessary out in the wild.

### Section Header - Basic

<section class="section section--black">
	<h3 class="section-header">The Entire Showtime Library</h3>
</section>

```
<section class="section section--black">
	<h3 class="section-header">...</h3>
	...
```

### Section Header - With More Link

<section class="section section--black">
	<a href="#"><h3 class="section-header section-header--more">See All Movies</h3></a>
</section>

```
<section class="section section--black">
	<a href="#"><h3 class="section-header section-header--more">...</h3></a>
	...
```

### Section Header - With Bottom Border

<section class="section section--black">
	<h3 class="section-header section-header--border">Cast & Characters</h3>
</section>

```
<section class="section section--black">
	<h3 class="section-header section-header--border">...</h3>
	...
```

## Promo Group Header

A promo group header provides context to a group of promos. It may have a sub-caption and a flourish/accent-mark similar to the hero

<section class="section section--black">
  <div class="promo-group-header">
  	<h3 class="promo-group-header__title">New Episodes Coming Soon</h3>
  	<h4 class="promo-group-header__sub-title">5 Shows</h4>
  </div>
</section>

```
<section class="section section--black">
  <div class="promo-group-header">
  	<h3 class="promo-group-header__title">New Episodes Coming Soon</h3>
  	<h4 class="promo-group-header__sub-title">5 Shows</h4>
  </div>
</section>
```


## Promo Group Header with large
A promo group header provides context to a group of promos. This variant was used in the sports page above See All fights.

<section class="section section--black">
  <div class="promo-group-header">
  	<h3 class="promo-group-header__title promo-group-header__title--large">Showtime Boxing</h3>
   	<a class="section-header section-header--more" href="/sports" data-track data-label="view all">
	  See All Fights
	  </a>
  </div>
</section>

```
<section class="section section--black">
  <div class="promo-group-header">
  	<h3 class="promo-group-header__title promo-group-header__title--large">Showtime Boxing</h3>
   	<a class="section-header section-header--more" href="/sports" data-track data-label="view all">
	  See All Fights
	  </a>
  </div>
</section>
```

## Promo Group Header without Accent

<section class="section section--black">
	<div class="promo-group-header promo-group-header--no-accent">
    <h3 class="promo-group-header__title">Order the Fight on Pay-Per-View</h3>
    <h4 class="promo-group-header__sub-title upcase">Visit your participating partner website for event availability</h4>
  </div>
</section>

```
<section class="section section--black">
	<div class="promo-group-header promo-group-header--no-accent">
    <h3 class="promo-group-header__title">Order the Fight on Pay-Per-View</h3>
    <h4 class="promo-group-header__sub-title upcase">Visit your participating partner website for event availability</h4>
  </div>
</section>
```


## Promo Group Header with Callout

<section class="section section--black">
	<div class="promo-group-header promo-group-header--no-accent promo-group-header--with-callout">
		<h3 class="promo-group-header__title">Other Ways to Buy  <em class="promo-group-header__callout">(Prices Vary)</em></h3>
	</div>
</section>

```
<section class="section section--black">
	<div class="promo-group-header promo-group-header--no-accent promo-group-header--with-callout">
		<h3 class="promo-group-header__title">Other Ways to Buy  <em class="promo-group-header__callout">(Prices Vary)</em></h3>
	</div>
</section>
```

## Promo Group Header with Callout in Sub-Title

<section class="section section--black">
	<div class="promo-group-header promo-group-header--no-accent promo-group-header--with-callout">
		<h3 class="promo-group-header__title">Streaming</h3>
		<h3 class="promo-group-header__sub-title">Buy online for $74.99 and stream on all your devices <em class="promo-group-header__callout">(Varies by Partner)</em></h3>              
	</div>
</section>

```
<section class="section section--black">
	<div class="promo-group-header promo-group-header--no-accent promo-group-header--with-callout">
		<h3 class="promo-group-header__title">Streaming</h3>
		<h3 class="promo-group-header__sub-title">Buy online for $74.99 and stream on all your devices <em class="promo-group-header__callout">(Varies by Partner)</em></h3>              
	</div>
</section>
```