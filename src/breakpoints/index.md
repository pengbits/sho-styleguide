---
name: Breakpoints
collection: components
---

# Breakpoints

<aside class="breakpoints-aside">
  <p>Breakpoints are markers for when to apply different styles based on the window/viewport dimensions. 
    (used in media-queries). Our breakpoints are defined as a map in the sass layer:</p>
  <p>To see the breakpoints in action, resize the browser window. For best results, collapse the sidebar.</p>

  <p>in mobile-first approach, 'extra-small' is simply the default styles without any media-query, so there is no breakpoint defined for this size...</p>
</aside>

<div class="breakpoints-example-code-snippet">
  <pre style="display:block !important">
    <code style="display:block !important">
$breakpoint-map: (
  // these are for width
  <em>'extra-small':        0px'</em> // this is not needed
  'small':              480px,
  'medium':             768px,
  'large':              992px,
  'extra-large':        1200px,
  'extra-extra-large':  1850px,
  // these are for height
  'extra-short':        450px, 
  'short':              550px, 
  'medium-tall':        650px,
  'tall':               750px,
  'extra-tall':         1200px
);  
  </code>
</pre>
</div>

<p class="breakpoints-aside">
  to extract one of these values directly, use mq-breakpoint()
</p>

<div class="breakpoints-example-code-snippet">
  <pre style="display:block !important">
    <code style="display:block !important">  
// sass
.wibble {
  width: mq-breakpoint('medium'); 
}

// css
.wibble {
  width: 768px
}
    </code>
  </pre>
</div>

<p class="breakpoints-aside">
  This is not often needed in practice, since you can wrap your responsive rules with the mq() mix-in 
  and set the breakpoint that way:
</p>

<div class="breakpoints-example-code-snippet">
  <pre style="display:block !important">
    <code style="display:block !important">  
// sass
@include mq($until:'large') {
  padding:$size-s;
}

// css
@media (max-width: 768px) {
  padding: 10px;
}
    </code>
  </pre>
</div>

<p class="breakpoints-aside">Not all beakpoints are concerned with width - the second group of values in the hash above are for targeting viewports with a specific height...</aside>
  
  <div class="breakpoints-example-code-snippet">
<pre style="display:block !important">
  <code style="display:block !important">  
    :
    :
'extra-short':        450px, 
'short':              550px, 
'medium-tall':        650px,
'tall':               750px,
'extra-tall':         1200px

    </code>
  </pre>
  </div>
  
<p class="breakpoints-aside">
  the mq mixin accepts the same 'from','until', and 'at' keywords as the helpers we were using previously. It is inspired by [sass-mq](https://github.com/sass-mq/sass-mq)
</p>

<h3>Until...</h3>
<p>These examples show a box that is filled with a teal color until the breakpoint indicated</p>

<figure class="breakpoints-example breakpoints-example--until">
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--until-small"><h1>Until small</h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--until-medium"><h1>Until medium</h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--until-large"><h1>Until large</h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--until-extra-large"><h1>Until extra-large</h1></figcaption>
</figure>


<figure class="breakpoints-example breakpoints-example--width">
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--extra-small"><h1>Extra-small<em> 0px - 479px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--small"><h1>Small  <em>480px - 767px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--medium"><h1>Medium <em>768px - 991px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--large"><h1>Large  <em>992px - 1199px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--extra-large"><h1>Extra-Large <em>1200px+</em></h1></figcaption>
</figure>


<figure class="breakpoints-example breakpoints-example--height">
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--extra-extra-short"><h1>Extra-extra-short<em> 0 - 449px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--extra-short"><h1>Extra-short<em> 450px - 549px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--short"><h1>Short  <em>550-649px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--medium-tall"><h1>Medium Tall  <em>650px-749px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--tall"><h1>Tall  <em>750px-1199px</em> </h1></figcaption>
  <figcaption class="breakpoints-example__breakpoint breakpoints-example__breakpoint--extra-tall"><h1>Extra-Tall  <em>1200px</em> </h1></figcaption>
</figure>
