import $ from 'jquery';
import {debounce, throttle} from "lodash";
import Modernizr from 'browsernizr';

class Slider {

  /**
   * Creates a new Slider component and initializes it.
   * The config object contains the outermost element of the slider as provided by the component bootstrapping system.
   *
   * Possible optimizations and enhancements:
   * 1. Allow for the invalidation of individual properties (minimal gains)
   */
  constructor(cfg) {
    var el = $(cfg.el); Object.assign(this, {

      'slider': el,
      'innerContainer': el.find('.slider__content'),
      'container':  el.find('.slider__container'),
      'controls':   el.find('.slider__control'),
      'prevControl':el.find('.slider__control--prev'),
      'nextControl':el.find('.slider__control--next'),
      'itemsContainer':el.find('.slider__items'),
      'items':      el.find('.slider__item'),
      'rotation':   el.data('rotation') || 'none', // none or infinite
      'step':       el.data('step') || 'item', // item or page
      'debug':      el.data('debug') || false,
      'gridAt':     el.data('gridAt') ? parseInt(el.data('gridAt')) : null,
      'controlBreakpoint': 768, // the size at which we show the controls even on touch enabled devices
      '_display': null,
      '_valid': true,
      '_showControls': false
    });
    this.initialise();
  }
  // Getters and Setters
  /**
   * 
   * The display of the slider.
   * Can be inline or grid
   */
  get display() {
    return this._display;
  }
  set display(value) {
    if(this._display !== value) {
      this._display = value;

      let isGrid = (this._display == 'grid');
      this.slider.toggleClass('slider--grid', isGrid);
      this.slider.toggleClass('slider--inline', !isGrid);

      this.invalidate(true);
    }
  }

  // Event Handlers

  /**
   * Event handler for previous button click
   */
  onPrevControlClick(e) {
    e.preventDefault();
    this.prev();
  }

  /**
   * Event handler for next button click
   */
  onNextControlClick(e) {
    e.preventDefault();
    this.next();
  }

  /**
   * Event handler for the window resize
   */
  onWindowResize(e) {
    this.invalidate();
  }

  // State management

  /**
   * Method used for caching local variables used for computations.
   */
  cacheVariables() {
    // extract sample item since all are assummed to be of uniform width
    // TODO Account for different sized items
    let item = $(this.items[0]);
    this.itemWidth = item.width();
    this.itemHeight = item.height();
    this.gutterWidth = this.getGutterWidthForItem(item);
    this.itemContainerWidth = this.itemWidth + this.gutterWidth;
    this.containerWidth = this.container.width();
    this.contentWidth = (this.items.length * this.itemContainerWidth) - this.gutterWidth;
    this.windowWidth = Math.max($(window).width(), window.innerWidth);
    this.canvasWidth = this.containerWidth - this.getGutterWidthForItem(this.itemsContainer);
    this.maxOffset = this.contentWidth - this.canvasWidth;
    this.itemsPerPage = this.getItemsPerPage();
  }

  // Initialisation

  /**
   * Sets all event handlers for the component
   */
  setHandlers() {
    this.prevControl.on('click', this.onPrevControlClick.bind(this));
    this.nextControl.on('click', this.onNextControlClick.bind(this));
    this.container.on('scroll', throttle(this.handleScroll.bind(this), 300))

    // Debounce is cool: http://underscorejs.org/#debounce
    let lazyResize = debounce(this.onWindowResize.bind(this), 300);
    $(window).resize(lazyResize);
  }

  /**
   * Initialises the component. Only called once from the constructor.
   */
  initialise() {
    this.setHandlers();
    this.invalidate();
  }

  /**
   * Attempt to move to the previous index.
   */
  prev() {
    const itemsPerPage = this.getItemsPerPage()
    let maxScroll; 
    // At smaller browser widths, this formula usually results in scrolling back one at a time because of the 'itemsPerPage -1` bit
    // Setting this to just `itemsPerPage` will result in a 2 at a time scroll, but this results in some boxes being skipped over 
    // if the initial position of the slider is off-center.
    let distanceToScroll = (this.itemWidth * Math.max((itemsPerPage-1), 1)) + (this.gutterWidth * itemsPerPage) - this.gutterWidth

    if(this.windowWidth > this.controlBreakpoint) {
      maxScroll = this.contentWidth - this.containerWidth
    } else {
      maxScroll = this.maxOffset + (this.gutterWidth * 2)
    }
    const startLeft = this.container.scrollLeft()
    const startRight = maxScroll - this.container.scrollLeft()

    if(startLeft % this.itemContainerWidth !== 0) {
      distanceToScroll = distanceToScroll + (startLeft % this.itemContainerWidth)
    }
    this.container.animate({
      scrollLeft: maxScroll - (startRight + distanceToScroll)
    })
  }

  /**
   * Attempt to move to the next index.
   */
  next() {
    const itemsPerPage = this.getItemsPerPage()
    const startLeft = this.container.scrollLeft()
    let distanceToScroll = (this.itemWidth * itemsPerPage) + (this.gutterWidth * itemsPerPage)
    if(startLeft % this.itemContainerWidth !== 0) {
      distanceToScroll = distanceToScroll - (startLeft % this.itemContainerWidth)
    }
    this.container.animate({
      scrollLeft: startLeft + distanceToScroll
    })
  }

  handleScroll() {
    this.validateControls();
  }

  /**
   * Ensures that the UI matches the currently selected index.
   * All UI state updates should be done in this method.
   */
  validate() {
    this.log('validating');
    this.cacheVariables();
    this.validateLayout();
    // this.validatePosition();
    this.validateControls();

    // Component is now valid
    this._valid = true;
  }

  /**
   * Validates the layout
   */
  validateLayout() {
    this.log('validating layout');
    this.display = (this.gridAt && this.gridAt < this.windowWidth) ? 'grid' : 'inline';
  }

  /**
   * Validates the position of content
   *** UPDATE: This shouldn't be necessary anymore. ***
   */
  // validatePosition() {
    // this.log('validating position');
  // }

  /**
   * Validates the controls
   */
  validateControls() {
    this.log('validating controls');
    if((this.containerWidth > this.contentWidth) ||
       (this.display == 'grid') ||
       (Modernizr.touchevents && this.windowWidth < this.controlBreakpoint)) {
      this.log('hiding controls');
      this.controls.toggle(false);
      this._showControls = false // Hide the controls
    } else {
      if (this.rotation == 'none') {
        this.nextControl.toggle(this.container.scrollLeft() < (this.contentWidth - this.containerWidth) )
        this._showControls = true
        this.prevControl.toggle(this.container.scrollLeft() > 0);
      }
    }
  }

  /**
   * Invalidates the UI and calls for validation on next cycle
   * You can force validation which will wait 2 cycles. This was necessary
   * to handle the case where toggling the class name of the component changed
   * some of the geometry and so an additional validation run was necessary.
   */
  invalidate(force = false) {
    if(this._valid || force) {
      this.log('invalidating');

      this._valid = false;
      let offset = force ? 1 : 0;
      setTimeout(this.validate.bind(this), offset);
    }
  }

  // Utilities
  // most of these could be cached for faster computations and some even are
  // should probably unify the approach - cache vars or don't. nah mean?

  /**
   * Returns the number of items for a given page.
   * This is complicated because you need to factor in 1 less gutter so simple division doesn't work.
   * There is definitely a slicker algorithm for this but I'm brute forcing for the time being cause I may just not be getting it.
   */
  getItemsPerPage() {
    let pp = -1;
    let done = false;
    while( !done ) {
      pp ++;
      let w = (pp * this.itemWidth) + ((pp - 1) * this.gutterWidth);
      if (w > this.canvasWidth) {
        pp--;
        done = true;
      } else if (pp >= this.items.length) {
        done = true;
      }
    }
    return pp;
  }

  /**
   * Returns the sum of the left and right gutters.
   * This is necessary cause the margins chanage based on break point but one is always set and the other is always 0.
   */
  getGutterWidthForItem(item) {
    return Number((item.css('margin-right') || '').replace(/px$/, '')) + Number((item.css('margin-left') || '').replace(/px$/, ''));
  }

  /**
   * Logs a message to the if the debug name has been sent.
   * This needs to be hardened or removed as console.log is non-standard.
   */
  log(...objs) {
    if(this.debug) console.log(this.debug, objs);
  }

}

export default Slider;