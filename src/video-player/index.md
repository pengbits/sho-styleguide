---
name: Video Player
collection: components
---
 
# Video Player
This  component is just the video player itself, the same Brightcove-backed player currently on sho.com and SHO Place. 

<main class="video-player-standard js-video-player">
<div class="video-player__video">
	<div class="video-player__video__inner">
    <video
      id="video-player"  
      class="video-playr__video__embed video-js" 
     	style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;" 
      data-account="63128" 
      data-player="VycdXcW3l" 
      data-embed="default" 
      data-video-id="4342021288001"
      data-embed="default" 
      data-age-gate="0"
      controls 
      poster="http://www.sho.com/site/image-bin/images/0_0_0/0_0_0_pro26_640x320.jpg">
    </video> 
    <div class="video-playr__error-message"></div>
    <div class="video-playr__age-gate"></div>
    <div class="video-player__card video-player__card--paused">
      <div class="video-player__card-inner">
        <div class="video-player__order">
          <h3 class="video-player__order-message">Want Showtime? Choose Your Way</h3>
          <a class="button--solid-red video-player__order-button--desktop" href="http://www.sho.com/order">Try It Now For Free</a>
          <a class="button--solid-red video-player__order-button--mobile" href="http://www.sho.com/order">Get Showtime</a>  
        </div>
        <a class="video-player__button video-player__button--resume" data-role="play"  href="#">Resume Playing</a>
      </div>
    </div>
    <div class="video-player__card video-player__card--ended lazyload" data-bgset="http://www.sho.com/site/image-bin/images/0_0_0/0_0_0_pro26_640x320.jpg">
      <div class="video-player__card-inner">
        <div class="video-player__order">
          <h3 class="video-player__order-message">Want Showtime? Choose Your Way</h3>
          <a class="button--solid-red video-player__order-button--desktop" href="http://www.sho.com/order">Try It Now For Free</a>
          <a class="button--solid-red video-player__order-button--mobile" href="http://www.sho.com/order">Get Showtime</a> 
        </div>
        <a class="video-player__button video-player__button--replay" data-role="play"  href="#">Replay Video</a>
        <div class="video-player__next">
          <a class="video-player__next-link"href="http://localhost:4000/styleguide/video-player/">
            <div class="video-player__next-thumb lazyload" data-bgset="http://www.sho.com/site/image-bin/images/1032265_1_0/1032265_1_0_pro12_640x320.jpg">
              <h6 class="video-player__next-title">Secrets (Roadies Season 1 Spot)</h6>
            </div>
          </a>
          <h6 class="video-player__next-stop">Stop Autoplay</h6>
        </div>
      </div>
    </div>
  </div>
</div>
</main>


## Video Player with Age-Gate 

<main class="video-player-agegate js-video-player">
<div class="video-player__video">
	<div class="video-player__video__inner">
    <video
      id="video-player-2"  
      class="video-playr__video__embed video-js" 
     	style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;" 
      data-account="63128" 
      data-player="VycdXcW3l" 
      data-embed="default" 
      data-video-id="4342021288001"
      data-embed="default" 
      data-age-gate="18"
      controls 
      poster="http://www.sho.com/site/image-bin/images/0_0_0/0_0_0_pro26_640x320.jpg">
    </video> 
    <div class="video-playr__error-message"></div>
    <div class="video-playr__age-gate"></div>
   </div>
</div>
</main>



<script src="//players.brightcove.net/63128/VycdXcW3l_default/index.min.js"></script>

<a href = "./geo-filter">Click here to see an example of the GEO Filter in action.</a>


### References 
The brightcove player uses hsv color format instead of hex to set progress bar colors. You can use this link here to convert http://www.rapidtables.com/convert/color/rgb-to-hsv.htm,