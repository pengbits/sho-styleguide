
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Search Results List</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/search/_serp_list_item.jsp</h4></div>

```

<li class="search-results__list-item search-results__list-item--{{type}}">
	<div class="search-results__image">
		<a class="search-results__link" href="{{link}}" data-track data-search-term="{{searchedWord}}" data-context="search results" data-label="{{#isEq type 'video'}}video:{{/isEq}}{{title}}">
			<img src="{{imageUrl}}">
			<h6 class="search-results__video-duration">{{time}}</h6>
		</a>
	</div>
	<div class="search-results__text">
		<a class="search-results__link" href="{{link}}" data-track data-search-term="{{searchedWord}}" data-context="search results" data-label="{{#isEq type 'video'}}video:{{/isEq}}{{title}}">
			<h4 class="search-results__title">{{title}}</h4>
		</a>
		<h5 class="search-results__price"><span class="search-results__price--sale"></span> </h5>
		<p class="search-results__description">{{description}}</p>
	</div>
</li>
```
