import $ from 'jquery';

export class PeekABooBanner {
  
  constructor(cfg) {
    this.banner = $(cfg.el);
    this.win = $(window);
    this.trigger = $('.peek-a-boo--trigger');
    this.dismiss = $('.peek-a-boo--dismiss');
    this.isVisible = false;

    this.setListeners();
  }

  setListeners() {
    this.win.load(this.determineVisibility.bind(this));
    this.win.resize(this.determineVisibility.bind(this));
    this.win.scroll(this.determineVisibility.bind(this));
    this.dismiss.click(this.dismissBanner.bind(this));
  }

  //check if trigger is visible or viewport is within 350px of the top of the page.
  //if either or both of those conditions are true isVisible will be set to false
  //and the banner will not be displayed
  determineVisibility() {
    this.trigger.each((index, el) => {
      var elementTop = $(el).offset().top;
      var elementBottom = elementTop + $(el).outerHeight();
      var viewportTop = this.win.scrollTop();
      var viewportBottom = viewportTop + this.win.height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        this.isVisible = false;
      }
      else if (this.win.scrollTop() <= 350) {
        this.isVisible = false;
      }
      else {
        this.isVisible = true;
      }

      this.toggleBanner();
    });
  }

  //set session storage item the prevent dismissed banner from coming back
  dismissBanner() {
    this.banner.css( "display", "none" );
    sessionStorage.setItem("peekabooDismiss", "dismissed");
  }

  //checks isVisible status and if the banner has been dismissed. Displays bannner accordingly
  toggleBanner() {
    if (this.isVisible == false) {
      this.banner.fadeOut( "fast" );
    }
    else if (this.isVisible == true && sessionStorage.peekabooDismiss != "dismissed") {
      this.banner.fadeIn( "fast" );
    }
  }

}

export default PeekABooBanner