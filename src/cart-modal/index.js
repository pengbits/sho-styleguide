import $ from 'jquery';
import Modal from '../modal/index';
import Cookies from '../utils/Cookies'

class CartModal {
  constructor(){
    if (Cookies.get('abandoned_cart_opened')) return false //no need to set listeners if cart was opened as its a one time thing.
    this.setListeners(); 
  }

  // set listeners for the 'internal' events thrown by hash-change
  setListeners() {
    $(document).on( "cart:opened", this.createModal.bind(this))
    $(document).on( "cart:closed", this.destroyModal.bind(this))
  }
 
  createModal(event) {   
    const {type} = event
    this.modal = new Modal({
      content :this.getCenteredTemplate(),
      dataContext : 'abandon cart',
      modalClass: 'cart-outer-modal',
      eventType: 'cart',
      modalType: 'centered'
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

  getCenteredTemplate() {
    return `<div>
      <div class="cart-modal modal-open">
        <div class="cart-modal__image">
          <img src="https://downloads.sho.com/images/order/cart-modal/cart-modal_640x360.png" alt="">
        </div>
        <h2 class="cart-modal__headline">YOU'RE ONLY CLICKS AWAY FROM YOUR SHOWTIME FREE TRIAL</h2>    
        <a href="https://www.showtime.com/#signup?i_cid=int-default-13996" class="button--solid-red" data-track data-context="abandon cart" data-label="showtime.com"> START YOUR FREE TRIAL</a>
        <p class="cart-modal__note">No cable needed. Cancel anytime</p>
        <p class="cart-modal__copy">You'll get unlimited access to all Showtime<br> has to offer, including:</p>
        <p class="cart-modal__line"></p>
        <ul class="cart-modal__list">
          <li class="cart-modal__list__item">Enjoy new and past episodes of SHOWTIME Original Series,
          movies, sports, documentaries and comedy specials </li>
          <li class="cart-modal__list__item">Stream live TV </li>
          <li class="cart-modal__list__item">Download episodes to your mobile device to watch offline </li>
        </ul>
      </div>
    </div>`
  }
  
  trigger(type){
    $.event.trigger({type})
  }
} 
 
export default CartModal;
