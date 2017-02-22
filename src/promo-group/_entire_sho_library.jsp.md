
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">entire sho library</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_entire_sho_library.jsp</h4></div>

```


<!-- the last promo returned is expected to be an order promo -->
<section class="entire-sho-library">
  <h3 class="section-header">{{heading}}</h3>
  <section class="promo-group promo-group--from-list promo-group--to-three-up">
    {{#tileList}}
      {{^isOrder}}
        <figure class="promo promo--square promo--docked promo--large">
          <div class="promo__image lazyload" data-bgset="{{imageUrl}}">
          </div>
          <figcaption class="promo__body">
            <h3 class="promo__headline">{{title}}</h3>
          </figcaption>
          <a class="promo__link" href="{{ctaLink}}" data-track data-context="library footer" data-label="{{title}}:{{subTitle}}" data-location="tile {{iter.index}}">{{title}}</a>
        </figure>
      {{/isOrder}}
      {{#isOrder}}
        <div class="order-promo order-promo--large">
          <div class="order-promo__body">
            <h3 class="order-promo__headline">{{title}}</h3>
            {{#subTitle}}<p class="order-promo__copy">{{subTitle}}</p>{{/subTitle}}
          </div>
          <a class="order-promo__button" href="{{ctaLink}}" data-track data-context="library footer" data-label="order">
            {{ctaLabel}}
          </a>
        </div>
      {{/isOrder}}
    {{/tileList}}
  </section>
</section>

```
