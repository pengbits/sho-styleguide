import $ from 'jquery';
import Modal from '../modal/index';

class FormPreviewModal {
  constructor(cfg) {
    this.nameInput = $(cfg.name);
    this.messageInput = $(cfg.message);
    this.name = 'Your Name';
    this.message = 'Your Message';
    this.setListeners();
  }

  setListeners() {
    this.nameInput.on('change', () => {
      this.name = this.nameInput.val();
    });

    this.messageInput.on('change', () => {
      this.message = this.messageInput.val();
    });

    $(document).on( "preview:opened", event => {
      this.eventTriggered(event)
    });
  }

  eventTriggered(event) {
    this.modal = new Modal({
      content : this.getTemplate(),
      dataContext : 'preview modal'
    });

    this.modal.open(event);
  }

  getTemplate() {
   return `
    <div class="form-preview-modal modal-open">
      <img class="form-preview-modal__image" src="https://downloads.sho.com/promotions/holiday-cards/2019/showtime-holiday-card-2019.gif">
      <div class="form-preview-modal__text">
        <p class="form-preview-modal__message">${this.message}</p>
        <p class="form-preview-modal__name">${this.name}</p>
      </div>  
    </div>
    `;
  }
}

export default FormPreviewModal;
