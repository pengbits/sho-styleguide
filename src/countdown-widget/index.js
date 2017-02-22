import _ from 'underscore';
import $ from 'jquery';
import moment from 'moment';

class CountdownWidget {
	constructor(cfg) {
		this.el = $(cfg.el);
		_.extend(this, {
			title: this.el.data('title') ? this.el.data('title') : '',
			timeUnits: this.el.data('timeUnits') ? this.el.data('timeUnits').split(' ').join('').split(',') : ['days', 'hrs', 'mins', 'secs'],
			timer: this.el.data('timer') ? !!this.el.data('timer') : false,
			redirect: this.el.data('redirect') ? this.el.data('redirect') : null,
			targetDate: this.el.data('date') ? this.el.data('date') : null,
		});

		if (this.timer === true) {
			let args = this.targetDate.split(' ');
			let number = parseInt(args[0]);
			let timeUnit = args[1];
			this.targetDate = moment.utc().add(number, timeUnit);
		} else if (this.targetDate !== null) {
			this.targetDate = moment.utc(this.targetDate);
		}
		
		let title = $('<div>').addClass('countdown-widget__title').text(this.title);
		this.el.append(title);
		this.appendTimeUnits();
		this.callback = this.setCallback()
		this.update();
		this.interval = setInterval(() => this.update(), 1000);
	}

	setCallback() {
		if (this.redirect) {
			return () => { window.location = this.redirect }
		} else {
			return () => { this.cancel() }
		}
	}

	appendTimeUnits() {
		this.timeUnits.forEach((timeUnit) => {
			let timeUnitsContainer = $('<div>').addClass('countdown-widget__time-units');
			let timeEl = $('<div>').addClass('countdown-widget__time countdown-widget__time--' + timeUnit);
			let timeUnitEl = $('<div>').addClass('countdown-widget__time-unit countdown-widget__time-unit--' + timeUnit).text(timeUnit);
			timeUnitsContainer.append(timeEl).append(timeUnitEl);
			this.el.append(timeUnitsContainer);
		})
	}

	getDiffs() {
		let now = moment();
		let diffs = {};
		diffs.days = this.targetDate.diff(now, 'days');
		diffs.hrs = this.targetDate.diff(now, 'hours') % 24;
		diffs.mins = this.targetDate.diff(now, 'minutes') % 60;
		diffs.secs = this.targetDate.diff(now, 'seconds') % 60;
		for (let timeUnit in diffs) {
			if (diffs[timeUnit].toString().length < 2 && this.timer === false) {
				diffs[timeUnit] = '0' + diffs[timeUnit].toString();
			}
		}
		return diffs;
	}

	appendTimes(diffs){
		for (let timeUnit in diffs) {
			this.el.find('.countdown-widget__time--' + timeUnit).text(diffs[timeUnit]);
		}
	}

	update() {
		if (this.targetDate > moment()) {
			this.appendTimes(this.getDiffs());
		} else {
			this.callback();
		}
	}

	cancel() {
		window.clearInterval(this.interval)
		this.el.remove()
	}
}

export default CountdownWidget;