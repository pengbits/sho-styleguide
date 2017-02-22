import _ from 'underscore';
import $ from 'jquery';
import Modal from '../modal/index';
import Variations from '../variations/index';

class StreamingModal {

  constructor() {

   this.showtimeLink = 'http://www.showtime.com/';
   this.showtimeAnytimeLink = 'http://www.showtimeanytime.com/';
   this.newSlug = '';
   this.sageCode = '';
   this.hideLogosClassName = 'streaming-modal--logos-hide';
   this.redOrderPromoClassName = 'streaming-modal--red-order-promo';
   this.configDefault = {
     'show_logos':false,
     'direct_headline':'For subscribers who signed up through the SHOWTIME app.',
     'direct_label':'SIGN IN',
     'anytime_headline':'For subscribers who signed up through a cable, satellite, telco or streaming service provider.',
     'anytime_label':'SIGN IN',
     'order_headline':'Don\'t Have Showtime Yet?',
     'order_label':'TRY IT NOW FOR FREE',
     'red_order_promo':true,
     'red_order_promo_headline':'TRY SHOWTIME NOW FOR FREE',
     'red_order_promo_copy':'Get commercial-free access to exclusive hit series, star-studded movies and more - there\'s something for every mood.',
     'red_order_promo_label':'START YOUR FREE TRIAL'
   };
   this.setListeners();
  }

  setListeners() {
    $(document).on( "stream:opened", event => {
      this.eventTriggered(event)
    });

    //just in case an Optimizely experiment is not set up...
    this.config = this.configDefault;

    Variations.on('variation:detected:sho', (event, data) => {
      console.log('|streaming-modal| variations ready');
      if(!!data && !!data.streaming_modal){

        // update defaults with variation data
        // this.config = Object.assign(this.configDefault, data.streaming_modal);
        // IE doesn't like object.assign, so i guess it's not being transpiled by Babel
        // 'Object doesn't support property or method `assign`!
        this.config = _.extend({}, this.configDefault, data.streaming_modal);
        console.log(['|streaming-modal| config:', this.config]);

        if(this.config.show_logos){
          this.hideLogosClassName = '';
        }
        
        if(!this.config.red_order_promo){
          this.redOrderPromoClassName = '';
        }

        //Update streaming model if already open
        if(this.modal) this.modal.setContent(this.getTemplate());
      }
    });

  }

  eventTriggered(event) {
    if(!event.details) return;
    let slug = event.details.split("/"),
    newSlug = this.changeSlug(slug);

    this.newSlug = (newSlug ? newSlug : '');

    this.modal = new Modal({
      content : this.getTemplate(),
      dataContext : 'streaming modal'
    });

    this.modal.open(event);
  }

  getTemplate() {
   return `<div class="streaming-modal modal-open ${this.hideLogosClassName} ${this.redOrderPromoClassName}" data-context="streaming modal">
    <div class="streaming-modal__red-order-promo">
    <h2 class="streaming-modal__headline">${this.config.red_order_promo_headline}</h2>
    <p class="streaming-modal__copy">${this.config.red_order_promo_copy}</p>
    <a class="button--solid-white streaming-modal__red-order-promo-button" href="/order${this.sageCode}" data-track data-label="order">${this.config.red_order_promo_label}</a>
    </div>
    <h2 class="streaming-modal__headline">ALREADY HAVE SHOWTIME?</h2>
    <div class="streaming-modal__option streaming-modal__option--showtime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">${this.config.direct_headline}</p>
    <a class="streaming-modal__button" href="${this.showtimeLink}${this.newSlug}" data-track data-label="standalone">${this.config.direct_label}</a>
    </div>
    <div class="streaming-modal__option streaming-modal__option--showtime-anytime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">${this.config.anytime_headline}</p>
    <a class="streaming-modal__button" href="${this.showtimeAnytimeLink}${this.newSlug}" data-track data-label="anytime">${this.config.anytime_label}</a>
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

    return(newSlug.join('/') + this.sageCode);
  }
}

export default StreamingModal;
