import _ from "underscore";
import $ from 'jquery';
import Backbone from 'backbone';
import VideoPlayerAgeGate from "./agegate/agegate.js";
import CountDownWidget from "../countdown-widget/index.js";

class VideoPlayer {  
 
  constructor(cfg) {
 
    this.error_messages = {
      'CLIENT_GEO': 'The video you are trying to watch cannot be viewed from your current country or location'
    }

    var el = $(cfg.el); _.extend(this, {
      'el': el,
      'ageGateCntr': el.find('.video-playr__age-gate'),
      'age': el.find('.video-playr__video__embed').attr('data-age-gate'),
      'errorMessageCntr': el.find('.video-playr__error-message'),
      'video': el.find('.video-playr__video__embed'),
      'bcPlayer': bc(el.find('.video-playr__video__embed').attr('id')),
      'api': videojs(el.find('.video-playr__video__embed').attr('id')),
      'breakpoints': { medium: 768 },
      'autoNext': el.find('.video-player__next-stop'),
      'isFullEpisode': el.find('.video-playr__video__embed').attr('data-full-episode'),
      'preRollPlaying': false
    });
    
    this.initPreRoll();
    this.ageGateSetting = parseInt(this.age); // 0 -18 this.video.data('ageGate')
    this.isGated() && this.initAgeGate();
    this.setHandlers();
  }
  
  setHandlers()
  {
    this.api.one('bc-catalog-error', this.onCatalogError.bind(this));
    this.ageGate && this.ageGate.on('video:validating', this.onValidating.bind(this));
    this.ageGate && this.ageGate.on('video:validation:success', this.onValidation.bind(this));
    this.api.on('pause', this.onPause.bind(this));
    this.api.on('play', this.onPlay.bind(this));
    this.el.on('click','.video-player__button', this.onClick.bind(this));
    // bind pause and play to order tray events
    $(window).on('order:opened', () => this.stop());
    $(window).on('closed', () => this.play());
  }
  
  initPreRoll()
  {
    /*
    The following code initializes the IMA3 plugin, which loads the VAST tag to play the pre-roll video. For the 
    IMA3 plugin to function properly it needs to be loaded before other player configuration takes place.
    See more here: https://docs.brightcove.com/en/perform/brightcove-player/guides/ima-plugin.html
    */
    if(this.isFullEpisode == 'true'){
      this.preRollPlaying = true;
      
      this.bcPlayer.ima3({
        serverUrl: 'http://www.sho.com/assets/xml/vast/pre-roll.xml',
        timeout: 4000,
        hardTimeouts: false
      });
  
      this.setBcListener('ads-ad-ended');
      this.setBcListener('ima3error');
      this.setBcListener('ima3-ad-error');
    }
  }
  
  setBcListener(event)
  {
    this.bcPlayer.on(event, (e) => {
      this.preRollPlaying = false;
    });
  }

  onValidating() 
  {
   // this.stop();
  }

  onValidation() 
  {
    this.setMasked(false);
  }

  onCatalogError() 
  {
    var error = this.api.catalog.error;
    if ( !! error && error.data.length) 
    {
      this.renderError(error.data[0])
    }
  }

  play() 
  {
    this.api.play();
  }

  stop() 
  {
    this.api.paused() || this.api.pause();
  }

  renderError(error) 
  {
    this.setMasked(true);
    console.log(this.ageGateCntr);
    this.ageGateCntr.show();
    this.ageGateCntr.html('<h5 class="h5 video-playr__age-gate__message">' + this.error_messages[error.error_subcode] + '</h5>')
  }

  setMasked(isMasked) 
  {
   this.el.toggleClass('video-playr--is-masked', isMasked);
  }

  setTitle(videoTitleElement)
  {   
   var bcVideoId = (this.video.selector).attr('data-video-id');
   console.log ('bcVideoID is' + bcVideoID);
   this.api.ready(function() {
     var videoPlayr = this;
     videoPlayr.catalog.getVideo(bcVideoId, function(error, video) {
       if (error) {
         console.log(error);
       } else {
         $(videoTitleElement).hide().text(videoPlayr.mediainfo.name).fadeIn(800);
       }
     });
   });
  }

  // Pause / End
  setCountdown() {
    const nextLink = this.el.find('.video-player__next-link').attr('href');
    this.el.find('.video-player__next').prepend(`<div 
                                                  class=\"video-player__countdown-widget\" 
                                                  data-title=\"Up Next In \"
                                                  data-date=\"10 seconds\" 
                                                  data-timer=\"true\" 
                                                  data-time-units=\"secs\" 
                                                  data-redirect=\"${nextLink}\"
                                                  </div>`)
    this.nextCount = new CountDownWidget({el: this.el.find('.video-player__countdown-widget')});
    // make sure autoplay is set back to visible in case this is a replay
    this.autoNext.css('visibility','visible');
    this.el.find('.video-player__next-stop').click(() => {
      this.stopAuto();
    })
  }

  stopAuto() {
    this.nextCount.cancel();
    this.autoNext.css('visibility','hidden');
  }
  
  onPause(e) {
    // since end of video also throws a pause event we have to look at ended state to see how to treat this:
    let eventType = this.api.ended() ? 'ended':'paused';
    let card = this.el.find(`.video-player__card--${eventType}`);

    if (eventType === 'ended' && $(window).width() >= this.breakpoints.medium) {
      // instantiate countdown widget
      this.setCountdown()
      // cancel autoplay for mobile
      $(window).resize(() => {
        if ($(window).width() < this.breakpoints.medium) {
          this.stopAuto();
        }
      })
    } 
    
    // check if this is a user pause and not just a pause event fired on scrub
    if (!this.api.scrubbing() && !this.preRollPlaying) {
      card.show();
    }
  }
  
  onPlay(e) {
    this.hideCards();
    // kill countdown in case this is a replay
    if (this.nextCount) {
      this.nextCount.cancel(); 
    }
  }
  
  hideCards() {
    this.el.find('.video-player__card').hide();    
  }
  
  onClick(e) {
    e.preventDefault();
    let role = $(e.currentTarget).data('role');
    !!this[role] && this[role].apply(this);
  }
  
  next() {
    console.log('play next video...')
  }

  // Age Gate
  
  isGated() 
  {
    return !!this.ageGateSetting;
  }

  initAgeGate() 
  {
    this.setMasked(true)

    this.ageGate = new VideoPlayerAgeGate({
      container: this.ageGateCntr,
      age: this.ageGateSetting
    })

    if(!this.api.paused()){
      this.stop()
    }
  }
}
export default VideoPlayer; 




