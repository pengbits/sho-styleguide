import $ from 'jquery';
import Cookies from '../utils/cookies';

const COOKIE_NAME  = 'sho_allow_optimizely_variations';

class Controls {
  constructor(cfg){
    this.initialize(cfg);
  }

  initialize(cfg){
    this.toggle = $(cfg.el).find('.variation-controls__toggle');
    this.toggle.on('click', this.onToggle.bind(this));
    this.allow_variations = this.getSetting();
    this.update();
  }

  update(){
    this.toggle.toggleClass('variation-controls__toggle--on', this.allow_variations);
    this.toggle.html(this.allow_variations ? 'ON':'OFF');
    console.log('|variations| allow_variations=' + this.allow_variations)
  }

  getSetting(){
    let c = Cookies.get(COOKIE_NAME);
    return !!c && c !== 'false';
  }

  onToggle(e){
    e.preventDefault()
    e.stopPropagation();

    // invert current setting
    this.allow_variations = !this.allow_variations;
    // write to cookie
    Cookies.set(COOKIE_NAME, this.allow_variations);
    this.update();
  }

}

export default Controls;
