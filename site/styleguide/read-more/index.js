import _ from "underscore";
import $ from 'jquery';
 
class ReadMore {
  
  constructor(cfg) {
    this.toggle = $(cfg.el).find('.read-more__toggle');
    //this.toggle = $('body').find('.read-more--toggle');
    this.toggleText = this.toggle.text().split(" ")[0]; // "Read More" => "Read", "Learn More " => "Learn"
    this.toggle.click((e) => {this.initReadMore(e)});
  }

  initReadMore(e) { 
    e.preventDefault();

    if(this.toggle.hasClass("read-more__toggle--less")) {
      this.toggle.parent().prev(".read-more__content").hide(); //read more content is hidden
      this.toggle.removeClass("read-more__toggle--less")
        .addClass("read-more__toggle")
        .text(this.toggleText + " More"); //toggle button needs to be displayed as Read/View More
    } else {
      this.toggle.parent().prev(".read-more__content").show();//read more content is shown
      this.toggle.removeClass("read-more__toggle")
        .addClass("read-more__toggle--less")
        .text(this.toggleText + " Less"); //toggle button needs to be displayed as Read/View Less
    }
  }
}
export default ReadMore;