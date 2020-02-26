---
name:  Block List
collection: components
---
# Block List

The block-list is a pattern for rendering content as chunky list items at mobile, 
and as a 4-up grid at larger sizes. It is used in the stream showtime page to 
describe the attributes of the service (a value proposition), with each item getting a custom icon.

<div style="background:#FFF">
  <ul class="block-list">
    <li  class="block-list__item">
      <img class="block-list__icon" alt="no ads" src="https://downloads.sho.com/stream-showtime/icons/2_Play_Icon.svg" />
      <p>Commercial-free new episodes, full seasons and complete series</p>
    </li>
    <li class="block-list__item">
      <img class="block-list__icon" alt="download full episodes" src="https://downloads.sho.com/stream-showtime/icons/3_DL_Icon.svg" />
      <p>Download full episodes and movies to your mobile devices and watch offline.</p>
    </li>
    <li class="block-list__item block-list__item--wide">
      <img class="block-list__icon" alt="stream live" src="https://downloads.sho.com/stream-showtime/icons/4_Live_Icon.svg" />
      <p>Stream SHOWTIME CHAMPIONSHIP BOXING&reg; live with the biggest names in boxing.</p>
    </li>
    <li class="block-list__item">
      <img class="block-list__icon" alt="no cable needed" src="https://downloads.sho.com/stream-showtime/icons/2_Play_Icon.svg" />
      <p>No Cable Needed</p>
    </li>     
  </ul>
</div>

```
<ul class="block-list">
  <li  class="block-list__item">
    <img class="block-list__icon" alt="no ads" 
      src="https://downloads.sho.com/stream-showtime/icons/2_Play_Icon.svg" />
    <p>Commercial-free new episodes, full seasons and complete series</p>
  </li>
  <li class="block-list__item">
    <img class="block-list__icon" alt="download full episodes" 
      src="https://downloads.sho.com/stream-showtime/icons/3_DL_Icon.svg" />
    <p>Download full episodes and movies to your mobile devices and watch offline.</p>
  </li>
  <li class="block-list__item">
    <img class="block-list__icon" alt="stream live" 
      src="https://downloads.sho.com/stream-showtime/icons/4_Live_Icon.svg" />
    <p>Stream SHOWTIME CHAMPIONSHIP BOXING&reg; live with the biggest names in boxing.</p>
  </li>
  <li class="block-list__item">
    <img class="block-list__icon" alt="no cable needed" 
      src="https://downloads.sho.com/stream-showtime/icons/2_Play_Icon.svg" />
    <p>No Cable Needed</p>
  </li>     
</ul>
```