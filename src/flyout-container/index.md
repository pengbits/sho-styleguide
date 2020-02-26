---
name:  Flyout Container
collection: components
---


# Flyout Container

This component appears to the user only at `from-large` views, when clicking on the SERIES or SCHEDULES links in the global navigation.  The Flyout Container will wrap either the Series Drawer of the Schedule Drawer, depending on which link was clicked. 

Note: because of the full-width media query demands of this component's presentation, it is only viewed accurately here when the left side styleguide navigation is hidden.

<br> 
with Schedule Drawer
<div class="flyout-container">
		<div class="flyout-container__inner">
			<div class="schedule-drawer">
				<div class="schedule-drawer__inner">
					<ul class="schedule-drawer__list">
						<li class="schedule-drawer__list-item">
							<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/150x225?bg_color=edf9d2"></a>
							<div class="schedule-drawer__program-time">
							8:30pm et/pt
							</div>
							<div class="schedule-drawer__program-title">
							Masters of Sex
							</div>
							<div class="schedule-drawer__program-episode-number">
							s3:e10
							</div>
						</li>
						<li class="schedule-drawer__list-item">
							<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/150x225?bg_color=f9d2e6"></a>
							<div class="schedule-drawer__program-time">
								9:45pm et/pt
							</div>
							<div class="schedule-drawer__program-title">
								What If?
							</div>
						</li>
						<li class="schedule-drawer__list-item">
							<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/150x225?bg_color=d2e8f9"></a>
							<div class="schedule-drawer__program-time">
								11:30pm et/pt
							</div>
							<div class="schedule-drawer__program-title">
								A Season With Notre Dame Football
							</div>
							<div class="schedule-drawer__program-episode-number">
								s2:e09
							</div>
						</li>
					</ul>
				</div>
				<div class="schedule-drawer__footer">
					<div class="schedule-drawer__footer__inner">
						<a class="schedule-drawer__link--view-more" href="/schedule" data-track data-label="schedule:linear">see full tv schedule <i class="icon icon--xsmall icon--next"></i></a>
						<div class="pipebar"></div>
						<a class="schedule-drawer__link--view-more" href="#">browse on demand and streaming <i class="icon icon--xsmall icon--next-red"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div> 

with Series Drawer
<div class="flyout-container">
  <div class="flyout-container__inner">
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
                <span class="series-drawer__button__copy">VIEW ALL SERIES</span> <i class="series-drawer__button__icon icon icon icon--small icon--next"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 

```
<div class="flyout-container">
  <div class="flyout-container__inner">
    <i class="flyout-container__icon-close"></i>
    {{> /partials/_series_drawer}}
    {{> /partials/_schedule_drawer}}
  </div>
</div>
```