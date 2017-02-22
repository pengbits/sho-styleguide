---
name: Full-Width Container
collection: components
---

# Full-Width Container
The Full-Width Container provides behavior for setting max-widths on the page-content and centering it horizontally. Should we need to set a max-width on the outer-container this is one place we could do it. All full-width components should extend the abstract class as follows:

```css
.my-banner-component {
  @include full-width-container;
  
  padding: $size-s;
  background-color: $colors-dark-red;
  opacity:0.5;
  
  &__inner {
    @include full-width-container__inner;
    
    background-color: $colors-red;
  }
}
```

This also reinforces the pattern that a component's name is also the top-level container for all css and html definitions - it is better to have `widget` contain `widget__inner` or `widget__body`, then to introduce a second element in the form of a wrapper or container, that's tied to the component but not nested inside it:

```css
# this is not great
.widget-wrapper .widget{
  max-width:1200px;
}

# this is better
.widget .widget__inner {
  max-width:1200px;
}
```

<div class="my-full-width-component">
  <div class="my-full-width-component__inner">
    <h3>Content is constrained by the max-width..</h3>
    <p>...but does not butt up against viewport at smaller sizes</p>
  </div>
</div>

```html
<div class="my-full-width-component">
  <div class="my-full-width-component__inner">
    <h3 class="header">Content is constrained by the max-width..</h3>
    <p>...but does not butt up against viewport at smaller sizes</p>
  </div>
</div>
```