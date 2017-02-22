import _ from "underscore";
import $ from 'jquery';
import Backbone from 'backbone'; Backbone.$ = $;
import ProviderCollection from './provider-collection';
import ProviderData from './provider-data';


class ProviderFactory {
  
  getCollection(){
    return ProviderCollection.fromAttributes(this.getAttributes())
  }
  
  getAttributes(){
    if(this.hasVariation()){
      console.log(`|provider-factory| found provider-list in window.provider_variation`);
      return window.provider_variation
    } else {
      console.log(`|provider-factory| no provider-list in window.provider_variation, using defaults`);
      return ProviderData
    }
  }
  
  hasVariation(){
    return window.provider_variation && window.provider_variation.length
  }
}

export default new ProviderFactory();
