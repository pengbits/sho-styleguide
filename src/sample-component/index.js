import $ from 'jquery';

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
