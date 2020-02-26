import $ from 'jquery';
import Modal from '../modal/index';
import Variations from '../variations/index';
import { stripHTML } from '../utils/stripHTML';

class StreamingModal
{
  constructor(){
   this.showtimeLink = 'https://www.showtime.com/';
   this.showtimeAnytimeLink = 'https://www.showtimeanytime.com/';
   this.newSlug = '';
   this.sageCode = '';
   this.hideLogosClassName = 'streaming-modal--logos-hide';
   this.redOrderPromoClassName = 'streaming-modal--red-order-promo';
   this.streamingImageClassName = '';
   this.streamingImageHTML = '';
   this.config = {
     'show_logos':false,
     'direct_headline':'For subscribers who signed up through the SHOWTIME website or the SHOWTIME app.',
     'direct_label':'SIGN IN',
     'anytime_headline':'For subscribers who signed up through a cable, satellite, telco or streaming service provider.',
     'anytime_label':'SIGN IN',
     'order_headline':'Don\'t Have Showtime Yet?',
     'order_label':'TRY IT NOW FOR FREE',
     'red_order_promo':true,
     'red_order_promo_headline':'TRY SHOWTIME NOW FOR FREE',
     'red_order_promo_copy':'Get commercial-free access to exclusive hit series, star-studded movies and more - there\'s something for every mood.',
     'red_order_promo_label':'START YOUR FREE TRIAL',
     'streaming_image_only':false,
     'streaming_image':false,
     'streaming_image_title':''
    };
    // setImageAttributes() returns a Promise to safeguard against possible race condition with Optimizely Variations
    //this.setImageAttributes().then(() => this.setListeners());
    this.setListeners();
  }

  setImageAttributes() {
    return new Promise((resolve, reject) => {
      const streamingImageHeadline = {
        'series-home': 'START STREAMING THIS SERIES NOW',
        'episode-detail': 'START STREAMING THIS EPISODE NOW',
        'movie-title': 'START STREAMING NOW',
        'sports-event': 'START STREAMING NOW',
        'season-detail': 'START STREAMING THIS EPISODE NOW'
      };
      // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
      // Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs
      // so we can iterate through key-value gracefully like so
      for (const [key, value] of Object.entries(streamingImageHeadline)) {
        // make each key a $ selector
        const selector = `.${key}`;
        // if it's found then set attributes for image version
        if ($(selector).length > 0) {
          this.setHeadline(value);
          this.setImage();
          this.setHtml();
        }
      }
      resolve();
    });
  }

  setHeadline(headline) {
    this.config.red_order_promo_headline = headline;
  }

  setImage() {
    const streamingImageMeta = $('meta[name="streaming-modal-image"]');
    if (streamingImageMeta.length > 0) {
      this.config.streaming_image_only = true;
      this.config.streaming_image_src = streamingImageMeta.attr('content');
    }
    if (this.episodeImageSrc) {
      this.config.streaming_image_only = true;
      this.config.streaming_image_src = this.episodeImageSrc;
    }
  }

  setHtml() {
    this.streamingImageClassName = this.config.streaming_image_only ? 'streaming-modal--with-image-only' : '';
    this.streamingImageHTML = `<div class="streaming-modal__image">
                                <div class="streaming-modal__image-container">
                                  <div class = "streaming-modal__image-container__shim"></div>
                                  <img src="${this.config.streaming_image_src}" alt="${this.config.streaming_image_title}">
                                </div>
                              </div>`;
  }

  setListeners() {
    $(document).on( "stream:opened", event => {
      this.eventTriggered(event)
    });

    Variations.on('variation:detected:sho', (event, data) => {
      // console.log('|streaming-modal| variations ready');
      if (!!data && !!data.streaming_modal) {
        // update defaults with variation data
        const variationData = data.streaming_modal;
        this.config = { ...this.config, variationData };
        //
        // do the variation
        //
        // Update streaming model if already open
        if (this.modal) this.modal.setContent(this.getTemplate());
      }
    });
  }

  eventTriggered(event) {
    if(!event.details) return;

    let slug = stripHTML(event.details).split("/"),
    newSlug = this.changeSlug(slug);

    const episodeId = event.episode;
    this.episodeImageSrc = $(`[data-episode-id="${episodeId}"]`).data('streaming-image');
    this.newSlug = (newSlug ? newSlug : '');
    this.setImageAttributes();
    this.modal = new Modal({
      content : this.getTemplate(),
      dataContext : 'streaming modal'
    });

    this.modal.open(event);
  }

  getTemplate() {
   return `<div class="streaming-modal modal-open ${this.hideLogosClassName} ${this.redOrderPromoClassName} ${this.streamingImageClassName}" data-context="streaming modal">
    ${this.streamingImageHTML}
    <div class="streaming-modal__red-order-promo">
    <h2 class="streaming-modal__headline">${this.config.red_order_promo_headline}</h2>
    <p class="streaming-modal__copy">${this.config.red_order_promo_copy}</p>
    <a class="button--solid-white streaming-modal__red-order-promo-button" href="/order${this.sageCode}" data-track data-label="order">${this.config.red_order_promo_label}</a>
    </div>
    <h2 class="streaming-modal__headline">ALREADY HAVE SHOWTIME?</h2>
    <div class="streaming-modal__option streaming-modal__option--showtime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">${this.config.direct_headline}</p>
    <a class="streaming-modal__link js-metrics-footer__showtime-sign-in" href="${this.showtimeLink}${this.newSlug}" data-track data-label="standalone">${this.config.direct_label}</a>
    <a class="streaming-modal__button js-metrics-footer__showtime-sign-in" href="${this.showtimeLink}${this.newSlug}" data-track data-label="standalone">${this.config.direct_label}</a>
    </div>
    <div class="streaming-modal__option streaming-modal__option--showtime-anytime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">${this.config.anytime_headline}</p>
    <a class="streaming-modal__link js-metrics-footer__showtime-anytime-sign-in" href="${this.showtimeAnytimeLink}${this.newSlug}" data-track data-label="anytime">${this.config.anytime_label}</a>
    <a class="streaming-modal__button js-metrics-footer__showtime-anytime-sign-in" href="${this.showtimeAnytimeLink}${this.newSlug}" data-track data-label="anytime">${this.config.anytime_label}</a>
    </div>
    <div class="streaming-modal__order">
    <h3 class="streaming-modal__order-header">${this.config.order_headline}</h3>
    <a class="button--outline-light-grey button--small" href="/order${this.sageCode}" data-track data-label="order">${this.config.order_label}</a>
    </div>
    </div>`;
  }

  changeSlug(slug) {

    let newSlug = [];

    switch (slug[0]) {
      case "series":
      case "movie":
      case "movies":
      case "collection":
      case "episode":
      case "afterhours":
        newSlug[0] = slug[0];
        if (slug[1]) {
          newSlug[1] = slug[1];
        }
        break;
      case "home":
        if (slug[1]) {
          this.sageCode = '?i_cid=' + slug[1];
        }
        break;
      default:
        newSlug[0] = null;
        break;
    }

    // SHOBox exception
    if (slug[0] == 'series' && slug[1] == 93) {
       newSlug[0] = ['sports'];
       newSlug[1] = ['boxing'];
    }

    if (slug[2]) {
      this.sageCode = '?i_cid=' + slug[2];
    }

    if(newSlug.length > 0) {
      newSlug.unshift("#");
    }

    return newSlug.join('/') + this.sageCode;
  }

}

export default StreamingModal;
