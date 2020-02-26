---
name: Call to Actions
collection: components
---

# Call to Actions CTA

A Call to Action is defined as the part of a marketing message that attempts to persuade a person to perform a desired action.

CTA styles typically follow BEM convention and are styled as child elements of parent blocks (i.e ".hero__cta" or ".footer-schedule__cta") Icons are defined in :before or :after psuedo-elements by including icon mixins.
<br/><br/>

<a class="hero__cta" href="">Watch the Series Premiere for Free</a>

```
<!-- HTML -->
<section class="hero">
	<a class="hero__cta" href="">Watch the Season 1 Premiere for Free</a>
</section>

//SASS 
.hero__cta {
  @include body-text;
  @include upcase;
  @include cta;

  &:after {
    @include icon;
    @include icon-image('next');
    margin-right: -$size-xl;
  }
}
```
<br/>


<div class="footer-schedule" style="float:none; background-color:#C9141F;" >
		<a class="footer-schedule__cta" style="float:none; background-color:#C9141F;" href="">See Schedule</a>
</div>

```
<!-- HTML -->
<section class="footer-schedule">
	<a class="footer-schedule__cta" href="">See Schedule</a>
</section>

//SASS
.footer-schedule {
	&__cta {
		@include upcase;
		@include header--delta;
		margin-bottom: $size-l;
		color: $colors-dark-red;

		@include from-medium {
			@include font(16, 20);
			float:left;
			padding-left: 3.47826%;
			border-left: $size-xxs * 2 solid $colors-dark-red;
		}
	}

	&__cta:after {
		@include icon('next-dark-grey','small');
		margin-left: $size-xs;
		content: "";
		opacity: .4;
	}
}
```
<br/>


In previous versions of sho.com, CTAs were styled by specified CTA classes, rather than following the new BEM convention. A few of these classes still remain in use.
<br/><br/>

<div class="cta-example">
	<a href=""><h5 class="cta--prev cta--white header--epsilon">Main Page</h5></a>
</div>

```
<div class="cta-example">
	<a href=""><h5 class="cta--prev cta--white header--epsilon">Main Page</h5></a>
</div>
```
*sho.com/bulk/hotel-app
<br/><br>

<div class="cta-example">
	<a href=""><h5 class="cta--next header--epsilon upcase">Click here to enter youe showtime gift code</h5></a>
</div>

```
<div class="cta-example">
	<a href=""><h5 class="cta--next header--epsilon upcase">Click here to enter youe showtime gift code</h5></a>
</div>
```
*sho.com/gift-cards
<br/><br>


<div class="cta-example">
	<a href=""><h5 class="cta--item cta--video header--epsilon ">Watch a Trailer</h5></a>
</div>

```
<div class="cta-example">
	<a href=""><h5 class="cta--item cta--video header--epsilon ">Watch a Trailer</h5></a>
</div>
```
*sho.com/titles/3455552/the-dark-tower
<br/><br>

<div class="cta-example">
	<a href=""><h5 class="cta--item cta--gallery header--epsilon ">View Photos</h5></a>
</div>

```
<div class="cta-example">
	<a href=""><h5 class="cta--item cta--gallery header--epsilon ">View Photos</h5></a>
</div>
```
*sho.com/our-cartoon-president/season/1/episode/1/state-of-the-union
<br/><br>

