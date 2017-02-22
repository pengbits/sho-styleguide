  <main class="order-tray__body">
    <h3 class="order-tray__body-headline">{{headline}}</h3>
    <div class="order-tray__body-content">
      <div class="order-tray__masthead">
        <a href="/" class="order-tray__masthead__logo">Showtime</a>
      </div>
      {{#is_mobile}}
        {{#providerContent}}
          {{> (providerTemplate) }}
        {{/providerContent}}
      {{/is_mobile}}
      {{^is_mobile}}
        {{#providerContent}}
          {{#selected}}
            {{> (providerTemplate) }}
          {{/selected}}
        {{/providerContent}}
      {{/is_mobile}}

      {{#legal}}
      {{> partials/order/templates/legalCard}}
      {{/legal}}

      <div class="order-tray__overflow"></div>
    </div>
  </main>
  {{> partials/order/templates/sidebar}}
  <b class="order-tray__closer" data-track data-context="order tray" data-label="close"></b>
