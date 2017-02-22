
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Footer (nav)</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_footer.jsp</h4></div>

```

<footer class="footer" data-context="footer">
	<div class="footer__schedule-section">
		<div class="footer__inner">
			<div class="footer__logo"></div>
			<div class="footer-order-promo">
				<h5 class="footer-order-promo__header">Have Showtime?</h5>
				<a href="#/stream/home/int-default-3671" data-track data-label="stream"><h3 class="footer-order-promo__link">Stream Showtime</h3></a>
				<h5 class="footer-order-promo__header">Want Showtime? Subscribe.</h5>
				<a href="/order" data-track data-label="order"><h3 class="footer-order-promo__link">Try it now for free</h3></a>
			</div>
			<div class="footer-schedule">
				<h4 class="footer-schedule__header">Tonight on Showtime</h4>
				<ul class="footer-schedule__list">
          {{#schedule.tuneInList}}
					<li class="footer-schedule__list-item">
							<div class="footer-schedule__program-time"><h4>{{tuneIn}}</h4><h5>ET/PT</h5></div>
							<div class="footer-schedule__meta">
								<a class="footer-schedule__program-title" href="{{link}}" data-track data-label="schedule:{{title}} {{subTitle}}" data-location="tile {{iter.index}}">{{title}}</a>
								<a class="footer-schedule__program-title--subtitle" href="{{link}}" data-track data-label="schedule:{{title}} {{subTitle}}">{{subTitle}}</a>
							</div>
					</li>
          {{/schedule.tuneInList}}
					<li class="footer-schedule__list-item">
						<div class="footer-schedule__program-time"><h4></h4><h5></h5></div>
						<a href="/schedule" data-track data-label="schedule:linear"><h4 class="footer-schedule__cta">See Schedule</h4></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	{{$footer_nav}}
		{{> partials/_footer_nav }}
	{{/footer_nav}}
</footer>

```
