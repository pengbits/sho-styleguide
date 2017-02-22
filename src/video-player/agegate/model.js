import _ from "underscore";
import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';
import VideoPlayerAgeGateError from "./error.js"


class VideoPlayerAgeGateModel extends Backbone.Model {
  constructor(cfg) {
   
    super(cfg);
    this.fn = {
       setLockoutCookie: _.bind(this.setLockoutCookie, this),
       validateVideo: _.bind(this.validateVideo, this)
     }
    // set a cookie whenever the underage condition is met
    this.bind('video:validation:underage', this.fn.setLockoutCookie);
  }  
  
  init() 
  {
    this.validateVideo()
  }
  
  validateVideo() 
  {
    this.trigger('video:validating');
      
    try {
      this.checkForAuthenticatedUser();
      this.trigger('video:validation:success');
    } 
    catch (e) 
    {
      if (e instanceof VideoPlayerAgeGateError) 
      {
        if (e.type == 'lockout') {
          e.lockout = true;
        }

        this.trigger('video:validation:' + e.type, e);
      } 
      else 
      {
        console.log(e.stack || e);
      }
    }
  }

  renderAgeGateError(errortype) 
  {
    this.type = errortype.type;
    this.message = errortype.message;
    
    if (this.type == 'invalid_dob') {
      this.trigger('video:validation:' + this.type, errortype);
    }
  }

  
  checkForAuthenticatedUser() 
  {
    this.checkUserAge()
  }

  checkUserAge() 
  {
    this.checkForLockout();
    this.checkForUnknownAge(); 
    this.checkDateFormat(); 
    this.checkForUnderageUser();
  }

  checkForLockout () 
  {
    if (this.getLockoutCookie()) {
      var e = new VideoPlayerAgeGateError('lockout', 'We\'re sorry. You are ineligible to watch this video.');
      throw e;
    }
  }
  
  checkForUnknownAge() 
  {
    var e = new VideoPlayerAgeGateError('unknown_age', 'Please enter your date of birth to watch this video:');
    throw e;
    //this.renderAgeGateError(e); 
  }
  
  checkDateFormat(dob) 
  {
    let isDobValid = true;

    if( /00-|-00/.test(dob))
    {
      isDobValid = false;
    }

    if (moment(dob, "MMDDYYYY", true).isValid() == false || null)
    {
      isDobValid=false;
    }

    if(isDobValid==false)
    {
      var e =  new VideoPlayerAgeGateError('invalid_dob', 'That is not a valid date of birth');
      this.renderAgeGateError(e); 
    }
    else
      this.checkForUnderageUser(dob);
  }
  
  checkForUnderageUser(dob) 
  {
    var userAgeBday = moment(dob, "MMDDYYYY");
    var currentDate = moment().format('MMDDYYYY');
    var eighteenYearsAgo = moment().subtract(18, "years");
    var dobFlag = false;

    if (eighteenYearsAgo.isAfter(userAgeBday)) {
      $(".video-playr__age-gate").hide();
    }
    else {
      this.setLockoutCookie (userAgeBday);
      var e = new VideoPlayerAgeGateError('underaged', 'We\'re sorry. You are ineligible to watch this video.');
      this.renderAgeGateError(e);
    }
  }
  
  getLockoutCookie() 
  {
    return !!this.readCookie('agegateCookie');
  }
  
  setLockoutCookie(underagedDob) 
  {
    this.createCookie('agegateCookie', underagedDob, 2); // 2 days
    this.trigger('video:validation:lockout', {
        'lockout': true,
        'message': 'We\'re sorry. You are ineligible to watch this video.'
    });
   }

  
  setDateOfBirth(attrs)  
  { 
    var array = attrs;
    this.padDob (array);
    var dob = array.join('');
    //this.validateVideo();
    this.checkDateFormat(dob); 
   }
  
  padDob (array)
  {
    $.each(array, function( index, value ) {
      if ((array[index].length) < 2)
      {
        array[index] = ('0' + array[index]);
        return array;
      }
    });
  }
  
  /*
  =:util cookie functions*/
  
  createCookie(name,value,days) 
  {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  } 

  readCookie(name) 
  {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null; 
  }

  eraseCookie(name) 
  {
    createCookie(name,"",-1);
  }
};

export default VideoPlayerAgeGateModel 


