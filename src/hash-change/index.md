---
name: Hash Change
collection: elements
---

# Hash Change

The HashChange class provides a centralized way of attaching functionality to when the window's hash changes. 
(_The part of the url after the `#` is called the hash, and is stored in `window.location.hash`_).

There are several use cases for triggering javascript behavior based on a hash change, to learn more check out the wiki at https://wiki.sho.com/pages/viewpage.action?pageId=18744788

To see this in action, open the developer tools and click on any of the following links

<h2>Stream example</h2>
<a href="#/stream/movie/3418468" class="button--stream button--fixed-width"><div class="button--stream__icon"></div><h5 class="button--stream__label">Stream this Movie</h5></a>

```
<a href="#/stream/movie/3418468" class="button--stream button--fixed-width">
# hash-change 'stream:opened'
```

## Order Examples

<div style="width:33%;">
  <div class="order-promo">
    <div class="order-promo__body">
        <h3 class="order-promo__headline">Want Showtime?</h3>
    </div>
    <a class="order-promo__button" href="#/order">
        Try It Now For Free
    </a>
  </div>
</div>

```
<a class="order-promo__button" href="#/order">  
```

<a href="#/order/int-default-3784" class="button--solid-red">Got Showtime?</a>

```
<a href="#/order/int-default-3784" class="button--solid-red">Got Showtime?</a>
```

for more Order Examples, see the [Order Tray](/styleguide/order-tray)

## Slideshow/Gallery Example

<a href="#/slideshow/title/3422771/homeland-s5-e2">Photos from Homeland S5 E2</a>

```
<a href="#/slideshow/title/3422771/homeland-s5-e2">Photos from Homeland S5 E2</a>
```
  

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sollicitudin elit, quis blandit elit congue ac. Sed eu velit nec ipsum ornare dictum. Aenean id aliquam felis. Curabitur suscipit lectus quis lacinia ullamcorper. Nulla vitae vestibulum diam, ac blandit ipsum. Morbi congue ante et turpis blandit, sed consequat mi convallis. Pellentesque finibus lacus neque, tincidunt vulputate risus molestie at. Maecenas laoreet, dolor ut condimentum tincidunt, arcu massa porta eros, nec mattis felis massa ut quam. Maecenas pretium vitae nunc sit amet eleifend. Nam nec turpis nisi. Morbi condimentum ornare tortor vel euismod. Aliquam erat volutpat.

Duis volutpat imperdiet ex eget ornare. Aliquam quis tortor metus. Mauris euismod nisl id tortor varius iaculis. Maecenas feugiat dolor vestibulum egestas rutrum. Praesent imperdiet congue sem. Ut a arcu et ligula imperdiet aliquet. Donec mauris lacus, tincidunt nec nisl eget, accumsan suscipit lacus. Proin vel magna tempus eros feugiat elementum eu sit amet ligula. Nulla eget consectetur lacus.

Aliquam tempor velit non pharetra elementum. Sed venenatis lorem et cursus pellentesque. Vivamus aliquam ipsum lacinia sapien facilisis imperdiet. Aliquam ac suscipit dui. Fusce tincidunt neque nulla. Praesent semper eu purus in lacinia. Duis elementum, turpis interdum rhoncus aliquet, ex metus consequat eros, sed sollicitudin odio sem in est. Curabitur semper, metus nec iaculis dapibus, quam nunc finibus justo, at lobortis leo elit sed eros. Pellentesque ornare, urna vel rhoncus imperdiet, nisl purus feugiat purus, et commodo arcu odio sit amet odio. Donec sit amet ligula feugiat, luctus nulla at, pulvinar leo. Etiam feugiat sapien quis orci ultrices suscipit. Nunc tristique lacinia nibh in placerat. Sed vel lectus a risus tincidunt consequat. Duis viverra nibh sit amet nibh venenatis aliquam. Nulla metus massa, ultrices vitae ultricies at, dignissim fermentum massa.

Nam rhoncus justo quis sapien elementum, nec rhoncus velit finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis ante, facilisis vel rhoncus a, varius nec arcu. Vestibulum vestibulum faucibus risus, id efficitur ex. Aenean orci augue, sagittis sit amet ullamcorper a, auctor in arcu. Ut euismod sit amet dolor et volutpat. Morbi faucibus vel neque id aliquet. Etiam ornare efficitur suscipit. Vivamus vitae nunc nec justo fermentum facilisis in suscipit turpis. Morbi condimentum a odio vitae tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris fringilla justo eros, euismod laoreet ipsum laoreet quis.

Nunc vestibulum urna enim. Cras ornare nunc eu convallis blandit. Quisque tempus eros ac tortor dignissim, eget pellentesque sapien vestibulum. Proin dignissim neque vitae congue tristique. Fusce placerat euismod vestibulum. Integer a tincidunt nulla. Donec in scelerisque eros, eu blandit leo. Sed porta dolor nec turpis vestibulum pharetra. Aliquam dapibus libero ac elit malesuada posuere porttitor sed metus. Vestibulum quam purus, consequat sed tortor ut, cursus pulvinar nisi. Nunc tellus tortor, dictum sit amet dignissim nec, varius in libero. Nam maximus finibus diam, ut tincidunt est suscipit in. Vestibulum lacus nibh, vestibulum eu laoreet vitae, pharetra at elit. Sed et fringilla dolor.

 