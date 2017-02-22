---
name: Analytics
collection: vendor
pageTracking: "sho:styleguide:analytics"
---

# Analytics

Analytics documentation is stored in [Confluence](https://wiki.sho.com/pages/viewpage.action?pageId=18744755). A copy is included below as well, for convenience, but the confluence page is the definitive source.


NOTE: These notes apply to version 7 of sho.com, which is beginning its launch in April 2016, and only apply to pages built in the new site.
This page explains the front-end approach to implementing click tracking in the JSP layer. Notating how to call analytics functions outside of user-initiated clicks is beyond the scope of this document.

## Page tracking
 
As with the previous implementation, page tracking strings are placed into a meta tag element on the page, which is picked up by the analytics JS, stored and sent to Omniture. 

```
<meta name="page-tracking" content="sho:styleguide:analytics">
```

These values are passed into the JSP layer via the configuration XMLs. Sometimes the implementation for a page is straight forward, in the related page's XML valueMap:

```
// home.xml
<bean id="homeLandingPageConfig" class="com.sho.www.config.PageConfiguration">
    <property name="parent" ref="globalPageConfiguration" />
    <property name="valueMap">
        <map>
            <entry key="featuredHeroSectionId" value="1229386" />
            ... etc.
            <entry key="pageTracking" value="sho:home" />
        </map>
    </property>
</bean>
```

In other cases, some dynamic data needs to be injected into the pageTracking key in the XML, via the dynamicValueMap:

```
// homeland.xml
<bean id="homelandLandingPageConfig" class="com.sho.www.config.series.SeriesLandingPageConfiguration">
    <property name="parent" ref="homelandSectionConfiguration" />
    <property name="dynamicValueMap">
        <map>
            <entry key="pageTracking" value="sho:series:{{meta.series.shortTitle}}:home" />
            ...
        </map>
    </property>
    <property name="valueMap">
        <map>
            <entry key="primaryHeroSectionId" value="1224736" />
            ...            
        </map>
    </property>
    <property name="castConfiguration" ref="homelandCastConfiguration" />
</bean>
```

Using Trimou/Mustache style syntax, dynamic data can be inserted in the above manner. Note that the actual object above as seen in the JSON (or output if necessary in a JSP) is page.meta.series.shortTitle, but when inside a dynamicValueMap, the "page." part is omitted as seen above.

## Click tracking

The new analytics implementation further abstracts away the details that Omniture uses to store the related values. As with the previous round, data attributes are used on HTML elements to trigger analytics events.

For any one specific link on a page there are a number of values we may wish to capture and send to Omniture:
 
- Context: the area of the page. Often, many page links will share the same context, i.e. "global navigation"
- Label: a label for the specific link - more granular than context, i.e. "menu open"
- Location: often in the context of a series such as a promo group, this either stores a numeric value that refers to its index in the group, or a text string that describes its location with a component.
- Provider ID: tracking acquisition exploration and activity on the site is very important, so when applicable we store a provider ID when the user interacts with a specific provider or provider group.

Not all of the above will be applicable to all links.
The most basic and essential part of setting up an analytics event listener is adding the attribute "data-track" to the element. Note that there is no value for this attribute, i.e. data-track="right on", it's just the attribute alone.
 
The values noted above in the bullet list can be stored in related data attributes, like the fictional examples below. Note that these values are specified by the analytics manager, not invented/guessed at by developers. Often these values need to be very specific in order to trigger processing rules once the values reach Omniture.

<div class="analytics-example">
  <a href="#" data-track data-context="global navigation" data-label="go to sho.com">Home</a>
  <a href="#" data-track data-context="promo group:see all series" data-label="series site: homeland" data-location="5">Homeland</a>
  <a href="#" data-track data-context="provider card" data-label="provider lead" data-provider-id="63">Verizon</a> 
</div>

```
<div class="analytics-example">
  <a href="#" data-track data-context="global navigation" data-label="go to sho.com">Home</a>
  <a href="#" data-track data-context="promo group:see all series" data-label="series site: homeland" data-location="5">Homeland</a>
  <a href="#" data-track data-context="provider card" data-label="provider lead" data-provider-id="63">Verizon</a> 
</div>
```

The above examples represent the most explicit and verbose possibilities. But to avoid a lot of duplicated markup, the JS layer is intelligent enough to look higher up in the DOM to find data-context or data-provider-id. So the Verizon example above could also be implemented like this if it keeps the mark up clean:

<div class="analytics-example">
  <div class="provider-card" data-context="provider card" data-provider-id="63">
    <a href="#" data-track data-label="provider lead">Verizon Logo Here</a>
    <a href="#" data-track data-label="learn more">Learn More</a>
    <a href="#" data-track data-label="provider lead">Start Your Free Trial</a>
  </div>
</div>

```
<div class="analytics-example">
  <div class="provider-card" data-context="provider card" data-provider-id="63">
    <a href="#" data-track data-label="provider lead">Verizon Logo Here</a>
    <a href="#" data-track data-label="learn more">Learn More</a>
    <a href="#" data-track data-label="provider lead">Start Your Free Trial</a>
  </div>
</div>
```
In that example, clicking on any of the three links will pick up the context and provider ID from the higher DOM element. If no context or provider ID is found higher up in the tree, the corresponding data is simply not set.

There is one further shortcut possible, in the interest of keeping the JSPs tidy. If "data-track" is set on an element without a data-label attribute, as with context and provider ID the DOM tree is scanned up to see if there is a data-label attribute on a higher level. If that is not found, it automatically picks up whatever the inner HTML of the element is, and stores that as a data label -see example below. This should only be done when explicitly requested or allowed by the analytics manager.  

<div class="analytics-example">
  <div class="footer-nav_" data-context="footer navigation">
    <a href="facebook.com" data-track>Facebook</a>
    <a href="twitter.com" data-track>Twitter</a>
    <a href="pinterest.com" data-track>Pinterest</a>
  </div>
</div>

```
<div class="footer-nav_" data-context="footer navigation">
  <a href="facebook.com" data-track>Facebook</a>
  <a href="twitter.com" data-track>Twitter</a>
  <a href="pinterest.com" data-track>Pinterest</a>
</div>
```

So, the last link in that example is functionally equivalent to this:

```
<a href="pinterest.com" data-track data-context="footer navigation" data-label="Pinterest">Pinterest</a>
But as you see, the first version looks cleaner and that's the point. However, as needed, values elsewhere can always be overridden by simply specifiying a new attribute on the element, like this:
<div class="footer-nav" data-context="footer navigation">
    <a href="facebook.com" data-track>Facebook</a>
    <a href="twitter.com" data-track data-context="twitterverse" data-label="tw1tt3r">Twitter</a>
    <a href="pinterest.com" data-track>Pinterest</a>
</div>
```
Note that after these values are picked up by the analytics JS layer, all values are lowercased before being passed to Omniture.
 
## Checking work via the browser console

Most analytics events are logged to the console so that the front end developer can quickly check that the JSP implementation is correct and as expected. For click events, the base Omniture event is event63; event63 is automatically fired for anything with "data-track".

Checking your work in the console is considered "good enough", even though it is our own implementation that is making these logs - it's possible (anything's possible) that something else might be broken to cause these values not to be sent to Omniture. But that's up to the analytics manager to confirm (possibly when closing JIRA tickets, using browser plugins that truly expose analytics calls being made); if you've checked the console, you've done your due diligence.

<img src="https://wiki.sho.com/download/attachments/18744755/image2016-4-26%2011%3A43%3A2.png?version=1&modificationDate=1461685363000&api=v2]" />
 