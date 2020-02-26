---
name: Video Player Geo Filter
---

# Video Player Geo Filter
This component is just the video player itself, the same Brightcove implemented currently on sho.com and SHO Place.
This demonstrates GEO filtering.

<main class="video-player js-video-player">
<div class="video-player__video">
	<div class="video-player__video__inner">
    <video
      id="video-player"  
      class="video-playr__video__embed video-js"
     	style="position:absolute; top:0; bottom:0; right:0; left:0; width:100%; height:100%;"
      data-account="63128"
      data-player="VycdXcW3l"
      data-embed="default"
      data-video-id="4814500559001"  
      data-embed="default"
      data-age-gate="0"
      controls
      poster="https://www.sho.com/site/image-bin/images/0_0_0/0_0_0_pro26_640x320.jpg">
    </video>
    <div class="video-playr__error-message"></div>
    <div class="video-playr__age-gate-container"></div>
   </div>
</div>
</main>


<script src="//players.brightcove.net/63128/VycdXcW3l_default/index.min.js"></script>
