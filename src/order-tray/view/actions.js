import _ from 'underscore';
import $ from 'jquery';

var Actions = {
  
  onSelectAll(e){
    e.preventDefault();
    this.controller.toggleAllProviderGroups();
  },
  
  onProviderPick(e){
    e.preventDefault();         // stop event bubbling because we will handle the checked state ourseleves...
                                // won't need this if we switch to an approach where only some of the view is re-rendered
    let el = e.currentTarget;
    let id = $(el).data('provider-id');
    this.setLastScroll()

    this.controller.toggleProviderGroup(id);
  },
  
  onToggleDetails(e){
    e.preventDefault();
    
    let el = e.currentTarget; 
    this.setLastScroll()
    this.controller.toggleProviderDetails(this.getProviderIdFromElement(el));
  },
  
  // when tapping on a provider logo in mobile, we toggle the provider state
  onProviderToggleTap(e){
    e.preventDefault();
    
    let el = e.currentTarget; 
    this.setLastScroll();
    this.controller.toggleProvider(this.getProviderIdFromElement(el));
  },
  
  // catch-all click event - if we can't find an element associated with a more specific callback,
  // assume we clicked on the shader and close the tray
  onBodyClick(e){
    let el = e.target; 
    
    if(el && el.className && /order-tray__(overflow|body|body-content)/.test(el.className)){
      this.onClose(e)
    }
  },
  
  onClose(e){
    e.preventDefault();
    
    if (this.model.isChameleon()){
      this.controller.collapse()
    }
    else {
      this.controller.destroy();
    }
  }
  
}

export default Actions;