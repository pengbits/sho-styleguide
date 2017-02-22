{{!begin_layout}}
{{!name:Android}}
<figure class="order-card{{#selected}} order-card--selected{{/selected}}{{#isLast}} order-card--last{{/isLast}}{{#isFirst}} order-card--first{{/isFirst}}{{#isTrueFirst}} order-card--true-first{{/isTrueFirst}}" data-provider-id="{{id}}" data-context="provider card" data-position="{{position}}">
  <figcaption class="order-card__inner">
    <div {{#is_mobile}}class="order-card__toggle" {{^selected}}data-track data-label="open card"{{/selected}}{{/is_mobile}}>
      <img class="order-card__logo" src="http://www.sho.com/assets/images/order/tray/provider-logos/android.png">
    </div>

    <span class="order-card__free-trial-callout">7-Day Free Trial&#42;</span>

    <h4 class="order-card__headline">Subscribe to SHOWTIME directly on your Android devices</h4>

    <div class="order-card__body">
      <div class="order-card__description">
        Go to the Google Play Store on your Android TV&#8482;, Android phone or tablet. Download the SHOWTIME app to your Android device. Open the app to sign-up and START YOUR FREE TRIAL instantly.
      </div>

      <div class="order-card__device-icons">
        <img src="http://www.sho.com/assets/images/order/tray/device-icons/icon-sho.svg">
        <img src="http://www.sho.com/assets/images/order/tray/device-icons/icon-mobile.svg">
        <img src="http://www.sho.com/assets/images/order/tray/device-icons/icon-tablet.svg">
        <img src="http://www.sho.com/assets/images/order/tray/device-icons/icon-desktop.svg">
      </div>

      <div class="order-card__big-button-container">
        <a class="order-card__big-button button--solid-red" href="https://control.kochava.com/v1/cpi/click?i_cid=int-default-1782&campaign_id=koshowtime-android-prod5578ae1e68354c614740c09564&network_id=2708&device_id=device_id&site_id=1&append_app_conv_trk_params=1" data-track data-label="provider lead">Download the Showtime App</a>
      </div>
    </div>

    <div class="order-card__details-toggle order-card__details-toggle--open {{#expanded}}order-card__details-toggle--active{{/expanded}} order-card__details-summary" role="button" data-track data-label="learn more">Learn More</div>
    <div class="order-card__details {{#expanded}}order-card__details--expanded{{/expanded}}">
      <span class="order-card__divider order-card__divider--top"></span>

      <div class="order-card__price-description">
        <div class="order-card__price-callout-container">
          <span class="order-card__price-callout">
            $10.99<em>per month</em><br />
            <b>after free trial</b>
          </span>
        </div>
        <div class="order-card__blurb order-card__blurb--price">
          <h4>Get full access to SHOWTIME whenever you want &#8211;<br /> all commercial-free</h4>
          <h5>Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. PLUS, you'll be able to watch exclusive movies, documentaries, sports, comedy specials and much more. Whether you watch LIVE TV or ON DEMAND you never have to miss a single thing.</h5>
        </div>
      </div>

      <span class="order-card__divider"></span>
      <div class="order-card__blurb order-card__blurb--devices">
        <h4>Watch seamlessly on all your favorite devices no matter where you subscribe</h4>
        <h5>Choose how you want to watch! Once you sign-up through the SHOWTIME app on your preferred Android&#8482; device you can download the app on other connected TVs, tablets and mobile devices &#8211; or go to Showtime.com on your computer &#8211; and stream SHOWTIME at NO ADDITIONAL COST.</h5>
        {{> partials/order/templates/deviceList}}
      </div>
      <span class="order-card__divider"></span>
      <div class="order-card__details-toggle order-card__details-toggle--close" role="button">Close</div>
    </div>

  </figcaption>
</figure>
{{!end_layout}}
