import {
  $,
  _,
  EmailSignup,
  EndlessScroll,
  GlobalNavigation,
  SelectNavigation,
  OrderTray,
  ProviderGroups,
  SampleComponent,
  SampleReactComponent,
  ScrollPane,
  ScheduleDateSelector,
  Slider,
  StickyBanner,
  CountdownWidget,
  VideoPlayer,
  Analytics,
  ReadMore,
  ScheduleGrid,
  Slideshow,
  Gallery,
  Modal,
  MegaStrip,
  Notification,
  Variations,
  VariationControls,
  StreamingModal,
  TvProvidersModal,
  CartModal,
  CartModalLowerThird,
  ScrollbarDimensions,
  HashChange,
  ConsoleLogSettings,
  FormPreviewModal,
  ContactModal,
  PeekABooBanner,
  ProviderPseudoTable,
  CastDetailsGrid
} from "../styleguide";
import sideBar from "./sidebar";
import FauxRadios from "./faux-radios";

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

let endlessScrolls = document.querySelectorAll('.js-endless-scroll');
[].forEach.call(endlessScrolls, function(el){
  const {baseUrl,pageUrl} = el.dataset
  const endlessscroll = new EndlessScroll({
    el,
    baseUrl,
    pageUrl
  });
});
 
var stickyBanners = document.querySelectorAll('.js-sticky-banner');
[].forEach.call(stickyBanners, function(el){
  var stickybanner = new StickyBanner({
    el: el
  });
});

var peekABooBanners = document.querySelectorAll('.js-peek-a-boo-banner');
[].forEach.call(peekABooBanners, function(el){
  var peekaboobanner = new PeekABooBanner({ 
    el: el
  });
});

[].forEach.call(document.querySelectorAll('.js-provider-pseudo-table'), function(el){
  new ProviderPseudoTable({'el': el});
});

[].forEach.call(document.querySelectorAll('.js-notification'), function(el) {
  new Notification({'el':el});
})

var scheduleGridEl = document.querySelector('.js-schedule-grid');
if(!!scheduleGridEl){
  var scheduleGrid = new ScheduleGrid({el: scheduleGridEl});
}

var castDetailsGrids = document.querySelectorAll('.js-dropdown-menu');
[].forEach.call(castDetailsGrids, function(el){
  var castDetailsGrid = new CastDetailsGrid({ 
    el: el
  });
});

// analytics should log events to console unless explicitly disabled in settings
// see http://localhost:4000/styleguide/console-log-settings/
var debug=true; if(ConsoleLogSettings.getState && ConsoleLogSettings.getState('analytics') === false) {debug=false}
var analytics = new Analytics({debug});
$('.analytics-example a').on('click', function(e){
  e.preventDefault();
});

[].forEach.call(document.querySelectorAll('.js-console-log-settings'), function(el) {
  new ConsoleLogSettings({el})
})

var tvprovidersModal = new TvProvidersModal(); 
var streamingModal = new StreamingModal();
var cartModal = new CartModal();
var cartModalLowerThird = new CartModalLowerThird();
var slideshow = new Slideshow();
new FormPreviewModal({ message: '.form-preview-message', name: '.form-preview-name' });
new ContactModal();
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

// refactored order-tray
[].forEach.call(document.querySelectorAll('.js-order-tray-redux'), function(el) {
	OrderTray.Factory.instance({
    useRoutes: true,
    base: "/styleguide/order-tray-with-better-seo",
    el
  })
});

// stream showtime page
[].forEach.call(document.querySelectorAll('.js-megastrip'), function(el) {
  new MegaStrip({el})
});

[].forEach.call(document.querySelectorAll('.js-provider-groups'), function(el){
  new ProviderGroups({'el': el})
});

[].forEach.call(document.querySelectorAll('.js-sample-react-component'), function(el) {
  SampleReactComponent.factory(el)
});

[].forEach.call(document.querySelectorAll('.js-react-email-signup'), function(el) {
  EmailSignup.factory(el)
});

