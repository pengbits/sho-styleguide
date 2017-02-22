import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Calendar from 'calendar';
import d3 from 'd3';
import enquire from 'enquire.js';
import Hammer from 'hammerjs';
import moment from 'moment';
import Photoswipe from 'photoswipe';

var touch = require('browsernizr/test/touchevents');
var Modernizr = require('browsernizr')

class SampleComponent {
  constructor(cfg) {
    this.el = $(cfg.el);
    throw new Error('checking source maps');
  } 
   
}

export default SampleComponent;

// Test for touch device
