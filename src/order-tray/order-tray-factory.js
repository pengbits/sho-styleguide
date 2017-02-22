import $ from 'jquery';
import OrderTray from './index'
import CampaignHelper from '../analytics/campaign-helper';
import HashChange from '../hash-change/index';

// Factory handles instantiating the teay on-demand, when a user clicks on a call-to-action
let factory = null;
class Factory {

  constructor() {
    if(!factory){
      factory = this;
    }
    
    this.setListener();
    return factory;
  }
  
  setListener() {
    $(document).on('order:opened', this.onOpenTray.bind(this));
  }
  
  onOpenTray(e){
    return this.instance(e)
  }
  
  instance(cfg){
    if(!this._instance){
      //console.log('Factory: create new instance')
      this._instance = new OrderTray(cfg);
    } 
    else {
      //console.log(`Factory: configure instance`)
      this._instance.controller.init(cfg)
    }
    
    return this._instance;
  }
  
  
  destroy(instance){
    //console.log(`Factory.destroy called`)
    if(this._instance == instance){
      this._instance = null;

      HashChange.close();
    }
    else{
      throw new Error(`trying to destroy order tray, but there is somehow more than one instance`)
    }
  }
}

export default new Factory()