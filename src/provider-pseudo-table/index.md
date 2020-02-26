--- 
name: Provider Pseudo Table
collection: order
---

# Provider Pseudo Table

This is a new component to display the provider information in the stream showtime page (potentially) and more immediately, in the a/b test described in SITE-19523. On initial load there is a tile view of the 3 featured providers. Underneath is a disclosure/learn-more style cta, with the text "SEE EVEN MORE WAYS TO BUY". When it's clicked, a table of additional providers is revealed, with the lower priority providers rendered as full-width table rows.

* Note - this component is best viewed in the styleguide with the sidebar closed.

<div class="pseudo-table-container js-provider-pseudo-table section--inner">
  <h3 class="header pseudo-table__header">More Ways to Buy:</h3>
  <div class="pseudo-table pseudo-table--primary">
    <div class="pt-provider pt-provider--primary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/100.png'/>
        <div class="pt-provider__copy">
          Prime members can subscribe to SHOWTIME with Prime Video Channels. 7 Day free trial then only $10.99/month. Prime membership needed.
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-context="provider list:featured" data-label="provider lead" data-provider-id="100">Go to Amazon</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--primary">
      <div>
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/95_BW.png'/>
        <div class="pt-provider__copy">
        Get SHOWTIME as a Premium Add-on with your Hulu subscription. 7 Day free trial then only $10.99.
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" data-track data-context="provider list:featured" data-label="provider lead" data-provider-id="95" class="pt-provider__button">Go to Hulu</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--primary">
      <div>
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/126_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your pay TV subscription. Prices vary.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" data-track data-context="provider list:featured" data-label="see all providers" data-provider-id="126" class="pt-provider__button">See All TV Providers</a>
      </div>
    </div>
  </div>
  <div class="pseudo-table__toggle pseudo-table__toggle--top">
    <a class="pseudo-table__toggle-button js-toggle-button" data-track data-context="provider list:additional" data-label="see more">
      See Even More Ways To Buy
    </a>
  </div>
  <div class="pseudo-table pseudo-table--secondary" data-context="provider list:traditional full list">
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/183_BW_ALT.png'/>
        <div class="pt-provider__copy">
          <p>Subscribe to SHOWTIME on APPLE TV APP. 7-Day Free Trial then only $10.99/month</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Open Apple TV App</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/176_BW.png'/>
        <div class="pt-provider__copy">
          <p>Subscribe to SHOWTIME on The Roku Channel. 7 Day free trial then only $10.99/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go To Roku</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/118_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your AT&T TV NOW Channel Line-up. 7-Day Free Trial then only $11/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">GO TO AT&T TV NOW</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/124_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your fuboTV subscription. 7 Day free trial then only $10.99/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to FuboTV</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/94_BW.png'/>
        <div class="pt-provider__copy">
          <p>Subscribe to SHOWTIME directly through PlayStation&trade;Vue. 7 Day free trial then only $10.99/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to Playstation&trade;Vue</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/112_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your Sling TV subscription. 7 Day free trial then only $10/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to Sling</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/110_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your YouTube TV membership. 7 Day free trial then only $7/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to YouTube</a>
      </div>
    </div>
    <div class="pseudo-table__toggle pseudo-table__toggle--bottom">
      <a class="pseudo-table__toggle-button js-toggle-button" data-track data-label="see less">
        See Less
      </a>
    </div>
  </div>
</div>
<br/><br/>

<style type="text/css">
  .site-sidebar,
  .site-sidebar-toggle {
    display: none;
  }

  .order-home-container {
    width: 100%;
    overflow: hidden;
  }

  .site-main {
    padding: 0;
  }

  .site-content {
    max-width: none;
  }
</style>
```html
<div class="pseudo-table-container js-provider-pseudo-table section--inner">
  <h3 class="header pseudo-table__header">More Ways to Buy:</h3>
  <div class="pseudo-table pseudo-table--primary">
    <div class="pt-provider pt-provider--primary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/100.png'/>
        <div class="pt-provider__copy">
          Prime members can subscribe to SHOWTIME with Prime Video Channels. 7 Day free trial then only $10.99/month. Prime membership needed.
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-context="provider list:featured" data-label="provider lead" data-provider-id="100">Go to Amazon</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--primary">
      <div>
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/95_BW.png'/>
        <div class="pt-provider__copy">
        Get SHOWTIME as a Premium Add-on with your Hulu subscription. 7 Day free trial then only $10.99.
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" data-track data-context="provider list:featured" data-label="provider lead" data-provider-id="95" class="pt-provider__button">Go to Hulu</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--primary">
      <div>
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/126_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your pay TV subscription. Prices vary.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" data-track data-context="provider list:featured" data-label="see all providers" data-provider-id="126" class="pt-provider__button">See All TV Providers</a>
      </div>
    </div>
  </div>
  <div class="pseudo-table__toggle pseudo-table__toggle--top">
    <a class="pseudo-table__toggle-button js-toggle-button" data-track data-context="provider list:additional" data-label="see more">
      See Even More Ways To Buy
    </a>
  </div>
  <div class="pseudo-table pseudo-table--secondary" data-context="provider list:traditional full list">
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/183_BW_ALT.png'/>
        <div class="pt-provider__copy">
          <p>Subscribe to SHOWTIME on APPLE TV APP. 7-Day Free Trial then only $10.99/month</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Open Apple TV App</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/176_BW.png'/>
        <div class="pt-provider__copy">
          <p>Subscribe to SHOWTIME on The Roku Channel. 7 Day free trial then only $10.99/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go To Roku</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/118_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your AT&T TV NOW Channel Line-up. 7-Day Free Trial then only $11/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">GO TO AT&T TV NOW</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/124_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your fuboTV subscription. 7 Day free trial then only $10.99/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to FuboTV</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/94_BW.png'/>
        <div class="pt-provider__copy">
          <p>Subscribe to SHOWTIME directly through PlayStation&trade;Vue. 7 Day free trial then only $10.99/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to Playstation&trade;Vue</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/112_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your Sling TV subscription. 7 Day free trial then only $10/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to Sling</a>
      </div>
    </div>
    <div class="pt-provider pt-provider--secondary">
      <div class="pt-provider__sub-container">
        <img class="pt-provider__img" src='https://downloads.sho.com/images/order/tray/provider-logos/black-and-white/110_BW.png'/>
        <div class="pt-provider__copy">
          <p>Add SHOWTIME to your YouTube TV membership. 7 Day free trial then only $7/month.</p>
        </div>
      </div>
      <div class="pt-provider__sub-container">
        <a href="#" class="pt-provider__button" data-track data-label="provider lead" data-provider-id="[providerId]">Go to YouTube</a>
      </div>
    </div>
    <div class="pseudo-table__toggle pseudo-table__toggle--bottom">
      <a class="pseudo-table__toggle-button js-toggle-button" data-track data-label="see less">
        See Less
      </a>
    </div>
  </div>
</div>
```