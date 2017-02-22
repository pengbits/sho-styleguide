import Settings from './settings';

var ExpandCollapse = {
  
  prepareProvider(cards, mode) {
    _.each(cards, (card) => {
      let el = $(card);
      let details = el.find('.order-card__details');
      this.setCollapsedHeight(el, details);
      
      // we need this delay to ensure that details is fully rendered, for expanded-height to be accurate
      _.delay(() => {
        this.setExpandedHeight(el, details);
        if(mode == 'expand') details.hide()

        this[`${mode}ProviderDetails`].call(this, el);
      }, 0)
    })
  },
  
  
  setExpandedHeight(el, details){
    let height = el.data('expandedHeight'); if(!height) {
      details.show();
      height = el.height();
      el.data('expandedHeight', height);
    }
  },
  
  setCollapsedHeight(el, details){
    let height = el.data('collapsedHeight'); if(!height) {
      
      details.hide();
      height = el.height();
      el.data('collapsedHeight', height);
    }
  },
  
  expandProviderDetails(card){
    card.find('.order-card__details').show();
    this.tween(card, {
      'name' : 'provider:expanded',
      'from' : {
        'height' : card.data('collapsed-height')
      },
      'to' : {
        'height' : card.data('expanded-height')
      },
      'duration' : Settings.expand_collapse_duration,
      'onComplete' : (el => {
        el.css('height','auto')
      })
    })

    // Scroll to the top of this card 
    // this is potentially undesirable on mobile - if we end up using across the board, 
    // ensure that scrollTop is not Tweened with greensock on mobile, as it doesn't work there
    // see scrollContentTo() below..
    let offset = -Settings.card_padding; 
    card.prevAll().each(function(idx, item){ 
      offset += ($(item).outerHeight() + Settings.card_padding)
    });
    if(this.model.isDesktop()) {
      TweenLite.to(this.getScrollElement(), Settings.expand_collapse_duration, {scrollTop: offset});
    }
  },

  collapseProviderDetails(card){
    //card.find('.order-card__details').show();
    this.tween(card, {
      'name' : 'provider:collapsed',
      'from' : {
        'height' : card.data('expanded-height')
      },
      'to' : {
        'height' : card.data('collapsed-height')
      },
      'duration' : Settings.expand_collapse_duration
    })

  }
}

export default ExpandCollapse;