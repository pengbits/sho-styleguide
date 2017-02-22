import $ from 'jquery';
import ScrollbarDimensions from '../../measure-scrollbars';

// 1. Display Modes
// 2. Document Scrollbar-Related Quirks
// 3. Scrolling for Body-Content
// 4. Stage & Chameleon
// 5. DOM Helpers

var Util = {
  
  // 1.
  // Display Modes
  // --------------------------------------------------------------------------------------
  setDisplayMode(){
    let display;

    if(this.el.hasClass('order-tray--chameleon'))
    {
      display = 'chameleon';
    }
    else if(this.el.hasClass('order-tray--overlay'))
    {
      display = 'overlay';
    }
    else
    {
      display = 'in-page'
    }
    this.model.setDisplayMode(display);
  },
  
  
  // 2.
  // Document (Body & HTML element) Scrollbar-related Quirks
  // --------------------------------------------------------------------------------------  
  documentIsScrollable(){
    return this.elementIsScrollable($('html').get(0))
  },
  
  // would the element have scrollbars?
  elementIsScrollable(el){ // must be dom element, not jquery set
    return el.scrollHeight > el.clientHeight;
  },
  
  setDocumentPaddingToScrollbarsWidth(){
    let width = ScrollbarDimensions.instance().width();
    this.setDocumentPadding(width);
  },
  
  saveDocumentPadding(){
    // capture the original padding-right on html element since it will be overriden with width of scrollbars
    // if this is ever set to anything other than 0 it'll break the tray's handling, but playing safe regardless
    this.documentAttrs.paddingRight = $('html').css('padding-right');
    // fire a cheeky little faux event to avoid race condition for overlay
    this.update('change:document-attrs:padding'); 
  },
  
  restoreDocumentPadding(){
    this.setDocumentPadding(this.documentAttrs.paddingRight);
  },
  
  setDocumentPadding(width){
    $('html').css('padding-right', width);
  },
  
  // 3.
  // Scrolling for Body-Content
  // --------------------------------------------------------------------------------------
  // view#setLastScroll
  // store the scroll of the order-tray's scrollable content element
  setLastScroll(){
    let scrollTop = this.getScrollElement().scrollTop();
    this.model.set({'scrollTop':scrollTop},{'silent':true});
  },
  
  // view#setLastScroll
  // store the scrollTop of the underlying document
  setLastPageScroll(){
    let scrollTop = $(document).scrollTop();
    this.model.set({'pageScrollTop':scrollTop},{'silent':true});
  },
  
  // view#getLastScroll
  // return the last scroll of the order-tray's content element
  getLastScroll(selector = 'content'){
    return this.model.get('scrollTop') || 0;
  },
  
  // view#getLastPageScroll
  // return the last scroll of the underlying document
  getLastPageScroll(){
    return this.model.get('pageScrollTop') || 0;
  },

  restoreScrollTop(offset = 0){
    let scrollTop = this.getLastScroll() + offset;
    this.getScrollElement().scrollTop(scrollTop)
  },
  
  restorePageScrollTop(offset = 0){
    let scrollTop = this.getLastPageScroll() + offset;
    $(document).scrollTop(scrollTop)
  },
  
  // 4.
  // Stage (Classname toggling and helpers, mostly for Chameleon's stage handling
  // --------------------------------------------------------------------------------------
  toggleStageIsOpen(isOpen){
    this.toggleStageIsOpenClass(isOpen);
    this.toggleTrayIsActiveClass(isOpen);
    this.model.isTablet() && this.toggleDocumentIsPinned(isOpen);
  },
  
  toggleStageIsOpenClass(isOpen){
    this.el.toggleClass('order-tray--stage-open', isOpen);
  },
  
  toggleTrayIsActiveClass(isActive){
    //console.log(`view#toggleTrayIsActiveClass isTablet=${this.model.isTablet()}`)
    $('html').toggleClass('order-tray-active', isActive);
    this.model.isTablet() && $('html').toggleClass('order-tray-active--has-touch-events', isActive);
  },
  
  // view#toggleDocumentIsPinned
  // make the {position:fixed,width:100%} workaround less jarring by preserving the document scroll while it's applied
  toggleDocumentIsPinned(isPinned){
    let offset = isPinned ? `-${this.getLastPageScroll()}px` : '';
    $('html').css('top', offset);
  },

  // 5. DOM helpers
  // find critical elements, measure their heights etc
  // --------------------------------------------------------------------------------------
  getProviderIdFromElement(el){
    return $(el).parents('.order-card').data('provider-id');
  },

  getProviderElementFromId(id, useGroup){
    let dataAttr = useGroup ? 'provider-group-id' : 'provider-id';
    let selector = `[data-${dataAttr}="${id}"]`;
    return this.getBodyContent().find(selector)
  },

  getHeaderHeight(){
    if(this.headerHeight){
      return this.headerHeight
    } 
    else {
      let headerHeight = this.el.find('.order-tray__body-headline').outerHeight();
      let bodyTop = Number((this.getBodyContent().css('padding-top') || '').replace('px',''));
      this.headerHeight = headerHeight + bodyTop;
      return this.headerHeight;
    }
  },
  
  getBodyContent(){
    return this.el.find('.order-tray__body-content');
  },

  getScrollElement(){
    // for overlay versions of the tray, we scroll .body-content but for mobile in-page version,
    // the scroll actually happens on the body element
    let el;
    
    if(this.model.isChameleon() || this.model.isOverlay()) {
      el = this.getBodyContent()
    } else {
      el = $('body');
    }
    return el; 
  },
  
  scrollToTop(){
    this.getBodyContent().scrollTop(0);
  },

  onPageScroll(){
    let sidebar    = $('.order-tray__sidebar'),
    scroll         = $(document).scrollTop(),
    footer         = $('.footer'),
    topslice       = 100,
    footerMargin   = 100,
    maxScroll      = $(document).height() - (footer.height() + sidebar.height() + topslice + footerMargin),
    top, 
    collision
    ;
    
    if(scroll > maxScroll){
      collision = Math.abs(scroll - maxScroll);
      top = 0 - collision;
    } else {
      top = 0;
    }

    sidebar.css({'top':top + topslice});
    $('body').toggleClass('order-tray-footer-collision', !!collision)
        
  }
}

export default Util;
