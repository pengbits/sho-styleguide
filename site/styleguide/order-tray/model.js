import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
Backbone.$ = $;
import enquire from 'enquire.js'
// for dectecting landscape tablet
var Modernizr  = require('browsernizr');

import * as stringUtils from '../utils/string';
import Variations from '../variations/index';
import Provider from './provider';
import ProviderFactory from './provider-factory';
import ProviderCollection from './provider-collection';

class Model extends Backbone.Model {

  initialize(){
    this.public_events = [
      'ready',
      'change:provider:selected',
      'change:provider:unselected',
      'change:provider-group:selected',
      'change:provider-group:unselected',
      'provider:expanded:complete',
      'provider:collapsed:complete'
    ];

    this.attributes = {
      'headline': 'How do you want to get Showtime?'
    };

    this.responsive_attributes = ['is_mobile'];
    this.responsive_callbacks = {};
    this.initProviderCollection();
    this.polling_id = setInterval(this.onCheckForCollectionVariation.bind(this), 500);
    this.polling_attempts = 0;
  }

  onCheckForCollectionVariation(){
    this.polling_attempts++;

    if(ProviderFactory.hasVariation() || this.polling_attempts > 10){
      //console.log(`|model| found variation or timed out, aborting loop`);
      this.polling_id && clearInterval(this.polling_id);

      if(ProviderFactory.hasVariation()){
        this.initProviderCollection();
        this.trigger('change:providers:variation', {});
      }
    }
  }

  //
  // startup
  // ----------------------------------------------------------------------------------------------
  initProviderCollection(){

    // unset listener on existing collection
    this.has('providers') && this.get('providers').off('change');

    // set fresh provider collection
    this.set({'providers':  ProviderFactory.getCollection() },{ silent:true });

    // restore listener to collection
    this.get('providers').on('change', this.onProvidersChanged.bind(this));
  }

  init(){
    this.setHandlers();
    this.setPublicHandlers();
    this.trigger('ready', {})
  }

  setHandlers(){
    this.on('change:provider:unselected',     this.onProviderUnselected.bind(this));
    this.on('change:provider-group:unselected',  this.onProviderUnselected.bind(this));
    this.on('change:provider:selected',       this.onProviderSelected.bind(this));
    this.on('change:provider:collapsed',      this.onProviderCollapsed.bind(this));
    Variations.on('variation:detected:sho',   this.onVariationDetected.bind(this));
    // in case variations:detected event fired before tray was opened
    if(Variations.foundShoVariation()) this.onVariationDetected();
  }

  setPublicHandlers(){
    var check=(src,pattern)=>{
      return src.indexOf(pattern) > -1;
    }
    this.on('all', (eventName, e) => {
      if(check(this.public_events, eventName)){
        // proxy events onto document for benefit of optimizely and others..
        //console.log(`|model| $.event.trigger order-tray:${eventName} `)
        $.event.trigger(`order-tray:${eventName}`, e)

        // if the event is a provider change, throw another event containing the provider id.
        // note: this is fairly redundant given the the call to $.event.trigger that is
        // serving a similar purpose in model#setProvidersAreSelected below, please clean up/consolidate
        if(check(eventName, 'change:provider') && e && e.attributes.groupId !== undefined){
          $.event.trigger(`order-tray:${eventName}:${e.attributes.groupId}`, e)
        }
      }
    })
  }

  onVariationDetected(e){
    let data = (e || Variations.getVariationMap('sho')).order_tray || {};
    //console.log([`model#onVariationDetected`, data])
    if(data.theme)    this.set({'theme':data.theme})
    if(data.headline) this.set({'headline':data.headline})
  }

  onProvidersChanged(event){
    // let's generate more meaningful event names by looking at `changed` data
    // assuming only one property will be changed at a time here...
    let attrs = event.changed || {};
    let eventName;

    // alias changes to `expanded` property as as `provider:expanded` or `provider:collapsed`
    if( _.has(attrs, 'expanded')){
      eventName = `change:provider:${(attrs.expanded ? 'expanded':'collapsed')}`;
      // attrs.expanded && this.collapseAllExcept(event); // see onProviderSelected below
      this.trigger(eventName, event);
    }

    // alias changes to `selected` property as `provider:selected` or `provider:unselected`,
    // and alias provider as provider-group if it's a member of a group
    if( _.has(attrs, 'selected'))
    {
      eventName = event.hasOtherGroupMembers() ? 'change:provider-group' : 'change:provider';
      eventName += attrs.selected ? ':selected' : ':unselected';
      this.trigger(eventName, event)
    }
  }

  onProviderSelected(provider){
    // crude fix for SITE-13460 - instead of allowing broken UI where the toggle drops out,
    // selecting a provider results in all other cards having details collapsed.
    // this is a little bossy, and potentially undesirable - consider fixing the ui so the other cards can keep their expanded state
    // also not working for amazon because it's strangely silent even though 1/2 cards should fire events

    // limited to desktop for SITE-14292
    this.collapseAllExcept(provider)
  }

  onProviderUnselected(provider){
    // have to account for provider's siblings which also need to be collapsed if it's a group...
    let targets = this.getProviders({'groupId': provider.attributes.groupId })
    _.invoke(targets, 'set', {'expanded':false}, {'silent':true});
    this.anyProvidersSelected() || this.trigger('providers:select:none');
  }

  onProviderCollapsed(provider){
    provider.isCableProvider() && this.trigger('change:cable-provider:collapsed', provider)
  }

  //
  // accessors
  // ----------------------------------------------------------------------------------------------
  getProviders(filter_){
    let filter =    filter_ || {};
    let providers = this.get('providers');
    let providersFiltered = _.any(_.keys(filter)) ? providers.where(filter) : providers.toArray();

    if (filter.groupId && providersFiltered.length === 0) {
      // doublecheck that group id wasn't really perhaps just a single provider id, ie for amazon prime
      let providersUngrouped = providers.where({'id': filter.groupId});
      if( _.any(providersUngrouped)){
        let provider = providersUngrouped[0];
        let providerGroupId = provider.get('groupId');
        providersFiltered = providers.where({'groupId': providerGroupId});
      }
    }

    return providersFiltered
  }

  getProvidersJSON(filter, options){
    let opts =  options || {},
    models =    this.getProviders(filter),
    len =       models.length,
    provider,
    nextProvider,
    prevProvider,
    json = []
    ;
    for(let i=0; i<len; i++)
    {
      // get attributes for provider
      // always including the details because mobile contex needs the template included regardless of if provider is selected or not,
      // on desktop we can optimize for the picker by only including template data when card is selected, but leaving this out for the moment
      provider=         models[i].toJSON({
        'details':  true,
        'theme':    this.get('theme')
      });

      // get reference to next provider in list, when we're not the last one
      nextProvider=     (i < len-1) ? models[i+1] : null;

      // get reference to previous provider in list, when we're not the first one
      prevProvider=     (i > 0) ? models[i-1] : null;

      // set helper attributes for cosmetics near the selected, `first`, or `last` providers, only relevant for mobile
      // here `isLast` actually means "the next toggle is selected or we're at the end of the list",
      // and `isFirst` actually means "previous toggle is selected, or we're at the start of the list"
      // they are used when rendering the rounded corners and the gap between toggles,
      // so in this sense, there can be multiple 'firsts' and lasts'...
      // isLastOfRun or isFirstOfGroup would be more semantic - while gathering the selected cards up in an extra div
      // would eliminate the need for these kinds of helper attributes alltogether/.
      provider.isLast=  (nextProvider && nextProvider.get('selected') || !nextProvider);
      provider.isFirst= (prevProvider && prevProvider.get('selected') || !prevProvider);

      // add to the stack
      json.push(provider);
    }
    return json;
  }

  // this could be genericized to setProvidersAttributes or similar...
  setProvidersAreSelected(idString, options){
    let opts      = options || {};
    let id        = this.sanitizeIdString(idString);
    let filter    = options.groupId ? {'groupId': id} : {'id': id};
    let providers = this.getProviders(filter);
    let groups    = [];
    let desktop   = this.isDesktop();

    /*
      Adding a model attribute called position that has to do with the card position. This ends up getting shuffled in the runtime.
      We can't use the comparator that backbone provides cause we use that for the navigation order and mobile ordering.
      The algorithm doesn't enforce strict sequential numbers for position like 0, 1, 2, 3 so position should only be used for sorting.
    */
    if (desktop && opts.toggle && providers.length > 0) {
      // how many providers we are adding or removing?
      let inc = 0;
      _.each(providers, function(provider, idx) {
        let destination = -1;
        let added = false;
        if (provider.get('selected')) {
          inc--;
        } else {
          destination = idx;
          inc++;
        }
        provider.set({
          'position': destination
        });
      })
      // reset positions for all of the rest based on the incremental change
      let all = this.getProviders();
      _.each(all, function(provider) {
        if (!_.includes(providers, provider)) {
          let destination = -1;
          if (provider.get('selected')) {
            destination = (inc >= 0) ? provider.get('position') + inc : provider.get('position');
          }
          provider.set({
            'position': destination
          });
        }
      })
    }

    if(! _.any(providers)){
      throw new Error(`Couldn't find any Providers with group or provider id: ${idString}`);
    }
    else _.each(providers, function(provider,idx){
      provider.set({
        // set selected to the provided value, unless toggle is set to true
        'selected' : !opts.toggle ? opts.selected : !provider.isSelected()
      },{
        // on desktop, mute all but the first update, if we are treating the provider as a group
        'silent'   : (desktop && provider.hasOtherGroupMembers() && idx == 0)
      });

      // todo: move this out of this function and into an explicit `change:provider:selected` callback
      // too much overlap with model#setPublicHandlers above
      if (provider.attributes.selected == true && !provider.attributes.expanded) {
        $.event.trigger({
          type: 'orderProviderSelect',
          id: provider.attributes.id
        });
      }
      if (provider.attributes.selected != true) {
        $.event.trigger({
          type: 'orderProviderUnselect',
          id: provider.attributes.id
        });
      }

    });
  }

  getLegalAttributes(){
    let providerCollection = this.get('providers');
    return providerCollection.getLegalAttributes();
  }

  // responsive flags for card behavior are mixed into the view model, and each provider
  getHelperAttributes(){
    return _.extend({
      'selectAllLabel' : this.allProvidersSelected() ? 'Unselect All' : 'Select All'
    },
      _.pick(this.attributes, this.responsive_attributes)
    );
  }


  //
  // public - providers and attributes
  // ----------------------------------------------------------------------------------------------
  // return the 'viewModel' suitable for rendering the tray
  getAttributes(){
    return _.extend({},
      this.getHelperAttributes(), {
        'providerOptions': this.providersByGroupId(),
        'providerContent': this.providersDetailed(),
        'legal': this.getLegalAttributes(),
        'headline': this.get('headline')
      }
    );
  }

  providersByGroupId(){
    let helperAttrs =   this.getHelperAttributes();
    let providersAll =  this.getProvidersJSON();
    let groups =        [];
    let grouped =       [];

    _.each(providersAll, (p => {
      if( !_.contains(groups, p.groupId)){

        // each provider needs the flags for responsive behavior at the 'card' level
        _.extend(p, helperAttrs);

        // add the provider model to list
        grouped.push(p);

        // add this group id to the list of used ones
        groups.push(p.groupId);
      }
    }));
    return grouped;
  }

  providersDetailed(){
    let helperAttrs = this.getHelperAttributes();
    let json =  _.collect(this.getProvidersJSON({},{'details':true}), (p => {
      return _.extend(p, helperAttrs);
    }))
    return json;
  }


  //
  // provider selection/unselection
  // ----------------------------------------------------------------------------------------------
  toggleProviderGroup(groupId){
    this.setProvidersAreSelected(groupId, {'toggle':true, 'groupId':true})
  }

  toggleProvider(id){
    this.setProvidersAreSelected(id, {'toggle':true});
  }

  toggleProviderDetails(idString){
    _.each(this.getProviders({
      id: this.sanitizeIdString(idString)
    }), function(provider){
      provider.set({'expanded': !provider.isExpanded()})
    })
  }

  toggleAllProviders(setting){
    let state = setting || {
      selected: this.allProvidersSelected() ? false : true
    };

    _.each(this.getProviders(),  function(p){

      // analytics: select provider
      // only if not already opened
      if (!p.attributes.selected) {
        $.event.trigger({
          type: 'orderProviderSelect',
          id: p.id
        });
      }

      p.set(state, {silent:true}) // firing 8+ events in a sequence is expensive...

      if (p.isExpanded() && state.selected == false) {
        // make sure all details are collapsed
        p.set({'expanded':false, 'silent':true});
      }
    });

    // this will update the view in a batch instead
    this.trigger(`providers:select:${state.selected ? 'all':'none'}`)

    // general analytics only for select/unselect link click
    if(state.selected) {
      $.event.trigger({
      	type: 'orderProviderSelectAll'
      });
    }
    else {
      $.event.trigger({
      	type: 'orderProviderSelectNone'
      });
    }
  }

  unselectAllProviders(){
    this.toggleAllProviders({
      selected: false
    })
  }


  //
  // util/convenience
  // ----------------------------------------------------------------------------------------------
  collapseAllExcept(provider){
    this.isDesktop() && _.each(this.get('providers').without(provider), (p) => {
      p.set({'expanded':false},{'silent':true})
    })
  }

  setResponsiveAttributes(mq, attrs){
    // create a dynamic getter method for each responsive attribute passed in
    // (assunes match and unmatch are in sync)
    _.each(_.keys(attrs.match || {}), (prop) => {
      this[stringUtils.camelize(prop)] = function(){
        return this.get(prop);
      }
    });

    this.responsive_callbacks.match =   this.set.bind(this, attrs.match);
    this.responsive_callbacks.unmatch = this.set.bind(this, attrs.unmatch);
    enquire.register(mq, this.responsive_callbacks);
  }

  unsetResponsiveAttributes(mq){
    enquire.unregister(mq, this.responsive_callbacks);
    // note: according to docs at http://wicky.nillia.ms/enquire.js/examples/unregister/,
    // the callback is optional, but we found that omitting it resulted in errors,
    // not in iphone, but in desktop chrome with device emulation...
  }

  selectProviderGroup(groupId){
    this.setProvidersAreSelected(groupId, {'selected':true, 'groupId':true})
  }

  sanitizeIdString(str)
  {
    return parseInt(str);
  }

  allProvidersSelected(){
    return _.size(this.getProviders({'selected':true})) == _.size(this.getProviders())
  }

  anyProvidersSelected(){
    return _.any(this.getProviders({'selected':true}))
  }

  setDisplayMode(display){
    if(display == 'chameleon' && this.isMobile()){
      display = 'in-page';
    }
    this.set({"display":display})
  }

  isOverlay(){
    return this.get('display') == 'overlay';
  }

  isChameleon(){
    return this.get('display') == 'chameleon';
  }

  isInPage(){
    return this.get('display') == 'in-page';
  }

  // model#isMobile doesn't need to be implemented,
  // because it's created dynamically by setResponsiveAttributes
  // isMobile {...}

  isDesktop(){
    return !this.isMobile()
  }
  // ipads in landscape mode get the desktop view with modified behvaior,
  // in portrait, they're the same as mobile
  isTablet(){
    return this.isDesktop() && Modernizr && Modernizr.touchevents;
  }

  destroy(){
    $.event.trigger({
      type: 'orderTrayClose'
    });
  }
}

export default Model;
