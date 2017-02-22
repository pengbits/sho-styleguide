---
name: Header with Button
collection: components
---

# Header with Button

A header with an embedded button, most commonly seen in the streaming section of the [ways to watch](/styleguide/ways-to-watch/) module. The component is different from standard [headers](/styleguide/headers), because it is responsible for the following layout concerns

- at `xs-small`, the headline is stacked above the button
- at `medium`, the headline and button are floated left/right, but are centered vertically, regardless of header length 
- at `large`, the headline and button stack, but the button can optionally be pinned to the bottom of the container.

### in isolation

<div class="header-with-button header-with-button--isolated-example">
	<h4 class="header-with-button__header header--delta">Watch Episodes Instantly with Longer Headline</h4>
	<div class="header-with-button__button">
		<a class="button--solid-red button--skinny" href="#">Stream the Series</a>
	</div>
</div>
<p>&nbsp;</p>

<h3> Nested Flex Example</h3>
<div class="header-with-button-outer">
	<div class="header-with-button-outer__column">
		<div class="header-with-button">
			<h4 class="header-with-button__header header--delta">
				Watch Episodes Instantly with Longer Headline
			</h4>
			<div class="header-with-button__button">
				<a class="button--solid-red button--skinny" href="#">
					Stream the Series
				</a>
			</div>
		</div>
	</div>
	<div class="header-with-button-outer__column">
		<span><h5 class="header">More Content</h5></span>
	</div>
	<div class="header-with-button-outer__column">
		<span><h5 class="header">Even More Content</h5></span>
	</div>
</div>
<p>&nbsp;</p>

<h3>in Ways to Watch</h3>
<div class="ways-to-watch ways-to-watch--stream-first">
	<div class="ways-to-watch__section ways-to-watch__stream">
		<div class="ways-to-watch__headline-wrapper ways-to-watch__stream__headline">
			<h4 class="ways-to-watch__headline">
				Watch Episodes Instantly with Longer Headline
			</h4>
		</div>
		<div class="ways-to-watch__stream__button">
			<a class="ways-to-watch__button button--solid-red" href="#">
				Stream the Series
			</a>
		</div>
	</div>
</div>
<p>&nbsp;</p>

<div class="ways-to-watch">
	<div class="ways-to-watch__section ways-to-watch__stream">
		<div class="ways-to-watch__headline-wrapper ways-to-watch__stream__headline">
			<h4 class="ways-to-watch__headline">
				Watch Episodes Instantly
			</h4>
		</div>
		<div class="ways-to-watch__stream__button">
			<a class="ways-to-watch__button button--solid-red" href="#">
				Stream the Series
			</a>
		</div>
	</div>
</div>
