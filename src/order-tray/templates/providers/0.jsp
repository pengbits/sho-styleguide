{{!begin_layout}}
{{!name:TV Provider}}
<figure class="order-card{{#selected}} order-card--selected{{/selected}}{{#isLast}} order-card--last{{/isLast}}{{#isFirst}} order-card--first{{/isFirst}}{{#isTrueFirst}} order-card--true-first{{/isTrueFirst}}" data-provider-id="{{id}}" data-context="provider card" data-position="{{position}}">
  <figcaption class="order-card__inner">
    <div {{#is_mobile}}class="order-card__toggle" {{^selected}}data-track data-label="open card"{{/selected}}{{/is_mobile}}>
      <img class="order-card__logo" src="http://www.sho.com/assets/images/order/tray/provider-logos/tv-provider.png">
    </div>
    
    <span class="order-card__free-trial-callout">Prices Vary</span>
    
    <h4 class="order-card__headline">Add SHOWTIME to your pay TV subscription</h4>
    {{> partials/order/templates/partnerLogos }}
    <div class="order-card__body">

      <div class="order-card__description">
        Get connected with your TV provider: <strong class="order-card__description__hotline">Call 1-800-SHOWTIME</strong>
      </div>
      
      {{^is_mobile}}
      <div class="order-card__blurb order-card__blurb--description">
        <h5>Your SHOWTIME subscription includes access to SHOWTIME ON DEMAND and SHOWTIME ANYTIME at no additional cost &#8211; watch wherever and whenever on your TV, tablet, phone or computer at <a href="http://www.showtimeanytime.com">ShowtimeAnytime.com.</a></h5>
      </div>
      {{/is_mobile}}
    </div>

    <div class="order-card__details-toggle order-card__details-toggle--open {{#expanded}}order-card__details-toggle--active{{/expanded}} order-card__details-summary" role="button" data-track data-label="learn more">See All Providers</div>
    <div class="order-card__details {{#expanded}}order-card__details--expanded{{/expanded}}">
      <span class="order-card__divider order-card__divider--top"></span>

      {{#is_mobile}}
      <div class="order-card__blurb">
        <h5>Your SHOWTIME subscription includes access to SHOWTIME ON DEMAND and SHOWTIME ANYTIME at no additional cost &#8211; watch wherever and whenever on your TV, tablet, phone or computer at <a href="http://www.showtimeanytime.com">ShowtimeAnytime.com.</a></h5>
      </div>
      <span class="order-card__divider"></span>
      {{/is_mobile}}
      {{> partials/order/templates/partnerList }}

      <span class="order-card__divider"></span>
      <div class="order-card__details-toggle order-card__details-toggle--close" role="button">Close</div>
    </div>

  </figcaption>
</figure>
{{!end_layout}}