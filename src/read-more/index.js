import $ from 'jquery';

class ReadMore {

  constructor(cfg) {
    this.toggle = $(cfg.el).find('.read-more__toggle');
    //this.toggleText = this.toggle.text();
    this.toggle.click((e) => { this.initReadMore(e)} );
  }

  initReadMore(e) {
    e.preventDefault();
    var container = this.toggle.parent().parent(); // get current toggle instance

    if(this.toggle.hasClass("read-more__toggle--less")) {
      this.toggle.parent().prev(".read-more__content").hide(); //read more content is hidden
      $('html, body').animate({scrollTop: $(container).offset().top}, 500); //reposition page to the parent div
      this.toggle.removeClass("read-more__toggle--less").addClass("read-more__toggle");
      this.replaceText();
    } else {
      this.toggle.parent().prev(".read-more__content").show();//read more content is shown
      this.toggle.removeClass("read-more__toggle").addClass("read-more__toggle--less");
      this.replaceText();
    }
  }

  replaceText() { 
    this.toggle.text(() => {
      if(/\more/i.test(this.toggle.text())) {  
        return this.toggle.text().replace(/\more/i, " LESS");
      }
      else {
        return this.toggle.text().replace(" LESS", " MORE");
      }
    })
  }
}
export default ReadMore;
