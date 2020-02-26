// test commit in github location dpaul
// polyfill Object.assign(), Array.includes() etc
import "babel-polyfill";
// expose jquery and  lodash to window for debugging in console, and for use by Optimizely
import $ from 'jquery';       window.$ = $; window.jQuery = $;
import _ from 'lodash';   window._ = _;
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { reduxStoreConfig } from './sample-react-component/reduxStoreConfig';
// This file represents an entry point for all JS to be used in external applications.
// It provides a convienient way to import some or all of the components
import EmailSignup, {userAlreadySignedUp} from "./email-signup";
import EndlessScroll from "./endless-scroll";
import GlobalNavigation from "./global-navigation";
import SelectNavigation from "./select-navigation";
import SampleComponent from "./sample-component";
import SampleReactComponent from "./sample-react-component/index";
import sampleReactComponentReducer from "./sample-react-component/SampleReactComponentReducer";
import Slider from "./slider";
import AgeGateComponent from "./video-player/age-gate-react/index";
import VideoPlayer from "./video-player";
import OrderTray from "./order-tray"; // redux-refactor
import HeroVideo from './hero-video';
import MegaStrip from './hero-megastrip';
import ScheduleDateSelector from "./schedule-date-selector";
import DateInput from "./schedule-date-selector";
import CountdownWidget from "./countdown-widget";
import Slideshow from "./slideshow";
import Analytics from "./analytics";
import CampaignHelper from "./analytics/campaign-helper";
import ReadMore from "./read-more";
import StickyBanner from "./sticky-banner";
import PeekABooBanner from "./peek-a-boo-banner";
import DatePicker from "./schedule-date-selector";
import ScheduleGrid from "./schedule-grid";
import Modal from "./modal";
import Notification from "./notification";
import Variations from "./variations";
import VariationControls from "./variations/controls";
import TvProvidersModal from "./tv-providers-modal";
import StreamingModal from "./streaming-modal";
import CartModal from "./cart-modal";
import CartModalLowerThird from "./cart-modal-lower-third";
import HashChange from "./hash-change";
import * as LazySizesSupport from "./responsive-images";
import ScrollbarDimensions from './measure-scrollbars';
import ConsoleLogSettings from './console-log-settings';
import FormPreviewModal from './form-preview-modal';
import ContactModal from './contact-modal';
import CastDetailsGrid from './cast-details-grid';
import ProviderPseudoTable from './provider-pseudo-table';
import FooterAlt from './footer-alt';

export {
  $,
  _,
  React,
  ReactDOM,
  Provider,
  reduxStoreConfig,
  EmailSignup,
  AgeGateComponent,
  EndlessScroll,
  GlobalNavigation,
  SelectNavigation,
  SampleComponent,
  SampleReactComponent,
  sampleReactComponentReducer,
  ScheduleDateSelector,
  Slider,
  OrderTray,
  VideoPlayer,
  CountdownWidget,
  Analytics,
  ReadMore,
  StickyBanner,
  PeekABooBanner,
  ScheduleGrid,
  Modal,
  MegaStrip,
  Notification,
  Variations,
  VariationControls,
  TvProvidersModal,
  StreamingModal,
  CartModal,
  CartModalLowerThird,
  HashChange,
  ScrollbarDimensions,
  Slideshow,
  LazySizesSupport,
  ConsoleLogSettings,
  FormPreviewModal,
  ContactModal,
  HeroVideo,
  CastDetailsGrid,
  ProviderPseudoTable,
  FooterAlt
}
