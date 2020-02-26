import $ from 'jquery';
import _ from 'lodash';

let instance = null;
  
class Variations {
  constructor(){
    if(!instance){ instance = this; }
    this.initalize();
    return instance;
  }
  
  // private
  initalize(){
    this.VARIATION_STORE = {
      'sho' : 'sho_variations',
      'vendor' : 'optimizely.variationMap'
    };
    
    this.polling_id = setInterval(this.onCheckForVariation.bind(this), 500)
    this.polling_attempts = 0;
  }
  
  onCheckForVariation(){
    this.polling_attempts++; 

    // in some browsers optimizely variation map would be populated before
    // the sho_variations object is set, so we can't abort on finding the presence of optimizely object.

    if(this.foundShoVariation() || this.polling_attempts > 9){
      // console.log('|variations| found variation or timed out, aborting loop');
      clearInterval(this.polling_id);
      
      if(this.foundShoVariation()){
        // console.log('|variations| found sho variation');
        //console.log(this.getVariationMap('sho'))
        this.fire({
          'type':'variation:detected',
          'variation_type':'sho'
        },
        this.getVariationMap('sho')
        );
      }
      
      if(this.foundVendorVariation()){
        // console.log('|variations| found vendor variation');
        this.fire({
          'type':'variation:detected', 
          'variation_type':'vendor'
        },
        this.getCampaignStates()
        );
      }
    }
  }
    
  foundShoVariation(){
    var map = this.getVariationMap('sho');
    return !!map && _.keys(map).length;
  }
  
  foundVendorVariation(){
    var map = this.getCampaignStates();
    return !!map && _.keys(map).length
  }
  
  // coerce a string like 'optimizely.variationMap' or 'sho_variations' into an object without resorting to eval()
  // note accessing variation data via optimizely like this has been deprecated, so this is no longer used for the vendor context
  // instead, you must access the optimizely API
  /// https://help.optimizely.com/QA_Campaigns_and_Experiments/QA_Optimizely_X%3A_Use_the_JS_API%2C_console_log%2C_and_network_panel#Use_the_JavaScript_API
  getVariationMap(mapId){
    var store = this.VARIATION_STORE[mapId];
    //win7/IE doesn't care for us splitting on nonexistent tokens
    return _.reduce((store.indexOf('.') ? store.split('.') : [store]), function(parent,key){
      var child = parent[key] || {};
      //console.log([parent,key,child])
      return child;
    }, window);
  }
  
  getActiveExperimentIds(){
    if(window.optimizely && window.optimizely.get){
      var state = window.optimizely.get('state') || {'getActiveExperimentIds' : (() => { return [] })};
      var ids = state.getActiveExperimentIds()
      return ids; 
    } else {
      return [];
    }
  }
  
  getCampaignStates(opts = {isActive:true}){
    if(window.optimizely && window.optimizely.get){
      var state = window.optimizely.get('state') || {'getCampaignStates' : (() => { return {} })};
      var data = state.getCampaignStates(opts)
      return data; 
    } else {
      return {};
    }
  }
  
  getVariationName(data){
    return data && data.variation ? data.variation.name : undefined;
  }
  
  fire(e, opts){
    // generic 'variation:detected' event
    $(document).trigger(e, opts);
    // console.log(`variations#fire ${e.type}:${e.variation_type}`);
    // specific sho vs vendor event
    if(e.type == 'variation:detected'){
      $(document).trigger({
        'type':`${e.type}:${e.variation_type}`
      },
      opts);
    }
  }
  
  
  // public
  on(eventName, callback){
    $(document).on(eventName, (e,data) => {
      callback(e,data)
    })
  }
  
}

export default new Variations();