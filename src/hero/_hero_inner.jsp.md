
<div class="jsp-partial-annotation-container"><h3 class="jsp-partial-annotation jsp-partial-annotation--header">JSP sample</h3><h4 class="jsp-partial-annotation jsp-partial-annotation--name">Hero</h4><h4 class="jsp-partial-annotation jsp-partial-annotation--exports">/sho/views/partials/hero/_hero_inner.jsp</h4></div>

```


{{#navigationLink}}
<div class="hero__navigation-container">
	{{#previous}}
	<a class="hero__navigation hero__navigation--previous" href="{{previous.ctaLink}}" data-track data-label="arrow" data-location="left">
	  <i class="icon icon--medium icon--prev-medium"></i>
	  <span class="hero__navigation__detail">{{#previous.headerCtaLabel}}{{previous.headerCtaLabel}}<br/>{{/previous.headerCtaLabel}}{{previous.ctaLabel}}</span>
	</a>
	{{/previous}}
	{{#next}}
	<a class="hero__navigation hero__navigation--next" href="{{next.ctaLink}}" data-track data-label="arrow" data-location="right">
	  <span class="hero__navigation__detail">{{#next.headerCtaLabel}}{{next.headerCtaLabel}}<br/>{{/next.headerCtaLabel}}{{next.ctaLabel}}</span>
	  <i class="icon icon--medium icon--next-medium"></i>
	</a>
	{{/next}}
</div>
{{/navigationLink}}

<a class="hero__image lazyload" {{#panelLink}}href="{{panelLink}}" data-track data-label="{{#panelLinkType}}{{panelLinkType}}:{{/panelLinkType}}{{title}}" data-location="panel link" {{/panelLink}}  data-bgset="{{smallImageUrl}} [--small] |  {{imageUrl}}">
</a>
<div class="hero__inner">
  <div class="hero__body">
    {{#topLine}}<div class="hero__top-line">{{topLine}}</div>{{/topLine}}
    
    <{{$hero_headline_element}}h1{{/hero_headline_element}} class="hero__headline">
      {{#panelLink}}<a class="hero__headline__link" href="{{panelLink}}" data-track data-label="{{#panelLinkType}}{{panelLinkType}}:{{/panelLinkType}}{{title}}" data-location="panel link">{{/panelLink}}{{title}}{{#panelLink}}</a>
      {{/panelLink}}
    </{{$hero_headline_element}}h1{{/hero_headline_element}}>
    
    {{#subTitle}}<p class="hero__subtitle">{{{subTitle}}}</p>{{/subTitle}}
    {{#description}}<p class="hero__description">{{description}}</p>{{/description}}
    {{#ctaLink}}{{#ctaLabel}}<a class="hero__cta" href="{{ctaLink}}" data-track data-label="{{ctaType}}:{{ctaLabel}}" data-location="cta">{{ctaLabel}}</a>{{/ctaLabel}}{{/ctaLink}}
  </div>
  {{#panelLink}}
  <a class="hero__shim" href="{{panelLink}}" data-track data-label="{{#panelLinkType}}{{panelLinkType}}:{{/panelLinkType}}{{title}}" data-location="panel link"></a>
  {{/panelLink}}
</div>


```
