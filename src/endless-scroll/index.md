--- 
name: Endless Scroll
collection: components 
--- 

# Endless Scroll

Endless Scroll automatically loads more movies as the page nears the bottom. Endless Scroll works dynamically and determines what page to load via the json url that is provided from the backend. 

Within the html markup it expects the data-page-url attribute which will have a value of the initial json page that it needs to load.
data-base-url is optional and is the base url of the styleguide. 


<section class="movies-gallery js-endless-scroll" data-base-url="/styleguide/endless-scroll"  data-page-url="/the-movie-channel/page/2" data-context="title grid:Tmc">
        <div class="promo-group-header">
          <h3 class="promo-group-header__title">TMC’S FULL MOVIE LIBRARY</h3>
        </div>
        <div class="movies-gallery__inner">
          <a class="movies-gallery__item" href="/titles/133451/1408" data-track="" data-label="title page link:1408">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_133451/0_0_133451_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_133451/0_0_133451_00_138x207.jpg">
                <img class=" lazyloaded" alt="1408" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">1408</div>
          </a>
          <a class="movies-gallery__item" href="/titles/3435545/archie" data-track="" data-label="title page link:A.R.C.H.I.E.">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3435545/0_0_3435545_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3435545/0_0_3435545_00_138x207.jpg">
                <img class=" lazyloaded" alt="A.R.C.H.I.E." src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">A.R.C.H.I.E.</div>
          </a>
          <a class="movies-gallery__item" href="/titles/141016/the-accidental-spy" data-track="" data-label="title page link:The Accidental Spy">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_141016/0_0_141016_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_141016/0_0_141016_00_138x207.jpg">
                <img class=" lazyloaded" alt="The Accidental Spy" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">The Accidental Spy</div>
          </a>
          <a class="movies-gallery__item" href="/titles/3438501/adolf-hitler-the-artist" data-track="" data-label="title page link:Adolf Hitler: The Artist">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3438501/0_0_3438501_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3438501/0_0_3438501_00_138x207.jpg">
                <img class=" lazyloaded" alt="Adolf Hitler: The Artist" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">Adolf Hitler: The Artist</div>
          </a>
          <a class="movies-gallery__item" href="/titles/128852/akeelah-and-the-bee" data-track="" data-label="title page link:Akeelah and the Bee">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_128852/0_0_128852_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_128852/0_0_128852_00_138x207.jpg">
                <img class=" lazyloaded" alt="Akeelah and the Bee" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">Akeelah and the Bee</div>
          </a>
          <a class="movies-gallery__item" href="/titles/140989/the-alamo-2004" data-track="" data-label="title page link:The Alamo (2004)">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_140989/0_0_140989_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_140989/0_0_140989_00_138x207.jpg">
                <img class=" lazyloaded" alt="The Alamo (2004)" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">The Alamo (2004)</div>
          </a>
          <a class="movies-gallery__item" href="/titles/3418462/alpha-dog" data-track="" data-label="title page link:Alpha Dog">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3418462/0_0_3418462_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3418462/0_0_3418462_00_138x207.jpg">
                <img class=" lazyloaded" alt="Alpha Dog" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">Alpha Dog</div>
          </a>
          <a class="movies-gallery__item" href="/titles/3413408/americas-sweethearts" data-track="" data-label="title page link:America's Sweethearts">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3413408/0_0_3413408_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3413408/0_0_3413408_00_138x207.jpg">
                <img class=" lazyloaded" alt="America's Sweethearts" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">America's Sweethearts</div>
          </a>
          <a class="movies-gallery__item" href="/titles/3426235/amigo-undead" data-track="" data-label="title page link:Amigo Undead">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3426235/0_0_3426235_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3426235/0_0_3426235_00_138x207.jpg">
                <img class=" lazyloaded" alt="Amigo Undead" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">Amigo Undead</div>
          </a>
          <a class="movies-gallery__item" href="/titles/3426234/anarchy-parlor" data-track="" data-label="title page link:Anarchy Parlor">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3426234/0_0_3426234_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3426234/0_0_3426234_00_138x207.jpg">
                <img class=" lazyloaded" alt="Anarchy Parlor" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">Anarchy Parlor</div>
          </a>
          <a class="movies-gallery__item" href="/titles/3415711/animals" data-track="" data-label="title page link:Animals">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3415711/0_0_3415711_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3415711/0_0_3415711_00_138x207.jpg">
                <img class=" lazyloaded" alt="Animals" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">Animals</div>
          </a>          
          <a class="movies-gallery__item" href="/titles/3427313/cabin-fever" data-track="" data-label="title page link:Cabin Fever">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="https://www.sho.com/site/image-bin/images/0_0_3427313/0_0_3427313_00_138x207.jpg" srcset="https://www.sho.com/site/image-bin/images/0_0_3427313/0_0_3427313_00_138x207.jpg">
                <img class=" lazyloaded" alt="Cabin Fever" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">Cabin Fever</div>
          </a>           
        </div>
       <div class="loading-animation loading-animation--scrolling"></div>
      </section>

```
      <section class="movies-gallery js-endless-scroll" data-page-url="{{page.moviesPagination.paginationCta.nextCta.ctaLink}}" data-context="title grid:{{page.meta.genre}}">
        <div class="promo-group-header">
          <h3 class="promo-group-header__title">TMC’S FULL MOVIE LIBRARY</h3>
        </div>
        <div class="movies-gallery__inner">
          {{#moviesPagination.tileList}}
          <a class="movies-gallery__item" href="{{ctaLink}}" data-track data-label="title page link:{{ctaLabel}}">
            <div class="movies-gallery__image">
              <picture>
                <source data-srcset="{{imageUrl}}"
                  srcset="{{imageUrl}}">
                <img class="lazyload" alt="{{ctaLabel}}" src="https://www.sho.com/assets/images/lib/blank.gif">
              </picture>
            </div>
            <div class="movies-gallery__title">{{ctaLabel}}</div>
          </a>
          {{/moviesPagination.tileList}}
           
        </div>
       <div class="loading-animation loading-animation--scrolling"></div>
      </section>
```