import $ from 'jquery';
var touch      = require('browsernizr/test/touchevents');
var inputTypes = require('browsernizr/test/inputtypes')
var Modernizr  = require('browsernizr');


import ScheduleDateInput from './schedule-date-input.js';
import ScheduleDatePicker from './schedule-date-picker.js';

class ScheduleDateSelector {
	constructor(cfg) {
		if (cfg.date) {
			this.date = new Date(cfg.date);
		} else {
			this.date = new Date();
		}

		let el = $(cfg.el);
		
		if (Modernizr.touchevents && Modernizr.inputtypes.date && navigator.userAgent.match(/(iPhone)|(iPad)|(iPod)/) || navigator.userAgent.match(/Android/)) {
			window.picker = new ScheduleDateInput(el, this.onSelectDate, this.date);
		} else {
			window.picker = new ScheduleDatePicker(el, this.onSelectDate, this.date);
		}
	}

	onSelectDate(date) { 
		window.location = `/schedule?date=${date}`
	}
}

export default ScheduleDateSelector;