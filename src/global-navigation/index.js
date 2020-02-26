import $ from 'jquery';
import enquire from 'enquire.js';
import {throttle} from "lodash";
import Variations from '../variations/index';

class GlobalNavigation {
  constructor(cfg) {
    var el = $(cfg.el);
    Object.assign(this, {
      'nav'              : el,
      'logo'             : el.find('.global-navigation__logo'),
      'menuToggle'       : el.find('.global-navigation__menu-toggle'),
      'menuOpenBtn'      : el.find('.global-navigation__menu-icon'),
      'breadcrumb'       : el.find('.global-navigation__breadcrumb'),
      'primary'          : el.find('.global-navigation__primary'),
      'primaryMenu'      : el.find('.global-navigation__primary-menu'),
      'primaryMobile'    : el.find('.global-navigation__primary-mobile'),
      'flyoutContainer'  : el.find('.flyout-container'),
      'flyoutOpenBtn'    : el.find('.global-navigation__flyout'),
      'flyoutCloseBtn'   : el.find('.flyout-container__icon-close'),
      'schedulesDrawer'  : el.find('.schedule-drawer'),
      'seriesDrawer'     : el.find('.series-drawer'),
      'searchIcon'       : el.find('.global-navigation__search-icon'),
      'rightMenu'        : el.find('.global-navigation__right-menu'),
      'searchBar'        : el.find('.global-navigation__search-bar'),
      'searchField'      : el.find('.global-navigation__search-field'),
      'searchForm'       : el.find('#results-search-form'),
      'seriesBtn'        : el.find('.global-navigation__series'),
      'scheduleBtn'      : el.find('.global-navigation__schedule'),
      'seriesLink'       : el.find('.series__link'),
      'seriesFlyout'     : el.find('.series__flyout'),
      // see _variables.scss, http://localhost:4000/styleguide/breakpoints/
      'breakpoints'      : {'large' : 992}
    });
    this.win = $(window);
    this.isSearching = false;

    this.setHandlers();
    this.setEventListeners();
    this.setVariationListeners();
  }
  
  setHandlers() {
    $('body').on('click touchend', (event) => {
      this.onBodyClick(event);
    });

    if ($('el').context.location.pathname == "/"){
      this.seriesLink.css({"display":"none"})
      this.seriesFlyout.show();
    }else{
      this.seriesFlyout.hide();
      this.seriesLink.css({"display":"block"})
    }

    this.menuOpenBtn.on('click touchend', (event) => {
      event.preventDefault();
      this.togglePrimaryNav();
    });

    this.flyoutOpenBtn.on('click touchend', (event) => {
      event.preventDefault();
      if(event.target.classList.contains('global-navigation--highlighted')){
        this.closeFlyoutDrawer()
      }else {
        if(event.target.classList.contains('global-navigation__series') && $('el').context.location.pathname == "/") {
          this.openFlyoutDrawer('series');
        }
        if(event.target.classList.contains('global-navigation__schedule')){
          this.openFlyoutDrawer('schedule');
        }
      } 
    });

    this.flyoutCloseBtn.on('click touchend', (event) => {
      event.preventDefault();
      this.closeFlyoutDrawer()
    });

    this.searchIcon.on('click touchend', (event) => {
      event.preventDefault();
      this.toggleSearch();
    });

    this.searchForm.on('submit', (event) => {
      // Remove focus before form submit
      if(this.isSearching) return;

      this.searchField.blur();
      this.isSearching = true;

      event.preventDefault();
      // delay to allow time for analytics
      setTimeout(() => this.submitSearch(), 250);

      $.event.trigger({
        type: 'searchFormSubmit',
        searchTerm: this.searchField.val().toLowerCase()
      });

    });

    this.searchField.on('touchend', (event) => {
      this.searchField.focus();
    });

    enquire.register(`screen and (max-width:${(this.breakpoints.large -1)}px)`, {
      'match' : this.closeFlyoutDrawer.bind(this)
    })
  }

  submitSearch() {
    this.searchForm.submit();
    this.isSearching = false;
  }

  onBodyClick(e) {
    //If user clicks outside global nav component
    if (!$(e.target).parents('.global-navigation').length && !$(e.target).hasClass('global-navigation')) this.closePrimaryNav()
  }

  closePrimaryNav() {
    this.removeModifier(this.nav, 'open');
    this.removeModifier(this.nav, 'search-open');
    this.closeFlyoutDrawer()
  }

  togglePrimaryNav() {
    this.addModifier(this.breadcrumb, 'hidden');
    this.toggleModifier(this.nav, 'open');
    this.removeModifier(this.nav, 'flyout-open');

    if (this.navIsOpen()) {
      this.menuOpenBtn.attr("data-label", "menu open");
    } else {
      this.menuOpenBtn.attr("data-label", "menu close");
    }
  }

  openFlyoutDrawer(type) {
    // need to set the drawer's display to none when its not in use to avoid collisions..
    // before toggling the classnames on for the active state and transitions, we have to restore display:block
    this.flyoutContainer.show()
    if(type === 'series'){
      this.seriesDrawer.show()
      this.schedulesDrawer.hide();
    }
    else if(type === 'schedule'){
      this.schedulesDrawer.show();
      this.seriesDrawer.hide()
    }

    _.delay(() => {
      this.addModifier(this.nav,    'flyout-open');
      this.removeModifier(this.nav, 'open');

      if(type === 'series'){  
        this.addModifier(this.seriesBtn, 'highlighted')
        this.removeModifier(this.scheduleBtn, 'highlighted')

      }
      else if(type === 'schedule'){
        this.addModifier(this.scheduleBtn, 'highlighted')
        this.removeModifier(this.seriesBtn, 'highlighted')
      }

    }, 0)
  }

  closeFlyoutDrawer() {
    this.removeModifier(this.nav,    'flyout-open');
    this.removeModifier(this.seriesBtn, 'highlighted')
    this.removeModifier(this.scheduleBtn, 'highlighted')
  }

  toggleSearch() {
		if(!this.searchIsOpen()){
	    // Hide child elements from view because they intefere with animation
	    this.addModifier(this.logo, 		  'hidden-md');
	    this.addModifier(this.menuToggle, 'hidden');
	    this.addModifier(this.primary, 	  'hidden');
	    this.addModifier(this.rightMenu,  'hidden');
      this.addModifier(this.nav,        'search-open');
      this.removeModifier(this.nav,     'open');
      this.removeModifier(this.nav,     'flyout-open');
		}
    else {
			this.closePrimaryNav();
		}
  }

  setEventListeners() {
    let transition_end = 'transitionend webkitTransitionEnd oTransitionEnd';
    this.primaryMenu.on(transition_end, (event) => {
      this.toggleModifier(this.breadcrumb, 'hidden', this.navIsOpen())
      this.closeFlyoutDrawer()
    });

    this.primaryMobile.on(transition_end, (event) => {
      this.toggleModifier(this.breadcrumb, 'hidden', this.navIsOpen())
    });

    this.searchBar.on(transition_end, (event) => {
      if (!this.searchIsOpen()) {
        this.searchField.val('');
        this.searchField.blur();

        // Restore previosuly hidden child elements to view
        this.removeModifier(this.logo,			 'hidden-md');
        this.removeModifier(this.menuToggle, 'hidden');
        this.removeModifier(this.primary,    'hidden');
        this.removeModifier(this.rightMenu,  'hidden');

      } else {
        this.searchField.focus();
        this.searchField.trigger('touchend');
      }
    });

    this.flyoutContainer.on(transition_end, (event) => {
      // if the drawer is not in use, it must be set to display:none;
      if(!this.flyoutDrawerIsOpen()){
        this.flyoutContainer.hide();
      }
    })
  }

  addModifier(el, key) {
    this.toggleModifier(el, key, true)
  }

  removeModifier(el, key) {
		this.toggleModifier(el, key, false)
	}

	toggleModifier(el, key, onoff){
		let modifier = `global-navigation--${key}`;
		el.toggleClass(modifier, onoff)
	}

	searchIsOpen(){
		return this.nav.hasClass('global-navigation--search-open');
	}

  navIsOpen(){
    return this.nav.hasClass('global-navigation--open')
  }

  flyoutDrawerIsOpen(){
    return this.nav.hasClass('global-navigation--flyout-open')
  }

//variation code for optimzely to stick the global navigation for desktop
  setVariationListeners() {
		Variations.on('variation:detected:sho', (event, data) => {
			// console.log('|global_nav| sticky variations ready');
				if (data && data.sticky_global_navigation) {
				this.setStickyGlobalNavListner();
				}
		});
  } 

  setStickyGlobalNavListner () {
    this.heightAboveFooter = $(".footer").offset().top;
    this.throttledtoggleStickyGlobalNav = throttle(this.toggleStickyGlobalNav, 1000).bind(this);
		this.win.resize(this.throttledtoggleStickyGlobalNav);
		this.win.scroll(this.throttledtoggleStickyGlobalNav);
  }

  toggleStickyGlobalNav () {
    this.nav.toggleClass('global-navigation--sticky', this.heightAboveFooter >= this.win.scrollTop());
  }
}

export default GlobalNavigation;
