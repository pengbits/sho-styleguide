---
name: Responsive Images
collection: elements
---

# Responsive Image Loading

<article>
  <section>
    <h2>Basic Responsive Images</h2>
    <p>Respimage is a fast, lightweight and robust responsive images polyfill for browsers that don't yet support this functionality. It saves the users' bandwidth by utilizing smart resource selection algorithm.</p>
    <picture>
      <source media="(max-width: 767px)"
        srcset="https://www.sho.com/site/image-bin/images/323_1_0/323_1_0_01_141x212.jpg">
      <source media="(max-width: 991px)"
        srcset="https://www.sho.com/site/image-bin/images/323_1_0/323_1_0_01_267x200.jpg">
      <source srcset="https://www.sho.com/site/image-bin/images/323_1_0/323_1_0_01_640x360.jpg">
      <img alt="Dexter" src="https://www.sho.com/assets/images/lib/blank.gif">
    </picture>
  </section>

```
<picture>
  <source media="(max-width: 767px)"
    srcset="https://www.sho.com/site/image-bin/images/323_1_0/323_1_0_01_141x212.jpg">
  <source media="(max-width: 991px)"
    srcset="https://www.sho.com/site/image-bin/images/323_1_0/323_1_0_01_267x200.jpg">
  <source srcset="https://www.sho.com/site/image-bin/images/323_1_0/323_1_0_01_640x360.jpg">
  <img alt="Dexter" src="https://www.sho.com/assets/images/lib/blank.gif">
</picture>
```
  <p>The above code renders the portrait image (141x212) up until the small breakpoint, the roughly 4:3 image (267x200) until the medium breakpoint, and the default is the large 16:9 image (640x360). The individual images are only loaded by the browser if/when needed. A blank 1x1 .gif is loaded in the image element's src for validation. (Formerly: A negligible base64-encoded gif is loaded in the image element's src purely for validation reasons, but this was causing 404 errors in automated testing, so we switched to a direct path to an image.)</p>

  <section>
    <h2>Lazy Loaded Responsive Images</h2>
    <p>Lazysizes is a lightweight script that lazy loads images and works on top of respimage to lazy load responsive images as necessary. Lazy-loaded images are not loaded by the browser until they are nearing (or initially found within) the current browser viewport in order to further save bandwidth.</p>
    <picture>
      <source media="(max-width: 767px)"
        data-srcset="https://www.sho.com/site/image-bin/images/323_6_0/323_6_0_01_141x212.jpg">
      <source media="(max-width: 991px)"
        data-srcset="https://www.sho.com/site/image-bin/images/323_6_0/323_6_0_01_267x200.jpg">
      <source data-srcset="https://www.sho.com/site/image-bin/images/323_6_0/323_6_0_01_640x360.jpg">
      <img class="lazyload" alt="Dexter" src="https://www.sho.com/assets/images/lib/blank.gif">
    </picture>  
  </section>

```
<picture>
  <source media="(max-width: 767px)"
    data-srcset="https://www.sho.com/site/image-bin/images/323_6_0/323_6_0_01_141x212.jpg">
  <source media="(max-width: 991px)"
    data-srcset="https://www.sho.com/site/image-bin/images/323_6_0/323_6_0_01_267x200.jpg">
  <source data-srcset="https://www.sho.com/site/image-bin/images/323_6_0/323_6_0_01_640x360.jpg">
  <img class="lazyload" alt="Dexter" src="https://www.sho.com/assets/images/lib/blank.gif">
</picture>
```
  <p>The above code is the same as the previous (different image source), except with the addition of the "lazyload" class on the img element and "data-" on the srcset attributes, these elements are lazy loaded as needed. So if the element was placed far down the page, it would not be loaded into the cache until the user scrolls down near to it.</p>

  <h2>Lazy Loaded Responsive Background Images</h2>
  <p>Lazysizes' bgset plugin allows for background images to be responsively served and lazy loaded.</p>
  <section class="component-examples--large">
    <div class="lazyload responsive-placeholder-image"
      data-bgset="https://www.sho.com/site/image-bin/images/408_6_0/408_6_0_01_520x780.jpg [--medium] | https://www.sho.com/site/image-bin/images/408_6_0/408_6_0_01_1024x768.jpg">
    </div>
  </section>

```
<div class="lazyload responsive-placeholder-image"
  data-bgset="https://www.sho.com/site/image-bin/images/408_6_0/408_6_0_01_520x780.jpg [--medium] | https://www.sho.com/site/image-bin/images/408_6_0/408_6_0_01_1024x768.jpg">
</div>
```
  <p>Since many of our promotional images may be loaded in as background images, this functionality seems to be necessary. This particular implementation requires the lazysizes' window JS object to be configured in page as below; this is how we are determining what [--small] refers to in the markup. Above the code is loading a portrait-style image (520x780) until the medium breakpoint (above small), and then a larger 4:3 image is rendered.</p>

```
<script>
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.customMedia = {
    '--small': '(max-width: 767px)',
    '--medium': '(max-width: 991px)',
    '--from-medium': '(min-width: 992px)'    
};
</script>
```

<p>Since this element only has a background image, the SASS layer has to take care of rendering the box element correctly, taking care of aspect ratio changes across breakpoints as needed.</p>

```
.responsive-placeholder-image {
  background-repeat: no-repeat;
  background-size: cover;

  @include proportions--portrait;

  @include from-medium {
    @include proportions--fourbythree;
  }
}
```

<p>These examples are just a sampling of what respimage and lazysizes can do. Here are some links for further reference:   
**[Respimage](https://github.com/aFarkas/respimage)**  
**[Lazysizes](http://afarkas.github.io/lazysizes/)**  
**[Lazysizes bgset](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/bgset)**
</p>


## Bundling Vendor Dependencies for Responsive Images

While we don't interact with LazySizes or RespImage directly through any kind of API call, these frameworks still have to be added to the stack and present in the browser in order to be used.
Previously this was achieved with simple script tags, but as of 7.3.0, they are bundled with the application javascript via `browserify` and `browserify-shim`. See `gulpisms/browserify.js` for more.
