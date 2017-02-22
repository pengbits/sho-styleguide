import $ from 'jquery';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipeui';

var handlebarsTemplate = require('./photoswipe-template.jsp');

class Slideshow {
  constructor() {
	  this.setListener();
  }
  
  setListener() {
     $(document).on( "slideshow:opened", event => { this.eventTriggered(event) });
  }
	
  eventTriggered(event) {
	  let slideshowEl = $('<div>').addClass('slideshow').html(handlebarsTemplate)
    $('body').append(slideshowEl);
    let loadingAnimation = $('<div>').addClass('loading-animation');
    $('body').append(loadingAnimation);
    this.pswpElement = document.querySelectorAll('.pswp')[0];
    
    //title or gallery?
    if(!!event.title) {
      this.getImagesTitle(event.title);
    } else if(!!event.gallery) {
      this.getImagesGallery(event.gallery);
    }
  }
  
  getImagesTitle(id) {	
    $.ajax({
      method: 'GET',
      url: this.url(),
	    data: {
        showId: id
      },
      dataType: 'JSON'
    }).done((response) => {
      let items = [];
      let title = '';
      let images = response.page.imageViewList;
      // build items array
      images.forEach(function(image){  		  
    	  title = this.getTitle(image);
  		  items.push({src: image.path, w: image.width, h: image.height, title: title});
      }, this);  
      this.initGallery(items, 0);
    })
  }
  
  getImagesGallery(id) {
    $.ajax({
      method: 'GET',
      url: '/galleries/' + id + '.json',
      dataType: 'JSON'
    }).done((response) => {
      let items = [];
      let title = '';
      let index = this.getIndex() - 1;
    	let images = response.page.tileGroup.imageViewList;
      // build items array
      images.forEach(function(image){
    	  title = this.getTitle(image);
  		  items.push({src: image.imageUrl, w: '800', h: '600', title: title});
      }, this);      
      this.initGallery(items, index);
    })
  }
  
  getTitle(image) {
    //Use the caption and legal line to form the image title
	  if(image.caption != null && image.legalLine != null){
		  return image.caption +  "<br><span>" + image.legalLine + "</span>";
	  } else if(image.caption != null && image.legalLine == null){
		  return image.caption;
	  } else if(image.caption == null && image.legalLine != null){
		  return "<span>" + image.legalLine + "</span>";
	  }
  }
  
  getIndex() {
    let pathArr = window.location.hash.split('/');
    return pathArr[pathArr.length - 1];
  };
    
  initGallery(items, index) {
  	//remove loading animation
  	let loadingAnimation = $('.loading-animation');
  	if(!!loadingAnimation){
  	  loadingAnimation.remove();
  	}
    
    let options = {
      index: index,                   // start at first slide
      closeOnScroll: false,           //scrolling set to false will not automatically close the image when open  
      clickToCloseNonZoomable: false, // Mouse click on image should close the gallery only when image is smaller than size of the viewport
      history: false                  //disables history module
    };
    
    this.createGallery(items, options);
  }
  
  createGallery(images, options) {
    // Initializes and opens PhotoSwipe
    let gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, images, options);    
    // PhotoSwipe gives us two events around the shutdown:
  	// `gallery:unbindEvents `is called before closing animation),
  	// `gallery:close` is called when Gallery is destroyed/starts closing
  	gallery.listen('unbindEvents', () => {
      this.clearHistory();
    })
  	gallery.listen('close', () => {
      this.clearHistory();
      // still need to invoke our hack for Win7/IE11
      window.location.hash = '/closed'
    })
  	gallery.init();
  }

  clearHistory(){
    // calling history.pushState prevents PhotoSwipe from re-opening in an infinite loop
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  
  url(){  
    // return a path to dummy JSON for testing in styleguide if needed
    let isStyleguide = (window.location.port == 4000);
    let path = isStyleguide ? '/styleguide/slideshow/images.json' : '/images/optimal';
    return path;
  }
}

export default Slideshow;