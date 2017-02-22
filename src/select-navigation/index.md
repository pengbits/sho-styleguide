---
name: Select Navigation
collection: components
---

# Select Navigation

<select class="select-navigation js-select-navigation">
    <option data-context="schedule navigation" data-label="series" value="#series">series</option>
    <option data-context="schedule navigation" data-label="movies" value="#movies">movies</option>
    <option data-context="schedule navigation" data-label="documentaries" value="#documentaries">documentaries</option>
    <option data-context="schedule navigation" data-label="comedy" value="#comedy">comedy</option>
    <option selected="selected" data-context="schedule navigation" data-label="sports" value="#sports">sports</option>
    <option data-context="schedule navigation" data-label="adult" value="#adult">adult</option>
</select>

<p>Note: The Select Navigation is hidden at the medium breakpoint and above, including on this page.</p>

<p>This component handles basic styling, the navigation behavior, and related analytics.</p>

<p>Because the analytics that fire on this component are treated as "events" instead of "clicks", this is one case where the data-context attribute needs to be added to every option element (as opposed to be only added once, on a higher DOM element.)</p>

<p>Anchor links (to non-existent anchors) are used only in this styleguide example, to avoid linking away from this page, but proper relative/absolute paths are more typically used as option values on sho.com.</p>


```
<select class="select-navigation js-select-navigation">
    <option data-context="schedule navigation" data-label="series" value="#series">series</option>
    <option data-context="schedule navigation" data-label="movies" value="#movies">movies</option>
    <option data-context="schedule navigation" data-label="documentaries" value="#documentaries">documentaries</option>
    <option data-context="schedule navigation" data-label="comedy" value="#comedy">comedy</option>
    <option selected="selected" data-context="schedule navigation" data-label="sports" value="#sports">sports</option>
    <option data-context="schedule navigation" data-label="adult" value="#adult">adult</option>
</select>
```
