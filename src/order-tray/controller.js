import _ from 'underscore';
import $ from 'jquery';

class Controller {
  constructor(opts){
    _.extend(this, {
      model : opts.model,
      parent : opts.parent
    });
    }
  
  init(cfg){ 
    if(cfg.theme)    this.setTheme(cfg.theme)
    if(cfg.headline) this.setHeadline(cfg.headline)
    if(cfg.provider) this.selectProviderGroup(cfg.provider)
  }
  
  home(){
    // no-op
  }
  
  selectProviderGroup(groupId){
    this.model.selectProviderGroup(groupId);
    // this only used when crafting a url to auto-select a provider,
    // so we can fudge a special event to let the ui know to scroll to the card, in this case only:
    this.model.trigger('provider:selected-at-startup', {
      'attributes':{'id':groupId}
    })
  }
  
  toggleProviderGroup(groupId){
    this.model.toggleProviderGroup(groupId);
  }
  
  toggleProvider(id){
    this.model.toggleProvider(id);
  }
  
  toggleProviderDetails(id){
    this.model.toggleProviderDetails(id);
  }
  
  toggleAllProviderGroups(){
    this.model.toggleAllProviders()
  }
  
  setTheme(id){
    console.log(`controller#setTheme ${id}`)
    this.model.set({'theme':id})
  }
  
  setHeadline(headline){
    console.log(`controller#setHeadline ${headline}`)
    this.model.set({'headline':headline})
  }
  
  collapse(){
    this.model.unselectAllProviders();
  }
  
  destroy(){
    this.parent.destroy()
  }
}

export default Controller;