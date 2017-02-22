
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Global Navigation</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/_global_navigation.jsp</h4></div>

```

<nav class="global-navigation js-global-navigation" data-context="global navigation">
	<div class="global-navigation__inner">

    <{{$nav_logo_element}}span{{/nav_logo_element}}>
      <a class="global-navigation__logo" href="/" data-track data-label="home">Showtime</a>
    </{{$nav_logo_element}}span{{/nav_logo_element}}>

		<div class="global-navigation__menu-toggle">
			<div class="global-navigation__menu-icon" data-track data-label="menu open">
				<span></span>
			    <span></span>
			    <span></span>
			    <span></span>
			</div>
			<ul class="global-navigation__breadcrumb">
				{{#page.meta.valueMap.navigationSectionName}}
          <li class="global-navigation__breadcrumb-item">
            {{#page.meta.valueMap.hasNavigationSectionLink}}{{#page.meta.valueMap.navigationSectionLink}}<a href="{{page.meta.valueMap.navigationSectionLink}}" data-track data-label="{{{page.meta.valueMap.navigationSectionName}}}">{{/page.meta.valueMap.navigationSectionLink}}{{/page.meta.valueMap.hasNavigationSectionLink}}
              {{{page.meta.valueMap.navigationSectionName}}}
            {{#page.meta.valueMap.hasNavigationSectionLink}}{{#page.meta.valueMap.navigationSectionLink}}</a>{{/page.meta.valueMap.navigationSectionLink}}{{/page.meta.valueMap.hasNavigationSectionLink}}
          </li>
        {{/page.meta.valueMap.navigationSectionName}}
        {{#page.meta.valueMap.navigationPageName}}
          <li class="global-navigation__breadcrumb-item">
            {{{page.meta.valueMap.navigationPageName}}}
          </li>
        {{/page.meta.valueMap.navigationPageName}}
			</ul>
		</div>
		<div class="global-navigation__primary">
			<ul class="global-navigation__primary-menu">
				<li class="global-navigation__primary-menu-item">
          <a id="series" href="/series" data-track data-label="series">Series</a>
        </li>
				<li class="global-navigation__primary-menu-item">
          <a id="movies" href="/movies" data-track data-label="movies">Movies</a>
        </li>
				<li class="global-navigation__primary-menu-item">
          <a id="sports" href="/sports" data-track data-label="sports">Sports</a>
        </li>
				<li class="global-navigation__primary-menu-item">
          <a id="docs" href="/documentaries" data-track data-label="documentaries">Documentaries</a>
        </li>
				<li class="global-navigation__primary-menu-item">
          <a id="comedy" href="/comedy" data-track data-label="comedy">Comedy</a>
        </li>
			</ul>
		</div>
		<div class="global-navigation__search-bar">
			<form id="results-search-form" class="form--dark" action="/sho/search" method="GET">
				<input class="global-navigation__search-field" id="searchField" name="q" value="" placeholder="SEARCH" type="text" class="text">
			</form>
		</div>
		<div class="global-navigation__right">
			<ul class="global-navigation__right-menu">
				<li class="global-navigation__right-menu-item"><a class="global-navigation__get-showtime button--solid-red" href="/order" data-track data-label="order">Get Showtime</a></li>
        <li class="global-navigation__right-menu-item"><a class="global-navigation__schedules" data-track data-label="schedule"><div class="global-navigation__schedules-icon" alt="Schedules"></div>Schedules</a></li>
			</ul>
			<div class="global-navigation__search-icon">
				<span class="global-navigation__circle"></span>
				<span class="global-navigation__handle"></span>
			</div>
		</div>
	</div>
	<div class="global-navigation__breadcrumb-mobile">
		{{#page.meta.valueMap.navigationSectionName}}<div class="global-navigation__breadcrumb-mobile-item">
      {{#page.meta.valueMap.hasNavigationSectionLink}}{{#page.meta.valueMap.navigationSectionLink}}<a href="{{page.meta.valueMap.navigationSectionLink}}" data-track data-label="{{{page.meta.valueMap.navigationSectionName}}}">{{/page.meta.valueMap.navigationSectionLink}}{{/page.meta.valueMap.hasNavigationSectionLink}}
        {{{page.meta.valueMap.navigationSectionName}}}
      {{#page.meta.valueMap.hasNavigationSectionLink}}{{#page.meta.valueMap.navigationSectionLink}}</a>{{/page.meta.valueMap.navigationSectionLink}}{{/page.meta.valueMap.hasNavigationSectionLink}}
    </div>{{/page.meta.valueMap.navigationSectionName}}
    {{#page.meta.valueMap.navigationPageName}}
      <div class="global-navigation__breadcrumb-mobile-item">
        {{{page.meta.valueMap.navigationPageName}}}
      </div>
    {{/page.meta.valueMap.navigationPageName}}
	</div>
  {{$secondaryNav}}
  {{/secondaryNav}}
	<div class="global-navigation__primary-mobile">
		<ul class="global-navigation__primary-mobile-menu">
			<li class="global-navigation__primary-mobile-menu-item"><a id="home" href="/" data-track data-label="home">Home</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="series" href="/series" data-track data-label="series">Series</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="movies" href="/movies" data-track data-label="movies">Movies</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="sports" href="/sports" data-track data-label="sports">Sports</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="docs" href="/documentaries" data-track data-label="documentaries">Documentaries</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="comedy" href="/comedy" data-track data-label="comedy">Comedy</a></li>
		</ul>
		<ul class="global-navigation__open-schedule-mobile-menu">
			<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="schedule" href="/schedule" data-track data-label="schedule:linear">TV Schedule</a></li>
			<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="on-demand-schedule" href="/on-demand" data-track data-label="schedule:on demand">On Demand and Streaming Schedule</a></li>
		</ul>
		<ul class="global-navigation__get-showtime-mobile-menu">
			<li class="global-navigation__get-showtime-mobile-menu-item"><a href="/order" data-track data-label="order">Get Showtime</a></li>
		</ul>
	</div>
  {{> /partials/_schedule_drawer}}
</nav>

```
