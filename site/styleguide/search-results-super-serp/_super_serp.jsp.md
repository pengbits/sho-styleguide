
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Search Results - Super SERP</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/search/_super_serp.jsp</h4></div>

```

<div class="super-serp">
	<h1 class="super-serp__header">{{primarySerp.title}}</h1>
	<picture class="super-serp__image">
		<source media="(max-width: 991px)"
		data-srcset="{{imageUrl}}">
		<source media="(min-width: 992px)"
		data-srcset="{{smallImageUrl}}">
		<img class="lazyload" alt="Homeland" src="http://www.sho.com/assets/images/lib/blank.gif">
		{{#waysToWatch.streaming.ctaLink}}
		<div class="super-serp__button-container">
			<a class="super-serp__button button--solid-red" href="{{waysToWatch.streaming.ctaLink}}" data-track data-search-term="{{searchedWord}}" data-context="search results:series:{{primarySerp.shortTitle}}" data-label="stream">Watch Now</a>
		</div>
		{{/waysToWatch.streaming.ctaLink}}
	</picture>
	<div class="super-serp__links">
		{{#link}}
		<a class="super-serp__link" href="{{link}}" data-track data-search-term="{{searchedWord}}" data-context="search results:series:{{primarySerp.shortTitle}}" data-label="about">
			<div class="super-serp__link-text">
				<h4 class="super-serp__link-title">About</h4>
			</div>
		</a>
		{{/link}}
		{{#episodeUrl}}
		<a class="super-serp__link" href="{{episodeUrl}}" data-track data-search-term="{{searchedWord}}" data-context="search results:series:{{primarySerp.shortTitle}}" data-label="episode guide">
			<div class="super-serp__link-text">
				<h4 class="super-serp__link-title">Episode Guide</h4>
			</div>	
		</a>
		{{/episodeUrl}}
		{{#castUrl}}
		<a class="super-serp__link" href="{{castUrl}}" data-track data-search-term="{{searchedWord}}" data-context="search results:series:{{primarySerp.shortTitle}}" data-label="cast">
			<div class="super-serp__link-text">
				<h4 class="super-serp__link-title">Cast</h4>
			</div>	
		</a>
		{{/castUrl}}
		{{#fullEpisode}}
		<a class="super-serp__link" href="{{fullEpisode}}" data-track data-search-term="{{searchedWord}}" data-context="search results:series:{{primarySerp.shortTitle}}" data-label="free full episode">
			<div class="super-serp__link-video lazyload" data-bgset="http://www.sho.com/site/image-bin/images/804_1_0/804_1_0_01_140x80.jpg"></div>
			<div class="super-serp__link-text">
				<h4 class="super-serp__link-title">Free Full Episode</h4>
			</div>
		</a>
		{{/fullEpisode}}
		{{#trailer}}
		<a class="super-serp__link" href="{{link}}" data-track data-search-term="{{searchedWord}}" data-context="search results:series:{{primarySerp.shortTitle}}" data-label="trailer video">
			<div class="super-serp__link-video lazyload" data-bgset="{{imageUrl}}"></div>
			<div class="super-serp__link-text">
				<h4 class="super-serp__link-title">Trailer</h4>
			</div>
		</a>
		{{/trailer}}
	</div>
</div>
```
