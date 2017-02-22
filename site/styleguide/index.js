// expose jquery and  underscore to window for debugging in console, and for use by Optimizely
import $ from 'jquery';       window.$ = $; window.jQuery = $;
import _ from 'underscore';   window._ = _;

// This file represents an entry point for all JS to be used in external applications.
// It provides a convienient way to import some or all of the components
import EmailSignup from "./email-signup/index";
import GlobalNavigation from "./global-navigation/index";
import SelectNavigation from "./select-navigation/index";
import SampleComponent from "./sample-component/index";
import Slider from "./slider/index";
import VideoPlayer from "./video-player/index";
import OrderTray from "./order-tray/index";
import ScheduleDateSelector from "./schedule-date-selector/index";
import DateInput from "./schedule-date-selector/index";
import CountdownWidget from "./countdown-widget/index";
import Slideshow from "./slideshow/index";
import Analytics from "./analytics/index";
import CampaignHelper from "./analytics/campaign-helper";
import ReadMore from "./read-more/index";
import DatePicker from "./schedule-date-selector/index";
import ScheduleGrid from "./schedule-grid";
import Modal from "./modal";
import Notification from "./notification";
import Variations from "./variations";
import VariationControls from "./variations/controls";
import StreamingModal from "./streaming-modal";
import HashChange from "./hash-change";
import * as LazySizesSupport from "./responsive-images";
import ScrollbarDimensions from './measure-scrollbars';

export {
  $,
  _,
  EmailSignup,
  GlobalNavigation,
  SelectNavigation,
  SampleComponent,
  ScheduleDateSelector,
  Slider,
  OrderTray,
  VideoPlayer,
  CountdownWidget,
  Analytics,
  ReadMore,
  ScheduleGrid,
  Modal,
  Notification,
  Variations,
  VariationControls,
  StreamingModal,
  HashChange,
  ScrollbarDimensions,
  Slideshow,
  LazySizesSupport
}
