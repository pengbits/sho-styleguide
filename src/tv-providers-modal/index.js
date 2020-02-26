import $ from 'jquery';
import Modal from '../modal/index';
import PartnerData from '../order-tray/redux/partner-list-data';

export class TvProvidersModal {
  constructor(){
    this.setListeners();
  }

  setListeners() {
    $(document).on( "tvproviders:opened", event => {
      this.eventTriggered(event)
    });
  }

  eventTriggered(event) {
    if(!event.details) return;
    this.modal = new Modal({
      content : this.getTemplate(),
      dataContext : 'provider list:traditional full list',
      modalClass: 'tv-providers-modal',
      closeButtonInFooter: true
    });
    this.modal.open(event);
  }
  
  divider(char){
    return `<li 
      class="partner-list__divider" key=${char}>${char}
    </li>`
  }
  
  partner({name,id,url}) {
    return `<li>
      <a class="partner-list__link" 
        target="_blank"
        href=${url} 
        rel="noopener noreferrer"

        data-provider-id=${id}
        data-track 
        data-label="provider lead">${name}
      </a>
    </li>`
  }

  partnerList() {
    return Object.keys(PartnerData).map((char) => {
      const section = PartnerData[char]; // {"A":[{},{},{}]}
      return [this.divider(char)].concat(section.map(item => {
        return this.partner(item)
      })).join('')
    }).join('')
  }
  
  getTemplate() {
    return `<div>
      <div class="tv-providers-modal__content" data-context="provider list:traditional full list">
        <h4 class="partner-list-header">Select a Provider Below:</h4>
        <ul class="partner-list" data-provider-group-id="0">
          <li>${this.partnerList()}</li>
        </ul>
    </div>`
  }
}
 
export default TvProvidersModal;
