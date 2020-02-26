---
name: Forms
collection: elements
---

# Forms

Rules for form elements go here. There aren't a lot of form styles as the moment, but that may change.

## Radios and Checkboxes

Super Radios provide a nice chunky style to an otherwise humble element - the radio button. In this case, they are marked up as inputs of type radio, where only one selection at a time is permitted.

### Super Radios - Faux Inputs

At the time of this writing IE11 is having a hard time with the applying of svg background-images to the `radio + label` elements and psuedo-selectors, manifesting in sporadic drop-out in the order-tray. 
To solve this, we are completely re-writing the markup, eschewing the form elments alltogether, since it's a pure javascript component that doesn't need to submit anything:

<form class="faux-radio-example js-faux-radios">
  <h3 class="header">What's for Lunch</h3>
  <p>
    <span class="input input--faux-radio input--faux-radio-checked" data-lunch-choice="1">
      <img class="input__icon" src="https://www.sho.com/www/sho/lib/assets/svg/super-radio-checked_36x36.svg" />
      <span class="input__label">Ponche Taqueria</span>
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="2">
      <img class="input__icon" src="https://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      <span class="input__label">Otto Taco</span>
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="3">
      <img class="input__icon" src="https://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      <span class="input__label">Pam Real</span>
    </span>
  </p>
</form>

```
<form class="faux-radio-example js-faux-radios">
  <h3 class="header">What's for Lunch</h3>
  <p>
    <span class="input input--faux-radio input--faux-radio-checked" data-lunch-choice="1">
      <img class="input__icon" src="https://www.sho.com/www/sho/lib/assets/svg/super-radio-checked_36x36.svg" />
      <span class="input__label">Ponche Taqueria</span>
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="2">
      <img class="input__icon" src="https://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      <span class="input__label">Otto Taco</span>
    </span>
  </p>
  <p>
    <span class="input input--faux-radio" data-lunch-choice="3">
      <img class="input__icon" src="https://www.sho.com/www/sho/lib/assets/svg/super-radio_36x36.svg" />
      <span class="input__label">Pam Real</span>
    </span>
  </p>
</form>

```
"
Naturally, these require javascript to swap out the initial state for the checked svg, since they aren't controlled via css.


