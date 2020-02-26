import $ from 'jquery';
import {throttle} from "lodash";
import Variations from '../variations/index';


class StickyBanner {

	constructor(cfg) {
		this.win = $(window);
		this.stickybanner = $(cfg.el);
		this.heightTop = this.stickybanner.offset().top;
		this.heightAboveFooter = $(".footer").offset().top;		
		this.setVariationListeners();
	}

	setListeners () {
		this.throttledToggleSticky = throttle(this.toggleSticky, 5000).bind(this);
		this.win.resize(this.throttledToggleSticky);
		this.win.scroll(this.throttledToggleSticky);
	}

	toggleSticky() {
		this.isSticky = (this.heightTop <= this.win.scrollTop()) && (this.heightAboveFooter >= this.win.scrollTop());
		this.stickybanner.toggleClass('stickybanner--sticky', this.isSticky);

	}

	setVariationListeners() {
		Variations.on('variation:detected:sho', (event, data) => {
			// console.log('|sticky_banner| variations ready');
				if (data && data.sticky_banner) {
					this.setListeners();
				}
		});
	}  
}
export default StickyBanner;
