import _ from "underscore";
import $ from 'jquery';
import Backbone from 'backbone'; 
import VideoPlayerAgeGateError from "./error.js"
import VideoPlayerAgeGateModel from "./model.js"
import VideoPlayerAgeGateView from "./view.js"

 
class VideoPlayerAgeGate { 
  
  constructor(cfg) {
    this.model = new VideoPlayerAgeGateModel({
      age: cfg.age
    });
    
    this.view =  new VideoPlayerAgeGateView({
      container : cfg.container,
      model:      this.model
    });

    this.model.view = this.view;
  }
  
  on()
  {
    this.model.bind.apply(this.model, arguments)
  }
}
export default VideoPlayerAgeGate; 
 