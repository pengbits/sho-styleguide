import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
Backbone.$ = $;

class View extends Backbone.View {
  constructor(cfg)
  {
    if(!cfg.el)
    {
      cfg.el = $('<div class="order-tray order-tray--overlay"></div>');
      cfg.el.appendTo('body').hide().fadeIn(0.5);
    }
    
    cfg.events = {
      'click .input--faux-radio'                 : 'onProviderPick',
      'click .order-picker__control--select-all' : 'onSelectAll',
      'click .order-card__details-toggle'        : 'onToggleDetails',
      'click .order-tray__closer'                : 'onClose',
      'click .order-picker__control--close'      : 'onClose',
      'click .order-card__toggle'                : 'onProviderToggleTap'
    };
    
    super(cfg);
    
    _.extend(this, {
      'el' :            $(cfg.el),
      'documentAttrs':  {}, // a convenience object for storing original padding-right and scrollTop props
      'model' :         cfg.model,
      'controller' :    cfg.controller,
      'breakpoints' :   {'large' : 992},  // see _variables.scss
      'containerTop' :  100               // see _order-tray-container.scss,
    });
    
    this.media_query =  `screen and (max-width:${(this.breakpoints.large -1)}px)`;
    this.el.on('click', this.onBodyClick.bind(this))
    this.setHandlers();
  }

  setHandlers(){
    // listen to all events from model
    this.model.on('all',      this.update.bind(this));

    // list to page scrolling for clearing footer etc
    this.model.on('change:display', (e) => {
      if(e.changed.display == 'chameleon'){
        $(document).on('scroll',  this.onPageScroll.bind(this));
        this.onPageScroll();
      }
    });
    
    // register changes for responsive attributes to handle forked visibilty model
    this.model.setResponsiveAttributes(this.media_query, {
      'match':    {'is_mobile':true},
      'unmatch':  {'is_mobile':false}
    })
  }
  
  destroy (){
    console.log(`view#destroy`)
    this.model.off();
    this.model.unsetResponsiveAttributes(this.media_query);
    this.undelegateEvents();
    $('html').removeClass('order-tray-active')
             .removeClass('order-tray-active--has-touch-events');
    this.restoreDocumentPadding();
    $(document).scrollTop(this.documentAttrs.scrollTop);
    this.remove();
  }
}

export default View
