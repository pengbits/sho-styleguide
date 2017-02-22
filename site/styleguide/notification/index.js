import _ from 'underscore';
import $ from 'jquery';
import Variations from '../variations/index';

class Notification {

  constructor(cfg){
    Variations.on('variation:detected:sho', this.onCheckForMessage.bind(this, cfg.el));
  }
  
  onCheckForMessage(el,event,data){
    if(data && data.notification){
      this.message = data.notification.message;
      this.render(el);
    }
    //console.log(`|notification| variation map loaded, looking for message... `);
    //this.messageExists() && this.render(el);
  }
  
  render(el){
    // when js-notification classname is found on the body, the component supplies its own container..
    if(el.nodeName.toLowerCase() == 'body'){
      this.el = this.renderElement($(el));
    } else {
      this.el = $(el)
    }

    this.closer = this.el.find('.notification__closer');
    this.setHandlers();
  }
  
  renderElement(el){
    let template = `
    <aside class="notification notification--fixed">
      <h1 class="notification__message">
        ${this.message}
        <em class="notification__closer"></em>
      </h1>
    </aside>`;
    
    el.prepend(template);
    return $('.notification--fixed')
  }
  
  setHandlers(){
    this.closer.on('click', this.destroy.bind(this))
  }
  
  destroy(e){
    e.preventDefault();
    
    this.el.remove();
  }
}

export default Notification;