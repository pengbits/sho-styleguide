import _        from 'underscore';
import Model    from './model';
import View     from './view';
import Controller     from './controller';
import Factory from './order-tray-factory'
import Variations from '../variations/index';

class OrderTray {
  constructor(cfg) {
    this.model =  new Model();
    this.controller = new Controller({
      'model' : this.model,
      'parent': this
    });

    this.view =   new View({
      'model' :      this.model,
      'controller' : this.controller,
      'el' :         cfg.el
    });

    // bootstrap model w/ list of providers
    this.model.init();
    
    // if an optimizely experiment is running that targets the tray, it'll expose a flag:
    // (old format, deprecated)
    if(window.ORDER_TRAY_THEME){
      cfg.theme = window.ORDER_TRAY_THEME
    }
    // alternatively, newer optimizely experiements could make use of naming convention 
    // that enables the use of the Variations manager, in which case this'll be handled transparently in the model
    // window.sho_variations.order_tray = {theme:7657500567, headline:'what are you waiting for?'}
    
    // initial route kicks off things in controller
    this.controller.init(cfg);
  }
  
  destroy(){
    this.view.destroy();
    this.model.destroy();
    Factory.destroy(this);
  }
}

OrderTray.Factory = Factory;
export default OrderTray;