import Settings from './settings';
import ScrollbarDimensions from '../../../measure-scrollbars';

var Stage = {
  
  stageWipe(mode){
    let openAttrs = {
      'right' : 0
    };
    let closeAttrs = {
      'right' : '75%'
    };
    let isOpen = mode == 'open';
    let attrs =  isOpen ? openAttrs : closeAttrs;
    let delay =  isOpen ? Settings.wipe_open_delay : Settings.wipe_closed_delay;
    
    _.delay(()=> {
      this.el.css(attrs)
      this.model.trigger('stage:wipe:complete', isOpen)
    }, (delay * 100))
  },
  
  // view#adjustSidebarWidth
  // workaround for the slight shift in sidebar width that accompanies the opening of the stage in chameleon mode
  // this shift stems from a change in the underlying document's visible width, 
  // when `overflow:hidden` is applied to the `html` element via `overlay-is-active`, and scrollbars are removed,
  // the viewable area is interpreted as slightly larger by the browser. 
  // this combined with the sidebar's `position:fixed` and `right:75%` rules, result in a pop as the sidebar widens slightly
  // this is called when the stage is closed, ie, at startup or when no providers are selected,
  // to compress the sidebar by +- 4px (25% * width of scrollbars) to reduce the effect
  adjustSidebarWidth(){
    if(!this.shouldAdjustSidebarWidth()) return
      
    let el           = $('.order-tray__sidebar').css('width','auto');   // unset previous writes
    let sidebarWidth = Number((el.css('width')||'').replace('px',''));  // can't use jQuery's el.width() here
    let scrollWidth  = ScrollbarDimensions.instance().width();
    let nudge        = scrollWidth * Settings.sidebar_percent_of_stage;
    let adjusted     = sidebarWidth + nudge;
    
    //console.log(`view#adjustSidebarWidth before ${sidebarWidth} -> ${adjusted}`);
    el.css({'width':adjusted}); 
    //_.delay((sidebar) => { console.log(`view#adjustSidebarWidth after ${sidebar.css('width')}`) }, 125, el)
  },
  
  shouldAdjustSidebarWidth(){
    return this.model && this.model.isChameleon() && !this.model.anyProvidersSelected()
  },
  
  slideSidebar(el,opts) {
    var sidebar = this.el.find('.order-tray__sidebar');
    TweenLite.from(sidebar, 0.20, {left:"-350px"});    //side bar slides in from left to right
  }
}

export default Stage
