import $ from 'jquery';
import Modal from '../modal/index';
import Cookies from '../utils/Cookies'

class CartModalLowerThird {
  constructor(){
    if (Cookies.get('abandoned_cart_opened')) return false //no need to set listeners if cart was opened as its a one time thing.
    this.setListeners(); 
  }

  // set listeners for the 'internal' events thrown by hash-change
  setListeners() {
    $(document).on( "cart-lower-third:opened", this.createModal.bind(this))
    $(document).on( "cart-lower-third:closed", this.destroyModal.bind(this))
  }
 
  createModal(event) {   
    const {type} = event
    this.modal = new Modal({
      content : this.getLowerThirdTemplate(),
      dataContext : 'abandon cart',
      modalClass: 'cart-outer-modal',
      eventType: 'cart',
      modalType: 'lower-third',
    });
    this.modal.open(event);
    Cookies.set('abandoned_cart_opened', true);
    
    // fire public event for analytics purposes
    // with tiny delay in case we're browsing to #/cart/open page
    setTimeout(this.trigger, 0.125, 'cart-modal:opened')
  }  
  
  destroyModal(e){
    if(!Cookies.get('abandoned_cart_opened')){
      console.log('can\'t fire `cart-modal:closed` because it was never opened')
    } 
    else {
      this.trigger('cart-modal:closed')      
    }
  }

  getLowerThirdTemplate() {
    return `<div>
      <div class="cart-modal--lower-third modal-open">
        <div class="cart-modal__inner">
          <div class="cart-modal__img-container">
            <div class="cart-modal__image"></div>
          </div>
          <div class="cart-modal__right-container">
          <div class="cart-modal__text-container">
            <h2 class="cart-modal__headline">YOU'RE ONLY CLICKS AWAY FROM YOUR SHOWTIME FREE TRIAL</h2>
            <p class="cart-modal__copy cart-modal__copy--desktop">Get unlimited access to all SHOWTIME has to offer. Enjoy new and past episodes of SHOWTIME Original Series, movies, sports, and more. You can even stream live TV and download episodes to your mobile device to watch offline.</p>
          </div>
          <div class="cart-modal__button-container">
            <a href="https://www.showtime.com/#signup?i_cid=int-default-16025" class="button--solid-red" data-track data-context="abandon cart" data-label="showtime.com"> START YOUR FREE TRIAL</a>
            <p class="cart-modal__copy cart-modal__button-terms">No cable needed. Cancel anytime.</p>
          </div>
          <p class="cart-modal__copy cart-modal__copy--mobile">Get unlimited access to all SHOWTIME has to offer. Enjoy new and past episodes of SHOWTIME Original Series, movies, sports, and more. You can even stream live TV and download episodes to your mobile device to watch offline.</p>
          </div>
        </div>  
      </div>
    </div>`
  }
  

  trigger(type){
    $.event.trigger({type})
  }
} 
 
export default CartModalLowerThird;
