
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Promo Group with Header</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_promo_group_with_header.jsp</h4></div>

```


<section class="section {{$sectionClasses}}{{/sectionClasses}} section--pad-more" id="{{$sectionId}}{{/sectionId}}" data-context="promo group:{{heading}}">
  <div class="promo-group-header">
    <h3 class="promo-group-header__title">{{heading}}</h3>
  </div>
  <div class="slider js-slider slider--from-square slider--no-shaders" data-step="page" data-grid-at="767">
    <a href="#" class="slider__control slider__control--prev">
      <span class="slider__control__label">previous</span>
    </a>
    <div class="slider__container">
      <div class="slider__content">
        <ul class="slider__items promo-group promo-group--to-three-up">
          {{#tileList}}
            <li class="promo promo--docked promo--square promo--large slider__item">
              <div class="promo__image lazyload" data-bgset="{{imageUrl}}">
              </div>
              <div class="promo__body">
                <h3 class="promo__headline">{{title}}</h3>
                {{#subTitle}}<p class="promo__copy">{{subTitle}}</p>{{/subTitle}}
              </div>
              <a class="promo__link" href="{{ctaLink}}" data-track data-label="{{ctaType}}:{{title}}" data-location="tile {{iter.index}}">{{title}}</a>
            </li>
          {{/tileList}}
        </ul>
      </div>
    </div>
    <a href="#" class="slider__control slider__control--next">
      <span class="slider__control__label">next</span>
    </a>
  </div>
</section>
```
