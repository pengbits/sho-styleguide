import $ from 'jquery';
import {debounce,bindAll} from 'lodash'
import {fromTo,set} from 'gsap';
import EasePack from  'gsap';
import breakpoints from '../breakpoints'
import Variations from '../variations/index';


//The Threshold should stay at small. Medium would stop the mega strip animation from working on ipad/tablets.
const TRANSITION_THRESHOLD  = 'small'
const TRANSITION_PAN        = 'TRANSITION_PAN'
const TRANSITION_DISSOLVE   = 'TRANSITION_DISSOLVE'
const ITEMS_IN_ROW          = 3
const ITEM_ART_COUNT        = 15 // num of distict cover artworks
const ITEM_ART_REGEX        = /(\d{2})\.jpg"\)$/
const CLONE_CLASSNAME       = 'megastrip__inner--clone'
const DISSOLVE_DURATION     = 2000 // length of one crossfade
const PAN_DURATION          = (3000 * ITEM_ART_COUNT)

const check = (pattern) => (pattern.test(window.location.search))

export class MegaStrip {
  constructor(cfg){
    this.transition_type = 'dissolve'
    this.el       = $(cfg.el)
    this.content  = this.el.find('.megastrip__inner')
    this.items    = this.el.find('.megastrip__item')
    this.index    = 0
    
    // if(check(/s_cid=/) && !check(/s_cid=default/)){
    // previously we were aborting if any s_cid other than default was encountered,
    // but this doesn't allow us to a/b test within the context of a theme,
    // so we're instead using the variations manager to look for flags set in  optimizely  
    // before deploying, we will have to update variation code for all themes to include this snippet
    //
    //    window.sho_variations = window.sho_variations || {};
    //    window.sho_variations.disable_megastrip = true;
    //
    if(this.disabledCheck()){
      this.disableMegastrip()
      return false
    }
    else {
      this.enableMegaStrip()
      this.setHandlers()
    }
  }
  
  enableMegaStrip(){
    this.el.parents('.hero__image')
      .toggleClass('megastrip--active', true)
  
    this.el.show()
    this.el.parents('.hero')
      .toggleClass('hero--stream-showtime', false)
      .toggleClass('hero--megastrip', true)
  }
  
  disableMegastrip(){
    this.el.parents('.hero__image')
      .addClass('lazyload')
      .toggleClass('megastrip--active', true)
    this.el.hide()
    this.el.parents('.hero')
      .toggleClass('hero--megastrip', false)
  }
  
  disabledCheck(){
    if(Variations.foundShoVariation() && (Variations.getVariationMap('sho') || {}).disable_megastrip) {
      console.log('|disabledCheck| set disabled=true, cancel init')
      this.disabled = true;
      return true
    }  
  }
  
  setHandlers(){
    bindAll(this, [
      'update',
      'prepareAnimation',
      'rotateIndex',
      'fadeUp',
      'preparePan',
      'onPanComplete',
      'onFadeUpComplete',
      'onVariationDetected'
    ])
    
    $(window)
      .on('resize', debounce(this.update, 150)) 

    this.setVariationListeners()
    this.update()
  }
  
  setVariationListeners(){
    // set listener 
    Variations.on('variation:detected:sho', this.onVariationDetected);
    // look for any variations already present
    if(Variations.foundShoVariation()) this.onVariationDetected(null, Variations.getVariationMap('sho'))
  }
  
  onVariationDetected(e, variation){
    if(variation.disable_megastrip){
      console.log('|onVariationDetected| set disabled=true, interrupt animation')
      this.disabled = true
      this.interruptAnimation()
      this.disableMegastrip()
    }
  }
  
  
  // startup
  // ---------------------------------------------------------------------------
  performCalculations(){
    // calculate dimensions
    this.contentWidth   = this.content.width()
    this.containerWidth = this.el.width()
  }

  // inspect viewport to determine animation mode
  // and tag dom appropriately
  detectTransitionType(){
    this.getTransitionType()
    this.toggleTransitionClasses()
  }
  
  update(){
    this.performCalculations()
    this.detectTransitionType()
    this.initContainer()

    
    if(!this.animating){
      this.prepareAnimation()
    } else {
      this.interruptAnimation()
    }
  }


  // center content by setting margin-left in pixels since can't use `auto` for this
  initContainer(){
    if(this.isDissolve()){ 
      this.el.css('marginLeft', Math.floor((this.containerWidth - this.contentWidth)/2))
    } else {
      this.el.css('marginLeft', '')
    }
    // reveal content that is cloaked at startup
    // todo optimization - not needed on every window resize?
    [this.el,this.content].map(el => el.css('opacity',1))
  }
  
  getTransitionType(){
    this.transition_type = ($(window).width() > breakpoints[TRANSITION_THRESHOLD]) ? TRANSITION_PAN : TRANSITION_DISSOLVE;
  }
  
  toggleTransitionClasses(){
    if(this.isDissolve()){
      this.el.toggleClass('transition--pan', false)
      this.el.toggleClass('transition--dissolve', true)
    } else {
      this.el.toggleClass('transition--pan', true)
      this.el.toggleClass('transition--dissolve',false)
    }
  }
  
  prepareAnimation(){
    if(this.isDissolve()){
      this.clearAnimation(TRANSITION_PAN)
      
      if(!this.clonedContent){
        this.cloneContent()
      }
      
      setTimeout(this.fadeUp, DISSOLVE_DURATION)
    
    } else {
      this.clearAnimation(TRANSITION_DISSOLVE)
      
      if(!this.stitchedContent){
        this.stitchContent()
      }
      
      setTimeout(this.preparePan, TRANSITION_PAN)

    }
  }
  
  clearAnimation(type){
    // console.log(`clearAnimation ${type}`)
    if(type == TRANSITION_DISSOLVE) this.removeClone()
    if(type == TRANSITION_PAN)      this.undoStitch()
  }
  
  
  interruptAnimation(){
    console.log(`interruptAnimation(disabled=${this.disabled})`)
    this.tween && this.tween.kill()
    if(!this.disabled) setTimeout(this.prepareAnimation, 0)
    else clearInterval(this.log_invl)
  }
  
  //
  // DISSOLVE TRANSITION aka mobile
  // ---------------------------------------------------------------------------

  // clone the inner content elment, and add a modifier for absolute positioning
  // to stack it in front for a foreground/background setup (for dissolve mode)
  cloneContent(){
    this.clonedContent = this.content.clone().addClass(CLONE_CLASSNAME)
    this.content.after(this.clonedContent)
  }
  
  removeClone(){
    this.el.find(`.${CLONE_CLASSNAME}`).remove()
    this.clonedContent = undefined
  }
  
  // keep a pointer to items 1,2,3 and the cloned items 4,5,6
  // set the bg art on the hidden item to something new, by rotateIndexing (path is /path/to/00.jpg)
  // depending where the index is, fade one of the items up and one of them down, to simulate a crossfade
  // in this way, we should be able to fade already displayed art out, and new art in, in loop

  fadeUp(){
    this.animating = true;
    const item = this.getItem({foreground:this.index})
    
    this.tween = fromTo(
      this.setArtToNextAndCloak(item),
      DISSOLVE_DURATION / 1000,
      {opacity:0},
      {opacity:1, ease:Power4.easeOut, onComplete:this.onFadeUpComplete}
    )
  
  }
  
  onFadeUpComplete(){
    this.animating = false
    const path = this.getItem({foreground:this.index}).css('background-image')
    // ('finished animating, now to copy the new art onto the background element: '+path)
    this.getItem({background:this.index}).css('background-image', path)
    this.rotateIndex()
    this.fadeUp()
  }
  
  isDissolve(){
    return this.transition_type == TRANSITION_DISSOLVE
  }
  
  getItem(opts){
    let src,i
    if(opts.foreground !== undefined){
      src = this.clonedContent
      i = opts.foreground % 3
    }
    
    if(opts.background !== undefined){
      src = this.content
      i = opts.background % 3
    }
    
    return src.find('.megastrip__item').eq(i).find('img')
  }
  
  // extract background image path ending in xx.jpg,
  // construct path to next rotateIndexal art and apply to img,
  // returning image element
  // images start at 01... not 00
  setArtToNextAndCloak(el){
    const path  = el.css('background-image') // from 01-09
    const digit = Number(ITEM_ART_REGEX.exec(path)[1])
    let   incr  = digit+ITEMS_IN_ROW
    if(incr > ITEM_ART_COUNT){
      incr = (incr % ITEM_ART_COUNT)+1
      if(incr == (ITEMS_IN_ROW+1)){
        incr = 1
      }
    }
           
    const pretty= incr < 10 ? `0${incr}` : incr
    const next  = path.replace(ITEM_ART_REGEX, `${pretty}.jpg")`)
    //console.log(`art: ${digit} -> ${incr}`)
    el.css({
      'background-image':next, 
      'opacity':0
    })
    return el
  }
    
  // move the pointer representing rhe artwork to tween
  // from position 1, to 3, to 2
  rotateIndex(){
    switch (this.index){
      case 0:
        this.index = 2
        break;
      case 1:
        this.index = 0;
        break;
      case 2:
        this.index =1;
        break;
        
    }
  }
  
  //
  // PAN TRANSITION aka desktop
  // ---------------------------------------------------------------------------
  
  undoStitch(){
    // console.log('undoStitch')
    this.content.css('left',0)
    this.getItems().slice(ITEM_ART_COUNT).remove()
    this.stitchedContent = undefined
  }
  
  // clone the content items and insert them into the existing container
  // (double the inner track length for pan mode)
  stitchContent(){
    // console.log('stitchContent')
    this.stitchedContent = this.getItems().clone()
    this.content.append(this.stitchedContent)
  }


  // animate the inner-track to the half-way point, and then reset left to 0
  // since we have 'stitched' the content by doubling the items this reset should be invisible 
  preparePan(){
    const itemWidth = this.getItems().eq(0).outerWidth(true)
    const target    = 0 - (itemWidth * ITEM_ART_COUNT)
    this.pan(target)
  }
  
  getItems(){
    return this.content.find('.megastrip__item')
  }

  pan(value){  
    if(this.interrupted) {
      this.animating = false;
      // console.log('interrupted')
    }
    else {
      this.animating = true;

      this.tween = fromTo(
        this.content.get(0),
        PAN_DURATION / 1000,
        {left:0},
        {left:value,   ease: Power0.easeNone, onComplete:this.onPanComplete}
      )
    }
  }
  
  onPanComplete(){
    // console.log('all done... shall we go again?')
    this.content.css('left','0px')
    this.preparePan()
  }
  

}

export default MegaStrip