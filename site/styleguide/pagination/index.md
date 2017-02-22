---
name: Pagination
collection: components
---

# Pagination

This will accompany any set of records too large to be contained in a single page.

<section class="section">
	<div class="pagination">
		<a class="pagination__prev" href="#"></a>
		<ul class="pagination__list">
			<li class="pagination__page-number pagination__page-number--active">
				<a href="#">1</a>
			</li>
			<li class="pagination__page-number">
				<a href="#">2</a>
			</li>
			<li class="pagination__page-number">
				<a href="#">3</a>
			</li>
		</ul>
		<a class="pagination__next" href="#"></a>
	</div>
</section>
<section class="section">
	<div class="pagination">
		<a class="pagination__prev" href="#"></a>
		<ul class="pagination__list">
			<li class="pagination__page-number">
				<a href="#">1</a>
			</li>
			<li class="pagination__page-number pagination__page-number--active">
				<a href="#">2</a>
			</li>
			<li class="pagination__page-number">
				<a href="#">3</a>
			</li>
			<li class="pagination__page-number">
				<a href="#">10</a>
			</li>
		</ul>
		<a class="pagination__next" href="#"></a>
	</div>
</section>

```
<div class="pagination">
	<a class="pagination__prev" href="#"></a>
	<ul class="pagination__list">
		<li class="pagination__page-number pagination__page-number--active">
			<a href="#">1</a>
		</li>
		<li class="pagination__page-number">
			<a href="#">2</a>
		</li>
		<li class="pagination__page-number">
			<a href="#">3</a>
		</li>
	</ul>
	<a class="pagination__next" href="#"></a>
</div>

<!-- more than 3 results -->
<div class="pagination">
	<a class="pagination__prev" href="#"></a>
	<ul class="pagination__list">
		<li class="pagination__page-number">
			<a href="#">1</a>
		</li>
		<li class="pagination__page-number pagination__page-number--active">
			<a href="#">2</a>
		</li>
		<li class="pagination__page-number">
			<a href="#">3</a>
		</li>
		<li class="pagination__page-number">
			<a href="#">10</a>
		</li>
	</ul>
	<a class="pagination__next" href="#"></a>
</div>
```

<jsp-partials>styleguide/pagination/_pagination.jsp.md</jsp-partials>