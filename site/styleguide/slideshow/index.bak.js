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
    this.pswpElement = document.querySelectorAll('.pswp')[0];
	
	let details = event.details.split("/");	
	this.getImagesFromServer(details[1]);

    
	/* 
	This code snippet can be used to determine if the images will be 
	dynamically loaded from the server or added from the DOM.
	
    if (this.galleryType === 'async') {
      $(this.el).click(() => {
        this.getImagesFromServer(this.details);
      });
    } else if (this.galleryType === 'dom') {
      // load gallery from thumbnails
      this.thumbs = $(this.el).find('img');
      this.thumbs.click((e) => {
        this.getImagesFromDom(e);
      })
    }	
	*/
	
  }
  
  getImagesFromServer(id) {
    let options = {
      index: 0 // start at first slide
    };
	
	let path = window.location.protocol + "//" + window.location.host;
	
    $.ajax({
      method: 'GET',
      url: path + "/images/optimal",
	  data: { showId:id },
      dataType: 'JSON'
    }).done((response) => {
      let items = [];
      let images = response.page.imageViewList;
	  let title = "";
	  	  
      // build items array
      images.forEach(function(image){
		  //Use the caption and legal line to form the image title
		  if(image.caption != null && image.legalLine != null){
			  title = image.caption +  "<br><span>" + image.legalLine + "</span>";
		  } else if(image.caption != null && image.legalLine == null){
			  title = image.caption;
		  } else if(image.caption == null && image.legalLine != null){
			  title = "<span>" + image.legalLine + "</span>";
		  }
		  
          items.push({src: image.path, w: image.width, h: image.height, title: title})
      })
      this.createGallery(items, options)
    })
  }
  
  createGallery(images, options) {
    // Initializes and opens PhotoSwipe
    let gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, images, options);
    	
	// Gallery unbinds events
	// (triggers before closing animation)
	gallery.listen('unbindEvents', function() {	
		history.pushState("", document.title, window.location.pathname + window.location.search);
	});
	
	// Gallery starts closing
	gallery.listen('close', function() {	
		history.pushState("", document.title, window.location.pathname + window.location.search);
	});
			
	gallery.init();

  }
  
  /* 
  It is also possible to use DOM images to generate the slideshow. 
  The function below takes care of this. 
  */

  getImagesFromDom(event) {
    let imageArray = this.thumbs.toArray();
    let selectededIndex = imageArray.indexOf(event.target);
    let options = {
     index: selectededIndex,
     getThumbBoundsFn: function() {
        // See Options -> getThumbBoundsFn section of documentation for more info
        let thumbnail = imageArray[selectededIndex], // find thumbnail
        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
        rect = thumbnail.getBoundingClientRect(); 

        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
      }
    };
    let items = []
    imageArray.forEach(function(image){
      let orientation = image.getAttribute('data-orientation-type'),
      imageSrc = image.getAttribute('src'),
      caption = image.getAttribute('alt'),
      height, 
      width, 
      imageLarge,
      // this may need to be reworked depending on available portrait dimensions
      thumbDimensions = '310x232'; 

      if (orientation === 'landscape') {
        height = 1200;
        width = 1600;
      } else if (orientation === 'portrait') { 
        height = 800;
        width = 600;
      }
      imageLarge = imageSrc.replace(thumbDimensions, width + 'x' + height) 
      items.push({src: imageLarge, w: width, h: height, title: caption})
    })
    this.createGallery(items, options)
  }
}

export default Slideshow;