import $ from 'jquery';
import moment from 'moment';

export default class ScheduleDateInput {
	constructor(container, callback, date) {
    this.callback = callback;
    this.today = moment();
    this.startDate = moment(date.getTime());
    this.nextMonth = this.today.clone().add(1, 'months'); // need to clone because moments are mutable 😠
		this.input = $('<input>')
		.addClass('date-picker__input')
		.attr({
			type: 'date',
			required:'required',
			min: this.today.format("YYYY-MM-DD"),
			max: this.nextMonth.endOf('month').format("YYYY-MM-DD")
		})
		.val(this.startDate.format("YYYY-MM-DD"));

		// Since Android fires 'change' event & iPhone fires 'blur' when date input is set
		if (navigator.userAgent.match(/Android/)) {
			// Also add the 'android' class to remove background image arrow icon so it doesn't conflict with default because there's no other way to get rid of it mmmk?
			$('html').addClass('android');
			this.input.change((e) => this.selectDate(e));
		} else if (navigator.userAgent.match(/(iPhone)|(iPad)|(iPod)/)) {
			this.input.blur((e) => this.selectDate(e));
		}
		
		container.append(this.input);
	}

	selectDate(e){
    $.event.trigger({
    	type: "scheduleDateSelected"
    });
    
		let selectedDate = e.target.value;
    this.callback(selectedDate);
	}

	incrementDay(){
    // limited to last available schedule - end of next month + the following day
    if (this.nextMonth.endOf('month').diff(this.startDate, 'days') >= 0){
			this.startDate.add(1, 'days');
			this.input.val(this.startDate.format("YYYY-MM-DD"));
    }
  }

  decrementDay(){
    // limited to today
    if (this.startDate.diff(this.today, 'days') >= 0){
			this.startDate.subtract(1, 'days');
			this.input.val(this.startDate.format("YYYY-MM-DD"));
    }
  }
}