--- 
collection: components
name: Order Masthead 
--- 

<div style="position:relative;">
  <nav class="order-masthead">
    <h1 class="order-masthead__logo">Showtime</h1>
    <a class="order-masthead__sho-link" href="/">GO TO SHO.com</a>
  </nav>
  <section class="hero hero--no-accent ">
    <a class="hero__image lazyload" data-bgset="http://www.sho.com/site/image-bin/images/1031103_2_0/1031103_2_0_prm-ordersho7_568x426.jpg [--small] |  http://www.sho.com/site/image-bin/images/1031103_2_0/1031103_2_0_prm-ordersho7_1024x640.jpg"></a>
    <div class="hero__inner">
      <div class="hero__body">
        <h1 class="hero__headline">START WATCHING SHOWTIME.</h1>
        <p class="hero__copy">Get instant access to commercial-free, award-winning SHOWTIME original series, can't-miss movies, groundbreaking documentaries, laugh-out-loud comedy specials, hard-hitting sports and much more. Watch live TV or catch up on-demand whenever and wherever
          -- on your TV, tablet, phone or computer.
        </p>
      </div>
    </div>
  </section>
</div>

```html
// simplied navigation for use in the order page
<nav class="order-masthead">
  <h1 class="order-masthead__logo">Showtime</h1>
  <a class="order-masthead__sho-link" href="/">GO TO SHO.com</a>
</nav>
```

<style type="text/css">
  .site-sidebar,
  .site-sidebar-toggle {
    display: none;
  }
  
  .simplified-global-navigation {
    position: absolute;
    top: 0;
    z-index: 9999;
  }
  
  .site-main {
    padding: 0;
  }
  
  .site-content {
    max-width: none;
  }
</style>
