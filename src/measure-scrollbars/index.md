---
name: Measure Scrollbars
collection: components
---

# Measure scrollbars
## Technique

borrrowing from technique described in https://davidwalsh.name/detect-scrollbar-width, this simple utility 
will return the width of scrollbars in the given platform/browser combo, which can be useful for design concerns.
internally, the helper draws a div to the dom with the following styles, which enables it to capture the width of this bit of the browser 'chrome'

```
// in _measure-scrollbars.scss
// this is added to the dom, off-screen
.scrollbar-measure {
  width: 100px;
  height: 100px;
  overflow: scroll;
  background: green;
  position: absolute;
  top: -9999px;
}

// in measure-scrollbars/index.js
measure(){
  // create element with styles that make measurmeent possible
  var scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  
  // Get the scrollbar width 
  // this varies greatly by platform - (0, on osx, 16 on firefox win, for example)
  this.scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // delete the element
  document.body.removeChild(scrollDiv);
}
```

## Usage

So far, this has only come up in the context of the [order tray](/styleguide/order-tray), where
the body-content's scrollbars push right up against the closer element.. By knowing the actual with of the scrollbar itself,
we can properly offset the closer so it doesn't collide. 

<div class="js-scrollbar-dimensions"></div>