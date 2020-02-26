import CampaignHelper from '../analytics/campaign-helper';

export class FooterAlt {
  constructor(cfg){
    this.cfg = cfg
    this.renderFooterAlt()
  }

  initCampaignHelper(){
    // need to add/rewrite link campaign params
    setTimeout(() => new CampaignHelper({debug:this.debug}), 250);
  }
  
  renderFooterAlt(){
    if(this.cfg.ffe_banner) {
      const storeBanner = document.querySelector('.store-banner')
      storeBanner.classList.add('foooter')
      storeBanner.innerHTML = this.getFreeFullEpisodesTemplate()
    }
    if(this.cfg.exposed_streaming_modal) {
      const footer = document.querySelector('.footer');
      footer.classList.add('foooter')
      footer.innerHTML = this.getExposedStreamingModalTemplate()
    }
    this.initCampaignHelper();
  }

  getFreeFullEpisodesTemplate() {
    return `
      <div class="foooter__store-banner--container">
        <div class="store-banner__background"></div>
        <div class="foooter__inner">
          <div class="foooter__store-banner foooter__section">
            <div class="foooter__sub-section">
            <div class="foooter__headline-button-wrapper">
              <h3 class="order-promo__headline store-banner__headline">SHOP OFFICIAL GEAR FROM YOUR FAVORITE SHOWTIME SERIES</h3>
              <span class="store-banner__button">
                <a href="https://store.sho.com/" class="button--outline-black js-metrics__shop-promo" data-track data-label="shop">
                  SHOP NOW
                </a>
              </span>
            </div>  
              <img class="store-banner__img lazyload" src="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merchglobal1119_360x160.png"></img>
            </div>
            <div class="foooter__sub-section">
              <h3 class="order-promo__headline ffe-promo__headline">FREE FULL EPISODES</h3>
              <span class="store-banner__button">
                <a href="/video/full-episodes" class="button--outline-white js-metrics__free-full-episodes" data-track data-label="free full episodes">
                  WATCH FOR FREE
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    `
  }

  getExposedStreamingModalTemplate() {
    return `
      <div class="foooter__order-nav--container">
        <div class="foooter__inner">
          <div class="foooter__order-promos foooter__section">
            <div class="foooter__sub-section foooter__sub-section--sign-in">
              <h3 class="order-promo__headline">ALREADY HAVE SHOWTIME?</h3>
              <p class="order-promo__copy">For subscribers who signed up through the SHOWTIME website or the SHOWTIME app.</p>
              <span class="store-banner__button">
                <a href="https://www.showtime.com/?i_cid=int-default-18782" class="button--outline-white js-metrics-footer__showtime-sign-in" data-track data-label="standalone">
                  SIGN IN
                </a>
              </span>
              <p class="order-promo__copy">For subscribers who signed up through a cable, satellite, telco or streaming service provider.</p>
              <span class="store-banner__button">
                <a href="https://www.showtimeanytime.com" class="button--outline-white js-metrics-footer__showtime-anytime-sign-in" data-track data-label="anytime">
                  SIGN IN
                </a>
              </span>
            </div>
            <div class="foooter__sub-section foooter__sub-section--sign-up">
              <h3 class="order-promo__headline">WANT SHOWTIME?</h3>
              <p class="order-promo__copy">You're clicks away from streaming SHOWTIME. Finish signing up to get access.</p>
              <span class="store-banner__button">
                <a href="https://www.showtime.com/#signup?i_cid=int-default-18783" class="button--solid-white js-metrics-footer__free-trial-cta" data-track data-label="order">
                  START YOUR FREE TRIAL
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="foooter__nav-section">
          <div class="footer__nav-section__inner foooter__inner">
            <div class="footer-nav">
              <div class="footer-nav__inner">
                <ul class="footer-nav__links--sho">
                  <li><a href="https://www.showtime.com/?i_cid=int-default-1010" data-track data-label="showtime.com">Showtime.com</a></li>
                  <li><a href="/showtime-anytime" data-track data-label="showtime anytime">Showtime Anytime</a></li>
                </ul>	
                <ul class="footer-nav__links--sho">
                  <li><a href="/schedule" class="js-metrics-footer__schedule" data-track data-label="schedule">Schedule</a></li>
                  <li><a href="/channel-listings" data-track data-label="channel listings">Channel Listings</a></li>
                </ul>
              </div>
              <div class="footer-nav__inner">
                <ul class="footer-nav__links--sho">
                  <li><a href="https://store.sho.com/?utm_source=sho&utm_medium=promo&utm_campaign=footer" data-track data-label="shop">Shop</a></li>
                  <li><a href="/gift-cards" data-track data-label="gift card">Gift Cards</a></li>
                </ul>
                <ul class="footer-nav__links--sho">
                  <li><a href="/about" data-track data-label="about">About</a></li>
                  <li><a href="https://www.sho.com/careers" data-track data-label="careers">Careers</a></li>
                  <li><a href="https://www.sho.com/help" data-track data-label="help">Help</a></li>
                </ul>
              </div>
            </div>
            <div class="footer__bottom">
              <div class="footer__logo-and-socials">
                <div class="footer__logo"></div>
                <ul class="footer-nav__links--social">
                  <li><a class="icon--instagram" href="https://www.instagram.com/showtime/" data-track data-label="instagram">instagram</a></li>
                  <li><a class="icon--twitter" href="https://twitter.com/Showtime" data-track data-label="twitter">twitter</a></li>
                  <li><a class="icon--facebook" href="https://www.facebook.com/showtime" data-track  data-label="facebook">facebook</a></li>
                  <li><a class="icon--youtube" href="https://www.youtube.com/user/showtime" data-track data-label="youtube">youtube</a></li>
                </ul>
              </div>
              <div class="footer__disclaimer">
                <p>By viewing our video content you are accepting the terms of our <a href="/about/video-services" data-track data-label="services policy">Video Services Policy</a>. This website is intended for viewing solely in the United States and its territories and possessions. This website may contain adult content. <a href="/about/privacy" data-track data-label="privacy policy">Privacy Policy</a> | <a href="/about/terms" data-track data-label="terms of use">Terms of Use</a> | <a href="/about/closed-captioning" data-track data-label="closed captioning">Closed Captioning</a> | <a href="/about/mobile-eula" data-track data-label="mobile user agreement">Mobile User Agreement</a> | <a href="/about/privacy#your-california-privacy-rights" data-track data-label="California Privacy/Info We Collect">California Privacy/Info We Collect</a> | <a href="https://ca.privacy.cbs/donotsell" data-track data-label="CA Do Not Sell My Info">CA Do Not Sell My Info</a> &#169; 2019 Showtime Networks Inc. and Showtime Digital Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

export default FooterAlt