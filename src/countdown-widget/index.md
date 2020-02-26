---
name: Countdown Widget
collection: components
---

# Countdown Widget

This is a countdown widget that is featured on the sports event pages. It counts down to the start of the scheduled block for the event (not to a particular fight in and of itself). Since these events are live broadcast, countdown duration is not specific to a user's location. The target datetime should be set in UTC with timezone offset.

<div class="countdown-widget js-countdown-widget" data-date="2016-08-31T9:30:00-04:00" data-title="Countdown"></div>

```html
<div class="countdown-widget js-countdown-widget" 
	data-date="2016-08-31T9:30:00-04:00" 
	data-title="Countdown">
</div>
```

```javascript
// Configure the countdown widget using data attributes:

	data-title="Countdown"
	data-date="2016-03-31T9:30:00-04:00" // date should be utc iso string 
	data-timeUnits="days, hrs, mins, secs" // units to display 
	// *timeUnits optional - defaults to ['days', 'hrs', 'mins', 'secs']
	data-timer="true" 
	// * optional boolean 
	// ** if present, data-date MUST be formatted as "NUMBER TIMEUNIT" e.g. data-date="10 seconds"
	data-redirect="https://www.sho.com" // * optional callback
}
```

<div class="countdown-widget js-countdown-widget" data-title="10 seconds timed redirect" data-timer="true" data-date="10 seconds" data-redirect="http://localhost:4000/styleguide/countdown-widget/" data-time-units="secs"></div>

```html
<div class="countdown-widget js-countdown-widget" 
	data-title="10 seconds timed redirect" 
	data-timer="true" 
	data-date="10 seconds" 
	data-redirect="http://localhost:4000/styleguide/countdown-widget/" 
	data-time-units="secs">
</div>
```