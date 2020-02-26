---
name: Sections
collection: components
---

# Sections

The section class name is available for consistency in applying bottom margins to page sections.

<section class="section section--black">
  <div class="promo-group-header">
    <h3 class="promo-group-header__title">All Showtime Series</h3>
  </div>
</section>

```
<section class="section">
  <div class="promo-group-header">
    <h3 class="promo-group-header__title">All Showtime Series</h3>
  </div>
</section>
```

Here are the current variants available for bottom margins:  

```
.section                  // (40px bottom margin at all breakpoints)  
.section--large           // (40px below medium, 80px medium and above)  
.section--extra-large     // (80px below medium, 120px medium and above)  
```


## section--inner

The section--inner class name is considered a variant that could apply to the element with the section class, and this essentially just extends the full-width-container__inner placeholder, as seen below.

<section class="section section--black section--inner">
  <div class="promo-group-header">
    <h3 class="promo-group-header__title">All Showtime Series</h3>
  </div>
</section>

```
<section class="section section--black section--inner">
  <div class="promo-group-header">
    <h3 class="promo-group-header__title">All Showtime Series</h3>
  </div>
</section>
```  
<br><br>

The section--gradient variation include a subtle background gradient from top to bottom. Here is an example where the section background needs to apply across the entire width of the container, but the inner contents of the section should be constrained by the full-width-container__inner placeholder's styles. So here, the section--inner classname is applied to an inner element.

<section class="section section--gradient">
  <div class="section--inner">
    <div class="promo-group-header">
      <h3 class="promo-group-header__title">All Showtime Series</h3>
    </div>
    <div class="slider js-slider slider--from-square slider--grid" data-step="page" data-grid-at="767">
      <a href="#" class="slider__control slider__control--prev" style="display: none;">
        <span class="slider__control__label">previous</span>
      </a>
      <div class="slider__container">
        <div class="slider__content" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); left: 0px;">
          <ul class="slider__items promo-group promo-group--to-three-up">
              <li class="promo promo--docked promo--square promo--large slider__item">
                <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/323_0_0/323_0_0_01_568x568.jpg" ></div>
                <div class="promo__body">
                  <h3 class="promo__headline">Dexter</h3>
                </div>
                <a class="promo__link" href="/sho/dexter/home">Dexter</a>
              </li>
              <li class="promo promo--docked promo--square promo--large slider__item">
                <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/411_0_0/411_0_0_01_568x568.jpg" ></div>
                <div class="promo__body">
                  <h3 class="promo__headline">Californication</h3>
                </div>
                <a class="promo__link" href="/sho/californication/home">Californication</a>
              </li>
              <li class="promo promo--docked promo--square promo--large slider__item">
                <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/754_0_0/754_0_0_01_568x568.jpg" ></div>
                <div class="promo__body">
                  <h3 class="promo__headline">The Borgias</h3>
                </div>
                <a class="promo__link" href="/sho/the-borgias/home">The Borgias</a>
              </li>
          </ul>
        </div>
      </div>
      <a href="#" class="slider__control slider__control--next" style="display: none;">
        <span class="slider__control__label">next</span>
      </a>
    </div>
  </div>
</section>

```
<section class="section section--gradient">
  <div class="section--inner">
    ...
  </div>
</section>
```
