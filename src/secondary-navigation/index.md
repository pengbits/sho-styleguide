---
name: Secondary Navigation
collection: components
---

# Secondary Navigation

## Standard

<nav class="secondary-nav">
	<div class="secondary-nav__content">
		<select class="secondary-nav__dropdown select-navigation" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
			<option selected="selected" disabled="disabled">Genres</option>
			<option value="#">Action</option>
			<option value="#">Adult</option>
			<option value="#">Comedy</option>
			<option value="#">Documentary</option>
			<option value="#">Drama</option>
			<option value="#">Family</option>
			<option value="#">Foreign</option>
			<option value="#">Horror</option>
			<option value="#">Music & Musicals</option>
			<option value="#">Mystery & Thrillers</option>
		</select>
		<ul class="secondary-nav__list">
			<li class="secondary-nav__item secondary-nav__item--active"><a href="#">Action</a></li>
			<li class="secondary-nav__item"><a href="#">Adult</a></li>
			<li class="secondary-nav__item"><a href="#">Comedy</a></li>
			<li class="secondary-nav__item"><a href="#">Documentary</a></li>
			<li class="secondary-nav__item"><a href="#">Drama</a></li>
			<li class="secondary-nav__item"><a href="#">Family</a></li>
			<li class="secondary-nav__item"><a href="#">Foreign</a></li>
			<li class="secondary-nav__item"><a href="#">Horror</a></li>
			<li class="secondary-nav__item"><a href="#">Music & Musicals</a></li>
			<li class="secondary-nav__item"><a href="#">Mystery & Thrillers</a></li>
		</ul>
	</div>
</nav>

```
<nav class="secondary-nav">
	<div class="secondary-nav__content">
		<select class="secondary-nav__dropdown select-navigation" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
			<option selected="selected" disabled="disabled">Genres</option>
			<option value="#">Action</option>
			<option value="#">Adult</option>
			<option value="#">Comedy</option>
			<option value="#">Documentary</option>
			<option value="#">Drama</option>
			<option value="#">Family</option>
			<option value="#">Foreign</option>
			<option value="#">Horror</option>
			<option value="#">Music & Musicals</option>
			<option value="#">Mystery & Thrillers</option>
		</select>
		<ul class="secondary-nav__list">
			<li class="secondary-nav__item secondary-nav__item--active"><a href="#">Action</a></li>
			<li class="secondary-nav__item"><a href="#">Adult</a></li>
			<li class="secondary-nav__item"><a href="#">Comedy</a></li>
			<li class="secondary-nav__item"><a href="#">Documentary</a></li>
			<li class="secondary-nav__item"><a href="#">Drama</a></li>
			<li class="secondary-nav__item"><a href="#">Family</a></li>
			<li class="secondary-nav__item"><a href="#">Foreign</a></li>
			<li class="secondary-nav__item"><a href="#">Horror</a></li>
			<li class="secondary-nav__item"><a href="#">Music & Musicals</a></li>
			<li class="secondary-nav__item"><a href="#">Mystery & Thrillers</a></li>
		</ul>
	</div>
</nav>
```

## --red-from-medium

<nav class="secondary-nav secondary-nav--red-from-medium">
	<div class="secondary-nav__content">
		<select class="secondary-nav__dropdown select-navigation" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
			<option selected="selected" disabled="disabled">Series</option>
			<option value="#">Movies</option>
			<option value="#">Documentary</option>
			<option value="#">Comedy</option>
			<option value="#">Sports</option>
			<option value="#">Adult</option>
		</select>
		<ul class="secondary-nav__list">
			<li class="secondary-nav__item secondary-nav__item--active"><a href="#">Series</a></li>
			<li class="secondary-nav__item"><a href="#">Movies</a></li>
			<li class="secondary-nav__item"><a href="#">Documentary</a></li>
			<li class="secondary-nav__item"><a href="#">Comedy</a></li>
			<li class="secondary-nav__item"><a href="#">Sports</a></li>
			<li class="secondary-nav__item"><a href="#">Adult</a></li>
		</ul>
		<a href="#" class="secondary-nav__link">See Schedule</a>
	</div>
</nav>

```
<nav class="secondary-nav secondary-nav--red-from-medium">
	<div class="secondary-nav__content">
		<select class="secondary-nav__dropdown select-navigation" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
			<option selected="selected" disabled="disabled">Series</option>
			<option value="#">Movies</option>
			<option value="#">Documentary</option>
			<option value="#">Comedy</option>
			<option value="#">Sports</option>
			<option value="#">Adult</option>
		</select>
		<ul class="secondary-nav__list">
			<li class="secondary-nav__item secondary-nav__item--active"><a href="#">Series</a></li>
			<li class="secondary-nav__item"><a href="#">Movies</a></li>
			<li class="secondary-nav__item"><a href="#">Documentary</a></li>
			<li class="secondary-nav__item"><a href="#">Comedy</a></li>
			<li class="secondary-nav__item"><a href="#">Sports</a></li>
			<li class="secondary-nav__item"><a href="#">Adult</a></li>
		</ul>
		<a href="#" class="secondary-nav__link">See Schedule</a>
	</div>
</nav>
```

## --red-always

<nav class="secondary-nav secondary-nav--red-always">
	<div class="secondary-nav__content">
		<select class="secondary-nav__dropdown select-navigation" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
			<option value="#" selected="true">Thurs, Jan. 7th</option>
			<option value="#">Fri, Jan. 8th</option>
			<option value="#">Sat, Jan. 9th</option>
		</select>
		<a href="#" class="secondary-nav__link">On Demand</a>
	</div>
</nav>

```
<nav class="secondary-nav secondary-nav--red-always">
	<div class="secondary-nav__content">
		<select class="secondary-nav__dropdown select-navigation" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
		<option value="#" selected="true">Thurs, Jan. 7th</option>
			<option value="#">Fri, Jan. 8th</option>
			<option value="#">Sat, Jan. 9th</option>
		</select>
		<a href="#" class="secondary-nav__link">On Demand</a>
	</div>
</nav>
```

## (custom) responsive dropdown

<nav class="secondary-nav">
	<a href="#" class="secondary-nav__disclosure">Genres</a>
</nav>

*secondary-nav\_\_disclosure--mobile-reveal & secondary-nav\_\_content--mobile-reveal classes to be added on click*

<nav class="secondary-nav">
	<a href="#" class="secondary-nav__disclosure secondary-nav__disclosure--mobile-reveal">Genres</a>
	<div class="secondary-nav__content secondary-nav__content--mobile-reveal">
		<ul class="responsive-dropdown">
			<li class="secondary-nav__item secondary-nav__item--active"><a href="#">Action</a></li>
			<li class="secondary-nav__item"><a href="#">Adult</a></li>
			<li class="secondary-nav__item"><a href="#">Comedy</a></li>
			<li class="secondary-nav__item"><a href="#">Documentary</a></li>
			<li class="secondary-nav__item"><a href="#">Drama</a></li>
			<li class="secondary-nav__item"><a href="#">Family</a></li>
			<li class="secondary-nav__item"><a href="#">Foreign</a></li>
			<li class="secondary-nav__item"><a href="#">Horror</a></li>
			<li class="secondary-nav__item"><a href="#">Music & Musicals</a></li>
			<li class="secondary-nav__item"><a href="#">Mystery & Thrillers</a></li>
		</ul>
	</div>
</nav>