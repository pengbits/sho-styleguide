import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone'; 
import TemplateFactory from './template-factory';

class Provider extends Backbone.Model {

  url(options){
    let opts = options || {};
    return ['/styleguide/order/providers/', (opts.id || this.get('id')), '.js'].join('');
  }
  
  isSelected(){
    return !!this.get('selected');
  }
  
  isExpanded(){
    return !!this.get('expanded');
  }
  
  // cast Providers as Cable Provider if they match the special id
  isCableProvider(){
    return this.get('id') == Provider.cable_provider_id;
  }
  
  hasOtherGroupMembers(){
    // added this flag to handle case where we roll out a group but there is only one card to start... 
    // ended up not being the case for SITE-15124, but it's always here if we need it
    let flag = this.get('hasOtherGroupMembers');
    
    return flag == undefined ?
      this.get('id') !== this.get('groupId') : flag;
  }
  
  groupMembers(){
    console.log(this.parent);
  }
  
  toJSON(options){
    let opts = options || {details:false, theme:null}
    let detailsAttrs = !opts.details ? {} : {
      'isCableProvider': this.isCableProvider(),
      'providerTemplate' : this.getTemplate(opts)
    };
    //console.log(`Provider#${this.get('id')}.toJSON(theme => ${opts.theme})`)
    return _.extend({}, this.attributes, detailsAttrs)
  }
  
  getTemplate(options){
    return TemplateFactory.getTemplate(this.get('id'), options.theme)
  }
  
  // simplified legal in an effort to keep the copy in the template
  getLegal(){
    return {'isTVProvider' : this.isCableProvider()}
  }
}

Provider.cable_provider_id = 0;
Provider.isCable = Provider.isCableProvider = (function(attrs){
  return attrs.id == Provider.cable_provider_id;
});


export default Provider;