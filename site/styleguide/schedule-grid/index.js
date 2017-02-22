import $ from 'jquery';
import d3 from 'd3';
import moment from 'moment';
import _ from 'underscore';
import ScheduleModel from './schedule-model'
import ScheduleView from './schedule-view'

export default class ScheduleGrid {
  constructor(cfg){
    this.el = cfg.el;
    if (this.el.dataset.gridUrl) {
      this.gridUrl = this.el.dataset.gridUrl;
    } else {
      this.gridUrl = '/schedule/grid.json' // safeguard against missing dom data-attribute
    }

    this.scheduleModel = new ScheduleModel();
    this.scheduleView = new ScheduleView({selector: ".schedule-grid__inner"});
    this.today = moment();
    this.end = this.today.clone().add(1, 'months').endOf('month');
    this.nextDay = this.gridUrl ? moment(this.gridUrl.split('date=')[1]).add(1, 'days') : null;
    this.daysLoaded = 1;
    this.incremented = 1; // the current date window has been scrolled to

    // prevent Chrome from remembering last scroll position on refresh 
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    // global nav sticky only if window height is greater than mobile menu
    if ($(window).height() > $('.global-navigation__primary-mobile').height()) {
      $('.global-navigation').css('position', 'fixed').addClass('global-navigation--sticky');
    }

    this.loadingAnimation = $('<div>').addClass('loading-animation');
    $(this.el).append(this.loadingAnimation);
    
    this.errorMessage = $('<p>').addClass('schedule-grid__error');

    d3.json(this.gridUrl, (err, data) => {
      if (err) {
        this.loadingAnimation.remove()
        $('.schedule-grid__inner').append(this.errorMessage).text('Error loading schedule data')
      } else {
        this.loadSchedule(data.page);
      }
    });

    $(window).scroll(() => {
      _.throttle(this.updateSchedule(), 1000);
    })
  }

  loadSchedule(data){
    this.scheduleModel.updateWindow({
      startDateTime: data.startDateTime,
      endDateTime: data.endDateTime
    });
    this.updateData(data);
    this.loadingAnimation.remove()
    this.scheduleView.scrollToCurrentTime(this.scheduleView.timeZoneOffset(this.scheduleModel.getModelView().startDateTime));
    this.scheduleView.setViewHandlers();
    this.loadMore();

    console.log('| schedule | loaded')
  }

  loadMore(){
    if (this.nextDay < this.end) {
      $('.schedule-grid__inner').append(this.loadingAnimation.css('top', this.scheduleView.height - 40 + 'px'));
      let dateString = this.nextDay.clone().format('YYYY-MM-DD');
      this.nextDay.add(1, 'days');
      
      d3.json(`/schedule/grid.json?date=${dateString}`, (err, data) => {
        if (err) {
          this.loadingAnimation.remove()
          $('.schedule-grid__inner').append(this.errorMessage.text('Error loading schedule data').css({'position': 'absolute', 'top': this.scheduleView.height - 40 + 'px', 'left': 'calc(50% - 100px)', 'margin': '0'}));
        } else {
          var newData = data.page

          this.scheduleModel.updateWindow({
            endDateTime: newData.endDateTime
          });
          this.daysLoaded++;
          this.updateData(newData);
          console.log(`| schedule | loaded ${dateString}`)
          this.loadingAnimation.remove()
        }
      });
    } else {
      this.loadingAnimation.remove()
      $('.schedule-grid__inner').append(this.errorMessage.text('Schedule data unavailable').css({'position': 'absolute', 'top': this.scheduleView.height - 40 + 'px', 'left': 'calc(50% - 80px)', 'margin': '0'}));    
    }
  }

  updateData(data){
    this.scheduleModel.setData(data);
    var modelView = this.scheduleModel.getModelView();
    this.scheduleView.updateScale(modelView);
    this.scheduleView.updateView(modelView);
  }

  scrolledBelowLastIncremented(){
    // incremented should be less than daysLoaded so that you can't go past last loaded day
    // window scroll is BELOW top of last loaded day 
    if (this.incremented < this.daysLoaded && 
      $(window).scrollTop() > (this.scheduleView.height / this.daysLoaded) * this.incremented) {
      this.incremented++; // incrementer restricts equation to proper day
      return true
    } 
  }

  scrolledAboveLastIncremented(){
    // incremented should be less than or equal to daysLoaded so that you can't go earlier than first loaded day
    // window scroll is ABOVE top of last loaded day 
    if (this.incremented > 1 &&// extra check for Safari, where window can be scrolled backwards into negative scrollTop!!!
      this.incremented <= this.daysLoaded && 
      $(window).scrollTop() < ((this.scheduleView.height / this.daysLoaded) * (this.incremented - 1))) {
      this.incremented--;
      return true 
    }
  }

  updateSchedule(){
    if (this.scrolledBelowLastIncremented()) {
      window.picker.incrementDay();
      this.loadMore();
    } else if (this.scrolledAboveLastIncremented()) {
      window.picker.decrementDay();
    }
  }
}