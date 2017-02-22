// borrrowing from technique described here, this simple utility 
// will return the width of scrollbars in the given platform/browser combo
// useful for very particular design quandries.... 
// https://davidwalsh.name/detect-scrollbar-width
class ScrollbarDimensions {
  constructor (){
    this.measure();
  }
  
  measure(){
    // create element with styles that make measurmeent possible
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);
    
    // Get the scrollbar width 
    // this varies by platform, and on osx, on how scrolling preferences are set (in General)
    // on osx - with scroll-as-needed setting: 0 unless scrolling
    // on osx - with always-on setting: 15px;
    // on win ffx - 17px
    // on win IE11 - 17px
    this.scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    
    // delete the element
    document.body.removeChild(scrollDiv);
  }
  
  width(){
    if(this.scrollbarWidth == undefined) {
      this.measure();
    }
    return this.scrollbarWidth;
  }
}

ScrollbarDimensions.instance = () => {
  //console.log(`ScrollbarDimensions#instance`)
  if(!ScrollbarDimensions._instance_) ScrollbarDimensions._instance_ = new ScrollbarDimensions()
  return ScrollbarDimensions._instance_
}

ScrollbarDimensions.width = () => {
  //console.log(`ScrollbarDimensions#width`)
  return ScrollbarDimensions.instance().width()
}

export default ScrollbarDimensions