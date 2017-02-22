---
name: Event Hero
collection: components
---

# Event Hero

### pre event (includes countdown widget)

<div class="event-hero lazyload" data-bgset="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png [--from-medium]">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2018-01-16T21:00-0500" data-title="Countdown"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
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
	<img class="event-hero__bg" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2018-01-16T21:00-0500" data-title="Countdown"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
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

<div class="event-hero lazyload" data-bgset="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png [--from-medium]">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2016-01-16T21:00-0500"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
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
	<img class="event-hero__bg" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-bg-1440x850.png">
	<div class="event-hero__inner">
		<div class="event-hero__image-container">
			<img class="event-hero__image" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-400x400.png">
			<div class="countdown-widget js-countdown-widget" data-date="2016-01-16T21:00-0500"></div>
		</div>
		<div class="event-hero__copy">
			<img class="event-hero__logo" src="http://www.sho.com/assets/images/styleguide/event-hero/event-hero-logo-168x35.png">
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
