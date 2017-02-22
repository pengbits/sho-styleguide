import _ from "underscore";
import $ from 'jquery';

class VideoPlayerAgeGateView { 

  constructor(cfg) {

     _.extend(this, {
        container: $(cfg.container),
        model: cfg.model,
      });
    this.setHandlers();
    this.model.init();
    //$('.video-playr__age-gate').on('click', '.btn-submit', this.submit);
    this.container.on('click', '.btn-submit', this.submit);
  } 
  
  setHandlers() 
  {
    _.bindAll(this, 'submit', 'update');
    //this.container.on('click', '.btn-submit', this.submit); //attaching click in constructor function
    this.model.bind('all', this.update);

  }
  
  submit(e) 
  {
    e.stopPropagation(); 
    e.preventDefault(); 
    var el =  this.container.find('.video-playr__age-gate__form');
    var attrs = _.pluck(el.serializeArray(), 'value');
    this.model.setDateOfBirth(attrs); 
  }

  update(eventName, e) 
  {
    console.log('|view| '+eventName)
    if (/video:validation:(unknown_age|invalid_dob|lockout)/.test(eventName)) {
      e.has_errors = e.type == 'invalid_dob';
      this.render(e);
      this.show();
    }
  
    if (/video:validation:(lockout)/.test(eventName)) {
      $('.video-playr__age-gate__form').hide();
      $('.video-playr__age-gate__message').text('We\'re sorry. You are ineligible to watch this video.');
    }

    if ('video:validation:success' == eventName) {
      this.hide();
    }
  }

  render(e) 
  {
    if(!e.has_errors)
    {
      var htmlstring = '<h5 class="h5 video-playr__age-gate__message">' +
          'Please enter your date of birth to watch this video:</h5>' +
          '<form action="#" class="video-playr__age-gate__form">' +
          '<p class="video-playr__age-gate__date-of-birth">' +
          '<input name="month" type="text" size="2" placeholder="MM">' +
          '<input name="day" type="text" size="2" placeholder="DD">' +
          '<input name="year" type="text" size="4" placeholder="YYYY"></p>' +
          '<button class="button--solid-red btn-submit">Submit</button>' +
         '</form>'
      $(".video-playr__age-gate").html(htmlstring);
    }
    else {
      $('.video-playr__age-gate').addClass('has_errors');
      $('.video-playr__age-gate__message').html(e.message);
    }
  }

  show() 
  {
    this.container.show();
  }

  hide() 
  {
    this.container.hide();
  }

 }

export default VideoPlayerAgeGateView;

