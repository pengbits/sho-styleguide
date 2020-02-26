import $ from 'jquery';
import moment from 'moment';
import {Calendar} from 'calendar';

export default class ScheduleDatePicker {
  constructor(container, callback, ...dates) {
    // container should be a jQuery object, dates can be any number of date objects
    this.today = moment();
    this.nextMonth = this.today.clone().add(1, 'months'); // need to clone because moments are mutable 😠
    this.startDate = moment(dates[0]);
    this.container = container;
    this.hidden = true;
    this.callback = callback;
    this.calendarContainer = $('<div>').addClass('date-picker__calendar-container')
    this.container.append(this.calendarContainer);
    this.render();
  }

  render(){
    this.renderToggle(this.startDate);
      // scheduleDatePicker has the ability to build month calendars for all date arguments
    // dates.forEach((date) => {
    //   this.buildCalendar(date);
    // })
    // BUT we will restrict it to 2 months from the current date because that is the data set we have
    this.buildCalendar(this.today);
    this.buildCalendar(this.nextMonth);
  }

  renderToggle(date){
    let toggle = $('.date-picker__toggle');
    if (toggle.length === 0){
      let toggleEl = $('<div>')
        .addClass('date-picker__toggle')
        .text(date.format('dddd, MMM D'))
        .click(() => this.toggleCalendar('.date-picker__calendar-container', '.date-picker__toggle'));
      this.container.append(toggleEl);
    } else {
      toggle.text(date.format('dddd, MMM D'))
    }
  }

  buildCalendar(date){
    let calendarHead = $('<div>')
      .addClass('calendar__month')
      .text(date.format('MMMM YYYY'));

    let daysRow = $('<tr>').addClass('calendar__days');
    let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    days.forEach(day => {
      daysRow.append($('<td>').addClass('calendar__day').text(day));
    })
    let calendarTable = $('<table>').append(daysRow);
    let calendar = $('<div>')
      .addClass('date-picker__calendar')
      .append(calendarHead)
      .append(calendarTable);
    this.calendarContainer.append(calendar);

    let calendarArray = new Calendar(0);
    calendarArray.monthDays(date.year(), date.month()).forEach(week => {
      let weekRow = $('<tr>');
      week.forEach(day => {
        let weekDay = $('<td>')
        
        if (day != 0){
          weekDay.addClass('calendar__date')

          if (date.month() === this.today.month() && day < this.today.date()) {
            weekDay.addClass('calendar__date--past').text(day.toString());
          } else {
            let dateLink = $('<a>')
            .attr('href', `/schedule?date=${date.format("YYYY-MM")}-${('0' + day).slice(-2)}`)  // zero pad day
            .attr('data-track','')
            .attr('data-context','schedule navigation')
            .attr('data-label','calendar date')
            .attr('class', 'calendar__date-link')
            .text(day.toString());
            weekDay.append(dateLink)
          }

          if (date.month() === this.startDate.month() && day === this.startDate.date()) {
            weekDay.addClass('calendar__date--selected');
          }
        }
        weekRow.append(weekDay);
      })
      calendarTable.append(weekRow);
    })
  }

  toggleCalendar(...selectors) {
    selectors.forEach((selector)=> {
      $(selector).toggleClass(`${selector.slice(1)}--active`)
    })
    this.hidden = !this.hidden;
  }

  selectDate(e) {
    let selectedDay = $(e.target).text();
    let selectedMonth = $(e.target).parents('table').prev().text();
    let selectedDate = new Date(`${selectedDay} ${selectedMonth}`);
    console.log(selectedDate)
    this.callback()
  }

  incrementDay(){
    // limited to last available schedule - end of next month + the following day
    if (this.nextMonth.endOf('month').diff(this.startDate, 'days') >= 0){
      this.calendarContainer.empty()
      this.startDate.add(1, 'days');
      this.render();
    }
  }

  decrementDay(){
    // limited to today
    if (this.startDate.diff(this.today, 'days') >= 1){
      this.calendarContainer.empty()
      this.startDate.subtract(1, 'days');
      this.render();
    }
  }
}