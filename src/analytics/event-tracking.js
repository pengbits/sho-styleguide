import $ from 'jquery';
import Cookies from '../utils/Cookies'
import CampaignHelper from './campaign-helper';
import GenerateTimestamp from './generate-timestamp';

class EventTracking
{
  constructor(cfg = {}) {
    this.debug = (cfg.debug ? cfg.debug : false);
    this.numberOfCardsOpened = 0;
    this.openCards = [];
    this.rsid = cfg.rsid;
    if (this.rsid) this.initialize();
  }

  initialize() {
    this.setHandlers();
  }

  setHandlers() {
    // user-initiated click events
    $(document).on( "click", "[data-track]", event => { this.trackClick(event) });

    // events broadcast from other JS contexts
    $(document).on([
      "selectNavigation",
      "cart-modal:opened",
      "cart-modal:closed",
      "orderProviderUnselect",
      "orderProviderSelectNone",
      "orderTrayClose",
      "order:opened",
      "orderProviderClick",
      "orderProviderOpen",
      "orderProviderClose",
      "orderProviderLearnMore",
      "orderProviderSelectAll",
      "orderVariationActivated",
      "searchFormSubmit",
      "stream:opened",
      "scheduleDateSelected",
      "emailSubmit",
      "emailSignupError",
      "emailSignupSuccess"
    ].join(' '), event => { this.eventTriggered(event) });
  }

  eventTriggered(e) {
    // an 'events' key/value property needs to be passed into eventData, at minimum
    this.eventData = {};
    switch (e.type) {
      case "orderTrayClose":
        this.eventData.events = ['107'];
        this.trackEvent(this.eventData, false, true);
      break;
      case "orderProviderSelectNone":
        this.openCards = [];
      break;
      case "searchFormSubmit":
        this.eventData = {
          context : 'internal search',
          label : 'internal search',
          searchTerm : e.searchTerm,
          events : ['63']
        };
        this.trackEvent(this.eventData);
        break;
      case "cart-modal:opened":
        this.eventData.events = ['108'];
        this.trackEvent(this.eventData);
        break;
      case "cart-modal:closed":
        this.eventData.events = ['109'];
        this.trackEvent(this.eventData);
        break;
      case "stream:opened":
        this.eventData.events = ['88'];
        this.trackEvent(this.eventData);
        break;
      case "order:opened":
        this.openCards = [];
        this.eventData.events = ['97'];
        this.setCookie("order_tray_opened", true);
        this.trackEvent(this.eventData);
        break;
      case "orderProviderClick":
        this.eventData = {
          providerId : e.id,
          context : 'order tray',
          label : e.selected ? "open card" : "close card",
          events : ['63']
        };
        this.trackEvent(this.eventData);
        break;
      case "orderProviderOpen":
        this.eventData = {
          providerId : e.id,
          events : ['99']
        };
        this.addCards(e.id);
        this.setCookie("order_card_opened", true);
        this.trackEvent(this.eventData, true);
        break;
      case "orderProviderClose":
        this.eventData = {
          providerId : e.id
        };
        this.removeCards(e.id);
        break;
      case "orderProviderLearnMore":
        this.eventData = {
          providerId : e.id,
          context: 'provider card',
          label : e.expanded ? "learn more" : "learn less",
          events : [63]
        }
        this.trackEvent(this.eventData);
        break
      case "orderProviderSelectAll":
        this.eventData = {
          context : 'order tray',
          label : 'select all',
          providerId : null,
          events : ['63']
        };
        this.trackEvent(this.eventData);
        break;
      case "scheduleDateSelected":
        this.eventData = {
          context : 'schedule navigation',
          label : 'calendar date',
          events : ['63']
        };
        this.trackEvent(this.eventData);
        break;
      case "emailSubmit":
        this.eventData = {
          context : e.context,
          label : 'submit',
          events : ['63']
        };
        this.trackEvent(this.eventData);
        break;
      case "emailSignupSuccess":
        this.eventData = {
          context : e.context,
          label : 'success',
          events : ['103']
        };
        this.trackEvent(this.eventData);
        break;
      case "emailSignupError":
        let errors = e.errors.join();
        this.eventData = {
          list : errors,
          listEVar : 'list2',
          context : e.context,
          label : 'error',
          events : ['104']
        };
        this.trackEvent(this.eventData);
        break;
      case "selectNavigation":
        this.eventData = {
          context : e.context,
          label : e.label,
          events : ['63']
        };
        this.trackEvent(this.eventData);
        break;
      default:
        // nada
        break;
    }

    // quick fix to help campaign links when DOM is refreshed
    // card redraw on select all was too quick; added 500ms delay here
    setTimeout(() => new CampaignHelper({debug:this.debug}), 500);
  }

  setCookie(name, value) {
    Cookies.set(`sho_${name}`, value);
  }

  removeCards(id) {
    if(id || id == 0) {// account for tv providers id 0 not returning as false here
      let idx = this.openCards.indexOf(id);
      if (idx >= 0) {
        this.openCards.splice(idx,1);
      }
    }
  }

  addCards(id) {
    if(id || id == 0) {
      let idx = this.openCards.indexOf(id);
      if (idx >= 0) {
        return;
      }
      this.openCards.push(id);
      this.numberOfCardsOpened++;
    }
  }

  setLinkTrackVars(key) {
    // build up linkTrackVars with all relevant vars to be sent with s.tl
    this.s.linkTrackVars = (this.s.linkTrackVars != '' ? this.s.linkTrackVars + ',' : '') + key;
  }

  setData(key, value) {
    if (key == 'clickContext' || key == 'clickLabel') {
      value = value.toLowerCase();
    }
    this.s.contextData[key] = value;
    this.setLinkTrackVars('contextData.' + key);
  }

  setCustomEvent(index) {
    this.s.events = (this.s.events != '' ? this.s.events + ',' : '') + 'event' + index;
    this.s.linkTrackEvents = (this.s.linkTrackEvents != '' ? this.s.linkTrackEvents + ',' : '') + 'event' + index;
    if(!this.s.linkTrackVars.includes("events")) {
      this.setLinkTrackVars('events');
    }
  }

  trackEvent(data, isCardOpenEvent = false, isCloseTrayEvent = false) {
    this.s = s_gi(this.rsid);
    this.resetVariables();

    if(data.list && data.listEVar) {
      this.s[data.listEVar] = data.list;
      this.setLinkTrackVars(data.listEVar);
      this.log(data.listEVar + ' | ' + data.list);
    }

    if(data.context && data.label) {
      this.setData('clickContext',data.context);
      this.setData('clickLabel',data.label);
    }

    if(data.providerId || data.providerId === 0) {
      this.setData('providerId',data.providerId);
    }

    if(data.searchTerm) this.setData('searchTerm',data.searchTerm);
    if(isCardOpenEvent) this.setData('cardOpens',this.numberOfCardsOpened);
    if(isCloseTrayEvent) this.setCardCombo();

    data.events.forEach(this.setCustomEvent, this);

    // set timestamp
    this.s.eVar56 = GenerateTimestamp();
    this.setLinkTrackVars('eVar56');

    // make impression
    this.s.tl(true,'o','Custom Event');

    if(this.debug) {
      this.log('events | ' + s.events);
      if(data.context) this.log('context | ' +  data.context);
      if(data.label) this.log('label | ' + data.label);
      if(data.providerId) this.log('provider ID | ' + data.providerId);
      if(data.searchTerm) this.log('search term | ' + data.searchTerm);
      if(isCardOpenEvent) this.log('total cards opened | ' + this.numberOfCardsOpened);
    }

    this.resetVariables();
  }

  trackClick(event, cfg) {

    // get s object and reset
    this.s = s_gi(this.rsid);
    this.resetVariables();

    let el = event.currentTarget,
    data = {};

    // convert element's data attributes into object properties
    [].forEach.call(el.attributes, function(attr) {
      if (/^data-/.test(attr.name)) {
        let camelCaseName = attr.name.substr(5).replace(/-(.)/g, function (key, value) {
          return value.toUpperCase();
        });
        data[camelCaseName] = attr.value.toLowerCase();
      }
    });

    // look for context and provider ID data attributes higher up in DOM tree
    if(!data.context) { data.context = this.findClosest(el, 'context'); }
    if(!data.providerId) { data.providerId = this.findClosest(el, 'providerId'); }

    // look for label data attribute higher up in DOM tree, if not found use innerHTML of clicked element
    let label = this.findClosest(el, 'label');
    if(!data.label) { data.label = label ? label : el.textContent; }

    if(data.context && data.label) {
      this.setData('clickContext',data.context);
      this.setData('clickLabel',data.label);
    }
    else {
      return;
    }

    if(data.label == 'provider lead' && this.openCards.length) {
      // if provider lead event, and there are open cards, send current opened card combination to analytics
      this.setCardCombo();
    }

    if(data.searchTerm) this.setData('searchTerm',data.searchTerm);
    if(data.location) this.setData('clickLocation',data.location);
    if(data.providerId || data.providerId === 0) {
      this.setData('providerId',data.providerId);
    }

    this.setCustomEvent(63);

    // set timestamp
    this.s.eVar56 = GenerateTimestamp();
    this.setLinkTrackVars('eVar56');

    // make impression
    this.s.tl(true,'o','Custom Click Event');

    this.log('events | ' + this.s.events);
    this.log('context | ' +  data.context);
    this.log('label | ' + data.label);

    if(data.location) this.log('location | ' + data.location);
    if(data.providerId) this.log('provider ID | ' + data.providerId);
    if(data.searchTerm) this.log('search term | ' + data.searchTerm);

    // delay to allow for analytics success, when href is present and does not include #
    if (el.href && /^[^#]+$/.test(el.href) && data.noRedirect == null) {
      if(!data.providerId) {
        event.preventDefault();
        setTimeout(() => { window.location = el.href; }, 350);
      }
    }

    this.resetVariables();
  }

  setCardCombo() {
    this.openCards.sort(function(a,b){return a - b}); // sort numerically first
    this.openCardsStr = this.openCards.join('|'); // pass to analytics as string, not array
    this.setData('cardCombo', this.openCardsStr);
    this.log('cards currently open | ' + (this.openCardsStr ? this.openCardsStr : 'none'));
  }

  findClosest(el, attribute) {
    // traverse up the DOM
    while (!el.dataset[attribute]) {
      // increment the loop to the parent node
      el = el.parentNode;
      if (el && el.tagName === 'HTML') {
        return null;
      }
      if (!el) return null;
    }
    return el.dataset ? el.dataset[attribute] : null;
  }

  resetVariables()  {
    this.s.events = '';
    this.s.linkTrackEvents = '';
    this.s.linkTrackVars = '';
    this.s.list2 = '';

    ['clickContext','clickLabel','clickLocation','providerId','searchTerm', 'cardOpens', 'cardCombo'].forEach(function (key) {
      this.s.contextData[key] = null;
    }, this);
  }

  log(output) {
    if(this.debug && window.console && window.console.log)
    {
      console.log('| analytics |', output);
    }
  }
}

export default EventTracking;
