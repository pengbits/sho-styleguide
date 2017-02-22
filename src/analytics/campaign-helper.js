class CampaignHelper
{
  constructor(cfg = {}) {
    this.debug = (cfg.debug ? cfg.debug : false);
    this.campaign_map = {
      'external':{
        'query': 's_cid',
        'format': /ext-(.+)-(\d+)/,
        'cookie':'gvo_campaign'
      },
      'internal':{
        'query':'i_cid',
        'format': /int-(.+)-(\d+)/,
        'cookie':'gvo_eVar52'
      }
    };
    this.initialize();
  }

  initialize() {
    // check current URL for s_cid parameter, if none is found, then check cookie
    this.setCampaignValue('external')

    // check current URL for i_cid parameter, if none is found, then check cookie
    this.setCampaignValue('internal')

    // if any value is found, update the links
    if(this.externalCampaignValue || this.internalCampaignValue) this.updateLinks();

  }

  // utility function for setting the internal campaignValue property
  // will use the following to populate the property, whichever non-null it finds in any case
  // - the value passed to the function
  // - the value present in the browser queryString
  // - the value present in the browser hash
  // - the value present in the browser cookies
  setCampaignValue(type, value_){
    let queryParam =    this.getQueryParam(type),
    hashParam =         this.getHashParam(type),
    cookieKey =         this.campaign_map[type].cookie,
    cookieVal =         this.getCampaignCookie(cookieKey),
    value =             value_ || hashParam || queryParam || cookieVal
    ;

     // this.log(`hashParam=  ${hashParam}`);
     // this.log(`queryParam= ${queryParam}`)
     // this.log(`cookieVal=  ${cookieVal}`)
     // this.log(`valueToUse= ${value}`)

    // store the value
    let key = `${type}CampaignValue`;
    this[key] = value;

    // if it's different from the cookie, should we update the cookie accordingly??
  }

  log(output) {
    if(this.debug && window.console && window.console.log)
    {
      console.log('| campaign |', output);
    }
  }

  getCampaignCookie(cookieName) {
    let cookies = [],
    campaignValue;

    cookies = document.cookie.split('; ');
    cookies.forEach(function (cookie) {
      let pair = cookie.split('=');
      let name = pair[0];
      let value = pair[1];
      if(name == cookieName) {
        campaignValue = value;
      }
    });
    return campaignValue;
  }

  // look for sage codes in the hash such as #/order/int-penny-809780
  // they do not resemble true query params in the format ?key=value,
  // but they can be assumed to be the last part of the hash
  getHashParam(type){
    let pattern = this.campaign_map[type].format;
    let matches = pattern.exec(window.location.hash);

    if(matches){
      return matches[0]
    } else {
      return false
    }
  }

  getQueryParam(type){
    return this.getQueryParams()[this.campaign_map[type].query];
  }

  getQueryParams() {
    let vars = [], hash;
    let q = document.URL.split('?')[1];
    if(q != undefined){
      q = q.split('&');
      for(let i = 0; i < q.length; i++){
        hash = q[i].split('=');
        hash[1] = hash[1].split('#')[0]; // hash fragments were being included
        vars.push(hash[1]);
        vars[hash[0]] = hash[1];
      }
    }
    return vars;
  }

  updateLinks() {
    // console.log(`CampaignHelper#updateLinks`)
    let elements = document.querySelectorAll('a[href*="showtime.com"],a[href*="kochava.com"]');

    for (let i = 0; i < elements.length; ++i) {
      let contains_i_cid = /i_cid/.test(elements[i].href);

      if (this.internalCampaignValue) {
        if (contains_i_cid) {
          // if i_cid already exists on link, replace it
          elements[i].href = elements[i].href.replace(/(i_cid=)[^\&]+/, '$1' + this.internalCampaignValue);
        }
        else {
          // if no i_cid already on link, add it
          elements[i].href += this.getChar(elements[i].href) + 'i_cid=' + this.internalCampaignValue;
        }
      }

      let contains_s_cid = /s_cid/.test(elements[i].href);
      if (!contains_s_cid && this.externalCampaignValue) {
        // s_cid already present in link, or none found anywhere, move on
        // otherwise, update link with s_cid
        elements[i].href += this.getChar(elements[i].href) + 's_cid=' + this.externalCampaignValue;
      }
    }
  }

  getChar(str) {
    let contains_any_param = /\?.+\=/.test(str);
    // if URL already contains other parameter, append with & instead of ?
    var char_ = (contains_any_param ? '&' : (/com\/$/.test(str) ? '?' : '/?'));
    return char_;
  }
}

export default CampaignHelper;
