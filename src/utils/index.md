---
name: Utility Styles
collection: base
---

# Utility Styles

## Clearfix `%clearfix`

Used to clear floated elements. Can be used as an extend or as a class.

```sass
.my-element {
  @include clearfix;
}
```

```html
<div class="cf"></div>
```

## Hover `@hover`

Useful for providing `active` and `hover` methods as a shorthand.

```sass
.my-element {
  @include hover {
    // Hover / Active styles
  }
}
```

## Unstyled Input `@unstyled-input`

Used to reset an input field / button back to bare bones.

```sass
.my-input-element {
  @include unstyled-input;
}
```
