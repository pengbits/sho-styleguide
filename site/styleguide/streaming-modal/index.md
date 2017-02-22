---
name:  Streaming Modal
collection: components
---
# Streaming Modal

Due to the media query aspect of this component, this is best viewed with the styleguide navigation toggled off.

<div class="streaming-modal modal-open">
  <a class="streaming-modal__close modal__close" rel="modal:close"></a>
  <div class="streaming-modal__option streaming-modal__option--showtime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">For subscribers who signed up through the SHOWTIME app.</p>
    <a class="streaming-modal__button" href="#">Go to showtime.com</a>
  </div>
  <div class="streaming-modal__option streaming-modal__option--showtime-anytime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">For subscribers who signed up through a cable, satellite, telco or streaming service provider.</p>
    <a class="streaming-modal__button" href="#">Go to showtimeanytime.com</a>
  </div>
  <div class="streaming-modal__order">
    <h3 class="streaming-modal__order-header">Don't Have Showtime Yet?</h3>
    <a class="button--outline-light-grey button--small" href="/order">
      Get It Now
    </a>
  </div>
</div>

```
<div class="streaming-modal modal-open">
  <a class="streaming-modal__close modal__close" rel="modal:close"></a>
  <div class="streaming-modal__option streaming-modal__option--showtime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">For subscribers who signed up through the SHOWTIME app.</p>
    <a class="streaming-modal__button" href="#">Go to showtime.com</a>
  </div>
  <div class="streaming-modal__option streaming-modal__option--showtime-anytime">
    <div class="streaming-modal__logo"></div>
    <p class="streaming-modal__copy">For subscribers who signed up through a cable, satellite, telco or streaming service provider.</p>
    <a class="streaming-modal__button" href="#">Go to showtimeanytime.com</a>
  </div>
  <div class="streaming-modal__order">
    <h3 class="streaming-modal__order-header">Don't Have Showtime Yet?</h3>
    <a class="button--outline-light-grey button--small" href="/order">
      Get It Now
    </a>
  </div>
</div>
```

The JavaScript aspect of this modal has some minor complexities. The URL hash gets transformed into slugs that can be appended to the two outgoing links in the modal as working deep links to those two services. Also, an i_cid in the hash (if present) is transformed into a query parameter on both outgoing links. 


Series example #/stream/series/1003223  

<a class="button--fixed-width button--solid-red" href="#/stream/series/1003223">Stream this series</a>  

Episode example #/stream/episode/1231231  

<a class="button--fixed-width button--solid-red" href="#/stream/episode/1231231">Stream this episode</a>  

Movie example #/stream/movie/45345  

<a class="button--fixed-width button--solid-red" href="#/stream/movie/45345">Stream this movie</a>  

Home example #/stream/home  

<a class="button--fixed-width button--solid-red" href="#/stream/home">Stream All</a>  

Series example with i_cid value at end #/stream/series/1003223/testSeries  

<a class="button--fixed-width button--solid-red" href="#/stream/series/1003223/testSeries">Stream this series</a>  

Episode example with i_cid value at end #/stream//episode/1231231/testEpisode  

<a class="button--fixed-width button--solid-red" href="#/stream/episode/1231231/testEpisode">Stream this episode</a>  

Movie example with i_cid value at end #/stream/movie/45345/testMovie  

<a class="button--fixed-width button--solid-red" href="#/stream/movie/45345/testMovie">Stream this movie</a>  

Home example with i_cid value at end #/stream/home/testHome  

<a class="button--fixed-width button--solid-red" href="#/stream/home/testHome">Stream All</a>

