import $ from 'jquery';
import enquire from 'enquire.js'; 

class HeroVideo {
	constructor(cfg) {
    const el = $(cfg.el)
    Object.assign(this, {
      'videoPlayer' : el.find('video-player-standard'),
      // see _variables.scss, http://localhost:4000/styleguide/breakpoints/
      'breakpoints' : {'large' : 992}
    });
    this.setHandlers();
  }

  setHandlers(){
    if (window.navigator.userAgent.match(/iPad|Android/)) {
      this.removeVideoElement()
    } else {
      enquire.register(`screen and (min-width:${(this.breakpoints.large -1)}px)`, {
        deferSetup: true,
        setup: this.loadBrightcoveScript.bind(this)
      })
    }
  }

  loadBrightcoveScript(){
    let js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('videoScript')){ return; }
    js = document.createElement('script');
    js.id = 'videoScript';
    js.src = "//players.brightcove.net/63128/VycdXcW3l_default/index.min.js";
    js.onload = this.handleSafariError;
    fjs.parentNode.insertBefore(js, fjs);
  }

  handleSafariError(){
    videojs('video-player').on('error', function() {
      $('.vjs-error-display.vjs-modal-dialog').remove();
      $('.bc-player-VycdXcW3l_default.vjs-has-started .vjs-poster').css('display', 'block')
    });
  }

  removeVideoElement(){
    // SITE-17609 Order page Hero video not removed for phones and tablets
    document.getElementsByClassName('video-player-standard')[0].remove();
    document.getElementsByClassName('hero')[0].classList.remove('hero--video');
    document.getElementsByClassName('hero')[0].classList.remove('js-hero-video');
    document.getElementsByClassName('hero__image')[0].style = 'display: block;';
  }
}

export default HeroVideo;