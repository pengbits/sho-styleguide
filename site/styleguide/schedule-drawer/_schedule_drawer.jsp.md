
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Schedule Drawer</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_schedule_drawer.jsp</h4></div>

```

<div class="schedule-drawer" data-context="global navigation">
  <div class="schedule-drawer__inner">
    <i class="schedule-drawer__icon-close" data-track data-label="schedule close"></i>
    <div class="schedule-drawer--header">
      Tonight on <span class="showtime-logo">Showtime</span>
    </div>
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
    <a class="schedule-drawer__link--view-more" href="/schedule" data-track data-label="schedule:linear">see full tv schedule <i class="icon icon--xsmall icon--next"></i></a>
  </div>
  <div class="schedule-drawer__footer">
    <div class="schedule-drawer__footer__inner">
  	  <a class="schedule-drawer__link--view-more" href="/on-demand" data-track data-label="schedule:on demand">browse on demand and streaming schedule <i class="icon icon--xsmall icon--next"></i></a>
    </div>
  </div>
</div>

```
