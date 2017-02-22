
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Hero (Order)</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/hero/_hero_order.jsp</h4></div>

```

<section class="hero hero--no-accent {{#panelLink}}hero--panel-link{{/panelLink}}">
  <a class="hero__image lazyload" {{#heroView.panelLink}}href="{{panelLink}}"{{/heroView.panelLink}} data-bgset="{{smallImageUrl}} [--small] |  {{imageUrl}}">
  </a>
  <div class="hero__inner">
    <div class="hero__body">
      {{#topLine}}<div class="hero__top-line">{{topLine}}</div>{{/topLine}}
      <h1 class="hero__headline">
        {{#panelLink}}<a class="hero__headline__link" href="{{panelLink}}">{{/panelLink}}{{title}}{{#panelLink}}</a>{{/panelLink}}
      </h1>
      {{#description}}<p class="hero__copy">{{description}}</p>{{/description}}
      {{#ctaLink}}{{#ctaLabel}}<a class="hero__cta" href="{{ctaLink}}">{{ctaLabel}}</a>{{/ctaLabel}}{{/ctaLink}}
    </div>
    {{#panelLink}}
      <a class="hero__shim" href="{{panelLink}}"></a>
    {{/panelLink}}
  </div>
  <section class="order-tray order-tray--chameleon js-order-tray"></section>
  {{#primaryHeroTile}}
    <section class="section section--large" data-context="promo group:{{heroView.title}}">
    <div class="promo-group-header promo-group-header--large">
    	<h3 class="promo-group-header__title">{{heroView.title}}</h3>
    	{{#heroView.subTitle}}<h4 class="promo-group-header__sub-title">{{heroView.subTitle}}</h4>{{/heroView.subTitle}}
    </div>
      {{> partials/slider/_slider_square_inline}}
    </section>
  {{/primaryHeroTile}}
</section> 
```
