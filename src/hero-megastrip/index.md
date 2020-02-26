---
name: Hero MegaStrip
collection: components
---

<h1>Hero MegaStrip</h1>

from [SITE-19823](https://work.sho.com/jira/browse/SITE-19823)
  
The concept for the animated Hero that Keith Landon explored in [DESIGN-17934](https://work.sho.com/jira/browse/DESIGN-17934) ended up being too elaborate/heavy to implement as an animated gif, but before rejecting outright, we will try to build something similar in html+css+js. since the concept is just a slow pan over a very wide "breath-of-content/itunes store" style strip of artworks, it may be possible to recreate the same effect without the prohibitive file sizes that come with the giant animated gif, for use in the stream showtime page.

if possible, this animated hero would work for both desktop + mobile (but not for the amp page)

_because the vieport is used to calculate the extra-padding on the inner container, at desktop, this component looks best with developer tools docked to the right_

<section class="hero hero--megastrip" data-context="hero">      
<img class="hero__logo" src="https://downloads.sho.com/stream-showtime/Showtime_logo.svg" />  
<div class="hero__image">
  <div class="megastrip js-megastrip">
    <ul class="megastrip__inner">
      <li class="megastrip__item megastrip__item-1" ><em class="badge">1</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/01.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-2" ><em class="badge">2</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/02.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-3" ><em class="badge">3</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/03.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-4" ><em class="badge">4</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/04.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-5" ><em class="badge">5</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/05.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-6" ><em class="badge">6</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/06.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-7" ><em class="badge">7</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/07.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-8" ><em class="badge">8</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/08.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-9" ><em class="badge">9</em><img class="megastrip__image"  style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/09.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-10"><em class="badge">10</em><img class="megastrip__image" style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/10.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-11"><em class="badge">11</em><img class="megastrip__image" style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/11.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-12"><em class="badge">12</em><img class="megastrip__image" style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/12.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-13"><em class="badge">13</em><img class="megastrip__image" style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/13.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-14"><em class="badge">14</em><img class="megastrip__image" style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/14.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
      <li class="megastrip__item megastrip__item-15"><em class="badge">15</em><img class="megastrip__image" style="background-image:url(https://downloads.sho.com/stream-showtime/megastrip/v2/15.jpg)" src="https://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
    </ul>
  </div>
</div>
<div class="hero__inner">
  <h1 class="stream-showtime__hero-header">Stream Showtime<sup><span class="stream-showtime--reg">®</span></sup> Now</h1>
  <h3 class="stream-showtime__hero-copy"> 
    Try free for 7 days, then only $10.99/month. Cancel anytime.
  </h3>
</div>
</section>

<p style="400px">&nbsp;</p>
```
<section class="hero hero--megastrip" data-context="hero">      
  <img class="hero__logo" src="https://downloads.sho.com/stream-showtime/Showtime_logo.svg">  
    <div class="megastrip js-megastrip">
      <ul class="megastrip__inner">
        <li class="megastrip__item"><img data-bgset="http://downloads.sho.com/stream-showtime/01.jpg" src="http://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
        <li class="megastrip__item"><img data-bgset="http://downloads.sho.com/stream-showtime/02.jpg" src="http://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
        <li class="megastrip__item"><img data-bgset="http://downloads.sho.com/stream-showtime/03.jpg" src="http://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
        <li class="megastrip__item"><img data-bgset="http://downloads.sho.com/stream-showtime/04.jpg" src="http://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
        <li class="megastrip__item"><img data-bgset="http://downloads.sho.com/stream-showtime/05.jpg" src="http://downloads.sho.com/stream-showtime/clear_200x300.gif" /></li>
        ...
      </ul>
    </div>
  <div class="hero__inner">
    <p>headline + copy goes here</p>
  </div>
</section>
```


<style type="text/css">
  .site-sidebar,
  .site-sidebar-toggle {
    display: none;
  }

  .order-home-container {
    width: 100%;
    overflow: hidden;
  }

  .site-main {
    padding: 0;
  }

  .site-content {
    max-width: none;
    padding: 10px;
  }
</style>