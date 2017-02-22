---
name:  Title Metadata
collection: components
---
# Title Metadata

Title Metadata
- This can consist of meta data (information) for movies or episodes. 
- Examples are Written by, Duration, Video Format etc.

<div class="metaname-example">
	<dl class="metadata">
		<dt class="metadata__key">Cast</dt>
		<dd class="metadata__value">
			<dl class="metadata__value--multi">
				<dt class="metadata__value--multi-key">Jean-Claude Van Damme</dt>
				<dd class="metadata__value--multi-value">Frank Dux</dd>
			</dl>
			<dl class="metadata__value--multi">
				<dt class="metadata__value--multi-key">Aki Maeda</dt>
				<dd class="metadata__value--multi-value">Noriko Nakagawa - onna 15-ban</dd>
			</dl>
		</dd>
		<dt class="metadata__key">Directed by</dt>
		<dd class="metadata__value">Stephen Summers</dd>
		<dt class="metadata__key">Genre</dt>
		<dd class="metadata__value">
			<a class="metadata__link" href="#">Action</a>
			<a class="metadata__link" href="#">Drama</a>
			<a class="metadata__link" href="#">Family</a>
		</dd>
	</dl>
</div>

```
<dl class="metadata">
	<dt class="metadata__key">Cast</dt>
	<dd class="metadata__value">
		<dl class="metadata__value--multi">
			<dt class="metadata__value--multi-key">Jean-Claude Van Damme</dt>
			<dd class="metadata__value--multi-value">Frank Dux</dd>
		</dl>
		<dl class="metadata__value--multi">
			<dt class="metadata__value--multi-key">Aki Maeda</dt>
			<dd class="metadata__value--multi-value">Noriko Nakagawa - onna 15-ban</dd>
		</dl>
	</dd>
	<dt class="metadata__key">Directed by</dt>
	<dd class="metadata__value">Stephen Summers</dd>
	<dt class="metadata__key">Genre</dt>
	<dd class="metadata__value">
		<a class="metadata__link" href="#">Action</a>
		<a class="metadata__link" href="#">Drama</a>
		<a class="metadata__link" href="#">Family</a>
	</dd>
</dl>
```