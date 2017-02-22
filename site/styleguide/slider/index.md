---
name:  Slider
collection: components
---
# Slider

A Slider should
- provide a simple pagination strategy for a horizontal 'band' of content, by clicking or tapping on an arrow you reveal content that is offscreen
- _TODO_ handle differently sized cards (be agnostic about contents)
- provide a mechanism for jumping to a specific card (add a classname of `.slider__item` to each item)
- works on desktop and mobile and is swipeable
- the default rotation style is none
- _TODO_ add infinite rotation if configured with `data-rotate=infinite`
- to add the behavior where a grid is drawn at higher breakpoints add the attribute `data-grid-at=768` where the supplied integer is the window size above which the grid should be drawn
- by default the carousel snaps to an item on mobile to disable this functionality you can add `data-mobile-snap=false`

```html
<div class="slider js-slider">
  <a href="#" class="slider__control slider__control--prev">
    <span class="slider__control__label">previous</span>
  </a>
  <div class="slider__container">
    <div class="slider__content">
      <ul class="slider__items">
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 1</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 2</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 3</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 4</h5>
        </li>
      </ul>
    </div>
  </div>
  <a href="#" class="slider__control slider__control--next">
    <span class="slider__control__label">next</span>
  </a>
</div>
```

## Standard Slider

<div class="slider js-slider slider--example" data-debug="Standard">
  <a href="#" class="slider__control slider__control--prev">
    <span class="slider__control__label">previous</span>
  </a>
  <div class="slider__container">
    <div class="slider__content">
      <ul class="slider__items">
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 1</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 2</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 3</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 4</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 5</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 6</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 7</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 8</h5>
        </li>

      </ul>
    </div>
  </div>
  <a href="#" class="slider__control slider__control--next">
    <span class="slider__control__label">next</span>
  </a>
</div>

## Slider with Page Step and Mobile Snap Off

<div class="slider js-slider slider--example" data-step="page" data-mobile-snap="false">
  <a href="#" class="slider__control slider__control--prev">
    <span class="slider__control__label">previous</span>
  </a>
  <div class="slider__container">
    <div class="slider__content">
      <ul class="slider__items">
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 1</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 2</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 3</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 4</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 5</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 6</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 7</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 8</h5>
        </li>

      </ul>
    </div>
  </div>
  <a href="#" class="slider__control slider__control--next">
    <span class="slider__control__label">next</span>
  </a>
</div>

## Slider with a few items

<div class="slider js-slider slider--example">
  <a href="#" class="slider__control slider__control--prev">
    <span class="slider__control__label">previous</span>
  </a>
  <div class="slider__container">
    <div class="slider__content">
      <ul class="slider__items">
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 1</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 2</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 3</h5>
        </li>
      </ul>
    </div>
  </div>
  <a href="#" class="slider__control slider__control--next">
    <span class="slider__control__label">next</span>
  </a>
</div>

## Slider with Grid Behavior

<div class="slider js-slider slider--example" data-step="page" data-grid-at="768">
  <a href="#" class="slider__control slider__control--prev">
    <span class="slider__control__label">previous</span>
  </a>
  <div class="slider__container">
    <div class="slider__content">
      <ul class="slider__items">
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 1</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 2</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 3</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 4</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 5</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 6</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 7</h5>
        </li>
        <li class="slider__item slider-example__item">
          <em class="slider-example__image"></em>
          <h5>item 8</h5>
        </li>

      </ul>
    </div>
  </div>
  <a href="#" class="slider__control slider__control--next">
    <span class="slider__control__label">next</span>
  </a>
</div>

## Slider of Season Cards


<div class="slider js-slider slider--season" data-step="page">
  <a href="#" class="slider__control slider__control--prev">
    <span class="slider__control__label">previous</span>
  </a>
  <div class="slider__container">
    <div class="slider__content">
      <ul class="slider__items">
        <li class="slider__item">
          <figure class="promo promo--season">
            <div class="promo__image lazyload"  data-bgset="http://www.sho.com/site/image-bin/images/804_5_0/804_5_0_01_300x300.jpg [--small] |  http://www.sho.com/site/image-bin/images/804_5_0/804_5_0_01_480x270.jpg">
            </div>
            <figcaption class="promo__body">
              <h3 class="promo__headline">Season 5</h3>
              <p class="promo__copy">Volatile CIA agent Carrie Mathison investigates and ultimately becomes obsessed with returned POW marine Nicholas Brody, who may or may not be an al-Qaeda-trained terrorist; Brody struggles to resume his domestic life with his wife and two children whom he barely knows; Saul tries his best to support his bipolar protégé while pursuing leads of his own and trying to hold his crumbling marriage together.</p>
            </figcaption>
            <a class="promo__link" href="#">Season 5</a>
          </figure>
        </li>
        <li class="slider__item">
          <figure class="promo promo--season">
            <div class="promo__image lazyload"  data-bgset="http://www.sho.com/site/image-bin/images/804_4_0/804_4_0_01_300x300.jpg [--small] |  http://www.sho.com/site/image-bin/images/804_4_0/804_4_0_01_480x270.jpg">
            </div>
            <figcaption class="promo__body">
              <h3 class="promo__headline">Season 4</h3>
              <p class="promo__copy">Carrie goes to extraordinary lengths to solve the latest crisis at the CIA while dealing with a deeply personal secret; Brody struggles to survive; Saul must walk a tightrope and play many opposing sides to keep his job at the CIA and try to revive his troubled marriage; Quinn has a crisis of faith.</p>
            </figcaption>
            <a class="promo__link" href="#">Season 4</a>
          </figure>
        </li>
        <li class="slider__item">
          <figure class="promo promo--season">
            <div class="promo__image lazyload" data-bgset="http://www.sho.com/site/image-bin/images/804_3_0/804_3_0_01_300x300.jpg [--small] |  http://www.sho.com/site/image-bin/images/804_3_0/804_3_0_01_480x270.jpg">
            </div>
            <figcaption class="promo__body">
              <h3 class="promo__headline">Season 3</h3>
              <p class="promo__copy">Carrie goes to extraordinary lengths to solve the latest crisis at the CIA while dealing with a deeply personal secret; Brody struggles to survive; Saul must walk a tightrope and play many opposing sides to keep his job at the CIA and try to revive his troubled marriage; Quinn has a crisis of faith.</p>
            </figcaption>
            <a class="promo__link" href="#">Season 3</a>
          </figure>
        </li>
        <li class="slider__item">
          <figure class="promo promo--season">
            <div class="promo__image lazyload" data-bgset="http://www.sho.com/site/image-bin/images/804_2_0/804_2_0_01_300x300.jpg [--small] |  http://www.sho.com/site/image-bin/images/804_2_0/804_2_0_01_480x270.jpg">
            </div>
            <figcaption class="promo__body">
              <h3 class="promo__headline">Season 2</h3>
              <p class="promo__copy">Carrie's CIA career takes off when she becomes an overseas station chief, but every drone strike and tactical raid comes at a cost and she quickly learns the true price of power. Saul fights to stay in the intelligence game.</p>
            </figcaption>
            <a class="promo__link" href="#">Season 2</a>
          </figure>
        </li>
        <li class="slider__item">
          <figure class="promo promo--season">
            <div class="promo__image lazyload" data-bgset="http://www.sho.com/site/image-bin/images/804_1_0/804_1_0_01_300x300.jpg [--small] |  http://www.sho.com/site/image-bin/images/804_1_0/804_1_0_01_480x270.jpg">
            </div>
            <figcaption class="promo__body">
              <h3 class="promo__headline">Season 1</h3>
              <p class="promo__copy">The game has changed for Carrie Mathison. Out of the CIA and living in Berlin, Carrie is trying to start a new life but realizes now she's the one with a target on her back. As the danger intensifies, and without Saul and Quinn to rely on, one thing becomes clear  she's never been at greater risk or with more to lose.</p>
            </figcaption>
            <a class="promo__link" href="#">Season 1</a>
          </figure>
        </li>
      </ul>
    </div>
  </div>
  <a href="#" class="slider__control slider__control--next">
    <span class="slider__control__label">next</span>
  </a>
</div>

