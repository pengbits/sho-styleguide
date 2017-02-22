import Settings from './settings';

var ScrollTo = {
  
  focusProvider(cards){
    // if there is more then 1 provider being focused, only focus the first one
    let card = cards.length > 1 ? cards.first() : cards;
    let offset =  Math.floor(card.offset().top - this.containerTop - $(document).scrollTop());
    // if there are other cards already present,leave a little slice at top of window

    let lastScroll= this.getLastScroll()

    this.tween(this.getBodyContent(), {
      'from' : {
        'scrollTop': lastScroll
      },
      'to': {
        'scrollTop': lastScroll + offset
      },
      'duration': Settings.focus_duration,
      'name': 'provider:focus'
    })
  },

  
  // scroll order-tray__body-content (desktop) or body element (mobile) to desired offset
  // note: we can't use TweenLite.to() as is with scrollTop, since manipulating the scrollTop property on each frame
  // doesn't have the same effect as calling scrollTop(), which jquery animate() must do internally
  // either that or tweenLite can animate scrollTop on body-content element, but not the body element
  scrollContentTo(scrollTop){
    this.getScrollElement().animate({'scrollTop': scrollTop}, 250);
  },
  
  scrollToProviderMobile(card){
    _.delay(()=> {
      let lastScroll =    this.getScrollElement().scrollTop();
      let headerHeight =  this.getHeaderHeight();
      let offset =        this.model.isOverlay() 
          ? 
          (card.position().top - headerHeight + lastScroll)
          :
          (card.offset().top - 10)
          ;
          
      this.scrollContentTo(offset);
    },0);
  }
}

export default ScrollTo;