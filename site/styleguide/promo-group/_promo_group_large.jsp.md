
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Promo Group Large</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_promo_group_large.jsp</h4></div>

```



<section class="promo-group promo-group--one-beside-two section--inner" data-context="promo group">
  {{#tileList}}
    <figure class="promo promo--docked promo--{{type}} {{#iter.isFirst}}promo--large{{/iter.isFirst}}  {{^iter.isFirst}}promo--split-right{{/iter.isFirst}}">
      <div class="promo__image lazyload" data-bgset="{{imageUrl}}">
      </div>
      <figcaption class="promo__body">
        <h3 class="promo__headline">{{title}}</h3> 
        {{#iter.isFirst}}<p class="promo__copy">{{subTitle}}</p>{{/iter.isFirst}}
      </figcaption>
      {{#ctaLink}}<a class="promo__link" href="{{ctaLink}}" data-track data-label="{{ctaType}}:{{title}}" data-location="tile {{iter.index}}">{{title}}</a>{{/ctaLink}}
    </figure>
  {{/tileList}}
</section>
```
