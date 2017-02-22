---
name: Grid
collection: elements
---

# Grid

<div class="grid-examples">
  <p>
    <a href="http://neat.bourbon.io/">Neat</a> is a semantic grid framework dependent on the <a href="http://bourbon.io/">Bourbon</a> mixin library, that we are using at this time. We are moving away from using presentational class names on elements in the HTML layer, in favor of using mixins in the CSS/SASS layer, in order to better de-couple the markup from its styling. This is represented in the below examples; the code blocks within the elements reflect what is implemented via the CSS. We are also experimenting with extensions from Neat for other possible needs, such as rows of equal height columns.
  </p>

  
  <div class="grid-example__legend"><pre>
// neat grid settings
$column: 67px;
$gutter: 36px;
$grid-columns: 12;
$max-width: 1200px;

// extra-small is default
$small-breakpoint: 480px;
$medium-breakpoint: 768px;
$large-breakpoint: 992px;
$extra-large-breakpoint: 1200px;
  </pre></div>
  
  <p>Note: All containing elements need to @extend %container</p>
  
  <h3>2 column layout for medium and above</h3>
  <section class="grid-example zero">
    <!-- <em class="grid-example__legend"><pre>@include container;</pre></em> -->
    <article>
      <div class="grid-example__snippet"><pre>
@include from-medium {
  @include span-columns(6);
}
    </pre></div>
    </article>
    <article>
      <div class="grid-example__snippet"><pre>
@include from-medium {
  @include span-columns(6);
}
      </pre></div>
    </article>
  </section>
  
  <h3>2 column layout for medium, 4 column layout for large and above</h3>
  <section class="grid-example one">
    <!-- <em class="grid-example__legend"><pre>@include container;</pre></em> -->
    <article>
      <div class="grid-example__snippet"><pre>
@include at-medium {
  @include span-columns(6);
  @include omega(even);
}

@include from-large {
  @include span-columns(3);
}
      </pre></div>
    </article>
    <article>
      <div class="grid-example__snippet"><pre>
@include at-medium {
  @include span-columns(6);
  @include omega(even);
}

@include from-large {
  @include span-columns(3);
}
      </pre></div>
    </article>
    <article>
      <div class="grid-example__snippet"><pre>
@include at-medium {
  @include span-columns(6);
  @include omega(even);
}

@include from-large {
  @include span-columns(3);
}
      </pre></div>
    </article>
    <article>
      <div class="grid-example__snippet"><pre>
@include at-medium {
  @include span-columns(6);
  @include omega(even);
}

@include from-large {
  @include span-columns(3);
}
      </pre></div>
    </article>
  </section>
  
  <h3>4 column layout for medium and above, with equal height columns</h3>
    <div class="grid-example__snippet"><pre>
@include from-medium {
  @include container-equal;
  & > * {
    margin-top: 0;
    @include span-columns(3);
  }
}
  </pre></div>
  <section class="grid-example two">
    <article>
      <div class="grid-example__snippet">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </article>
    <article>
      <div class="grid-example__snippet">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </article>
    <article>
      <div class="grid-example__snippet">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    </article>
    <article>
      <div class="grid-example__snippet">
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </article>
  </section>
</div>