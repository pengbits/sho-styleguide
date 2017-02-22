import _ from 'underscore';
import $ from 'jquery';
import TemplateFactory from '../template-factory';

var Runtime = {
  do_full_repaint : new RegExp([
    'provider:fadedown:complete',
    'change:providers',
    'change:provider:selected',
    'change:provider-group:selected',
    'change:is_mobile',
    'change:providers:variation',
    'change:theme',
    'change:headline'
  ].join('|')),

  update(eventName,e){
    console.log('view#update `'+eventName+'`')
    // currently we re-render the entire stage by evaluating the entire template against a viewModel,
    // but could potentially limit repaints to regions of the ui, based on event name, ie
    // to just a redraw a card for change:provider:expanded
    if(this.do_full_repaint.test(eventName)) this.fullRepaint()

    let el,id,details,card,
    isMobile = () =>      { return this.model && this.model.isMobile()},
    isDesktop= () =>      { return !isMobile() },
    isTablet= () =>       { return this.model && this.model.isTablet()},
    isOverlay= () =>      { return this.model && this.model.isOverlay()},
    isChameleon= () =>    { return this.model && this.model.isChameleon()},
    isInPage=  () =>      { return this.model && this.model.isInPage()},
    isGroupEvent= () =>   { return eventName.indexOf('group') > -1 }
    ;

    switch (eventName){
      case 'ready':
        this.setDisplayMode();
        this.documentIsScrollable() && this.saveDocumentPadding();

        if(isDesktop()) {
          this.fullRepaint();
          //this.slideSidebar();
        }
        break;

      case 'change:is_mobile':
        this.setDisplayMode();
        this.model.anyProvidersSelected() && this.fadeLegal('up');

        // if we're changing from portrait to landscape on tablet, pin the document
        isOverlay() && isTablet() && _.delay(() => {
          this.toggleTrayIsActiveClass(true);
          this.toggleDocumentIsPinned(true);
        }, 125);
        break;

      case 'change:display':
        let unsetStageWipe = this.el.css.bind(this.el, {'right':''})
        
        if(isMobile() || isTablet()){
          // capture the last scroll position because our workaround for
          // preventing body scrolling will reset this to zero
          this.documentAttrs.scrollTop = $(document).scrollTop();
        }

        if(isMobile() && isInPage()){
          // in-page version of tray would have been a chameleon at desktop,
          // so we must remove some harmful classnames, and the inline css (right:25%)
          // that was used to make the stage hug the sidebar
          this.toggleStageIsOpen(false);
          unsetStageWipe();
        }

        if(isChameleon()){
          // chameleon needs some extra classnames applied when going from mobile -> desktop
          if(this.model.anyProvidersSelected()){
            this.stageWipe('open');
          } else {
            this.toggleStageIsOpen(false);
            unsetStageWipe();
          }
        }

        if(isTablet()){
          this.setLastPageScroll()
        }

        if(isOverlay()){
          this.toggleTrayIsActiveClass(true);
          this.toggleDocumentIsPinned(true);
        }

        this.setLastScroll();
        this.getHeaderHeight();
        break;


      case 'change:document-attrs:padding':
        if(isOverlay()){
          this.setDocumentPaddingToScrollbarsWidth()
        } else {
          // helper function for normalizing the sidebar width before and after
          // stage wipes must be called on window resize, and once at startup
          let fn = _.throttle((this.adjustSidebarWidth.bind(this)), 125);
          $(window).resize(fn); _.delay(fn, 0)
        }
        break;


      case 'stage:wipe:complete':
        let isOpen = !!e; if(isOpen){
          this.toggleStageIsOpen(true);
          this.setDocumentPaddingToScrollbarsWidth();
        } else {
          this.toggleStageIsOpen(false);
          this.restoreDocumentPadding();
          this.adjustSidebarWidth(false);
          if(isTablet()){ this.restorePageScrollTop()}

        }
        break;


      case 'change:provider:selected':
      case 'change:provider-group:selected':
        if(isChameleon()){
          this.stageWipe('open');

          if(isTablet()){
            this.setLastPageScroll();
          }
        }

        if(isDesktop())
        {
          id = e.get(isGroupEvent() ? 'groupId' : 'id');
          el = this.getProviderElementFromId(id, isGroupEvent());
          $(el).css({'opacity':0});
          // delay till next render so wipe can finish before we do anything with the card..
          // todo - we could probably find out if a wipe is happening or not
          _.delay(() => {
            this.fadeProvider(el, 'up');
          }, 0)
        }
        else
        {
          // full repaint means we need to jump back to where user was, hovever if they
          // have expanded enough learn-more content, (or tv providers), the scrollTop will be wrong,
          // because the height of the content will have changed drastically from when it was captured..
          // can the scrollTop account for this difference somehow?
          this.restoreScrollTop()
        }
        break;


      case 'providers:select:all':
        if(isDesktop())
        {
          if(isChameleon()) {
            this.stageWipe('open'); _.delay(() => {
              this.fullRepaint();
              this.fadeLegal('up');
            }, 125 )
          }
          if(isOverlay()) {
            this.fullRepaint();
            this.fadeLegal('up');
          }
        }
        else {
          this.fullRepaint()
        }
        break;


  		case 'provider:fadeup:complete':
      case 'provider:focus:complete':
      case 'provider:fadedown:complete':
        if(isDesktop())
        {
          this.fadeLegal('up');
        }
      	break;


  		case 'change:provider:unselected':
      case 'change:provider-group:unselected':
        if(isDesktop())
        {
          id = e.get(isGroupEvent() ? 'groupId' : 'id');
          el = this.getProviderElementFromId(id, isGroupEvent());

          this.scrollToTop()
          this.fadeProvider(el, 'down')
          this.fadeLegal('down');
        }
        else
        {

          this.fullRepaint()
          // full repaint means we need to jump back to wher user was... unless you do something in animation
          this.restoreScrollTop();
        }
        break;


      case 'change:provider:expanded':
        this.restoreScrollTop();
        el = this.getProviderElementFromId(e.attributes.id);
        this.prepareProvider(el,'expand');
        break;


      case 'provider:expanded:complete':
        card = e.el;
        card.find('.order-card__details').addClass('order-card__details--expanded');
        card.find('.order-card__details-toggle--open').addClass('order-card__details-toggle--active');

        this.setLastScroll();
        if(isDesktop())
        {
          this.fadeLegal('up', {'duration':0});
        }
        break;


      case 'change:provider:collapsed':
        el = this.getProviderElementFromId(e.attributes.id);
        // no need to remove this classname because card height is too small for it to be seen
        // el.find('.order-card__details').removeClass('order-card__details--expanded');
        this.prepareProvider(el.css({'height':'auto'}),'collapse');
        break;


      case 'provider:collapsed:complete':
        card = e.el;
        card.find('.order-card__details-toggle--open').removeClass('order-card__details-toggle--active');

        isMobile() && this.scrollToProviderMobile(card)
        break;


      case 'provider:selected-at-startup':
        card = this.getProviderElementFromId(e.attributes.id);
        isMobile() && this.scrollToProviderMobile(card)
        break;

      case 'change:cable-provider:collapsed':
        if (e.attributes.position === 0) {
          this.scrollToTop();
        } else {
          this.setLastScroll(0);
        }
        break;


      case 'order-tray:collapsed':
      case 'providers:select:none':
        this.fullRepaint();

        if(isChameleon()){
          this.stageWipe('closed');
        }

        break;

    }
  },

  fullRepaint(options){
    //console.log('view#fullRepaint')
    let attrs = this.model.getAttributes();
    let opts = options || {};
    this.render(attrs, opts);
  },

  render(attrs, options){
    let opts = options || {};
    // a different implementation might supply a subset of the template,
    // and target just one node to re-render
    let template = TemplateFactory.getRegion('root');
    let html = template(attrs);
    this.el.html(html);
    
    if(this.model.isDesktop() && (opts.sort || opts.sort == undefined)){
      this.sortCards()
    }
  },
  
  sortCards(){
    // Sort the cards by data-position which is set during template render, unless told otherwise,
    // in which case, we use the order defined on the model
    let shim = this.el.find('.order-tray__overflow');
    
    // isolate legal cards from providers, because they should always come last
    let legalCards = this.el.find('.order-tray__legal-card');
    let cards = this.el.find('.order-card');
    
    // apply sort to cards
    cards.sort(function(a, b) {
        return +a.dataset.position - +b.dataset.position;
    })
    
    // draw cards and legal back into dom
    legalCards.insertBefore(shim);
    cards.insertBefore(legalCards.eq(0));
  }


};

export default Runtime;
