import $ from 'jquery';
import _ from 'underscore';

class Controls {
  constructor(cfg){
    this.COOKIE_NAME  = 'sho_allow_optimizely_variations';
    this.COOKIE_REGEX = new RegExp(`^${this.COOKIE_NAME}`);
    //this.COOKIE_DEFAULT_STATE = false;
    this.initialize(cfg);
  }
  
  initialize(cfg){
    this.toggle = $(cfg.el).find('.variation-controls__toggle');
    this.toggle.on('click', this.onToggle.bind(this));
    this.allow_variations = this.getSetting();
    console.log(this.allow_variations)
    
    this.update();
  }
  
  update(){
    this.toggle.toggleClass('variation-controls__toggle--on', this.allow_variations);
    this.toggle.html(this.allow_variations ? 'ON':'OFF');
  }
  
  getSetting(){
    let c = this.getCookie();
    return !!c && c !== 'false';
  }
  
  getCookie() {
    let cookies   = document.cookie.split('; ');
    let regex     = this.COOKIE_REGEX;
    let cookie    = _.find(cookies, function(c){ return regex.test(c); });
    
    return cookie ? cookie.split('=').pop() : null;
  }
  
  // thanks quirksmode http://www.quirksmode.org/js/cookies.html
  setCookie(value){
    let days,date,expires,domain;
    if(window.location.hostname == 'localhost'){
      domain = 'localhost'
    }
    else if(window.location.hostname == '10.0.2.2'){
      domain = '10.0.2.2'
    }
    else {
      domain = '.sho.com';
    }
    days = 365 * 10;
    date = new Date();
	  date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "expires="+date.toGMTString();
  
    document.cookie = `${this.COOKIE_NAME}=${value};${expires}; domain=${domain}; path=/`
  }
  
  onToggle(e){
    e.preventDefault()
    e.stopPropagation();
    
    // invert current setting
    this.allow_variations = !this.allow_variations;
    console.log(this.allow_variations)
    // write to cookie
    this.setCookie(this.allow_variations);
    this.update();
  }
  
}

export default Controls;