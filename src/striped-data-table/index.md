---
name: Striped Data Table
collection: components
---

# Striped Data Table
A table to display data things like schedules, as found on pages like the Channel Listings Page and the FYC Events Page. Each row is a flexbox designed to display a reasonable number of items evenly before the mobile breakpoint. Any customization specific to a single page should only be added to that pages' stylesheet.


* To Do: Update 'Channel Listings' page to use the Striped Data Table. 

<div class="striped-data-table">
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>PROVIDER</p>
    </div>
    <div class='striped-data-table__item'>
      <p>CHANNEL</p>
    </div>
  </div>
  <div class='striped-data-table__row'>
  <div class='striped-data-table__item'>
      <p>AT&T U-VERSE</p>
    </div>
    <div class='striped-data-table__item'>
      <p>HD Channels: <span class="striped-data-table__highlight">1852-1866</span></p>
      <p>SD Channels: <span class="striped-data-table__highlight">852 - 866<span></p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>COX</p>
    </div>
    <div class='striped-data-table__item'>
      <p>Varies by region</p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>DIRECTV</p>
    </div>
    <div class='striped-data-table__item'>
      <p><span class="striped-data-table__highlight">545 - 557</span></p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>DISH</p>
    </div>
    <div class='striped-data-table__item'>
      <p><span class="striped-data-table__highlight">318 - 333</span></p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>FRONTIER FIOS</p>
    </div>
    <div class='striped-data-table__item'>
      <p>HD Channels: <span class="striped-data-table__highlight">865 - 874</span></p>
      <p>SD Channels: <span class="striped-data-table__highlight">365 - 380</span></p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>FRONTIER VANTAGE</p>
    </div>
    <div class='striped-data-table__item'>
      <p>Please check with your provider</p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>MEDIACOM</p>
    </div>
    <div class='striped-data-table__item'>
      <a href="https://mediacomtoday-lineup.com" data-track data-label="varies by region" data-provider-id="45" target="_blank"><p>Varies by region</p></a>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>OPTIMUM</p>
    </div>
    <div class='striped-data-table__item'>
      <p><span class="striped-data-table__highlight">320 - 331</span></p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>SPECTRUM</p>
    </div>
    <div class='striped-data-table__item'>
      <a href="https://www.spectrum.com/browse/content/new-channel-lineup.html" target="_blank" data-track data-label="varies by region" data-provider-id="20"><p>Varies by region</p></a>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>SUDDENLINK</p>
    </div>
    <div class='striped-data-table__item'>
      <p>Varies by region</p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>VERIZON FIOS</p>
    </div>
    <div class='striped-data-table__item'>
      <p>HD Channels: <span class="striped-data-table__highlight">865 - 874</span></p>
      <p>SD Channels: <span class="striped-data-table__highlight">365 - 380</span></p>
    </div>
  </div>
  <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
      <p>XFINITY</p>
    </div>
    <div class='striped-data-table__item'>
      <a href="https://www.xfinity.com/support/local-channel-lineup/" target="_blank" data-track data-label="varies by region" data-provider-id="23"><p>Varies by region</p></a>
    </div>
  </div>

  ```
  <div class="striped-data-table">
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>PROVIDER</p>
      </div>
      <div class='striped-data-table__item'>
        <p>CHANNEL</p>
      </div>
    </div>
    <div class='striped-data-table__row'>
    <div class='striped-data-table__item'>
        <p>AT&T U-VERSE</p>
      </div>
      <div class='striped-data-table__item'>
        <p>HD Channels: <span class="striped-data-table__highlight">1852-1866</span></p>
        <p>SD Channels: <span class="striped-data-table__highlight">852 - 866<span></p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>COX</p>
      </div>
      <div class='striped-data-table__item'>
        <p>Varies by region</p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>DIRECTV</p>
      </div>
      <div class='striped-data-table__item'>
        <p><span class="striped-data-table__highlight">545 - 557</span></p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>DISH</p>
      </div>
      <div class='striped-data-table__item'>
        <p><span class="striped-data-table__highlight">318 - 333</span></p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>FRONTIER FIOS</p>
      </div>
      <div class='striped-data-table__item'>
        <p>HD Channels: <span class="striped-data-table__highlight">865 - 874</span></p>
        <p>SD Channels: <span class="striped-data-table__highlight">365 - 380</span></p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>FRONTIER VANTAGE</p>
      </div>
      <div class='striped-data-table__item'>
        <p>Please check with your provider</p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>MEDIACOM</p>
      </div>
      <div class='striped-data-table__item'>
        <a href="https://mediacomtoday-lineup.com" target="_blank" data-track data-label="varies by region" data-provider-id="45"><p>Varies by region</p></a>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>OPTIMUM</p>
      </div>
      <div class='striped-data-table__item'>
        <p><span class="striped-data-table__highlight">320 - 331</span></p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>SPECTRUM</p>
      </div>
      <div class='striped-data-table__item'>
        <a href="https://www.spectrum.com/browse/content/new-channel-lineup.html" target="_blank" data-track data-label="varies by region" data-provider-id="20"><p>Varies by region</p></a>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>SUDDENLINK</p>
      </div>
      <div class='striped-data-table__item'>
        <p>Varies by region</p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>VERIZON FIOS</p>
      </div>
      <div class='striped-data-table__item'>
        <p>HD Channels: <span class="striped-data-table__highlight">865 - 874</span></p>
        <p>SD Channels: <span class="striped-data-table__highlight">365 - 380</span></p>
      </div>
    </div>
    <div class='striped-data-table__row'>
      <div class='striped-data-table__item'>
        <p>XFINITY</p>
      </div>
      <div class='striped-data-table__item'>
        <a href="https://www.xfinity.com/support/local-channel-lineup/" target="_blank" data-track data-label="varies by region" data-provider-id="23"><p>Varies by region</p></a>
      </div>
    </div>
  </div>
  ```