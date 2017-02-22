
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">footer nav</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_footer_nav.jsp</h4></div>

```

<div class="footer__nav-section">
	<div class="footer__inner">
		<div class="footer-nav">
			<ul class="footer-nav__links--sho">
				<li><a href="/video/full-episodes" data-track data-label="free full episodes">Free Full Episodes</a></li>
				<li><a href="http://store.sho.com/?ecid=PRF-SHO-S02166&pa=PRF-SHO-S02166" data-track data-label="shop">Shop</a></li>
				<li><a href="http://www.sho.com/careers" data-track  data-label="careers">Careers</a></li>
				<li><a href="http://www.sho.com/help" data-track data-label="faq">FAQ</a></li>
				<li><a href="/about" data-track  data-label="about">About</a></li>
				<li><a href="http://www.sho.com/contact" data-track  data-label="contact">Contact</a></li>
				<li><a href="/sho/showtime-anytime" data-track data-label="showtime anytime">Showtime Anytime</a></li>
				<li><a href="http://www.showtime.com/?i_cid=int-default-1010" data-track data-label="showtime.com">Showtime.com</a></li>
			</ul>
			{{#socialLinkMap}}
			<ul class="footer-nav__links--social">
				<li><a class="icon--twitter" href="{{TWITTER.socialURL}}" data-track data-label="twitter">twitter</a></li>
				<li><a class="icon--facebook" href="{{FACEBOOK.socialURL}}" data-track  data-label="facebook">facebook</a></li>
				<li><a class="icon--instagram" href="{{INSTAGRAM.socialURL}}" data-track data-label="instagram">instagram</a></li>
				<li><a class="icon--pinterest" href="{{PINTEREST.socialURL}}" data-track data-label="pinterest">pinterest</a></li>
				<li><a class="icon--youtube" href="{{YouTube.socialURL}}" data-track data-label="youtube">youtube</a></li>
			</ul>
			{{/socialLinkMap}}
		</div>
		<div class="footer__disclaimer">
			<p>By viewing our video content you are accepting the terms of our <a href="/about/video-services" data-track data-label="services policy">Video Services Policy</a>.</p>
			<p>This website is intended for viewing solely in the United States and its territories and possessions.</p>
			<p>This website may contain adult content.</p>
			<p><a href="/about/privacy" data-track data-label="privacy policy">Privacy Policy</a> | <a href="/about/terms" data-track  data-label="terms of use">Terms of Use</a> | <a href="/about/closed-captioning" data-track data-label="closed captioning">Closed Captioning</a> | <a href=" /about/mobile-eula" data-track data-label="mobile user agreement">Mobile User Agreement</a></p>
			<p>&#169; 2016 Showtime Networks Inc. and Showtime Digital Inc. All rights reserved.</p>
		</div>
	</div>
</div>
```
