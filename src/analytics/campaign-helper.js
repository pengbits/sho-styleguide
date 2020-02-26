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
    this.optimizelyCampaignValue = null;
    this.initialize();
  }

  initialize() {
    // check current URL for s_cid parameter, if none is found, then check cookie
    this.setCampaignValue('external');

    // check current URL for i_cid parameter, if none is found, then check cookie
    this.setCampaignValue('internal');

    // check custom Optimizely integrator for relevant campaigns
    this.setOptimizelyCampaignValue();

    // if any value is found, update the links
    if(this.externalCampaignValue || this.internalCampaignValue || this.optimizelyCampaignValue) this.updateLinks();
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

  setOptimizelyCampaignValue() {
    // check optimizely integrator var for campaigns
    if (window.optimizely && typeof window.optimizely.get === 'function' && window.optimizely.get("custom/queryParamIntegrator")) {
      let queryParamArray = [],
      campaignArray = window.optimizely.get("custom/queryParamIntegrator").campaignArray;

      if (campaignArray.length > 0) {
        let campaignSplit = campaignArray[0].split(/[:]+/);

        for (let value of campaignSplit) {
          // if current value has a numeric ID string enclosed in parentheses, grab those digits and discard all else
          let regExp = /\(([0-9]+)\)/;
          if(regExp.test(value)) {
            let matches = regExp.exec(value);
            queryParamArray.push(matches[1]);
          }
          else {
            // otherwise keep as-is
            queryParamArray.push(value);
          }
        }
        // use '_' as delimiter in string join, for query param
        if(queryParamArray.length > 0) {
          this.optimizelyCampaignValue = queryParamArray.join('_');
        }
      }
    }
  }

  log(output) {
    if(this.debug && window.console && window.console.log)
    {
      console.log('| campaign helper |', output);
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
        if(hash.length > 1) {
          hash[1] = hash[1].split('#')[0]; // hash fragments were being included
          vars.push(hash[1]);
          vars[hash[0]] = hash[1];  
        }
      }
    }
    return vars;
  }

  updateLinks() {
    let elements = document.querySelectorAll('a[href*="showtime.com"],a[href*="kochava.com"],a[href*="showtimeppv.com"]');

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

      let cids = [
        { query: 's_cid', value: this.externalCampaignValue },
        { query: 'o_cid', value: this.optimizelyCampaignValue }
      ];

      for (let cid of cids) {
        let regex = new RegExp(cid.query);
        let contains = regex.test(elements[i].href);

        if (!contains && cid.value) {
          // cid already present in link, or none found anywhere, move on
          // otherwise, update link with cid
          elements[i].href += `${this.getChar(elements[i].href)}${cid.query}=${cid.value}`;
          this.log(`${cid.query}:${cid.value}`);
        }
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
