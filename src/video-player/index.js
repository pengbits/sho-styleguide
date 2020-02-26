import $ from 'jquery';
import VideoPlayerAgeGate from './age-gate-react/';
import CountDownWidget from '../countdown-widget/index.js';
import Variations from '../variations';
import cookies from '../utils/cookies';
import VideoObjectSchema from './video-object-schema/';

const ORDER_TRAY_OR_MODAL_CLOSED = 'closed';
const ORDER_TRAY_OPEN            = 'order:opened';
const PLAYER_READY               = 'loadedmetadata'
const PLAYER_PAUSE               = 'pause';
const PLAYER_PLAY                = 'play';
const PLAYER_CATALOG_ERROR       = 'bc-catalog-error';
const EMAIL_SIGNUP_SUCCESS       = 'videoEmailSignupSuccess';
const AGE_GATE_SUCCESS           = 'videoAgeGateSuccess';
const VARIATION_DETECTED         = 'variation:detected:sho'

class VideoPlayer {

  //
  // startup
  // ---------------------------------------------------------------------------
  constructor(cfg) {
    const el    = $(cfg.el);
    const query = (key) => el.find('.video-playr__'+key)
    // todo - rename these oddball elements to `video-player__${key}`

    this.breakpoints = {
      'medium': 768,
      'large' : 1026
    }

    this.error_messages = {
      'CLIENT_GEO' : 'The video you are trying to watch cannot be viewed from your current country or location'
    }

    // cache useful elements
    Object.assign(this, {
      el                : el,
      ageGateCntr       : query('age-gate-container'),
      orderOverlayCntr  : el.find('.video-player__order-overlay-container'),
      errorMessageCntr  : query('error-message'),
      video             : query('video__embed'),
      autoNext          : $('.video-player__next-stop'),
      relatedVideos     : $('.promo--video'),
      videoObjectDetails: $('.video-object-details'),
      schema            : (cfg.schema === true || cfg.schema == undefined) // allow shoplace to opt-out of schema
    })

    // grab api pointers
    const id = this.video.attr('id')
    Object.assign(this, {
      bcPlayer          : window.bc(id),
      api               : window.videojs(id)
    })

    // set state
    const ua          = navigator.userAgent.toLowerCase()
    const check       = (reg) => reg.test(ua)
    const safari      = check(/safari/) && !check(/chrome/)
    const isFullEpisode = this.video.attr('data-full-episode') == 'true'

    Object.assign(this, {
      // was hasAutoPlay=!safari, but seems like there is no longer any reason 
      // to exclude safari from at least attempting synthetic autoplay after clearing age-gate/email widget
      hasPreRoll      : isFullEpisode, // all full episodes get preroll and short form do not.
      isFullEpisode   : isFullEpisode,
      preRollPlaying  : false,
      disabledCards   : false,
      age             : this.video.attr('data-age-gate'),
      isFirstRun      : true
    })

    //console.log(`|playr| age=${this.age}`)
    this.setPlayerReadyHandler()
    this.initPreRollPlugin()
    this.setPreRollHandlers()
    this.setPlayerPlaybackHandlers()
    this.setCardButtonHandler()
    this.setGlobalEventHandlers()
    this.setVariationHandlers()
    this.setAgeGate()
    this.schema && this.setSchema()
}

  setPlayerReadyHandler(){
    // make sure the player is ready before moving forward
    // ...
    // note - pretty sure this can be swapped out for player.ready()
    // https://docs.brightcove.com/brightcove-player/current-release/Player.html#ready
    if(this.bcPlayer.readyState() > 0) {
      this.onMetadataLoaded();
    }
    else {
      this.bcPlayer.on(PLAYER_READY, () => this.onMetadataLoaded());
    }
  }

  onMetadataLoaded() {
    // if there is no preroll, init the order overlay.
    // if there is preroll, the order overlay is triggered
    // after ima3-complete event in setPreRollHandlers below
    //console.log(`|playr| onMetadataLoaded`)
    this.hasPreRoll || this.renderOrderOverlay();
    this.setMenuHandlers();
  }

  setPlayerPlaybackHandlers() {
    this.api.one(PLAYER_CATALOG_ERROR,  this.onCatalogError.bind(this));
    this.api.on(PLAYER_PAUSE,           this.onPause.bind(this));
    this.api.on(PLAYER_PLAY,            this.onPlay.bind(this));
  }

  setCardButtonHandler(){
    this.el.on('click', '.video-player__button', this.onClick.bind(this));
  }

  setMenuHandlers() {
    $("#video-player").one( "mouseover", () => {
      this.toggleOrderOverlay();

      $('.vjs-subs-caps-button .vjs-menu-item').click(() => {
        this.toggleOrderOverlay();
      });
    });

  }

  toggleOrderOverlay() {
    let tracks = this.bcPlayer.textTracks();
    if(tracks.length > 1 && this.orderOverlayCntr) {
      if (tracks[1].mode === "showing") this.orderOverlayCntr.hide();
      if (tracks[1].mode === "disabled") this.orderOverlayCntr.show();
    }
  }

  setGlobalEventHandlers() {
    $(window).on(ORDER_TRAY_OPEN, (e) => {
      // console.log(`|playr| global event fired '${e.type}'`)
      this.stop()
    })

    $(window).on(ORDER_TRAY_OR_MODAL_CLOSED, (e) => {
      // console.log(`|playr| global event fired '${e.type}'`)
      if(!this.isFirstRun) this.play()
    })

    $(window).on(`${EMAIL_SIGNUP_SUCCESS} ${AGE_GATE_SUCCESS}`, (e) => {
      console.log(`|playr| global event fired '${e.type}' isFirstRun=${this.isFirstRun}`)
      // note that we can't simulate autoplay consistently by invoking api.play(),
      // because it's not honored if the user hasn't interacted with dom yet...
      // so this is really only here to handle the email signup and age-gate form submission cases
      this.play()
    })
  }

  // is this  still needed?
  setVariationHandlers(){
    Variations.on(VARIATION_DETECTED, (event, data) => {
      if (data.videoPlayer) {
        //console.log('|playr| variations ready')
        if (data.videoPlayer.endEarly) {
          const endTime = data.videoPlayer.endSecondsBeforeVideoEnd || 30; // 30 sec default
          this.api.on('timeupdate', event => this.endEarly(event, endTime))
          //console.log('|playr| end early variation ready')
        }
      }
    })
  }

  setSchema(){
    // create new Video Object Schema in page, if details exist
    if(this.videoObjectDetails) {
      this.videoObjectSchema = new VideoObjectSchema(this.videoObjectDetails[0]);
    }
  }


  onValidation() {
    this.setMasked(false);
    this.setGlobalEventHandlers();
  }
  
  initPreRollPlugin(){
    if(!this.hasPreRoll) return
    // configure ima plugins
    // previously these were defined in the html layer but moving here for onetrust integration
    this.bcPlayer.ima3({
      serverUrl: 'https://www.sho.com/assets/xml/vast/pre-roll.xml',
      timeout: 4000,
      hardTimeouts: false,
      adTechOrder: ["html5", "flash"]
    })
  }
  setPreRollHandlers() {
    if(!this.hasPreRoll) return

    //console.log('|playr| setting pre-roll handlers')
    this.onPreRollEvent('ads-ad-started', true )
    this.onPreRollEvent('ads-play',       true )
    this.onPreRollEvent('ads-ad-ended',   false)
    this.onPreRollEvent('ima3error',      false)
    this.onPreRollEvent('ima3-ad-error',  false)
    this.onPreRollEvent('ads-pause',      false)
    this.bcPlayer.on('ima3-complete',     () => this.renderOrderOverlay())
    this.bcPlayer.on('ima3-complete',     () => this.setMenuHandlers())
    $(window).on(ORDER_TRAY_OPEN,         () => this.bcPlayer.ima3.adPlayer.pause());
    $(window).on(ORDER_TRAY_OR_MODAL_CLOSED, () => this.bcPlayer.ima3.adPlayer.play());
  }

  setAgeGate(){
    this.ageGateSetting = parseInt(this.age);
    if(!this.isFullEpisode && this.isAgeGated()){
      this.initAgeGate();
    }
  }

  onPreRollEvent(eventName, isPlaying) {
    this.bcPlayer.on(eventName, () => {
      //console.log(`|playr| pre-roll event '${eventName}' -> setPreRollPlaying(${isPlaying})`)
      this.setPreRollPlaying(isPlaying)
    })
  }

  setPreRollPlaying(isPlaying) {
    this.preRollPlaying = isPlaying; // where is this flag even used?
  }



  //
  // runtime
  // ---------------------------------------------------------------------------
  onCatalogError() {
    const error = this.api.catalog.error;
    if (!!error && error.data.length) {
      this.renderError(error.data[0]);
    }
  }

  play() {
    //console.log(`|playr| play()`)
    this.api.play();
    this.isFirstRun = false
  }

  stop() {
    //console.log(`|playr| stop()`)
    this.api.paused() || this.api.pause();
  }

  renderOrderOverlay() {
    if ($(window).width() >= this.breakpoints.large) {
      this.orderOverlayCntr.html(
        `<div class="video-player__order-overlay">
          <p class="order-overlay--text">Start Watching</p>
          <div class="order-overlay__logo" alt="Showtime"></div>
          <a class="order-overlay__button" href="#/order?i_cid=int-default-12390" data-track data-context="video hover" data-label="order" alt="try it now for free">Try It Now For Free</a>
        </div>`
      );
    }
  }

  renderError(error) {
    this.setMasked(true);
    this.ageGateCntr.html(
      `<div class="video-playr__age-gate">
          <h5 class="h5 video-playr__age-gate__message">${this.error_messages[error.error_subcode]}</h5>
        </div>`
    );
  }

  setMasked(isMasked) {
    this.el.toggleClass('video-playr--is-masked', isMasked);
  }

  setTitle(videoTitleElement) {
    const bcVideoId = this.video.selector.attr('data-video-id');
    this.api.ready(function() {
      const videoPlayr = this;
      videoPlayr.catalog.getVideo(bcVideoId, function (error) {
        if (error) {
          console.log(error);
        } else {
          $(videoTitleElement)
            .hide()
            .text(videoPlayr.mediainfo.name)
            .fadeIn(800);
        }
      })
    })
  }

  getNext() {
    const next = this.findFirstRelatedVideoNotCookied();
    const image = $(next).find('.promo__image').data('bgset');
    const title = $(next).find('.promo__headline').text();
    const link = $(next).find('.promo__link').attr('href');
    return { image, title, link }
  }

  setNext() {
    const { image, title, link } = this.getNext();
    this.el.find('.video-player__next-link').attr('href', link);
    this.el.find('.video-player__next-thumb').css('backgroundImage', `url("${image}")`);
    this.el.find('.video-player__next-title').text(title);
  }

  showNext(){
    this.el.find('.video-player__next').show()
  }

  hideNext(){
    this.el.find('.video-player__next').hide()
  }

  findFirstRelatedVideoNotCookied(){
    return this.relatedVideos.toArray().find((video, index) => {
      const videoLink = $(video).find('.promo__link').attr('href');
      // void cookie if video is last in related
      if (index === this.relatedVideos.length - 1) {
        // delete cookie
        cookies.set('prev_viewed', '', 0);
        return true
      }
      return this.isNotCookied(videoLink)
    });
  }

  getCoookie() {
    return cookies.get('prev_viewed');
  }

  isNotCookied(url) {
    if (!!this.getCoookie()) {
      return !this.getCoookie().includes(url)
    }
    return true
  }

  setVideoCookie(viewed) {
    let prevViewed = cookies.get('prev_viewed');
    if (!!prevViewed) {
      prevViewed += `+${viewed}`;
      cookies.set('prev_viewed', prevViewed, 1)
    } else {
      cookies.set('prev_viewed', viewed, 1)
    }
  }

  // Pause / End
  setCountdown() {
    const nextLink = this.el.find('.video-player__next-link').attr('href');
    this.el.find('.video-player__next').prepend(
      `<div
        class="video-player__countdown-widget"
        data-title="Up Next In "
        data-date="10 seconds"
        data-timer="true"
        data-time-units="secs"
        data-redirect="${nextLink}">
      </div>`
    );

    this.nextCount = new CountDownWidget({
      el: this.el.find('.video-player__countdown-widget')
    });
    // make sure autoplay is set back to visible in case this is a replay
    this.autoNext.css('visibility', 'visible');
    this.el.find('.video-player__next-stop').click(() => {
      this.stopAuto();
    });
  }

  stopAuto() {
    this.nextCount.cancel();
    this.autoNext.css('visibility', 'hidden');
  }

  endEarly(e, timeFromEnd){
    const player = e.target.player.cache_
    if (player.duration - player.currentTime < timeFromEnd) {
      this.onPause({triggered: true});
    }
  }

  onPause({ triggered }) {
    let card;
    let order;
    let eventType;
    let controlsDisabled;

    if (!this.disabledCards) {
      if (triggered) {
        // show end card without setting countdown
        eventType = 'ended';
      } else {
        // since end of video also throws a pause event we have to look at ended state to see how to treat this:
        eventType = this.api.ended() ? 'ended' : 'paused';

        if (eventType === 'ended' && $(window).width() >= this.breakpoints.medium) {
          if(this.relatedVideos.length){
            // update next up thumb & instantiate countdown widget
            this.showNext();
            this.setNext();
            this.setCountdown();
          } else {
            // hide the next up thumb
            this.hideNext()
          }

          this.setVideoCookie(window.location.pathname);
          // cancel autoplay for mobile
          $(window).resize(() => {
            if ($(window).width() < this.breakpoints.medium) {
              this.stopAuto();
            }
          });
        }
      }

      card = this.el.find(`.video-player__card--${eventType}`);
      order = this.el.find(`.video-player__order-overlay`);
      controlsDisabled = document.getElementsByClassName("vjs-controls-disabled").length > 0;

      // check if this is an intentional user pause and not just a pause event fired on scrub
      // or a pause caused by editing caption settings or clicking the share button
      if (!this.api.scrubbing() && !this.preRollPlaying && !controlsDisabled) {
        order.hide();
        card.show();
      }

      if (triggered) {
        // disable any additional card events
        this.disabledCards = true;
      }
    }
  }

  onPlay() {
    this.disabledCards = false;
    this.hideCards();
    this.showOrderOverlay();
    // kill countdown in case this is a replay
    if (this.nextCount) {
      this.nextCount.cancel();
    }
  }

  hideCards() {
    this.el.find('.video-player__card').hide();
  }

  showOrderOverlay() {
    this.el.find('.video-player__order-overlay').show();
  }

  onClick(e) {
    e.preventDefault();
    const role = $(e.currentTarget).data('role');
    !!this[role] && this[role].apply(this);
  }

  //
  // age-gate, utils
  // ---------------------------------------------------------------------------
  isEmailGated() {
    return $('.video-player--email-gated').length > 0
  }

  isAgeGated() {
    return !!this.ageGateSetting;
  }

  initAgeGate() {
    this.setMasked(true);
    this.setGlobalEventHandlers();
    var root = this.ageGateCntr[0]; // Obtaining the HTMLDivElement object - in this case is video-playr__age-gate
    VideoPlayerAgeGate.factory(root, this.age);
    console.log(`initAgeGate: ${this.age}`)
    if (!this.api.paused()) {
      this.stop();
    }
  }
}

export default VideoPlayer;
