import $ from 'jquery';
import {debounce} from "lodash";

class EndlessScroll {

  constructor(cfg) {
		this.win = $(window);
		this.footer = $(".footer"); //caching selectors
		this.shoLibrary = $(".entire-sho-library");
		this.storeBanner = $(".store-banner");
		this.document = $(document);
		this.baseUrl = cfg.baseUrl;
		this.pageUrl = cfg.pageUrl;
		this.getPageUrl();
		//setting ajaxReady flag, as multiple instances of teh page is loaded at sporadic times
		if (this.pageUrl) {
			this.win.data('ajaxReady', true).scroll (() =>  {	
				this.debouncedScrollPage = _.debounce(this.scrollPage, 3000);
				this.debouncedScrollPage();
			});
		}
  }

	getPageUrl () {
		if (this.baseUrl){
			this.pageUrl = this.baseUrl + this.pageUrl;
		}
		return this.pageUrl;
	}

	scrollPage() {
		let heightFooter = this.footer.height();
		let heightShoLib = this.shoLibrary.height();
		let heightStoreBanner = this.storeBanner.height();
		let heightBottom = heightFooter + heightShoLib + heightStoreBanner;
		if (this.win.data('ajaxReady') == false) return;
		if (this.pageUrl) {
			if ((this.document.height() - heightBottom - this.win.height()) <= this.win.scrollTop()) {
				this.win.data('ajaxReady', false);
				$('.loading-animation').show();				
				this.initGetPromoData();   
			}	
		}
	}

	initGetPromoData() {
		$.ajax({
				cache: false,
				url: this.pageUrl + '.json',
				dataType: 'json',
				success:  data => this.buildPromos(data)
			});
	}

	buildPromos (data) {	
		const moviesPagination = data.page.moviesPagination.tileList;
		if (data.page.moviesPagination.paginationCta.nextCta) {
			this.pageUrl = data.page.moviesPagination.paginationCta.nextCta.ctaLink;
			this.getPageUrl();			
		} 
		else {			
			this.pageUrl = false;			
		}
		moviesPagination.forEach((item, index) => {
			const{ctaLabel,ctaLink,imageUrl} = item;
			let htmlBlock = ` <a class="movies-gallery__item" href="${ctaLink}" data-track data-label="title page link:${ctaLabel}">
												<div class="movies-gallery__image">
													<picture>
														<source data-srcset="${imageUrl}"
															srcset="${imageUrl}">
														<img class="lazyload" alt="${ctaLabel}" src="https://www.sho.com/assets/images/lib/blank.gif">
													</picture>
												</div>
												<div class="movies-gallery__title">${ctaLabel}</div>
											</a>`;
			$('.movies-gallery__inner').append(htmlBlock);	
		});
		$('.loading-animation').hide();
		this.win.data('ajaxReady', true);
	}
}
export default EndlessScroll;
