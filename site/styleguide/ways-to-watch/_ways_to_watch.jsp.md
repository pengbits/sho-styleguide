
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">"ways to watch"</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_ways_to_watch.jsp</h4></div>

```

<div class="section--large section--inner ways-to-watch" data-context="ways to watch">
    <div class="ways-to-watch__section ways-to-watch__section--linear">
        <h4 class="ways-to-watch__headline">{{linear.source}}</h4>
        <p class="ways-to-watch__date_time">{{linear.tuneIn}}</p>
        <p class="ways-to-watch__copy">{{linear.copy}}</p>
        <a class="ways-to-watch__link ways-to-watch__link--linear" href="/schedule" data-track data-label="schedule:linear">SEE TV SCHEDULE</a>
    </div>
    <div class="ways-to-watch__section ways-to-watch__section--on-demand">
        <h4 class="ways-to-watch__headline">{{onDemand.source}}</h4>
        <p class="ways-to-watch__copy">{{onDemand.tuneIn}}</p>
       <a class="ways-to-watch__link ways-to-watch__link--on-demand" href="/on-demand" data-track data-label="schedule:on demand">SEE SCHEDULE</a>
    </div>
    <div class="ways-to-watch__stream">
        <div class="ways-to-watch__headline-wrapper">
            <h4 class="ways-to-watch__headline">{{streaming.tuneIn}}</h4>
        </div>
        <a class="ways-to-watch__button button--solid-red" href="{{streaming.ctaLink}}" data-track data-label="{{$promoType}}{{/promoType}}">{{streaming.ctaLabel}}</a>
    </div>
</div>

```
