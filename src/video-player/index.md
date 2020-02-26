---
name: Video Player
collection: components
---

# Video Player
This is our default Brightcove video player, with pause / end cards and auto redirect to next related promo video. Already viewed related promo videos are stored in a cookie. The cookie gets voided if the next video is last in the array of related videos on the page. Please note this is a styleguide for reference only example; related video links are relative and the redirect / cookie won't work unless you are on sho.com or localhost:8080.

<main class="video-player-standard js-video-player">
  <div class="video-player">
    <div class="video-player__video">
      <div class="video-player__video__inner">
        <video
          id="video-player"
          class="video-playr__video__embed video-js"
          style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;"
          data-account="63128"
          data-player="VycdXcW3l"
          data-embed="default"
          data-video-id="5279535373001"
          data-age-gate="0"
          data-full-episode="false"
          controls
          poster="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_pro05_1280x640.jpg">
        </video>
        <div class="video-playr__error-message"></div>
        <div class="video-playr__age-gate-container"></div>
        <div class="video-player__card video-player__card--paused">
          <div class="video-player__card-inner">
            <div class="video-player__order">
              <h3 class="video-player__order-message">Want Showtime? Choose Your Way</h3>
              <a class="button--solid-red video-player__order-button--desktop"
                  href="/order?i_cid=int-default-4763"
                  data-track
                  data-context="video pause"
                  data-label="order">
                  Try It Now For Free
              </a>
              <a class="button--solid-red video-player__order-button--mobile"
                  href="/order?i_cid=int-default-4763"
                  data-track
                  data-context="video pause"
                  data-label="order">
                  Get Showtime
              </a>
            </div>
            <a class="video-player__button video-player__button--resume" data-role="play" href="#">Resume Playing</a>
          </div>
        </div>
        <div class="video-player__card video-player__card--ended lazyload" data-bgset="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_pro05_1280x640.jpg">
          <div class="video-player__card-inner">
            <div class="video-player__order">
              <h3 class="video-player__order-message">Want Showtime? Choose Your Way</h3>
              <a class="button--solid-red video-player__order-button--desktop"
                  href="/order?i_cid=int-default-4764"
                  data-track
                  data-context="video end"
                  data-label="order">
                  Try It Now For Free
              </a>
              <a class="button--solid-red video-player__order-button--mobile"
                  href="/order?i_cid=int-default-4764"
                  data-track
                  data-context="video end"
                  data-label="order">
                  Get Showtime
              </a>
            </div>
            <a class="video-player__button video-player__button--replay" data-role="play"  href="#">Replay Video</a>
            <div class="video-player__next">
              <a class="video-player__next-link">
                <div class="video-player__next-thumb">
                  <h6 class="video-player__next-title"></h6>
                </div>
              </a>
              <h6 class="video-player__next-stop">Stop Autoplay</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

### Related Videos

<!-- PROMO VIDEOS -->
<div class="promo-group promo-group--to-three-up section--inner" data-context="promo group:Related Videos">
  <figure class="promo promo--video">
    <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_pro06_640x320.jpg">
    </div>
    <figcaption class="promo__body">
      <h3 class="promo__headline">Homeland Returns </h3>
    </figcaption>
    <a class="promo__link" href="/video/55679/homeland-returns" data-track data-label="video:Homeland Returns " data-location="tile 1"></a>
  </figure>
  <figure class="promo promo--video">
    <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_bsc02_640x320.jpg">
    </div>
    <figcaption class="promo__body">
      <h3 class="promo__headline">Homeland On Location: New York City</h3>
    </figcaption>
    <a class="promo__link" href="/video/53497/homeland-on-location-new-york-city" data-track data-label="video:Homeland On Location: New York City" data-location="tile 2"></a>
  </figure>
  <figure class="promo promo--video">
    <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_prf04_640x320.jpg">
    </div>
    <figcaption class="promo__body">
      <h3 class="promo__headline">Homeland: Rupert Friend on Quinn</h3>
    </figcaption>
    <a class="promo__link" href="/video/53408/homeland-rupert-friend-on-quinn" data-track data-label="video:Homeland: Rupert Friend on Quinn" data-location="tile 3"></a>
  </figure>
  <figure class="promo promo--video">
    <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_trl02_640x320.jpg">
    </div>
    <figcaption class="promo__body">
      <h3 class="promo__headline">Homeland Season 6 Trailer</h3>
    </figcaption>
    <a class="promo__link" href="/video/52797/homeland-season-6-trailer" data-track data-label="video:Homeland Season 6 Trailer" data-location="tile 4"></a>
  </figure>
  <figure class="promo promo--video">
    <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_prf03_640x320.jpg">
    </div>
    <figcaption class="promo__body">
      <h3 class="promo__headline">Homeland: F. Murray Abraham on Dar Adal</h3>
    </figcaption>
    <a class="promo__link" href="/video/52122/homeland-f-murray-abraham-on-dar-adal" data-track data-label="video:Homeland: F. Murray Abraham on Dar Adal" data-location="tile 5"></a>
  </figure>
  <figure class="promo promo--video">
    <div class="promo__image lazyload" data-bgset="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_prf02_640x320.jpg">
    </div>
    <figcaption class="promo__body">
      <h3 class="promo__headline">Homeland: Mandy Patinkin on Saul</h3>
    </figcaption>
    <a class="promo__link" href="/video/51997/homeland-mandy-patinkin-on-saul" data-track data-label="video:Homeland: Mandy Patinkin on Saul" data-location="tile 6"></a>
  </figure>
</div>

## Video Player with Email Signup (Free Full Episodes)

<main class="video-player-standard js-video-player video-player--email-gated">
  <div class="video-player">
    <!-- email signup -->
    <div class="js-react-email-signup" data-pub-id="898" data-headline="To watch this free full episode, please enter your information below." data-cta="Submit" data-tracking-context="email signup:FFE SHO.com Prospect" data-is-video="true"></div>
    <!-- email signup -->
    <div class="video-player__video">
      <div class="video-player__video__inner">
        <video
          id="video-player-2"
          class="video-playr__video__embed video-js"
          style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;"
          data-account="63128"
          data-player="VycdXcW3l"
          data-embed="default"
          data-video-id="5279535373001"
          data-age-gate="0"
          data-full-episode="false"
          controls
          poster="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_pro05_1280x640.jpg">
        </video> 
        <div class="video-playr__error-message"></div>
        <div class="video-player__card video-player__card--paused">
          <div class="video-player__card-inner">
            <div class="video-player__order">
              <h3 class="video-player__order-message">Want Showtime? Choose Your Way</h3>
              <a class="button--solid-red video-player__order-button--desktop" href="https://www.sho.com/order">Try It Now For Free</a>
              <a class="button--solid-red video-player__order-button--mobile" href="https://www.sho.com/order">Get Showtime</a>  
            </div>
            <a class="video-player__button video-player__button--resume" data-role="play"  href="#">Resume Playing</a>
          </div>
        </div>
        <div class="video-player__card video-player__card--ended lazyload" data-bgset="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_pro26_640x320.jpg">
          <div class="video-player__card-inner">
            <div class="video-player__order">
              <h3 class="video-player__order-message">Want Showtime? Choose Your Way</h3>
              <a class="button--solid-red video-player__order-button--desktop" href="https://www.sho.com/order">Try It Now For Free</a>
              <a class="button--solid-red video-player__order-button--mobile" href="https://www.sho.com/order">Get Showtime</a> 
            </div>
            <a class="video-player__button video-player__button--replay" data-role="play"  href="#">Replay Video</a>
            <div class="video-player__next">
              <a class="video-player__next-link"href="http://localhost:4000/styleguide/video-player/">
                <div class="video-player__next-thumb lazyload" data-bgset="https://www.sho.com/site/image-bin/images/1032265_1_0/1032265_1_0_pro12_640x320.jpg">
                  <h6 class="video-player__next-title">Secrets (Roadies Season 1 Spot)</h6>
                </div>
              </a>
              <h6 class="video-player__next-stop">Stop Autoplay</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

## Video Player with Age-Gate 

<main class="video-player-agegate js-video-player">
  <div class="video-player">
    <div class="video-player__video">
    	<div class="video-player__video__inner">
        <video
          id="video-player-3"
          class="video-playr__video__embed video-js"
         	style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;"
          data-account="63128"
          data-player="VycdXcW3l"
          data-embed="default"
          data-video-id="5279535373001"
          data-age-gate="18"
          data-full-episode="false"
          controls
          poster="https://www.sho.com/site/image-bin/images/804_6_0/804_6_0_pro05_1280x640.jpg">
        </video> 
        <div class="video-playr__error-message"></div>
        <div class="video-playr__age-gate-container"></div>
      </div>
    </div>
  </div>
</main>

<a href = "./geo-filter">Click here to see an example of the GEO Filter in action.</a>

### References 
The brightcove player uses hsv color format instead of hex to set progress bar colors. You can use this link here to convert http://www.rapidtables.com/convert/color/rgb-to-hsv.htm,

<script src="//players.brightcove.net/63128/VycdXcW3l_default/index.min.js"></script>
<script src="//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.js"></script>
<style> 
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