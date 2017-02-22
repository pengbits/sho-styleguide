---
name:  Series Legal
collection: components
---

# Series Legal

A Series Legal section displays a television rating graphic/icon, a string of text with all of the advisories (in caps), and also copyright information.
<div class="series-legal">
  <div class="series-legal__icon tvma-dlvs"></div>
  <h6 class="series-legal__advisories">
    <div class="series-legal__advisories--ratings">
      Adult Content, Graphic Language, Nudity, Violence, Strong Sexual Content, View Discretion Advised.
    </div>
    <div class="series-legal__advisories--copyright">
      Homeland &copy; Showtime Networks Inc. All rights reserved.
    </div>
  </h6>
</div>

```html
<div class="series-legal">
  <!-- ratings icon set as background in css - this could be set inline depending on what is delivered from the back end -->
  <div class="series-legal__icon tvma-dlvs"></div>
  <!-- there is a 2nd class on the h6 to prevent the text from wrapping under the ratings icon -->
  <h6 class="series-legal__advisories">
   <!--using divs here instead of spans to create two lines of text -->
   <div class="series-legal__advisories--ratings">
     Adult Content, Graphic Language, Nudity, Violence, Strong Sexual Content, View Discretion Advised.
   </div>
   <div class="series-legal__advisories--copyright">
     Homeland &copy; Showtime Networks Inc. All rights reserved.
   </div>
 </h6>
</div>
```

### Class Names

The following are all the class names currently for each type of ratings icon:

- tvma-dlvs
- tv14-d
- tv14-dl
- tv14-dlvs
- tv14-l
- tv14-lv
- tvma
- tvma-dl
- tvma-ds
- tvma-dlv
- tvma-dvs
- tvma-l
- tvma-sl
- tvma-sv
- tvpg-ac
- tvpg-l
