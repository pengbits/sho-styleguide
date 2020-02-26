import $ from 'jquery';
import Modal from '../modal/index';
import { stripHTML } from '../utils/stripHTML';

class ContactModal {
  constructor(cfg) {
    $(document).on('contact:opened', event => {
      this.eventTriggered(event);
    });
  }

  eventTriggered(event) {
    this.modal = new Modal({
      content: this.getTemplate(),
      dataContext: 'contact modal'
    });

    this.modal.open(event);
  }

  getTemplate() {
    const referrer = stripHTML(window.location.pathname);
    const csrfToken = $("meta[name='_csrf_token']").attr("content");
    const csrfTokenName = $("meta[name='_csrf_parameter']").attr("content");
    
    return `
      <div id="email-signup-widget" class="email-signup email-signup--contact-us js-contact-us-modal">
      <div class="email-signup__inner">
        <div class="email-signup__headline">Contact Us To Learn More About Showtime</div>
        <form action="/bulk/contact-us" method="POST">
          <div class="email-signup__form-fields">
            <div class="email-signup__contact-input">
              <p class="email-signup__label">name&ast;</p>
              <input class="input-box input-box-contact" id="name" name="name" type="text" value="" autocomplate="off" required>
            </div>
            <div class="email-signup__email-input">
              <p class="email-signup__label">email&ast;</p>
              <input class="input-box input-box-email" name="email" type="text" value="" autocomplate="off" required>
            </div>
            <div class="email-signup__contact-input">
              <p class="email-signup__label">phone number&ast;</p>
              <input class="input-box input-box-contact" name="phoneNumber" type="text" value="" autocomplate="off" required>
            </div>
            <div class="email-signup__contact-input">
              <p class="email-signup__label">company name&ast;</p>
              <input class="input-box input-box-contact" name="companyName" type="text" value="" autocomplate="off" required>
            </div>
            <div class="email-signup__contact-input">
              <p class="email-signup__label">zip code&ast;</p>
              <input class="input-box input-box-contact" name="zipcode" type="text" value="" autocomplate="off" required>
            </div>       
          </div>
          <input class="signup__opt-in__hidden" type="hidden" name="receiveMarketingCommunications" value="true" />
          <input type="hidden" name="referrer" value="${referrer}">
          <input type="hidden" name="${csrfTokenName}" value="${csrfToken}"/>
          <button class="email-signup__submit-btn" id="submit" data-track data-context="b2b contact form" data-label="submit" type="submit">
            Submit
          </button>
        </form>
        <div class="email-signup__call">
          <i class="email-signup__call-icon icon icon--medium icon--phone"></i>        
          <h3 class="email-signup__call-number">1-866-481-SHOW (7469)</h3>
          <p class="email-signup__call-hours">Available 9 AM - 5 PM ET, Mon - Fri</p>
        </div>
        <p class="email-signup__required">&ast;Required Field</p>
      </div>
    </div>
    `;
  }
}

export default ContactModal;
