---
name:  Store Banner
collection: components
---

# Store Banner

In it's current state the store banner is a three coloumn banner with a product image, headline, and button. The two right columns stack in the medium breakpoint before all three columns stack at small breakpoints.  The product image is 271x148px, should be a transparent .png or have an all white background, and is used as the div background image.

<div class="store-banner" data-context="banner">
  <div class="store-banner__inner">
    <div class="store-banner__body">
      <h3 class="store-banner__headline">Gear From All Your Showtime Favorites In One Place. Shop Now.</h3>
      <div class="store-banner__button">
        <a href="https://store.sho.com/?src=CLNTMainShopPage&amp;utm_source=&amp;utm_medium=client%20site&amp;utm_campaign=MainShopPage&amp;pa=PRF-SHO-012518MainShopPage" class="button--outline-black" data-track="" data-label="shop">
          Shop Now        
        </a>
      </div>
    </div>
    <div class="store-banner__image lazyloaded" data-bgset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png" style="background-image: url(&quot;https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png&quot;);"><picture style="display: none;"><source data-srcset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png" sizes="305px" srcset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png"><img alt="" class="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="305px"></picture></div>
  </div>
</div>

```
<div class="store-banner" data-context="banner">
  <div class="store-banner__inner">
    <div class="store-banner__body">
      <h3 class="store-banner__headline">Gear From All Your Showtime Favorites In One Place. Shop Now.</h3>
      <div class="store-banner__button">
        <a href="https://store.sho.com/?src=CLNTMainShopPage&amp;utm_source=&amp;utm_medium=client%20site&amp;utm_campaign=MainShopPage&amp;pa=PRF-SHO-012518MainShopPage" class="button--outline-black" data-track="" data-label="shop">
          Shop Now        
        </a>
      </div>
    </div>
    <div class="store-banner__image lazyloaded" data-bgset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png" style="background-image: url(&quot;https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png&quot;);"><picture style="display: none;"><source data-srcset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png" sizes="305px" srcset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_prm-merch0718_360x160.png"><img alt="" class="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="305px"></picture></div>
  </div>
</div>
```
<jsp-partials>styleguide/store-banner/_store_banner.jsp.md</jsp-partials>