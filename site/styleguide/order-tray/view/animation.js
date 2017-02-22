import _ from 'underscore';
import $ from 'jquery';
import EasePack from  'gsap';
import CSSPlugin from 'gsap';
import TweenLite from 'gsap';

import Settings       from './animation/settings';
import ExpandCollapse from './animation/expand-collapse';
import FadeInFadeOut  from './animation/fade-in-fade-out';
import ScrollTo       from './animation/scrollto';
import Stage          from './animation/stage';

var Animation = {
  
  // view#tween
  // The main workhorse function for most of the animations
  // Provides an weapper around the TweenLite#to method so we can focus on the
  // configuration changes needed for building out each of the animations.
  // Provide a `name` property and it will fire a conveniently named event when the tween is finished  
  tween(el, opts){
    let model = this.model;
    let cfg = _.extend(opts.to, {
      ease :      (opts.ease || Settings.ease),
      onComplete: (function(){
        if(opts.name){
          model.trigger(`${opts.name}:complete`, {el:this.target});
        }
        if(opts.onComplete){
          let params = opts.onCompleteParams ? opts.onCompleteParams : [this.target];
          opts.onComplete.apply(this, params)
        }
      })
    });
    
    if(opts.from) {
      TweenLite.set(el, opts.from || {});
    }
    
    TweenLite.to(el, opts.duration, cfg);
  }
}

_.extend(Animation,
  Settings,
  FadeInFadeOut,
  ExpandCollapse,
  ScrollTo,
  Stage
);

export default Animation;
