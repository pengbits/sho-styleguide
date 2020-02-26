---
name:  Form Preview Modal
collection: components
---
# Form Preview Modal

This component is used on /holiday-card to show a preview of a card with form field input values populated in a modal.

It is instantiated with a config object containing 'message' and 'name' selectors
```js
new FormPreviewModal({ message: '.form-preview-message', name: '.form-preview-name' });
```
<input class="form-preview-message" placeholder="Say something" value="">
<input class="form-preview-name" placeholder="Your Name" value="">
<p>Give it a whirl!</p>
<a class="button--solid-red" href="#/preview">Click Me</a>
