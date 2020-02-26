---
name: Ways To Watch
collection: components
---

# Ways To Watch

The Ways To Watch component includes three sections, which stack vertically on mobile.

<div class="ways-to-watch">
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON SHOWTIME SHOCASE</h4>
		<p class="ways-to-watch__date_time">Monday, Mar 15 at 10PM ET/PT</p>
		<p class="ways-to-watch__copy">NEW: Season 5, Episode 3</p>
		<a class="ways-to-watch__link" href="#">SEE TV SCHEDULE</a>
	</div>
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON DEMAND</h4>
		<p class="ways-to-watch__copy">Watch the latest episodes of Season 5</p>
		<a class="ways-to-watch__link" href="#">SEE SCHEDULE</a>
	</div>
	<div class="ways-to-watch__section ways-to-watch__stream">
		<div class="ways-to-watch__stream__headline">
			<h4 class="ways-to-watch__headline">Watch Episodes Instantly</h4>
		</div>
		<div class="ways-to-watch__stream__button">
			<a class="ways-to-watch__button" href="#">Stream the Series</a>
		</div>
	</div>
</div>

<p>&nbsp;</p>

```
<div class="ways-to-watch">
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON SHOWTIME SHOCASE</h4>
		<p class="ways-to-watch__date_time">Monday, Mar 15 at 10PM ET/PT</p>
		<p class="ways-to-watch__copy">NEW: Season 5, Episode 3</p>
		<a class="ways-to-watch__link" href="#">SEE TV SCHEDULE</a>
	</div>
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON DEMAND</h4>
		<p class="ways-to-watch__copy">Watch the latest episodes of Season 5</p>
		<a class="ways-to-watch__link" href="#">SEE SCHEDULE</a>
	</div>
	<div class="ways-to-watch__section ways-to-watch__stream">
		<div class="ways-to-watch__headline-wrapper ways-to-watch__stream__headline">
			<h4 class="ways-to-watch__headline">Watch Episodes Instantly</h4>
		</div>
		<div class="ways-to-watch__stream__button">
			<a class="ways-to-watch__button" href="#">Stream the Series</a>
		</div>
	</div>
</div>
```

## Alt - Stream module first 

<div class="ways-to-watch ways-to-watch--stream-first">
	<div class="ways-to-watch__section ways-to-watch__stream">
		<div class="ways-to-watch__stream__headline">
			<h4 class="ways-to-watch__headline">Watch Episodes Instantly with Longer Headline</h4>
		</div>
		<div class="ways-to-watch__stream__button">
			<a class="ways-to-watch__button" href="#">Stream the Series</a>
		</div>
	</div>
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON SHOWTIME SHOCASE</h4>
		<p class="ways-to-watch__date_time">Monday, Mar 15 at 10PM ET/PT</p>
		<p class="ways-to-watch__copy">NEW: Season 5, Episode 3</p>
		<a class="ways-to-watch__link" href="#">SEE TV SCHEDULE</a>
	</div>
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON DEMAND</h4>
		<p class="ways-to-watch__copy">Watch the latest episodes of Season 5</p>
		<a class="ways-to-watch__link" href="#">SEE SCHEDULE</a>
	</div>
</div>

<p>&nbsp;</p>

```
<div class="ways-to-watch ways-to-watch--stream-first">
	<div class="ways-to-watch__section ways-to-watch__stream">
		<div class="ways-to-watch__stream__headline">
			<h4 class="ways-to-watch__headline">Watch Episodes Instantly with Longer Headline</h4>
		</div>
		<div class="ways-to-watch__stream__button">
			<a class="ways-to-watch__button" href="#">Stream the Series</a>
		</div>
	</div>
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON SHOWTIME SHOCASE</h4>
		<p class="ways-to-watch__date_time">Monday, Mar 15 at 10PM ET/PT</p>
		<p class="ways-to-watch__copy">NEW: Season 5, Episode 3</p>
		<a class="ways-to-watch__link" href="#">SEE TV SCHEDULE</a>
	</div>
	<div class="ways-to-watch__section">
		<h4 class="ways-to-watch__headline">ON DEMAND</h4>
		<p class="ways-to-watch__copy">Watch the latest episodes of Season 5</p>
		<a class="ways-to-watch__link" href="#">SEE SCHEDULE</a>
	</div>
</div>
```
# W2W v2
As seen on /bulk

This version was created so that:

1) Section 1 can "detach" from the other two on mobile.

2) Logos are aligned vertically on mobile, while also being centered horizontally.

<div class="w2w">
  <div class="w2w__section">
    <div class="w2w__ribbon"></div>
    <div class="w2w__headline">
      <div class="w2w__logo"></div>
    </div>
    <a class="w2w__button button--solid-red" href="/bulk/hotel-app">Learn More</a>
  </div>
  <div class="w2w__section">
    <div class="w2w__headline">
      <div class="w2w__logo"></div>
    </div>
    <a class="w2w__button button--solid-red" href="/bulk/package">Learn More</a>
  </div>
  <!--<div class="w2w__section">
    <div class="w2w__headline">
      <div class="w2w__logo"></div>
    </div>
    <a class="w2w__button button--solid-red" href="/bulk/package">Learn More</a>
  </div>-->
</div>

# Ways to Order

A sister component to the ways-to-watch module that was introduced for the custom wilder vs fury event page
The component shows 3 different device categorys and outlines the ways to order a ppv event on each

<figure class="ways-to-order">
	<h3 class="ways-to-order__headline">
		<i class="icon icon--sho-app-logo"></i> Buy online and stream live from the showtime app on all supported devices
	</h3>
	<div class="ways-to-order__devices-lockup">
		<span class="ways-to-order__devices-lockup__icon"><i class="icon icon--sho-app-logo"></i></span>
		<span class="ways-to-order__devices-lockup__pipe">|</span> 
		<img class="ways-to-order__devices-lockup__image" src="/styleguide/assets/svg/devices-xl-lockup.svg" />
	</div>
	<figcaption class="ways-to-order__body">
		<div class="ways-to-order__device-group">
			<span class="ways-to-order__device-group__icon"><i class="icon icon--devices-xl-tv"></i></span>
			<h3 class="ways-to-order__device-group__name">TV & Streaming Devices</h4>
			<p class="ways-to-order__device-group__devices">Amazon Fire TV, Android TV, Apple TV (3rd Gen+), Chromecast, Roku, Xbox One</p>
		</div>
		<div class="ways-to-order__device-group">
			<span class="ways-to-order__device-group__icon"><i class="icon icon--devices-xl-computer"></i></span>
			<h3 class="ways-to-order__device-group__name">Computer</h4>
			<p class="ways-to-order__device-group__devices">SHOWTIME.com</p>
		</div>
		<div class="ways-to-order__device-group">
			<span class="ways-to-order__device-group__icon"><i class="icon icon--devices-xl-mobile"></i></span>
			<h3 class="ways-to-order__device-group__name">Mobile & Tablet</h4>
			<p class="ways-to-order__device-group__devices">iPhone, iPad, Android phones and tablets, Amazon Fire Tablet (3rd Gen+)</p>
		</div>
	</figcaption>
</figure>

<style>.site-sidebar { display: none }</style>
<jsp-partials>styleguide/ways-to-watch/_ways_to_watch.jsp.md</jsp-partials>

