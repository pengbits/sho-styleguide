import Settings from './settings';
import ScrollbarDimensions from '../../../measure-scrollbars';

var FadeInFadeOut = {
  
  fadeProvider(cards, mode){
    // this is delayed to give stage a chance to render first. If you don't wait, there is a shift I don't like
    _.delay(() => {
      
      // are we introducing the card or removing it?
      let fadeUp      = mode == 'up';    
      
      // capture the sum height of all of the cards which must be computed before setting absolute position
      let cardsHeight = this.getCardsCombinedHeight(cards)
      
      // cards will be animated up to fill the width of body-content, minus padding
      let tempWidth   = this.getCardTargetWidth();

      // create a shim that will be used to clear space for the cards coming in,
      // since they are absolutely positioned and won't have the normal effect on the dom flow
      let shim = $('<div class="animation-shim" />')
        .insertAfter(cards.last());

      // the offset is used in the case of multiple cards (Amazon). because they are 
      // absolutely-positioned they need extra margin-top to avoid colliding with each other
      let offset = 0;
      
      // iterate over 1+ cards, collecting the height(s) and setting up the tween for each
      cards.each((idx, card) => {
        let isLast    = idx >= (cards.length - 1);
        let cardHeight= $(card).outerHeight(true);
        
        // set up the initial attributes to be applied before tweening
        // cards will always be absolutely positioned, but when being faded up,
        // they'll also need to be scaled down
        let fromAttrs = {
          'position'  : 'absolute',
          'marginTop' : offset,
          'width'     : tempWidth
        };
        fadeUp && _.extend(fromAttrs, {
          'scale'     : Settings.hidden_scale
        });
        
        // set up the attributes that form the tween's "destination" (end result)
        let toAttrs = fadeUp ? {
          'opacity'   : 1,
          'scale'     : 1
        } : {
          'opacity'   : 0,
          'scale'     : Settings.hidden_scale
        }
        
        // the attributes are applied after the tween, to restore proper css for display
        let afterAttrs = {
          'width'      : 'auto', 
          'position'   : 'relative', 
          'marginTop'  : 0
        };
        
        // call the tween, providing a name that will result in a custom event being fired after the tween finishes,
        // as well as a custom callback to remove the shim           
        this.tween(card, {
          'name'      : `provider:fade${mode}`,
          'duration'  : Settings.card_animation_duration,
          'ease'      : Back.easeOut.config(1.2),
          'from'      : fromAttrs, 
          'to'        : toAttrs,
    
          // there doesn't seem to be any way to enforce scope so we're providing these params
          'onCompleteParams': [
            cards, shim, isLast
          ],
          
          'onComplete': ((cards, shim, isLast) => {
            cards.css(afterAttrs);
            if(isLast){
              shim.remove();
            }
          })
        });

        // increment the offset in the case of multiple cards so we can offset the subsequent cards from the top
        offset += cardHeight;
      })
      
      // animate the shim
      this.tween(shim, {
        'duration': Settings.shim_animation_duration, 
        'ease'    : Power4.easeOut,
        'from'    : {
          'height' : fadeUp ? 0 : cardsHeight
        },
        'to'      : { 
          'height' : fadeUp ? cardsHeight : 0 
        }
      });  

    }, 0);
  },
  
  fadeLegal(mode, opts_){
    let fadeDown = mode == 'down';
    let opts = opts_ || {};
    let hideAttrs = {
      'opacity'    : 0
    };
    let showAttrs   = {
      'opacity'    : 1.0
    };

    this.tween(this.el.find('.order-tray__legal-card'), {
      'from'      : fadeDown ? showAttrs : hideAttrs,
      'to'        : fadeDown ? hideAttrs : showAttrs,
      'delay'     : fadeDown ? 0 : Settings.legal_delay,
      'duration'  : opts.duration !== undefined ? opts.duration : Settings.legal_duration,
      'name'      : `legal:fade${mode}`
    })
  },
  
  // we calculate the width the card will have once it goes from absolute to relative or vice versa
  // this value is equal to the width of the body-content container, minus the card padding,
  // potentially adjusted for scrollbars
  getCardTargetWidth(){
    let body  = this.getBodyContent();
    let width = body.width() - (Settings.card_padding * 2);
    let scrollTestElement = $('html');
    
    if(this.elementIsScrollable(scrollTestElement.get(0))) {
      width -= ScrollbarDimensions.instance().width();
    }
    
    return width
  },
  
  getCardsCombinedHeight(cards){
    return _.inject(cards, function(height, card) {
      return height + $(card).outerHeight(true)
    },0);
  }
}

export default FadeInFadeOut;