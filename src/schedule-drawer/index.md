---
name:  Schedule Drawer
collection: components
---

# Schedule Drawer

This component (formerly known as Schedule Flyout) appears to the user only at `from-large` views, when clicking on the SCHEDULES link in the global navigation.  The schedule contains three cards. Each card is a separate title containing an air time, the name of the title, and the season and episode number if available. The Schedule Drawer will be rendered inside of it's parent component, Flyout Container.

Note: because of the full-width media query demands of this component's presentation, it is only viewed accurately here when the left side styleguide navigation is hidden.

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
				<a class="schedule-drawer__link--view-more" href="#">browse on demand and streaming <i class="icon icon--xsmall icon--next"></i></a>
		</div>
	</div>
</div>

```
<div class="schedule-drawer">
  <div class="schedule-drawer__inner">
    <ul class="schedule-drawer__list">
      {{#page.scheduleTray.tuneInList}}
      <li class="schedule-drawer__list-item">
        <a href="{{link}}" data-track data-label="schedule:{{title}}{{#subTitle}} {{subTitle}}{{/subTitle}}" data-location="tile {{iter.index}}"><img class="schedule-drawer__program-img" src="{{smallImageUrl}}"></a>
        <div class="schedule-drawer__program-time">
          {{tuneIn}} et/pt
        </div>
        <a class="schedule-drawer__program-title" href="{{link}}" data-track data-label="schedule:{{title}}{{#subTitle}} {{subTitle}}{{/subTitle}}" data-location="tile {{iter.index}}">
          {{title}}
        </a>
        {{#subTitle}}<a class="schedule-drawer__program-episode-number" href="{{link}}" data-track data-label="schedule:{{title}}{{#subTitle}} {{subTitle}}{{/subTitle}}" data-location="tile {{iter.index}}">{{subTitle}}</a>{{/subTitle}}
      </li>
      {{/page.scheduleTray.tuneInList}}
    </ul>
  </div>
  <div class="schedule-drawer__footer">
    <div class="schedule-drawer__footer__inner">
      <a class="schedule-drawer__link--view-more" href="/schedule" data-track data-label="schedule:linear">see full tv schedule <i class="icon icon--xsmall icon--next"></i></a>
      <div class="pipebar"></div>
      <a class="schedule-drawer__link--view-more" href="/on-demand/series" data-track data-label="schedule:on demand">browse on demand and streaming schedule <i class="icon icon--xsmall icon--next"></i></a>
    </div>
  </div>
</div>

```

<jsp-partials>styleguide/schedule-drawer/_schedule_drawer.jsp.md</jsp-partials>
<jsp-partials>styleguide/schedule-drawer/_schedule_drawer.jsp.md</jsp-partials>
<jsp-partials>styleguide/schedule-drawer/_schedule_drawer.jsp.md</jsp-partials>