{{!begin_layout}}
{{!name:Amazon Prime}}
<figure class="order-card{{#selected}} order-card--selected{{/selected}}{{#isLast}} order-card--last{{/isLast}}{{#isFirst}} order-card--first{{/isFirst}}{{#isTrueFirst}} order-card--true-first{{/isTrueFirst}}" data-provider-id="{{id}}" data-provider-group-id="{{groupId}}" data-context="provider card" data-position="{{position}}">
  <figcaption class="order-card__inner">
    <div {{#is_mobile}}class="order-card__toggle" {{^selected}}data-track data-label="open card"{{/selected}}{{/is_mobile}}>
      <img class="order-card__logo" src="http://www.sho.com/assets/images/order/tray/provider-logos/amazon-channels.png">
    </div>
    
    <span class="order-card__free-trial-callout">7-Day Free Trial&#42;</span>
    
    <h4 class="order-card__headline">Prime members can subscribe to SHOWTIME directly on the Amazon Video app with Amazon Channels</h4>

    <div class="order-card__body">
      <div class="order-card__description">
        Amazon Prime is needed to get SHOWTIME. Go to the Amazon Video app on your favorite device and add SHOWTIME with Amazon Channels. Find it under the Channels category. You can also sign up on the Amazon website. No cable needed.
      </div>


      <div class="order-card__big-button-container">
        <a class="order-card__big-button button--solid-red" href="https://www.amazon.com/b/ref=dvm_us_hl_pm_shositelink?_encoding=UTF8&benefitId=showtimeSub&node=2858778011" data-track data-label="provider lead">Go to Amazon</a>
      </div>
    </div>

    <div class="order-card__details-toggle order-card__details-toggle--open {{#expanded}}order-card__details-toggle--active{{/expanded}} order-card__details-summary" role="button" data-track data-label="learn more">Learn More</div>
    <div class="order-card__details {{#expanded}}order-card__details--expanded{{/expanded}}">
      <span class="order-card__divider order-card__divider--top"></span>

      <div class="order-card__price-description">
        <div class="order-card__price-callout-container">
          <span class="order-card__price-callout">
            $8.99<em>per month</em><br />
            <b>add on with<br /> Prime membership</b>
          </span>
        </div>
        <div class="order-card__blurb order-card__blurb--price">
          <h4>Get full access to SHOWTIME whenever you want &#8211;<br /> all commercial-free</h4>
          <h5>Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. PLUS, you'll be able to watch exclusive movies, documentaries, sports, comedy specials and much more. Whether you watch LIVE TV or ON DEMAND you never have to miss a single thing.</h5>
        </div>
      </div>

      <span class="order-card__divider"></span>
      <div class="order-card__blurb order-card__blurb--devices">
        <h4>Watch on your favorite device</h4>
        <h5>Once you sign up, you can stream SHOWTIME through Amazon Video on your TV, tablet, phone, and computer.</h5>
      </div>
      <span class="order-card__divider"></span>
      <div class="order-card__details-toggle order-card__details-toggle--close" role="button">Close</div>
    </div>

  </figcaption>
</figure>
{{!end_layout}}