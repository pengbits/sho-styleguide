--- 
name: Provider Device Logos
collection: order
---

# Provider Device Logos

<section class="device-logos">
  <h2 class="device-logos__title">Stream on Your Favorite Devices or online at SHOWTIME.com</h2>
  <div class="device-logos__image"><em class="device-logos__image-alt-text">
    Fire tv 
    Android tv
    Apple tv 
    Chromecast
    Android
    Fire
    iPad
    LG 
    Roku
    Samsung
    Xbox One
    iPhone
    Oculus
  </em> 
  </div>
</section>

```
<section class="device-logos">
  <div class="section--inner"><!-- in sho context only -->
    <h2 class="device-logos__title">Stream on Your Favorite Devices or online at SHOWTIME.com</h2>
    <div class="device-logos__image">
      <em class="device-logos__image-alt-text">
        Fire tv 
        Android tv
        Apple tv 
        Chromecast
        Android
        Fire
        iPad
        LG 
        Roku
        Samsung
        Xbox One
        iPhone
        Oculus
      </em> 
    </div>
  </div>
</section>
```

This component is just a static collection of logos for the various devices and platforms that can be used to stream Showtime. Used in [/order-showtime](order-showtime) and [/stream-showtime](stream-showtime)

Previously, this was just a bunch of pngs, but it has been implemented here as a single svg in order to have greater control over the positioning of the logos at different sizes (and for fewer image requests).

there are actually two different svgs - on mobile the logos are laid out in a tight cluster but on desktop they are in two neat rows. the svgs are rendered via `background-image:url()` with css, so applying the responsive rules to swap the art is trivial. the paths to the svgs are as follows:


```
/styleguide/assets/svg/provider-device-logos/mobile.min.svg;
/styleguide/assets/svg/provider-device-logos/desktop.min.svg;
```

_the root of this path changes by context, see [/styleguide/icons](icons) and look at `variables.env.scss` for more_

the .min in the filename is a nod to the fact that they have been optimized with [https://github.com/svg/svgo](svgo), in the event that these images are updated, be sure to optimize the refreshed svgs accordingly:

```
$ svgo test.svg -o test.min.svg
```
_from [https://github.com/svg/svgo](https://github.com/svg/svgo)_



