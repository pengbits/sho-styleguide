import $ from 'jquery';
import CampaignHelper from './campaign-helper';
import PageTracking   from './page-tracking';
import EventTracking  from './event-tracking';

export class Analytics {
  constructor(cfg = {}) {

    this.debug = (cfg.debug ? cfg.debug : false);

    this.campaignHelper = new CampaignHelper({debug:this.debug});

    /* check if global report suite ID variable already exists, otherwise default to production ID (i.e. vendor use) */
    if (!window.omniture_rsid) {
      window.omniture_rsid = "cbssho,cbsshoglobal";
    }
    // global variable set in _assets_head.jsp; production: 'cbssho,cbsshoglobal'; // dev: 'cbsshodev,cbsshoglobaldev'
    this.omniture_rsid = window.omniture_rsid;

    if (this.ensureSCode()) {
      // this seems to help with issue where first-ever-load of page yields incomplete s object
      // https://issues.sho.com/browse/SITE-14432
      setTimeout(() => {
        this.pageTracking = new PageTracking({debug:this.debug, rsid:this.omniture_rsid});
        this.EventTracking = new EventTracking({debug:this.debug, rsid:this.omniture_rsid});
      }, 0);

    }
    else {
      this.log('AppMeasurement.js not found');
      return false;
    }
  }

  ensureSCode() {
    return (typeof s !== 'undefined');
  }

  log(output) {
    if(this.debug && window.console && window.console.log)
    {
      console.log('| analytics |', output);
    }
  }
}

export default Analytics;
