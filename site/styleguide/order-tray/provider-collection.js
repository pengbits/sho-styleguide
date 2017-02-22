import _ from "underscore";
import $ from 'jquery';
import Backbone from 'backbone';
Backbone.$ = $;

import Provider from './provider';

class ProviderCollection extends Backbone.Collection {

  // only reason to provide this method and use bona-fide Provider models in our Collection
  // is if we add some custom logic, which at this point, seems to be limited to overriding URL defaults
  initialize() {
    Backbone.Collection.prototype.initialize.call(this, {
      'model': Provider
    })
  }

  url(){
    return '/styleguide/order/providers.js';
  }

  // 1. if cable is the only provider selected, just return cable legal
  // 2. else if any other provider is selected, just return streaming legal
  // 3. else return both cable + streaming

  getLegalAttributes(){

    let legalAttrs =   [],
    selected =    this.where({selected:true}),

    // since we don't want multiple instances of the legal cards for straming providers,
    // but need to provide a legal card of each type found in selection,
    // we use _.groupBy to split them into arrays depending on their cable status
    sorted=       _.groupBy(selected, function(p){
      return p.isCableProvider()
    });

    // ensure only one of each type by popping one item off array
    if(sorted['true']) {
      legalAttrs.push(sorted['true'].pop().getLegal())
    }
    if(sorted['false']) {
      legalAttrs.push(sorted['false'].pop().getLegal())
    }
    return legalAttrs;
  }

}

ProviderCollection.fromAttributes = function(attrs){
  let collection = new ProviderCollection();
  let models = _.collect((attrs || []), function(provider_attrs){
    return new Provider(provider_attrs)
  })
  collection.comparator = 'order';
  collection.add(models);
  return collection;
}

export default ProviderCollection;
