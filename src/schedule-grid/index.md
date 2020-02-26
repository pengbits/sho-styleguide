---
name: Schedule Grid
collection: components
---
<nav class="secondary-nav--datepicker">
	<div class="secondary-nav secondary-nav--red-always">
		<div class="secondary-nav__content">
			<div class="date-picker js-schedule-date-selector" data-start-date=""></div>
			<a href="#" class="secondary-nav__link">On Demand</a>
		</div>
	</div>
</nav>
<div class="schedule-grid js-schedule-grid"  data-context="schedule grid" data-grid-url="schedule_1.json">
	<nav class="schedule-grid__nav">
		<div class="schedule-grid__nav-inner">
			<div class="schedule-grid__nav-shim"></div>
			<i class="schedule-grid__channel-prev" data-track data-label="arrow" data-location="left"></i>
			<h5 class="schedule-grid__channels-header">Channels</h5>
			<i class="schedule-grid__channel-next" data-track data-label="arrow" data-location="right"></i>
		</div>
	</nav>
	<div class="schedule-grid__inner"></div>
	<div class="secondary-nav secondary-nav--red-always">
		<div class="secondary-nav__content">
			<!-- <a href="#" class="secondary-nav__link">Next Day</a> deprecated -->
		</div>
	</div>
</div>

```
<nav class="secondary-nav--datepicker">
	<div class="secondary-nav secondary-nav--red-always">
		<div class="secondary-nav__content">
			<div class="date-picker js-schedule-date-selector" data-start-date=""></div>
			<a href="#" class="secondary-nav__link">On Demand</a>
		</div>
	</div>
</nav>
<div class="schedule-grid js-schedule-grid" data-grid-url="schedule_1.json">
	<nav class="schedule-grid__nav">
		<div class="schedule-grid__nav-inner">
			<div class="schedule-grid__nav-shim"></div>
			<i class="schedule-grid__channel-prev"></i>
			<h5 class="schedule-grid__channels-header">Channels</h5>
			<i class="schedule-grid__channel-next"></i>
		</div>
	</nav>
	<div class="schedule-grid__inner"></div>
	<div class="secondary-nav secondary-nav--red-always">
		<div class="secondary-nav__content">
			<!-- <a href="#" class="secondary-nav__link">Next Day</a> deprecated -->
		</div>
	</div>
</div>
```
<style type="text/css">
	.site-sidebar,
	.site-sidebar-toggle {
		display: none;
	}

	.simplified-global-navigation {
		position: absolute;
		top: 0;
		z-index: 9999;
	}

	.site-main {
		padding: 0;
	}

	.site-content {
		max-width: none;
	}
</style>
