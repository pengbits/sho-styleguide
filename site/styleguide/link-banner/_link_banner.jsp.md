
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Link Banner</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_link_banner.jsp</h4></div>

```


<div class="link-banner">
  <a class="link-banner__link  {{#iter.isLast}}link-banner__link--last{{/iter.isLast}}" href="{{ctaLink}}" data-track data-label="{{ctaType}}:{{title}}:{{subTitle}}" data-location="tile {{iter.index}}">
    <img class="link-banner__image" src="{{imageUrl}}">
    <div class="link-banner__title-container">
      <h3 class="link-banner__title">{{title}}</h3>
      <h4 class="link-banner__sub-title">{{subTitle}}</h4>
    </div>
    <h5 class="link-banner__availability">{{scheduleCallOut}}</h5>
      <h4 class="link-banner__info link-banner__info--highlight">{{ctaLabel}}</h4>
    <i class="link-banner__more"></i>
  </a>
</div> 
```
