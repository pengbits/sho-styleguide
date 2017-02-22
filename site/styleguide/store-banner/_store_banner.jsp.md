
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Store Banner</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_store_banner.jsp</h4></div>

```

<div class="store-banner" data-context="banner">
  <div class="store-banner__inner">
    <div class="store-banner__body">
      <h3 class="store-banner__headline">{{title}}</h3>
      <div class="store-banner__button">
        <a href="{{ctaLink}}" class="button--outline-black" data-track data-label="shop">
          {{#ctaLabel}}{{ctaLabel}}{{/ctaLabel}}
          {{^ctaLabel}}SHOP NOW{{/ctaLabel}}
        </a>
      </div>
    </div>
    <div class="store-banner__image lazyload" data-bgset="{{imageUrl}}"></div>

  </div>
</div>

```
