import $ from 'jquery';
import CampaignHelper from '../analytics/campaign-helper';
import HashChange from '../hash-change/index';
export default class Modal {

    constructor(cfg) {

      this.settings = {
        bodyClass : 'modal-open',
        transitionEnd : null,
        close : '[rel="modal:close"]',
        content : null,
        dataContext : null
      };

      this.elements = {
        body : document.querySelector('body')
      };

      this.applyConfig(cfg);
      this.isOpen = false;
      this.settings.transitionEnd = this.transitionEndVendorCheck();
    }

    addDomElements() {
      // template:
      // <div class="modal">
      //   <div class="modal__inner">
      //     <a class="modal__close" rel="modal:close">Close</a>
      //     <div class="modal__content"></div>
      //   </div>
      // </div>

      this.elements.modal = document.createElement('div'),
      this.elements.modalInner = document.createElement('div'),
      this.elements.modalContent = document.createElement('div');
      this.elements.modalCloseBtn = document.createElement('a');

      this.elements.modalCloseBtn.className = 'modal__close';
      this.elements.modalCloseBtn.setAttribute('rel','modal:close');
      this.elements.modal.className = 'modal';
      this.elements.modalInner.className = 'modal__inner';
      this.elements.modalContent.className = 'modal__content';

      this.elements.modalInner.appendChild(this.elements.modalCloseBtn);
      this.elements.modalInner.appendChild(this.elements.modalContent);
      this.elements.modal.appendChild(this.elements.modalInner);
      this.elements.body.appendChild(this.elements.modal);
    }

    applyConfig(cfg) {
      if (typeof cfg === 'object') {
        for (var i in cfg) {
          if (cfg.hasOwnProperty(i)) {
            this.settings[i] = cfg[i];
          }
        }
      }
    }

    transitionEndVendorCheck() {
      var el = document.createElement('div');
      var transitions = {
        'transition':'transitionend',
        'OTransition':'otransitionend',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      };
      for (var i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
          return transitions[i];
        }
      }
    }

    open(e) {
      if (typeof this.settings.onBeforeOpen === 'function') this.settings.onBeforeOpen.call(this, e);
      $(this.elements.body).addClass(this.settings.bodyClass);
      this.addDomElements();
      this.setContent(this.settings.content);

      if (this.settings.dataContext !== null) {
        this.setDataContext(this.settings.dataContext);
        this.elements.modalCloseBtn.setAttribute('data-track','');
        this.elements.modalCloseBtn.setAttribute('data-label','close');
      }

      this.elements.modal.addEventListener('click', this.outsideClickHandler.bind(this), false);
      //document.addEventListener('click', this.delegateClose.bind(this), false);
      ['click', 'touchstart'].forEach(event => document.addEventListener(event, this.delegateClose.bind(this), false));
      //document.addEventListener('touchstart', this.delegateClose.bind(this), false);
      this.isOpen = true;

      // need to add/rewrite link campaign params
      setTimeout(() => new CampaignHelper({debug:this.debug}), 250);
    }

    detectTransition() {
      var css = window.getComputedStyle(this.elements.modal, null);
      var transitionDuration = ['transitionDuration', 'oTransitionDuration', 'MozTransitionDuration', 'webkitTransitionDuration'];
      var hasTransition = transitionDuration.filter(function(i) {
        if (typeof css[i] === 'string' && parseFloat(css[i]) > 0) {
          return true;
        }
      });
      return (hasTransition.length) ? true : false;
    }

    close(e) {
      if(this.isOpen === true) {
        this.isOpen = false;
        $(this.elements.body).removeClass(this.settings.bodyClass);

        HashChange.close();

        var transitions = this.detectTransition();
        if (this.settings.transitionEnd && transitions) {
          this.closeModalWithTransition(e);
        } else {
          this.closeModal(e);
        }
      }
    }

    closeModal(e) {
      this.isOpen = false;
      this.elements.body.removeChild(this.elements.modal);
      if (typeof this.settings.onClose === 'function') this.settings.onClose.call(this, e);
    }

    closeModalWithTransition(e) {
      var closeTransitionHandler = function() {
        this.elements.modal.removeEventListener(this.settings.transitionEnd, closeTransitionHandler);
        this.closeModal(e);
      }.bind(this);
      this.elements.modal.addEventListener(this.settings.transitionEnd, closeTransitionHandler);
    }

    outsideClickHandler(e) {
      var node = e.target;
      while(node && node != document.body) {
        if (node === this.elements.modalInner) return;
        node = node.parentNode;
      }
      this.close(e);
    }

    matches(e, selector) {
      var el = e.target;
      var matches = (el.document || el.ownerDocument).querySelectorAll(selector);
      for (let i = 0; i < matches.length; i++) {
        let child = el;
        while (child && child !== document.body) {
          if (child === matches[i]) return child;
          child = child.parentNode;
        }
      }
      return null;
    }

    delegateClose(e) {
      if (this.matches(e, this.settings.close)) {
        e.preventDefault();
        return this.close(e);
      }
    }

    setContent(content) {
      this.elements.modalContent.innerHTML = content;
    }

    setDataContext(dataContext) {
      this.elements.modalCloseBtn.setAttribute('data-context',dataContext)
    }
}
