import $ from 'jquery'
import Hammer from 'hammerjs';
import moment from 'moment-timezone';
import d3 from 'd3';
import _ from 'underscore';
var touch = require('browsernizr/test/touchevents');
var Modernizr = require('browsernizr')

export default class ScheduleView {
  constructor(config){
    this.view;
    this.axis;
    this.axisView;
    this.xScale;
    this.yScale;
    this.width;
    this.height = 0;
    this.hasDSTChanged = false;

    if(config !== undefined){
    	this.selector = config.selector;
      this.view = d3.select(this.selector);
      if (!this.view.empty()) {
        this.width = parseInt(this.view.style('width'), 10);
      }
      else {
        throw "Unable to find view.";
      }
    }

    this.axisView = this.view.select(".y-axis g");

    if (this.axisView.empty()) {
      // create svg element that the hour scale will populate
      this.axisView = this.view.append("svg")
      .attr({
        width: "80px",
        height: "100%",
        class: "y-axis y-axis--hidden" // hide it until everything is ready 
      })
      .append("g")
      .attr({
        transform: "translate(70, 0)" // offset 70px from left to align with date picker
      });
    }
  }

  setViewHandlers(startTime){
    this.channels = $('.channel');
    this.channelHeaders = $('.channel__header');
    this.channelsLength = this.channels.length;
    // keep track of what channel is in first position,
    // so we can hide/show arrows at start/end of channels nav list
    // in showArrows() based on this.channelsToShow in mobileChannelView() & desktopChannelView()
    this.currentFirstDisplayed = 0; 

    $('.schedule-grid__channel-prev').click(() => {
      this.scrollChannels('prev')
    })

    $('.schedule-grid__channel-next').click(() => {
      this.scrollChannels('next')
    })

    if (Modernizr.touchevents) {
    	var hammertime = new Hammer($(this.selector)[0]);
    	hammertime.on('swipeleft', () => { this.scrollChannels('next')});
    	hammertime.on('swiperight', () => { this.scrollChannels('prev')});
    }
    
    $(document).ready(() => {
      this.setChannelView();
      $('.y-axis').removeClass('y-axis--hidden');
    })

    $(window).resize(() => {
      _.throttle(this.setChannelView(), 500);   
    })
  }

  setChannelView(){
    if ($(window).width() >= 768) {
      this.desktopChannelView()
    } else {
      this.mobileChannelView() 
    }
  }

  mobileChannelView(){
    this.channelsToShow = 1;
    this.showViewChannels()
  }

  desktopChannelView(){
    this.channelsToShow = 4;
    this.showViewChannels()
  }

  showViewChannels(){
    let channelsLength = $('.channel').length;
    for (let i = this.currentFirstDisplayed; i < channelsLength; i++) {
      // apply hidden variant to channels & channel headers
      // that are >= the sum of first channel to display + number of channels to be shown at this device breakpoint
      if (i >= this.currentFirstDisplayed + this.channelsToShow) {
        $('.channel').eq(i).addClass('channel--hidden');
        $('.channel__header').eq(i).addClass('channel__header--hidden');
      } else {
        $('.channel').eq(i).removeClass('channel--hidden');
        $('.channel__header').eq(i).removeClass('channel__header--hidden');
      }
    }
    this.showArrows()
  }

  showArrows(){
  	if (this.currentFirstDisplayed === 0){
  		$('.schedule-grid__channel-prev').css('display', 'none');
  	} else if (this.currentFirstDisplayed + this.channelsToShow === $('.channel').length) {
  		$('.schedule-grid__channel-next').css('display', 'none');
  	} else {
  		$('.schedule-grid__channel-prev').css('display', 'inline-block');
  		$('.schedule-grid__channel-next').css('display', 'inline-block');
  	}
  }

  scrollChannels(direction){
    if (direction === 'prev' && this.currentFirstDisplayed >= 1) {
      // shuffle channels & channel headers right
      // by adding hidden variant to the last channel currently displayed
      // and removing hidden variant from channel 1 previous to currentFirstDisplayed
      $('.channel').eq(this.currentFirstDisplayed - 1).removeClass('channel--hidden');
      $('.channel').eq(this.currentFirstDisplayed + (this.channelsToShow - 1)).addClass('channel--hidden');
      $('.channel__header').eq(this.currentFirstDisplayed - 1).removeClass('channel__header--hidden');
      $('.channel__header').eq(this.currentFirstDisplayed + (this.channelsToShow - 1)).addClass('channel__header--hidden');
      this.currentFirstDisplayed--
    } else if (direction === 'next' && this.currentFirstDisplayed + this.channelsToShow < $('.channel').length) {
      // shuffle channels & channel headers left
      // by adding hidden variant to the currentFirstDisplayed
      // and removing hidden variant from channel equal to the sum of currentFirstDisplayed + number of channels to show at this device breakpoint
      $('.channel').eq(this.currentFirstDisplayed).addClass('channel--hidden');
      $('.channel').eq(this.currentFirstDisplayed + this.channelsToShow).removeClass('channel--hidden');
      $('.channel__header').eq(this.currentFirstDisplayed).addClass('channel__header--hidden');
      $('.channel__header').eq(this.currentFirstDisplayed + this.channelsToShow).removeClass('channel__header--hidden');
      this.currentFirstDisplayed++
    }
    this.showArrows()
  }

  increaseHeight(model){
    // convert start & end date to ET for DST check
    let startDate = moment(model.startDateTime); 
    let endDate = moment(model.endDateTime); 

    // height needs to be adjusted if it's a changeover DST day
    if (startDate.isDST() && !endDate.isDST() && !this.hasDSTChanged) {
      this.height += 10416; // to accomodate extra hour
      this.hasDSTChanged = true;
    } else if (!startDate.isDST() && endDate.isDST() && !this.hasDSTChanged) {
      this.height += 9583; // to accomodate one less hour ()
      this.hasDSTChanged = true;
    } else {
      this.height += 10000
    }

    this.view.style('height', this.height + "px");
  }

  updateScale(model){
    this.increaseHeight(model);
    // xScale was originally used to set width of channels
    // replaced with css floats/percentages for easier responsivity
    this.xScale = d3.scale.ordinal().domain(model.channelArray.map(model.channelIdMap)).rangeBands([100, this.width], 0.05);
    // yScale handles vertical sizing and absolute position of airings
    this.yScale = d3.time.scale().domain([this.timeZoneOffset(model.startDateTime), this.timeZoneOffset(model.endDateTime)]).nice(d3.time.day).range([0, this.height]);
    // hour axis 
    this.axis = d3.svg.axis().scale(this.yScale).orient("left").ticks(d3.time.hour, 1).tickFormat(d3.time.format("%-I%p"));
    // scale the hour markers to the y axis
    this.axisView.call(this.axis.scale(this.yScale));
    // ** NOTE - Almost ALL of these functions have been renamespaced in D3 v.4 so if we update this needs to be completely rewritten!!!
  }

  convertToET(time){
    // add moment timezone data for NY 2010-2020 - 2016g edition
    moment.tz.add(['America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6']);
    // convert to ET
    return moment(time).clone().tz("America/New_York")
  }

  timeZoneOffset(localTime){
    // YOU SHOULD PROBABLY DEFINITELY READ THIS: 
    // this offset function was necessary because JS Date objects are created based on a user's internal clock
    // our D3 yScale function that handles all vertical scaling & positioning uses JS Date so it is client local time dependent
    // SO all timescaling was thrown off and the hour axis was misaligned with airings in timezones other than ET
    // not to mention dayligbt savings totally screws everything up! 
    // the solution is essentially a hack, forcing users in other timezones to see EST/EDT schedule
    // by coercung the client created date object back to UTC and resetting with the current ET offset
    // creating a totally new date object which is actually not the real local time at all!
    // makes total sense right???
    // NOTE scrollToCurrentTime() uses this to scroll to NY time as well
    // the 'offset' is the difference in milliseconds of ET to UTC

    // convert local to ET
    var ET = this.convertToET(localTime);
    // difference in milliseconds of ET to UTC
    var easternTimeZoneOffset = ET.isDST() ? 14400000 : 18000000; // different offset if we are in daylight savings time  
    // difference in milliseconds of client locale to UTC 
    var localTimeZoneOffset = localTime.getTimezoneOffset() * 60000; 
    // create a new Date object that is offset from UTC by the difference between user's localTimeZoneOffset and easternTimeZoneOffset
    var localTimeToET = new Date(localTime.getTime() + localTimeZoneOffset - easternTimeZoneOffset);
    return localTimeToET;
  }

  scrollToCurrentTime(startDateTime){
    var pageStartDate = new Date(startDateTime).toDateString();
    var now = new Date();
    var todaysDate = now.toDateString();
    var tMinus30 = new Date(this.timeZoneOffset(now).getTime() - 1800000);
    if (pageStartDate === todaysDate) {
      // use our d3 yScale function to translate tMinus30 to a vertical position we should scroll to
      let timeOffset = this.yScale(tMinus30);
      $('body,html').animate({scrollTop: timeOffset})
    }
  }

  updateView(model){
    var i,
    channel,
    channelView
    
    var channelArrayLength = model.channelArray.length;

    for(i = 0; i < channelArrayLength; i++){

      channel = model.channelArray[i];
      // create channel div
      channelView = this.view.select("#c-" + channel.id);
      if (channelView.empty()) {
        channelView = this.view.append("div")
        .attr({
         id: "c-" + channel.id,
         class: "channel channel--hidden",
         style: "position: relative; float: left; height: 100%;"
         // width could have been set using this.xScale.rangeBand(), (which divides the x axis into even spaced columns) but was instead moved to css for responsive control
        })
      }
      // create channel headers
      d3.select(".schedule-grid__nav-inner").append("h5")
      .attr({
         class: "channel__header channel__header--hidden",
      })
      .append("span")
      .text(channel.name)
      // create airings
      var airings = channelView.selectAll("div") // create a d3 selection of divs to bind with channel data, whether they exist yet or not
      .data(channel.airings, model.airingIdMap) // bind channel airing data to the selection
      .enter() // the enter selection is all new data that isn't already bound to existing DOM elements
      .append("div") // create a div for each datum in the enter selection
      .attr({
        id: (d, i) => { // callback function for each datum in the selection (d = data, i = index)
          return "a-" + d.id;
        },
        class: (d, i) => {
          if (d.title === "Schedule Data Unavailable") {
            return "airing airing--unavailable"
          }
          return "airing airing--" + d.showKind; // airing class variant for type of program e.g. episode, movie
        },
        style: (d, i) => {

          // the height of each airing is calculated from the difference between its start and end times, then scaled using yScale()
          var height = this.yScale(d.endAiringDateTime) - this.yScale(d.startAiringDateTime);
          return "position: absolute; top: " + 
            // top of each airing is translated from its start time to a y position using yScale,
            // but needs to be offset from user's local time first
            (parseFloat(this.yScale(this.timeZoneOffset(d.startAiringDateTime))) + 40) + // add 40px to that to push down below top page elements 
            "px; padding: 5px 0; height: " + height + "px"; 
        }
      })
      .append("a")
      .attr({
        class: "airing__link",
        href: (d, i) => {
          return d.cta
        },
        'data-track':'',
        'data-context':'schedule grid',
        'data-label':  (d, i) => {
          return d.title
        }
      })
      // d3 functions return the last appended element, unlike jQuery which returns the original element called in the function chain
      // this results in subsequent appended elements to always be nested in a chain.
      // in order to keep our d3 selection intact with bound data, 
      // utilizing the enter selection and preventing duplicate elements from being craeted,
      // the variable airings was created for our original parent selection
      // and new variables are created for each parent of further nested elements
      var airingsContent = airings.append("div") // a div to hold each airings content...
      .attr({
        class: "airing__content"
      })

      var airingsImage = airingsContent.append("div") // ...content includes an image...
      .attr({
        class: "airing__image"
      })
      .append("img")
      .attr({
        style: "width: 100%; height: auto;",
        src: (d, i) => {
          let showLengthInMinutes = (d.endAiringDateTime - d.startAiringDateTime) / 60000;
          if (showLengthInMinutes > 30) {
            return d.imageUrl;
          }
        }
      })

      var airingsCopy = airingsContent.append("div") // ...content also includes copy as a sibling of image so airingsContent is refereced for the append
      .attr({
        class: "airing__copy"
      })
      // copy includes the siblings title, subtitle, time, & description
      airingsCopy.append("h5") 
      .attr({class: "airing__title"})
      .text((d) => {
        return d.title;
      });

      airingsCopy.filter((d) => { return d.subTitle !== ""; })
      .append("h6")
      .attr({class: "airing__subtitle"})
      .text((d) => {
        return d.subTitle;
      });

      airingsCopy.append("p")
      .attr({class: "airing__time"})
      .text((d) => {
        return d.airingTime;
      });

      airingsCopy.append("div")
      .attr({
        class: "airing__description"
      })
      .append("p")
      .text((d) => {
        let showLengthInMinutes = (d.endAiringDateTime - d.startAiringDateTime) / 60000;

        if(showLengthInMinutes > 55){
            return d.description;
        }
      });
    }
  }
}