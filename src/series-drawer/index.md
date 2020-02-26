---
name:  Series Drawer
collection: components
---

# Series Drawer

This component is rendered similar to the Schedule Drawer as a child of the Flyout Container when the SERIES link is clicked.

Note: because of the full-width media query demands of this component's presentation, it is only viewed accurately here when the left side styleguide navigation is hidden.

<div class="series-drawer">
  <div class="series-drawer__inner">
    <div class="series-drawer__container">
      <ul class="series-drawer__list">
        <li class="series-drawer__list-item">
          <a href="#"><img class="series-drawer__program-img" src="http://www.fpoimg.com/150x225?bg_color=edf9d2"></a>
          <div class="series-drawer__program-title">
            SHAMELESS
          </div>
        </li>
        <li class="series-drawer__list-item">
          <a href="#"><img class="series-drawer__program-img" src="http://www.fpoimg.com/150x225?bg_color=f9d2e6"></a>
          <div class="series-drawer__program-title">
            KIDDING
          </div>
        </li>
        <li class="series-drawer__list-item">
          <a href="#"><img class="series-drawer__program-img" src="http://www.fpoimg.com/150x225?bg_color=d2e8f9"></a>
          <div class="series-drawer__program-title">
            ESCAPE AT DANNEMORA
          </div>
        </li>
        <li class="series-drawer__list-item">
          <a href="#"><img class="series-drawer__program-img" src="http://www.fpoimg.com/150x225?bg_color=edf9d2"></a>
          <div class="series-drawer__program-title">
            HOMELAND
          </div>
        </li>
      </ul>
      <div class="series-drawer__text-list-container">
        <ul class="series-drawer__text-list">
          <li class="series-drawer__text-list__item">THE AFFAIR</li>
          <li class="series-drawer__text-list__item">BILLIONS</li>
          <li class="series-drawer__text-list__item">BLACK MONDAY</li>
          <li class="series-drawer__text-list__item">THE CHI</li>
          <li class="series-drawer__text-list__item">THE CIRCUS</li>
          <li class="series-drawer__text-list__item">ESCAPE AT DANNEMORA</li>
          <li class="series-drawer__text-list__item">THE FOURTH ESTATE</li>
          <li class="series-drawer__text-list__item">OUR CARTOON PRESIDENT</li>
          <li class="series-drawer__text-list__item">PATRICK MELROSE</li>
          <li class="series-drawer__text-list__item">SMILF</li>
          <li class="series-drawer__text-list__item">WHO IS AMERICA?</li>
        </ul>
        <a href="#">
          <div class="series-drawer__button">
            <span class="series-drawer__button__copy">VIEW ALL SERIES</span> <i class="series-drawer__button__icon icon icon--small icon--next"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>


```
<div class="series-drawer">
  {{#navigationSeriesFlyout}}
  <div class="series-drawer__inner">
    <div class="series-drawer__container">
    {{#featuredSeries}}
      <ul class="series-drawer__list">
        <li class="series-drawer__list-item">
          <a href="{{ctaLink}}" data-track data-label="series flyout:{{title}}" data-location="featured:tile {{iter.index}}">
            <img class="series-drawer__program-img" src={{imageUrl}}>
            <div class="series-drawer__program-title">
              <span class="caps">{{title}}</span>
            </div>
          </a>
        </li>
      </ul>
      {{/featuredSeries}}
      <div class="series-drawer__text-list-container">
        {{#series}}
        <ul class="series-drawer__text-list">
          <a href="{{ctaLink}}" data-track data-label="series flyout:{{title}}" data-location="list:position {{iter.index}}">
            <li class="series-drawer__text-list__item">
              <span class="caps">{{title}}</span>
            </li>
          </a>
        </ul>
        {{/series}}
          <a href="/series" data-track data-label="series flyout:see all">
            <div class="series-drawer__button">
              <span class="series-drawer__button__copy">VIEW ALL SERIES</span> <i class="series-drawer__button__icon icon icon--small icon--next"></i> 
            </div>
          </a>
      </div>
    </div>
  </div>
  {{/navigationSeriesFlyout}}
</div>
```