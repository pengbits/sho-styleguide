---
name:  Store Banner
collection: components
---

# Store Banner

In it's current state the store banner is a three coloumn banner with a product image, headline, and button. The two right columns stack in the medium breakpoint before all three columns stack at small breakpoints.  The product image is 271x148px, should be a transparent .png or have an all white background, and is used as the div background image.

<div class="store-banner">
  <div class="store-banner__inner">
    <div class="store-banner__body">
      <h3 class="store-banner__headline">Show you're a superfan with this Showtime swag.</h3>
      <div class="store-banner__button">
        <a href="" class="button--solid-white">
          Browse the Store
        </a>
      </div>
    </div>
    <div class="store-banner__image" style="background-image: url('http://dev.sho.com/assets/images/styleguide/store-banner/store-image_271x120.png');"></div>
  </div>
</div>
```
<div class="store-banner">
  <div class="store-banner__inner">
    <div class="store-banner__image" style="background-image: url('http://dev.sho.com/assets/images/styleguide/store-banner/store-image_271x120.png');"></div>
    <div class="store-banner__body">
      <h3 class="store-banner__headline">Show you're a superfan with this Showtime swag.</h3>
      <div class="store-banner__button">
        <a href="" class="button--solid-white">
          Browse the Store
        </a>
      </div>
    </div>
  </div>
</div>
```

<jsp-partials>styleguide/store-banner/_store_banner.jsp.md</jsp-partials>