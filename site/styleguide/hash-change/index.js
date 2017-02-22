import _ from 'underscore';
import $ from 'jquery';

class HashChange {
  // if we ever want do more, ie support routes with tokens, this is a good read
  // http://backbonejs.org/docs/backbone.html#section-185

  constructor(cfg = {}) {
    // parse routes with up to 5 levels of tokens
    // #/order                => 'order'
    // #/order/provider/92    => 'order','providers','92'
    // #/order?foo            => 'order' (parameters are ignored)
    // #/stream/movie/3418468 => 'stream','movie','3418468'
    // #/order/provider/92/theme/1 =>  "order", "provider", "92", "theme", "1"
    // #/order/provider/92/theme/1/int-default-3784 => "order", "provider", "92", "theme", "1", "int-default-3784"

    this.route =        /^#\/([^/?]+)\/*([^/?]+)*\/*([^/?]+)*\/*([^/?]+)*\/*([^/?]+)*\/*([^/?]+)*\/*/;
    // define the hash fragments that we will trigger events for
    this.event_types =  ['order','slideshow','stream','closed'];
    this.initialize();
  }

  initialize() {
    $(window).on('hashchange', this.onHashChange.bind(this));

    $(window).on('load', () => {
      if (window.location.hash) {
        $(window).trigger('hashchange');
      }
    })
  }

  onHashChange() { 
    let matches = this.route.exec(window.location.hash);
    if(matches && matches.shift()) {
      let filtered =  _.filter(matches, (m) => {
        return !!m  // reject the empty match tokens
      })

      let match =       matches[0];
      let eventName =   match == 'closed' ? 'closed' : `${match}:opened`;
      let params =      filtered.slice(1);
      if(this.event_types.indexOf(match) > -1){
        this.trigger(eventName, params)
      }
    }
  }

  trigger(eventName, params) {
    console.log(`HashChange#trigger '${eventName}'`)
    let event = {
      'type':     eventName
    };

    // coerce the params into key-value pairs..
    for(let i=0; i<params.length; i+=2){
      let key = params[i];
      let val = params[i+1];
      event[key]=val;
    }

    //..  but preserve the params as a partial url for consumers of the `details` property
    event.details = params.join('/');

    // worth noting that a url containing 'details' would have the key clobbered by the entire details property...
    $.event.trigger(event);
  }
}

HashChange.close = function(){
  // history.pushState can be used to reset the hash without resulting in a scroll..
  // unfortunately, in Win7IE11 this also results in any subsequent links to the hash failing silently
  // it seems there are issues with mixing the use of regular, dumb, hash links to open the modal,
  // and then using the history API to pack it back up again - as opposed to trapping the clicks and using history API end-to-end??

  //console.log('HashChange#close')
  window.location.hash = '/closed';
};

export default HashChange;
