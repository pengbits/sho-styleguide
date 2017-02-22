---
name: Global Navigation
collection: components
---

# Global Navigation

The Global Navigation component has three modifier classes: --home-page, --open, --sub-page. These classes are applied to the main nav container to invoke the state. The Styleguide side menu must be closed to view the proper responsive behavior.

<nav class="global-navigation js-global-navigation global-navigation--sub-page">
	<div class="global-navigation__inner">
		<a class="global-navigation__logo" href="#">Showtime</a>
		<div class="global-navigation__menu-toggle">
			<div class="global-navigation__menu-icon">
				<span></span>
			    <span></span>
			    <span></span>
			    <span></span>
			</div>
			<ul class="global-navigation__breadcrumb">
				<li class="global-navigation__breadcrumb-item">60 Minutes Sports</li>
				<li class="global-navigation__breadcrumb-item">Episode Guide</li>
			</ul>
		</div>
		<div class="global-navigation__primary">
			<ul class="global-navigation__primary-menu">
				<li class="global-navigation__primary-menu-item"><a id="series" href="#">Series</a></li>
				<li class="global-navigation__primary-menu-item"><a id="movies" href="#">Movies</a></li>
				<li class="global-navigation__primary-menu-item"><a id="sports" href="#">Sports</a></li>
				<li class="global-navigation__primary-menu-item"><a id="docs" href="#">Documentaries</a></li>
				<li class="global-navigation__primary-menu-item"><a id="comedy" href="#">Comedy</a></li>
			</ul>
		</div>
		<div class="global-navigation__search-bar">
			<form id="results-search-form" class="form--dark" action="/sho/search" method="GET">
				<input class="global-navigation__search-field" id="searchField" name="q" value="" placeholder="SEARCH" type="text" class="text">
			</form>
		</div>
		<div class="global-navigation__right">
			<ul class="global-navigation__right-menu">
				<li class="global-navigation__right-menu-item button--solid-red"><a class="global-navigation__get-showtime" href="#">Get Showtime</a></li>
				<li class="global-navigation__right-menu-item"><a class="global-navigation__schedules" href="#"><div class="global-navigation__schedules-icon" alt="Schedules"></div>Schedules</a></li>
			</ul>
			<div class="global-navigation__search-icon">
				<span class="global-navigation__circle"></span>
				<span class="global-navigation__handle"></span>
			</div>
		</div>
	</div>
	<div class="global-navigation__breadcrumb-mobile">
		<div class="global-navigation__breadcrumb-mobile-item">60 Minutes Sports</div>
		<div class="global-navigation__breadcrumb-mobile-item">Episode Guide</div>
	</div>
	<div class="global-navigation__primary-mobile">
		<ul class="global-navigation__primary-mobile-menu">
			<li class="global-navigation__primary-mobile-menu-item"><a id="home" href="#">Home</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="series" href="#">Series</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="movies" href="#">Movies</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="sports" href="#">Sports</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="docs" href="#">Documentaries</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="comedy" href="#">Comedy</a></li>
		</ul>
		<ul class="global-navigation__open-schedule-mobile-menu">
			<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="schedule" href="#">Open Schedule</a></li>
			<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="on-demand-schedule" href="#">Open On Demand Schedule</a></li>
		</ul>
		<ul class="global-navigation__get-showtime-mobile-menu">
			<li class="global-navigation__get-showtime-mobile-menu-item">A New Way To Get Showtime</li>
			<li class="global-navigation__get-showtime-mobile-menu-item"><a href="#">Get Showtime</a></li>
		</ul>
	</div>
	<div class="schedule-drawer">
		<div class="schedule-drawer__inner">
			<i class="schedule-drawer__icon-close"></i>
			<div class="schedule-drawer--header">
				Tonight on <span class="showtime-logo">Showtime</span>
			</div>
			<ul class="schedule-drawer__list">
				<li class="schedule-drawer__list-item">
					<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=edf9d2"></a>
					<div class="schedule-drawer__program-time">
						8:30pm et/pt
					</div>
					<div class="schedule-drawer__program-title">
						Masters of Sex
					</div>
					<div class="schedule-drawer__program-episode-number">
						s3:e10
					</div>
				</li>
				<li class="schedule-drawer__list-item">
					<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=f9d2e6"></a>
					<div class="schedule-drawer__program-time">
						9:45pm et/pt
					</div>
					<div class="schedule-drawer__program-title">
						What If?
					</div>
				</li>
				<li class="schedule-drawer__list-item">
					<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=d2e8f9"></a>
					<div class="schedule-drawer__program-time">
						11:30pm et/pt
					</div>
					<div class="schedule-drawer__program-title">
						A Season With Notre Dame Football
					</div>
					<div class="schedule-drawer__program-episode-number">
						s2:e09
					</div>
				</li>
			</ul>
			<a class="schedule-drawer__link--view-more" href="#">see full tv schedule <i class="icon icon--xsmall icon--next-red"></i></a>
		</div>
		<div class="schedule-drawer__footer">
			<div class="schedule-drawer__footer__inner">
				<a class="schedule-drawer__link--view-more" href="#">browse on demand and streaming <i class="icon icon--xsmall icon--next-red"></i></a>
			</div>
		</div>
	</div>
</nav>

```
<nav class="global-navigation js-global-navigation global-navigation--sub-page">
	<div class="global-navigation__inner">
		<a class="global-navigation__logo" href="#">Showtime</a>
		<div class="global-navigation__menu-toggle">
			<div class="global-navigation__menu-icon">
				<span></span>
			    <span></span>
			    <span></span>
			    <span></span>
			</div>
			<ul class="global-navigation__breadcrumb">
				<li class="global-navigation__breadcrumb-item">60 Minutes Sports</li>
				<li class="global-navigation__breadcrumb-item">Episode Guide</li>
			</ul>
		</div>
		<div class="global-navigation__primary">
			<ul class="global-navigation__primary-menu">
				<li class="global-navigation__primary-menu-item"><a id="series" href="#">Series</a></li>
				<li class="global-navigation__primary-menu-item"><a id="movies" href="#">Movies</a></li>
				<li class="global-navigation__primary-menu-item"><a id="sports" href="#">Sports</a></li>
				<li class="global-navigation__primary-menu-item"><a id="docs" href="#">Documentaries</a></li>
				<li class="global-navigation__primary-menu-item"><a id="comedy" href="#">Comedy</a></li>
			</ul>
		</div>
		<div class="global-navigation__search-bar">
			<form id="results-search-form" class="form--dark" action="/search" method="GET">
				<input class="global-navigation__search-field" id="searchField" name="q" value="" placeholder="SEARCH" type="text" class="text">
			</form>
		</div>
		<div class="global-navigation__right">
			<ul class="global-navigation__right-menu">
				<li class="global-navigation__right-menu-item button--solid-red"><a class="global-navigation__get-showtime" href="#">Get Showtime</a></li>
				<li class="global-navigation__right-menu-item"><a class="global-navigation__schedules" href="#"><div class="global-navigation__schedules-icon" alt="Schedules"></div>Schedules</a></li>
			</ul>
			<div class="global-navigation__search-icon">
				<span class="global-navigation__circle"></span>
				<span class="global-navigation__handle"></span>
			</div>
		</div>
	</div>
	<div class="global-navigation__breadcrumb-mobile">
		<div class="global-navigation__breadcrumb-mobile-item">60 Minutes Sports</div>
		<div class="global-navigation__breadcrumb-mobile-item">Episode Guide</div>
	</div>
	<div class="global-navigation__primary-mobile">
		<ul class="global-navigation__primary-mobile-menu">
			<li class="global-navigation__primary-mobile-menu-item"><a id="home" href="#">Home</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="series" href="#">Series</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="movies" href="#">Movies</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="sports" href="#">Sports</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="docs" href="#">Documentaries</a></li>
			<li class="global-navigation__primary-mobile-menu-item"><a id="comedy" href="#">Comedy</a></li>
		</ul>
		<ul class="global-navigation__open-schedule-mobile-menu">
			<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="schedule" href="#">Open Schedule</a></li>
			<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="on-demand-schedule" href="#">Open On Demand Schedule</a></li>
		</ul>
		<ul class="global-navigation__get-showtime-mobile-menu">
			<li class="global-navigation__get-showtime-mobile-menu-item">A New Way To Get Showtime</li>
			<li class="global-navigation__get-showtime-mobile-menu-item"><a href="#">Get Showtime</a></li>
		</ul>
	</div>
	<div class="schedule-drawer">
		<div class="schedule-drawer__inner">
			<i class="schedule-drawer__icon-close"></i>
			<div class="schedule-drawer--header">
				Tonight on <span class="showtime-logo">Showtime</span>
			</div>
			<ul class="schedule-drawer__list">
				<li class="schedule-drawer__list-item">
					<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=edf9d2"></a>
					<div class="schedule-drawer__program-time">
						8:30pm et/pt
					</div>
					<div class="schedule-drawer__program-title">
						Masters of Sex
					</div>
					<div class="schedule-drawer__program-episode-number">
						s3:e10
					</div>
				</li>
				<li class="schedule-drawer__list-item">
					<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=f9d2e6"></a>
					<div class="schedule-drawer__program-time">
						9:45pm et/pt
					</div>
					<div class="schedule-drawer__program-title">
						What If?
					</div>
				</li>
				<li class="schedule-drawer__list-item">
					<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=d2e8f9"></a>
					<div class="schedule-drawer__program-time">
						11:30pm et/pt
					</div>
					<div class="schedule-drawer__program-title">
						A Season With Notre Dame Football
					</div>
					<div class="schedule-drawer__program-episode-number">
						s2:e09
					</div>
				</li>
			</ul>
			<a class="schedule-drawer__link--view-more" href="#">see full tv schedule <i class="icon icon--xsmall icon--next-red"></i></a>
		</div>
		<div class="schedule-drawer__footer">
			<div class="schedule-drawer__footer__inner">
				<a class="schedule-drawer__link--view-more" href="#">browse on demand and streaming <i class="icon icon--xsmall icon--next-red"></i></a>
			</div>
		</div>
	</div>
</nav>
```

This is a variation of the Global Nav that will be primarily present on Non-Hero pages such as the Video Player page. It will be a solid background with no tint.

<div class = "has-nav-solid">
	<nav class="global-navigation js-global-navigation global-navigation--sub-page global-navigation--solid">
		<div class="global-navigation__inner">
			<a class="global-navigation__logo" href="#">Showtime</a>
			<div class="global-navigation__menu-toggle">
				<div class="global-navigation__menu-icon">
					<span></span>
				    <span></span>
				    <span></span>
				    <span></span>
				</div>
				<ul class="global-navigation__breadcrumb">
					<li class="global-navigation__breadcrumb-item">60 Minutes Sports</li>
					<li class="global-navigation__breadcrumb-item">Episode Guide</li>
				</ul>
			</div>
			<div class="global-navigation__primary">
				<ul class="global-navigation__primary-menu">
					<li class="global-navigation__primary-menu-item"><a id="series" href="#">Series</a></li>
					<li class="global-navigation__primary-menu-item"><a id="movies" href="#">Movies</a></li>
					<li class="global-navigation__primary-menu-item"><a id="sports" href="#">Sports</a></li>
					<li class="global-navigation__primary-menu-item"><a id="docs" href="#">Documentaries</a></li>
					<li class="global-navigation__primary-menu-item"><a id="comedy" href="#">Comedy</a></li>
				</ul>
			</div>
			<div class="global-navigation__search-bar">
				<form id="results-search-form" class="form--dark" action="/sho/search" method="GET">
					<input class="global-navigation__search-field" id="searchField" name="q" value="" placeholder="SEARCH" type="text" class="text">
				</form>
			</div>
			<div class="global-navigation__right">
				<ul class="global-navigation__right-menu">
					<li class="global-navigation__right-menu-item button--solid-red"><a class="global-navigation__get-showtime" href="#">Get Showtime</a></li>
					<li class="global-navigation__right-menu-item"><a class="global-navigation__schedules" href="#"><img class="global-navigation__schedules-icon" src="/assets/html/styleguide/assets/svg/schedules.svg" alt="Schedules">Schedules</a></li>
				</ul>
				<div class="global-navigation__search-icon">
					<span class="global-navigation__circle"></span>
					<span class="global-navigation__handle"></span>
				</div>
			</div>
		</div>
		<div class="global-navigation__breadcrumb-mobile">
			<div class="global-navigation__breadcrumb-mobile-item">60 Minutes Sports</div>
			<div class="global-navigation__breadcrumb-mobile-item">Episode Guide</div>
		</div>
		<div class="global-navigation__primary-mobile">
			<ul class="global-navigation__primary-mobile-menu">
				<li class="global-navigation__primary-mobile-menu-item"><a id="home" href="#">Home</a></li>
				<li class="global-navigation__primary-mobile-menu-item"><a id="series" href="#">Series</a></li>
				<li class="global-navigation__primary-mobile-menu-item"><a id="movies" href="#">Movies</a></li>
				<li class="global-navigation__primary-mobile-menu-item"><a id="sports" href="#">Sports</a></li>
				<li class="global-navigation__primary-mobile-menu-item"><a id="docs" href="#">Documentaries</a></li>
				<li class="global-navigation__primary-mobile-menu-item"><a id="comedy" href="#">Comedy</a></li>
			</ul>
			<ul class="global-navigation__open-schedule-mobile-menu">
				<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="schedule" href="#">Open Schedule</a></li>
				<li class="global-navigation__open-schedule-mobile-menu-item global-navigation--red"><a id="on-demand-schedule" href="#">Open On Demand Schedule</a></li>
			</ul>
			<ul class="global-navigation__get-showtime-mobile-menu">
				<li class="global-navigation__get-showtime-mobile-menu-item">A New Way To Get Showtime</li>
				<li class="global-navigation__get-showtime-mobile-menu-item"><a href="#">Get Showtime</a></li>
			</ul>
		</div>
		<div class="schedule-drawer">
			<div class="schedule-drawer__inner">
				<i class="schedule-drawer__icon-close"></i>
				<div class="schedule-drawer--header">
					Tonight on <span class="showtime-logo">Showtime</span>
				</div>
				<ul class="schedule-drawer__list">
					<li class="schedule-drawer__list-item">
						<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=edf9d2"></a>
						<div class="schedule-drawer__program-time">
							8:30pm et/pt
						</div>
						<div class="schedule-drawer__program-title">
							Masters of Sex
						</div>
						<div class="schedule-drawer__program-episode-number">
							s3:e10
						</div>
					</li>
					<li class="schedule-drawer__list-item">
						<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=f9d2e6"></a>
						<div class="schedule-drawer__program-time">
							9:45pm et/pt
						</div>
						<div class="schedule-drawer__program-title">
							What If?
						</div>
					</li>
					<li class="schedule-drawer__list-item">
						<a href="#"><img class="schedule-drawer__program-img" src="http://www.fpoimg.com/85x115?bg_color=d2e8f9"></a>
						<div class="schedule-drawer__program-time">
							11:30pm et/pt
						</div>
						<div class="schedule-drawer__program-title">
							A Season With Notre Dame Football
						</div>
						<div class="schedule-drawer__program-episode-number">
							s2:e09
						</div>
					</li>
				</ul>
				<a class="schedule-drawer__link--view-more" href="#">see full tv schedule <i class="icon icon--xsmall icon--next-red"></i></a>
			</div>
			<div class="schedule-drawer__footer">
				<div class="schedule-drawer__footer__inner">
					<a class="schedule-drawer__link--view-more" href="#">browse on demand and streaming <i class="icon icon--xsmall icon--next-red"></i></a>
				</div>
			</div>
		</div>
	</nav>
</div> 

<style type="text/css">
  .site-sidebar,
  .site-sidebar-toggle {
    display: none;
  }
  
</style>
<jsp-partials>styleguide/global-navigation/_global_navigation.jsp.md</jsp-partials>