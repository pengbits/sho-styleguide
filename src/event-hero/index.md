---
name: Event Hero
collection: components
---

# Event Hero

### pre event (includes countdown widget)

<div class="event-hero lazyload" data-bgset="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png [--from-medium]">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2018-01-16T21:00-0500" data-title="Countdown"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
			<h1 class="event-hero__title">Wilder vs. Szpilka</h1>
			<h3 class="event-hero__sub-title">Saturday, March 5th</h3>
			<div class="event-hero__detail">
				<h4 class="event-hero__detail-title">Main Card</h4>
				<p class="event-hero__detail-info">10 pm on SHOWTIME</p>
			</div>
			<div class="event-hero__detail">
				<h4 class="event-hero__detail-title">Under Card</h4>
				<p class="event-hero__detail-info">11 pm on SHO EXTREME</p>
			</div>
			<p class="event-hero__description">Undefeated world champion Deontay 'Bronze Bomber' Wilder defends his heavyweight title against Polish bad boy - and fellow knockout artist - southpaw Artur Szpilka. Live from Brooklyn's Barclays Center.</p>
        </div>
		<div class="countdown-widget js-countdown-widget" data-date="2018-01-16T21:00-0500" data-title="Countdown"></div>
	</div>
</div>

```html
<div class="event-hero">
	<img class="event-hero__bg" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2018-01-16T21:00-0500" data-title="Countdown"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
			<h1 class="event-hero__title">Wilder vs. Szpilka</h1>
			<h3 class="event-hero__sub-title">Saturday, March 5th</h3>
			<div class="event-hero__detail">
				<h4 class="event-hero__detail-title">Main Card</h4>
				<p class="event-hero__detail-info">10 pm on SHOWTIME</p>
			</div>
			<div class="event-hero__detail">
				<h4 class="event-hero__detail-title">Under Card</h4>
				<p class="event-hero__detail-info">11 pm on SHO EXTREME</p>
			</div>
			<p class="event-hero__description">Undefeated world champion Deontay 'Bronze Bomber' Wilder defends his heavyweight title against Polish bad boy - and fellow knockout artist - southpaw Artur Szpilka. Live from Brooklyn's Barclays Center.</p>
        </div>
		<div class="countdown-widget js-countdown-widget" data-date="2018-01-16T21:00-0500" data-title="Countdown"></div>
	</div>
</div>
```

### post event (countdown widget disappears; optionally has a stream button)

<div class="event-hero lazyload" data-bgset="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png [--from-medium]">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2016-01-16T21:00-0500"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
			<h1 class="event-hero__title">Wilder vs. Szpilka</h1>
			<h3 class="event-hero__sub-title">Saturday, March 5th</h3>
          	<div class="event-hero__detail">
             	<h4 class="event-hero__detail-title">Replay</h4>
              	<p class="event-hero__detail-info">March 21st at 11 pm on SHO EXTREME</p>
          	</div>
			<p class="event-hero__description">Undefeated world champion Deontay 'Bronze Bomber' Wilder defends his heavyweight title against Polish bad boy - and fellow knockout artist - southpaw Artur Szpilka. Live from Brooklyn's Barclays Center.</p>
			<!-- stream button -->
			<a class="button--fixed-width button--solid-red" href="#">
			Stream This Event
			</a>
        </div>
		<div class="countdown-widget js-countdown-widget" data-date="2016-01-16T21:00-0500"></div>
	</div>
</div>

```html
<div class="event-hero">
	<img class="event-hero__bg" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2016-01-16T21:00-0500"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="https://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
			<h1 class="event-hero__title">Wilder vs. Szpilka</h1>
			<h3 class="event-hero__sub-title">Saturday, March 5th</h3>
          	<div class="event-hero__detail">
             	<h4 class="event-hero__detail-title">Replay</h4>
              	<p class="event-hero__detail-info">March 21st at 11 pm on SHO EXTREME</p>
          	</div>
			<p class="event-hero__description">Undefeated world champion Deontay 'Bronze Bomber' Wilder defends his heavyweight title against Polish bad boy - and fellow knockout artist - southpaw Artur Szpilka. Live from Brooklyn's Barclays Center.</p>
			<!-- stream button -->
			<button class="button--stream button--fixed-width">
				<div class="button--stream__icon"></div>
				<h5 class="button--stream__label">stream replay now</h5>
			</button>
        </div>
		<div class="countdown-widget js-countdown-widget" data-date="2016-01-16T21:00-0500"></div>
	</div>
</div>
```

## Event Hero Centered

used in custom wilder vs fury event page


<div class="hero event-hero--centered">
	<div class="hero__image event-hero__image lazyload" data-bgset="http://downloads.sho.com/sports/events/wilder_fury_568x426.jpg [--small] | http://downloads.sho.com/sports/events/wilder_fury_1700x1063.jpg">
	</div>
	<div class="hero__inner event-hero__inner">
		<div class="event-hero__body">
			<span class="event-hero__logo">Showtime PPV</span>
			<h2 class="event-hero__bout">World Heavyweight Championship</h2>
			<h1 class="event-hero__title">Wilder <em>VS.</em> Fury</h1>
			<h3 class="event-hero__sub-title">Saturday, December 1 at 9PM ET / 6PM PT</h3>
			<p class="event-hero__description">A blockbuster matchup of undefeated heavyweights live from L.A. - WBC World Champion Deontay Wilder defends his title against lineal champion Tyson Fury.
			<p>
				<a class="event-hero__big-button event-hero__big-button--provider-lead"
					href="#"  data-track data-context="hero" data-label="order now">Order Now $74.99</a>
			</p>
			<p class="event-hero__mandatory">
				SHOWTIME subscription is not required/included
			</p>
		</div>
	</div>
</div>	