---
name: Hero Video
collection: components
---

# Hero Video

This appears on /order. Video only loads above `size-large` breakpoint. Note, the width of hero__body is different in the /order context. 

**_NOTE_**: This video player MUST have a 'muted' attribute, otherwise autoplay is inconsistent due to browsers blocking autoplay of non-silent videos

<div class="asymmetrical-hero-container">
	<section class="hero hero--no-accent hero--video hero--order js-hero-video">
		<a class="hero__image lazyload"  data-bgset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-varietyhero0118_568x426.jpg [--small] |  https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-varietyhero0118_1700x1063.jpg">
		</a>
		<main class="video-player-standard">
		<div class="video-player">
			<div class="video-player__video">
				<div class="video-player__video__inner">
					<video
						id="video-player"
						class="video-playr__video__embed video-js"
						style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;"
						data-account="63128"
						data-player="VycdXcW3l"
						data-embed="default"
						data-video-id="5849526338001"
						data-age-gate="0"
						data-full-episode="false"
						controls="false"
						loop
            muted
            autoplay
						poster="https://downloads.sho.com/images/optimizely/sizzle-reel-poster-v2.jpg">
          </video>
					<script src="//players.brightcove.net/63128/VycdXcW3l_default/index.min.js"></script>
				</div>
			</div>
		</div>
	</main>
		<div class="hero__inner">
			<div class="hero__body">
				<h1 class="hero__headline">
					START WATCHING SHOWTIME
				</h1>
				<p class="hero__copy">Get instant access to commercial-free, award-winning SHOWTIME original series, can&#39;t-miss movies, groundbreaking documentaries, laugh-out-loud comedy specials, hard-hitting sports and much more. Watch live TV or catch up on-demand on your TV, tablet, phone or computer. Plus, you can download full episodes and movies to your favorite mobile devices and watch them offline, whenever and wherever.</p>
			</div>
		</div>
	</section>
</div>

```
	<section class="hero hero--no-accent hero--video hero--order js-hero-video">
		<a class="hero__image lazyload"  data-bgset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-varietyhero0118_568x426.jpg [--small] |  https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-varietyhero0118_1700x1063.jpg">
		</a>
		<main class="video-player-standard">
		<div class="video-player">
			<div class="video-player__video">
				<div class="video-player__video__inner">
					<video
						id="video-player"
						class="video-playr__video__embed video-js"
						style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;"
						data-account="63128"
						data-player="VycdXcW3l"
						data-embed="default"
						data-video-id="5849526338001"
						data-age-gate="0"
						data-full-episode="false"
						controls="false"
						loop
            muted
            autoplay
						poster="https://downloads.sho.com/images/optimizely/sizzle-reel-poster-v2.jpg">
          </video>
				</div>
			</div>
		</div>
	</main>
		<div class="hero__inner">
			<div class="hero__body">
				<h1 class="hero__headline">
					START WATCHING SHOWTIME
				</h1>
				<p class="hero__copy">Get instant access to commercial-free, award-winning SHOWTIME original series, can&#39;t-miss movies, groundbreaking documentaries, laugh-out-loud comedy specials, hard-hitting sports and much more. Watch live TV or catch up on-demand on your TV, tablet, phone or computer. Plus, you can download full episodes and movies to your favorite mobile devices and watch them offline, whenever and wherever.</p>
			</div>
		</div>
	</section>
	```