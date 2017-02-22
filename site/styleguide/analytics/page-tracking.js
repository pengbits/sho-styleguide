import Variations from '../variations/index';

class PageTracking
{
  constructor(cfg = {}) {
    this.debug = (cfg.debug ? cfg.debug : false);
    this.rsid = cfg.rsid;
    this.s = s_gi(this.rsid);

    this.initialize();
  }

  initialize() {
    if (!this.rsid) return false;

    this.readMetaTag();

    if (!this.pageName) return;

    // give optimizely half a second to do it's thing.. but don't wait any longer then needed

    this.onDelayElapsed();
    // this wasn't working right - onDelayElapsed was being called after 500ms
    // and then called again once variations were detected
    // removing for now, for hotfix

    //this.timeout_id = setTimeout(this.onDelayElapsed.bind(this), 500);
    //Variations.on('variation:detected:vendor', this.onVariationDetected.bind(this));
  }

  onVariationDetected(){
    this.getVariationIds();

    if(this.timeout_id){
      clearInterval(this.timeout_id)
      this.onDelayElapsed();
    }
  }

  onDelayElapsed(){
    this.buildPageObject();
    this.trackPageView();
  }

  readMetaTag() {
    let meta = document.querySelector('meta[name="page-tracking"]');
    this.pageName = (meta ? meta.getAttribute('content').toLowerCase() : false);
  }

  buildPageObject()
  {
    let ppv;

    this.resetVariables();
    this.s.pageName = this.pageName;

    // custom values for 404 page
    if(this.pageName == 'sho:utility:error:404') {
      this.s.pageName = null;
      this.s.pageType = 'errorPage';
    }

    // custom event for order page (tray open)
    if(this.pageName == 'sho:order:home') {
      this.setCustomEvent(97);
    }

    this.s.eVar20 = "D=pageName"; // sets to dynamic variable in image request
    this.s.hier1 = this.pageName;
    this.setCustomEvent(3); // page view event
    // s.linkTrackVars = "events,eVar20,eVar52,eVar53"; // not needed for s.t?

    // set individual sProps by subdividing pageName
    let i=1, sProps = this.pageName.split(':');
    while(sProps.length)
    {
      this.setProp(i, sProps.shift()); i++;
    }

    // set previous page data sProps
    // had to wrap these calls to s.getPreviousValue and s.getPercentPageViewed in defensive if() statements
    // because they were breaking all js behaviors on first load of homepage (SITE-14429)
    if(s.getPreviousValue){
      this.setProp(42, this.s.getPreviousValue(s.pageName,'s_ppn')); //prop42: prev page name
    }

    if(s.getPercentPageViewed){
      ppv = this.s.getPercentPageViewed(s.pageName); //get array of data on prev page % viewed
    }

    //if ppv array returned and prev page id matches prev page name
    if( ppv && typeof ppv=='object' && ppv[0] == this.s.prop42 ) {
      this.setProp(43, (ppv[1] + '|' + ppv[2])); //prop43: prev page max and initial % viewed, delimited by "|".
      this.setProp(44, (ppv[4] + 'x' + ppv[5])); //prop44: viewport width x height in CSS pixels
      this.setProp(45, (ppv[6] + 'x' + ppv[7])); //prop45: display monitor width x height in real pixels
      this.setProp(46, ppv[8]); //prop46: pixel density, i.e. number of virtual pixels per real pixel
      this.setProp(47, ppv[9]); //prop47: device orientation: initial and final (final only present if rotation occurred)
    }
  }

  setProp(index,value) {
    this.s['prop' + index ] = value;
  }

  setCustomEvent(index) {
    this.s.events = (this.s.events != '' ? this.s.events + ',' : '') + 'event' + index;
    this.s.linkTrackEvents = (this.s.linkTrackEvents != '' ? this.s.linkTrackEvents + ',' : '') + 'event' + index;
  }

  getVariationIds(e, data){
    // this param might be incomplete if there are multiple variations, so let's get a fresh copy
    let idArray = [];
    let idStr = '';
    let map = Variations.getCampaignStates();

    for (let key in map) {
      let idEntry = '';

      idEntry += key; // 7654631269
      idEntry += ':'  // 7654631269:
      idEntry += (Variations.getVariationName(map[key]) || 'Unknown').toLowerCase();
      // 7654631269:variation #1
      // 7654631269:original
      idArray.push(idEntry);
    }

    idStr = idArray.join(',');
    this.log('getVariationIds '+idStr);
    // don't exceed the 255 character cap
    this.s.list1 = (idStr.substr(0,255));
  }

  trackPageView() {
    // make impression
    let s_code = this.s.t();
    if(s_code) document.write(s_code);

    this.log('page | ' +  this.s.pageName);
    this.log('events | ' + this.s.events);
    if(this.s.list1) this.log('optimizely | ' + this.s.list1);

    this.resetVariables();
  }

  resetVariables()  {
    this.s.events = '';
    this.s.linkTrackEvents='';
    this.s.linkTrackVars='';
  }

  log(output) {
    if(this.debug && window.console && window.console.log)
    {
      console.log('| analytics |', output);
    }
  }
}

export default PageTracking;
