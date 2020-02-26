---
name: Link Banner
collection: components
---

# Link Banner

The link banner is a jumbo-sized link element, that spans the full width of the page and includes a disclosure-style icon (>).

## On Demand

<!-- link-banner gets wrapped with p tags without this section tag because of markdown? -->
<section>
	<div class="link-banner">
		<a class="link-banner__link" href="#">
			<img class="link-banner__image" src="https://www.sho.com/site/image-bin/images/1031103_0_0/1031103_0_0_97_100x150.jpg">
			<div class="link-banner__title-container">
				<h3 class="link-banner__title">The Affair</h3>
				<h4 class="link-banner__sub-title">24 Episodes</h4>
			</div>
			<h5 class="link-banner__availability"></h5>
			<h4 class="link-banner__info link-banner__info--highlight"></h4>
			<i class="link-banner__more"></i>
		</a>
	</div>
	<div class="link-banner">
		<a class="link-banner__link" href="#">
			<img class="link-banner__image" src="https://www.sho.com/site/image-bin/images/1002762_0_0/1002762_0_0_97_100x150.jpg">
			<div class="link-banner__title-container">
				<h3 class="link-banner__title">Masters of Sex</h3>
				<h4 class="link-banner__sub-title">S3:E10 - Through a Glass, Darkly</h4>
			</div>
			<h5 class="link-banner__availability">Not Available For Streaming</h5>
			<h4 class="link-banner__info">Jan. 18th</h4>
			<i class="link-banner__more"></i>
		</a>
	</div>
	<div class="link-banner">
		<a class="link-banner__link" href="#">
			<img class="link-banner__image" src="https://www.sho.com/site/image-bin/images/1003223_0_0/1003223_0_0_97_100x150.jpg">
			<div class="link-banner__title-container">
				<h3 class="link-banner__title">Penny Dreadful</h3>
				<h4 class="link-banner__sub-title">S2:E3 - The Nightmare</h4>
			</div>
			<h5 class="link-banner__availability"></h5>
			<h4 class="link-banner__info link-banner__info--highlight">New Episode</h4>
			<i class="link-banner__more"></i>
		</a>
	</div>
</section>

```html
<div class="link-banner">
	<a class="link-banner__link" href="#">
		<img class="link-banner__image" src="https://www.sho.com/site/image-bin/images/1031103_0_0/1031103_0_0_97_100x150.jpg">
		<div class="link-banner__title-container">
			<h3 class="link-banner__title">The Affair</h3>
			<h4 class="link-banner__sub-title">24 Episodes</h4>
		</div>
		<h5 class="link-banner__availability"></h5>
		<h4 class="link-banner__info link-banner__info--highlight"></h4>
		<i class="link-banner__more"></i>
	</a>
</div>
<div class="link-banner">
	<a class="link-banner__link" href="#">
		<img class="link-banner__image" src="https://www.sho.com/site/image-bin/images/1002762_0_0/1002762_0_0_97_100x150.jpg">
		<div class="link-banner__title-container">
			<h3 class="link-banner__title">Masters of Sex</h3>
			<h4 class="link-banner__sub-title">S3:E10 - Through a Glass, Darkly</h4>
		</div>
		<h5 class="link-banner__availability">Not Available For Streaming</h5>
		<h4 class="link-banner__info">Jan. 18th</h4>
		<i class="link-banner__more"></i>
	</a>
</div>
<div class="link-banner">
	<a class="link-banner__link" href="#">
		<img class="link-banner__image" src="https://www.sho.com/site/image-bin/images/1003223_0_0/1003223_0_0_97_100x150.jpg">
		<div class="link-banner__title-container">
			<h3 class="link-banner__title">Penny Dreadful</h3>
			<h4 class="link-banner__sub-title">S2:E3 - The Nightmare</h4>
		</div>
		<h5 class="link-banner__availability"></h5>
		<h4 class="link-banner__info link-banner__info--highlight">New Episode</h4>
		<i class="link-banner__more"></i>
	</a>
</div>
```

## EST

<section>
	<div class="link-banner">
		<a class="link-banner__link--est" href="#">
			<div class="link-banner__title-container--est">
				<h3 class="link-banner__title--est">iTunes</h3>
			</div>
			<i class="link-banner__more--est"></i>
		</a>
	</div>
	<div class="link-banner">
		<a class="link-banner__link--est" href="#">
			<div class="link-banner__title-container--est">
				<h3 class="link-banner__title--est">Google Play</h3>
			</div>
			<i class="link-banner__more--est"></i>
		</a>
	</div>
	<div class="link-banner">
		<a class="link-banner__link--est" href="#">
			<div class="link-banner__title-container--est">
				<h3 class="link-banner__title--est">Sony Entertainment Network</h3>
			</div>
			<i class="link-banner__more--est"></i>
		</a>
	</div>
</section>

```html
<div class="link-banner">
	<a class="link-banner__link--est" href="#">
		<div class="link-banner__title-container--est">
			<h3 class="link-banner__title--est">iTunes</h3>
		</div>
		<i class="link-banner__more--est"></i>
	</a>
</div>
<div class="link-banner">
	<a class="link-banner__link--est" href="#">
		<div class="link-banner__title-container--est">
			<h3 class="link-banner__title--est">Google Play</h3>
		</div>
		<i class="link-banner__more--est"></i>
	</a>
</div>
<div class="link-banner">
	<a class="link-banner__link--est" href="#">
		<div class="link-banner__title-container--est">
			<h3 class="link-banner__title--est">Sony Entertainment Network</h3>
		</div>
		<i class="link-banner__more--est"></i>
	</a>
</div>
```

<jsp-partials>styleguide/link-banner/_link_banner.jsp.md</jsp-partials>