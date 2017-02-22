import {
  $,
  _,
  EmailSignup,
  GlobalNavigation,
  SelectNavigation,
  OrderTray,
  SampleComponent,
  ScrollPane,
  ScheduleDateSelector,
  Slider,
  CountdownWidget,
  VideoPlayer,
  Analytics,
  ReadMore,
  ScheduleGrid,
  Slideshow,
  Gallery,
  Modal,
  Notification,
  Variations,
  VariationControls,
  StreamingModal,
  ScrollbarDimensions,
  HashChange,
} from "../styleguide/index";

import sideBar from "./sidebar";
import FauxRadios from "./faux-radios";

var emailSignups = document.querySelectorAll('.js-email-signup');
[].forEach.call(emailSignups, function(el){
  var emailsignup = new EmailSignup({
    el: el
  });
})

var sliders = document.querySelectorAll('.js-slider');
[].forEach.call(sliders, function(el){
  var slider = new Slider({
    el: el
  });
})

var videoplayers = document.querySelectorAll('.js-video-player');
[].forEach.call(videoplayers, function(el){
  var videoplayer = new VideoPlayer({
    el: el
  });
})

var el = document.querySelector('.js-order-tray');
if(!!el){
  OrderTray.Factory.instance({
    el: el
  });
}

var el = document.querySelector('.js-sample-component');
if(!!el){
  var slider = new SampleComponent({
    el: el
  });
}

var dateSelectorEl = document.querySelector('.js-schedule-date-selector');
if(!!dateSelectorEl){
  var date = dateSelectorEl.dataset.startDate;
  var dateSelector = new ScheduleDateSelector({
    el: dateSelectorEl,
    date: date   });
}

var globalnavigations = document.querySelectorAll('.js-global-navigation');
[].forEach.call(globalnavigations, function(el){
  var globalnav = new GlobalNavigation({
    el: el
  });
})

var selectnavigations = document.querySelectorAll('.js-select-navigation');
[].forEach.call(selectnavigations, function(el){
  var selectnav = new SelectNavigation({
    el: el
  });
})

var countdownWidgets = document.querySelectorAll('.js-countdown-widget');
for (var i = 0; i < countdownWidgets.length; i++) {
  var countdownWidget = new CountdownWidget({
   	el: countdownWidgets[i],
  });
}

var scrollpanes = document.querySelectorAll('.js-scroll-pane');
[].forEach.call(scrollpanes, function(el){
  new ScrollPane({
    el: el
  });
})

var readMores = document.querySelectorAll('.js-read-more');
[].forEach.call(readMores, function(el){
  var readmore = new ReadMore({
    el: el
  });
});

[].forEach.call(document.querySelectorAll('.js-notification'), function(el) {
  new Notification({'el':el});
})

var scheduleGridEl = document.querySelector('.js-schedule-grid');
if(!!scheduleGridEl){
  var scheduleGrid = new ScheduleGrid({el: scheduleGridEl});
}

var analytics = new Analytics({ debug: true });
$('.analytics-example a').on('click', function(e){
  e.preventDefault();
});

var streamingModal = new StreamingModal();
var slideshow = new Slideshow();
// HashChange needs to be instantiated after components such as Slideshow, that respond to hash changes,
// so that they can work properly when linking directly to a url containing a hash fragment that triggers such a component.
// this is because components like the Slideshow listen for an event emitted by Hashchange, and that listener has to be set before HashChange fires the event, dig?

// listen for hash changes
var hashChange = new HashChange();

var galleryEl = document.querySelector('.js-gallery');
if(!!galleryEl){
  var gallery = new Gallery();
}

// sidebar toggle
sideBar();

// widget for toggling variations cookie
[].forEach.call(document.querySelectorAll('.js-variation-controls'), function(el) {
  new VariationControls({'el':el});
});

// draw version #s
[].forEach.call(document.querySelectorAll('.js-build-version'), function(el){
  el.innerHTML = sho.version;
});

[].forEach.call(document.querySelectorAll('.js-faux-radios'), function(el){
  new FauxRadios({
    'el': el
  })
});

[].forEach.call(document.querySelectorAll('.js-scrollbar-dimensions'), function(el){
  var component = ScrollbarDimensions.instance();
  console.log('scrollbar width: '+component.width());
  el.innerHTML = ('scrollbar width: '+component.width())
});
