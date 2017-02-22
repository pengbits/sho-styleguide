import _ from 'underscore';
import $ from 'jquery';
import enquire from 'enquire.js';

class GlobalNavigation {
  constructor(cfg) {
    var el = $(cfg.el);
    _.extend(this, {
      'nav'              : el,
      'logo'             : el.find('.global-navigation__logo'),
      'menuToggle'       : el.find('.global-navigation__menu-toggle'),
      'menuOpenBtn'      : el.find('.global-navigation__menu-icon'),
      'breadcrumb'       : el.find('.global-navigation__breadcrumb'),
      'primary'          : el.find('.global-navigation__primary'),
      'primaryMenu'      : el.find('.global-navigation__primary-menu'),
      'primaryMobile'    : el.find('.global-navigation__primary-mobile'),
      'schedulesOpenBtn' : el.find('.global-navigation__schedules'),
      'schedulesCloseBtn': el.find('.schedule-drawer__icon-close'),
      'schedulesDrawer'  : el.find('.schedule-drawer'),
      'searchIcon'       : el.find('.global-navigation__search-icon'),
      'rightMenu'        : el.find('.global-navigation__right-menu'),
      'searchBar'        : el.find('.global-navigation__search-bar'),
      'searchField'      : el.find('.global-navigation__search-field'),
      'searchForm'       : el.find('#results-search-form'),
      // see _variables.scss, http://localhost:4000/styleguide/breakpoints/
      'breakpoints'      : {'large' : 992}
    });

    this.isSearching = false;

    this.setHandlers();
    this.setEventListeners();
  }

  setHandlers() {
    $('body').on('click touchend', (event) => {
      this.onBodyClick(event);
    });

    this.menuOpenBtn.on('click touchend', (event) => {
      event.preventDefault();
      this.togglePrimaryNav();
    });

    this.schedulesOpenBtn.on('click touchend', (event) => {
      event.preventDefault();
      this.openSchedulesDrawer();
    });

    this.schedulesCloseBtn.on('click touchend', (event) => {
      event.preventDefault();
      this.closeSchedulesDrawer()
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
      'match' : this.closeSchedulesDrawer.bind(this)
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
    this.removeModifier(this.nav, 'schedules-open');
    this.removeModifier(this.nav, 'search-open');
  }

  togglePrimaryNav() {
    this.addModifier(this.breadcrumb, 'hidden');
    this.toggleModifier(this.nav, 'open');
    this.removeModifier(this.nav, 'schedules-open');

    if (this.navIsOpen()) {
      this.menuOpenBtn.attr("data-label", "menu open");
    } else {
      this.menuOpenBtn.attr("data-label", "menu close");
    }
  }

  openSchedulesDrawer() {
    // need to set the drawer's display to none when its not in use to avoid collisions..
    // before toggling the classnames on for the active state and transitions, we have to restore display:block
    this.schedulesDrawer.show();

    _.delay(() => {
      this.addModifier(this.nav,    'schedules-open');
      this.removeModifier(this.nav, 'open');
    }, 0)
  }

  closeSchedulesDrawer() {
    this.removeModifier(this.nav,    'schedules-open');
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
	    this.removeModifier(this.nav,     'schedules-open');
		}
    else {
			this.closePrimaryNav();
		}
  }

  setEventListeners() {
    let transition_end = 'transitionend webkitTransitionEnd oTransitionEnd';
    this.primaryMenu.on(transition_end, (event) => {
      this.toggleModifier(this.breadcrumb, 'hidden', this.navIsOpen())
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

    this.schedulesDrawer.on(transition_end, (event) => {
      // if the drawer is not in use, it must be set to display:none;
      if(!this.scheduleDrawerIsOpen()){
        this.schedulesDrawer.hide();
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

  scheduleDrawerIsOpen(){
    return this.nav.hasClass('global-navigation--schedules-open')
  }
}

export default GlobalNavigation;
