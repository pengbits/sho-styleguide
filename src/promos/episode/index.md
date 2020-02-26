---
name: Episode
collection: components
---

# Episode

<article class="season-examples">
  <p>On hover (small breakpoint and above), episode short description and translucent overlay appear</p>
    <figure class="promo promo--episode">
      <div class="promo__image" style="background-image:url(https://www.sho.com/site/image-bin/images/804_5_3422801/804_5_3422801_01_252x189.jpg">
      </div>
      <figcaption class="promo__body">
        <h3 class="promo__headline">Ep 12</h3>
        <p class="promo__copy"><span class="promo__copy__date">Oct 7, 2015</span> Carrie and Saul investigate what she saw in Islamabad. Season finale.</p>
      </figcaption>
      <a class="promo__link" href="#">Ep 12</a>
    </figure>
    <p>Not highlighted (if part of a row in which another episode is highlighted)</p>
    <figure class="promo promo--episode promo--diminish">
      <div class="promo__image" style="background-image:url(https://www.sho.com/site/image-bin/images/804_5_3422801/804_5_3422801_01_252x189.jpg">
      </div>
      <figcaption class="promo__body">
        <h3 class="promo__headline">Ep 12</h3>
        <p class="promo__copy"><span class="promo__copy__date">Oct 7, 2015</span> Carrie and Saul investigate what she saw in Islamabad. Season finale.</p>
      </figcaption>
      <a class="promo__link" href="#">Ep 12</a>
    </figure>
</article>


```html
<figure class="promo promo--episode">
  <div class="promo__image" style="background-image:url(https://www.sho.com/site/image-bin/images/804_5_3422801/804_5_3422801_01_252x189.jpg">
  </div>
  <figcaption class="promo__body">
    <h3 class="promo__headline">Ep 12</h3>
    <p class="promo__copy"><span class="promo__copy__date">Oct 7, 2015</span> Carrie and Saul investigate what she saw in Islamabad. Season finale.</p>
  </figcaption>
  <a class="promo__link" href="#">Ep 12</a>
</figure>
```

  <p>This is a full episode list that appears on the respective Season Landing Pages.</p>
<article class="season-examples">
  <div class="promo-group promo-season-group section--inner" data-context="hero">
  <figure class="promo">
      <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/1032076_1_3422804/1032076_1_3422804_01_568x426.jpg [--small] |  https://www.sho.com/site/image-bin/images/1032076_1_3422804/1032076_1_3422804_02_640x360.jpg" ></div>
      <a class="promo__link" href="/billions/season/1/episode/1/pilot" data-track="" data-context="episode list" data-label="episode detail:Billions:season:1:episode:1" data-location="tile 1">Pilot</a>
    </figure>
    <div class="promo__body">
      <h4 class="promo__headline">Episode 1: Separation Anxiety!</h4>
      <p class="promo__date_time">Original Air Date: Sun Oct 04 21:00:00 EDT 2015</p>
      <p class="promo__copy">Almost two years after the Embassy attack in Islamabad, Carrie is building a new life in Berlin. But her peace is threatened when a request from her boss forces her back into the dangerous world she left behind. Season premiere.</p>
      <a class="promo__stream-btn" href="#/stream/episode/3422770/int-default-1002">STREAM THIS EPISODE</a>
      <a class="promo__watch-btn" href="/video/38763/head-of-security">Watch Episode for Free</a>
      </div>
    </div>
</article>

 ```html
 <article class="season-examples">
  <div class="promo-group promo-season-group section--inner" data-context="hero">
    <div class="promo__body">
      <h4 class="promo__headline">Episode 1: Separation Anxiety</h4>
      <p class="promo__date_time">Original Air Date: Sun Oct 04 21:00:00 EDT 2015</p>
      <p class="promo__copy">Almost two years after the Embassy attack in Islamabad, Carrie is building a new life in Berlin. But her peace is threatened when a request from her boss forces her back into the dangerous world she left behind. Season premiere.</p>
      <a class="promo__stream-btn" href="#/stream/episode/3422770/int-default-1002">STREAM THIS EPISODE</a>
      <a class="promo__watch-btn" href="/video/38763/head-of-security">Watch Episode for Free</a>
      </div>
    </div>
</article>
 ```
