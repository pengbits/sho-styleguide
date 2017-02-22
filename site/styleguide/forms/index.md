---
name: Forms
collection: elements
---

# Forms

Rules for form elements go here. There aren't a lot of form styles as the moment, but that may change.

## Radios and Checkboxes

Super Radios provide a nice chunky style to an otherwise humble element - the radio button. In this case, they are marked up as inputs of type radio, where only one selection at a time is permitted.

### Super Radios - Radio Buttons
<form class="super-radio-example">
  <h3 class="header">What's for Lunch</h3>
  <p>
    <input id="lunch-choice-1" type="radio" class="input input--super-radio" name="lunch-choice" value="1" checked="checked"><label for="lunch-choice-1">Ponche Taqueria</label>
  </p>
  <p>
    <input id="lunch-choice-2" type="radio" class="input input--super-radio" name="lunch-choice" value="2"><label for="lunch-choice-2">Otto Taco</label>
  </p>
  <p>
    <input id="lunch-choice-3" type="radio" class="input input--super-radio" name="lunch-choice" value="3"><label for="lunch-choice-3">Pam Real</label>
  </p>
</form>

```html 
<form class="super-radio-example">
  <h3 class="header">What's for Lunch</h3>
  <p>
    <input id="lunch-choice-1" type="radio" class="input input--super-radio" name="lunch-choice" value="1" checked="checked"><label for="lunch-choice-1">Ponche Taqueria</label>
  </p>
  <p>
    <input id="lunch-choice-2" type="radio" class="input input--super-radio" name="lunch-choice" value="2"><label for="lunch-choice-2">Otto Taco</label>
  </p>
  <p>
    <input id="lunch-choice-3" type="radio" class="input input--super-radio" name="lunch-choice" value="3"><label for="lunch-choice-3">Pam Real</label>
  </p>
</form>
```
<!--
### Super Radios - Checkboxes
The list of Providers in the Order Tray needs to have a beefier look, more befitting of an important choice. While inputs of type radio are typically used to capture mutally exclusive selections, (only one option at a time), that's not the case here, where they are actually checkboxes.

<div class="super-radio-example order-picker">
  <ul>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-1" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="1">
      <label for="order-picker-provider-1">TV Provider</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-3" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="3">
      <label for="order-picker-provider-3">Amazon</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-7" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="7">
      <label for="order-picker-provider-7">Android</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-5" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="5">
      <label for="order-picker-provider-5">Apple</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-8" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="8">
      <label for="order-picker-provider-8">Roku</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-6" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="6">
      <label for="order-picker-provider-6">Playstation Vue</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-14" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="14">
      <label for="order-picker-provider-14">Hulu</label>
    </li>
  </ul>
</div>

```html 
<div class="order-picker">
  <ul>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-1" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="1">
      <label for="order-picker-provider-1">TV Provider</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-3" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="3">
      <label for="order-picker-provider-3">Amazon</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-7" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="7">
      <label for="order-picker-provider-7">Android</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-5" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="5">
      <label for="order-picker-provider-5">Apple</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-8" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="8">
      <label for="order-picker-provider-8">Roku</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-6" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="6">
      <label for="order-picker-provider-6">Playstation Vue</label>
    </li>
    <li class="order-picker__provider order-picker__control">
      <input id="order-picker-provider-14" type="checkbox" class="input input--super-radio" name="order-picker-provider" value="14">
      <label for="order-picker-provider-14">Hulu</label>
    </li>
  </ul>
</div>

```
-->

### Super Radios - Faux Inputs

At the time of this writing IE11 is having a hard time with the applying of svg background-images to the `radio + label` elements and psuedo-selectors, manifesting in sporadic drop-out in the order-tray. 
To solve this, we are completely re-writing the markup, eschewing the form elments alltogether, since it's a pure javascript component that doesn't need to submit anything:

<form class="faux-radio-example js-faux-radios">
  <h3 class="header">What's for Lunch</h3>
  <p>
    <span class="input input--faux-radio input--faux-radio-checked" data-lunch-choice="1">
      <img class="input__icon" src="http://www.sho.com/www/sho/lib/assets/svg/super-radio-checked_36x36.svg" />
      Ponche Taqueria
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="2">
      <img class="input__icon" src="http://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      Otto Taco
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="3">
      <img class="input__icon" src="http://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      Pam Real
    </span>
  </p>
</form>

```
<form class="faux-radio-example js-faux-radios">
  <h3 class="header">What's for Lunch</h3>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="1">
      <img class="input__icon" src="http://www.sho.com/www/sho/lib/assets/svg/super-radio-checked_36x36.svg" />
      Ponche Taqueria
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="2">
      <img class="input__icon" src="http://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      Otto Taco
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="3">
      <img class="input__icon" src="http://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      Pam Real
    </span>
  </p>
  <span class="faux-radio-example__output"></span>
</form>

```
"
Naturally, these require javascript to swap out the initial state for the checked svg, since they aren't controlled via css.


