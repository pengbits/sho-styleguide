import _ from "underscore";
import $ from 'jquery';
import touch from 'browsernizr/test/touchevents';
import Modernizr from 'browsernizr';
import Hammer from 'hammerjs';

class Slider {

  /**
   * Creates a new Slider component and initializes it.
   * The config object contains the outermost element of the slider as provided by the component bootstrapping system.
   *
   * Possible optimizations and enhancements:
   * 1. Allow for the invalidation of individual properties (minimal gains)
   */
  constructor(cfg) {
    var el = $(cfg.el); _.extend(this, {

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
      'mobileSnap': el.data('mobileSnap') == undefined ? true : el.data('mobileSnap'),
      'controlBreakpoint': 768, // the size at which we show the controls even on touch enabled devices
      '_index': 0,
      '_display': null,
      '_valid': true
    });

    this.initialise();
  }

  // Getters and Setters

  /**
   * The index of the item that is currently in focus.
   * This is most often the item that is furthest to the left except when you are at the end of a slider.
   */
  get index() {
    return this._index;
  }
  set index(value) {
    let dest = this.getReachableIndexForValue(value);
    if(dest !== this._index) {
      this._index = dest;
      this.invalidate();
    }
  }

  /**
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

      // decided to let CSS handle after all
      // let ht = (this._display == 'grid') ? 'auto' : this.itemHeight;
      // this.slider.css({'height':ht});

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

  /**
   * Event handler for the swipe gesture of hammerjs on the container
   */
  onSwipe(e) {
    switch(e.direction){
      case Hammer.DIRECTION_LEFT:
        this.next();
        break;
      case Hammer.DIRECTION_RIGHT:
        this.prev();
        break;
      default:
        // we don't care
    }
  }

  /**
   * Event handler for the pan gesture of hammerjs on the container
   */
  onPan(e) {
    if (this.items.length > 1) {
      switch(e.type) {
        case 'panstart':
          this.innerContainer.css({
            'transition': 'none'
          });
          this.prePanPosition = this.getContainerPosition();
          break;
        case 'pan':
          this.moveTo(this.prePanPosition + e.deltaX);
          break;
        case 'panend':
          this.innerContainer.css({
            'transition': this.transition
          });
          this.prePanPosition = null;
          this.invalidate();
        default:
          // ignore
      }
    }
  }

  // State management

  /**
   * Method used for caching local variables used for computations.
   */
  cacheVariables() {
    // extract sample item since all are assummed to be of uniform width
    // TODO Account for different sized items
    //let item = this.items.filter(':first-child');
    let item = $(this.items[0]);

    this.itemWidth = item.width();
    this.itemHeight = item.height();
    this.gutterWidth = this.getGutterWidthForItem(item);
    this.itemContainerWidth = this.itemWidth + this.gutterWidth;
    this.edgeMargin = this.itemWidth * .49; // a little cheeky, over halfway can goof the snapping logic
    this.containerWidth = this.container.width();
    this.contentWidth = (this.items.length * this.itemContainerWidth) - this.gutterWidth;
    this.windowWidth = Math.max($(window).width(), window.innerWidth);
    this.canvasWidth = this.containerWidth - this.getGutterWidthForItem(this.itemsContainer);
    this.maxOffset = this.contentWidth - this.canvasWidth;

    this.itemsPerPage = this.getItemsPerPage();
    this.indexIncrement = (this.step == 'page') ? this.itemsPerPage : 1;

    // transition
    this.transition = this.innerContainer.css('transition');
  }

  // Initialisation

  /**
   * Sets all event handlers for the component
   */
  setHandlers() {
    this.prevControl.on('click', this.onPrevControlClick.bind(this));
    this.nextControl.on('click', this.onNextControlClick.bind(this));

    // Debounce is cool: http://underscorejs.org/#debounce
    let lazyResize = _.debounce(this.onWindowResize.bind(this), 300);
    $(window).resize(lazyResize);

    // Only setting mobile event handlers if Modernizr says so
    if (Modernizr.touchevents) {
      this.hammertime = new Hammer(this.innerContainer[0], {
        direction: Hammer.DIRECTION_HORIZONTAL
      });
      //this.hammertime.on('swipe', this.onSwipe.bind(this));
      this.hammertime.on('pan panstart panend', this.onPan.bind(this));
    }
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
   * If the index isn't reachable then the private local _index is left unchanged
   */
  prev() {
    this.index -= this.indexIncrement;
  }

  /**
   * Attempt to move to the next index.
   * If the index isn't reachable then the private local _index is left unchanged
   */
  next() {
    this.index += this.indexIncrement;
  }

  /**
   * Moves the container by the delta and resets the local _index
   */
  move(delta) {
    this.moveTo(this.getContainerPosition() + delta);
  }

  /**
   * Moves the container to the provided value as long as it is valid.
   * If the position is invalid it is normalized to the bounds.
   */
  moveTo(position) {
    let dest = Math.min(position, this.edgeMargin);
    dest = Math.max(((this.maxOffset + this.edgeMargin) * -1), dest);
    this._index = this.getIndexForOffset(dest);
    this.innerContainer.css({
      left: dest
    });
  }

  /**
   * Ensures that the UI matches the currently selected index.
   * All UI state updates should be done in this method.
   */
  validate() {
    this.log('validating');

    this.cacheVariables();

    this.validateLayout();
    this.validatePosition();
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
   */
  validatePosition() {
    this.log('validating position');

    this.log(this.canvasWidth, this.contentWidth);
    this.log(this.items.length, this.itemContainerWidth, this.gutterWidth);

    if((this.canvasWidth > this.contentWidth) ||
       (this.display == 'grid')) {
      this.log('container width is greater than content width or should grid');
      this.innerContainer.css({
        left: 0
      });
    } else if (!this.mobileSnap && Modernizr.touchevents) {
      let left = Number(this.innerContainer.css('left').replace(/px$/, ''));
      let right = ((this.contentWidth - this.containerWidth) * -1);
      if (left > 0) {
        this.innerContainer.css({
          left: 0
        })
      } else if (left < right) {
        this.innerContainer.css({
          left: right
        })
      }
    } else {
      this.log('determining offset');
      let target =  this.getSlideOffset(),
          max =     this.maxOffset,
          slideEnd=  target > max,
          offset =  slideEnd ? max : target
      ;

      this.slideEnd = slideEnd;
      this.innerContainer.css({
        left: (0-offset)
      });
    }
  }

  /**
   * Validates the controls
   */
  validateControls() {
    this.log('validating controls');
    if((this.containerWidth > this.contentWidth) ||
       (this.display == 'grid') ||
       (Modernizr.touchevents && this.windowWidth < this.controlBreakpoint)) {
      this.log('hiding controls');
      this.controls.toggle(false); // Hide the controls
    } else {
      if (this.rotation == 'none') {
        this.prevControl.toggle(this.index != 0);
        let canGo = (this.index < this.getReachableIndexForValue(this.index + this.indexIncrement));
        this.nextControl.toggle(canGo);
        this.log('previous control:', this.index != 0);
        this.log('next control:', canGo)
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

  // utilities
  // most of these could be cached for faster computations and some even are
  // should probably unify the approach - cache vars or don't. nah mean?

  /**
   * Given a destination index value returns an index that is reachable.
   */
  getReachableIndexForValue(value) {
    if(this.rotation == 'none') {
      value = Math.max(value, 0); // ensures value is non-negative
      value = Math.min(value, (this.items.length - this.itemsPerPage)) // ensures value is lower then the farthest you can go
    }
    return value;
  }

  /**
   * Returns the offset of the currently selected index
   */
  getSlideOffset() {
    return this.index * this.itemContainerWidth;
  }

  /**
   * Returns the index of the slider given a pixel value of the left property of the inner container.
   */
  getIndexForOffset(value) {
    let v = (value * -1) + (this.itemContainerWidth * .5);
    return Math.floor(v / this.itemContainerWidth);
  }

  /**
   * Returns the current left position of the inner container as an integer
   */
  getContainerPosition() {
    return parseInt(this.innerContainer.css('left').replace(/px/, ''));
  }

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
