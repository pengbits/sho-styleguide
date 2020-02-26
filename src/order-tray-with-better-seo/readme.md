---
name: Order Tray Redux w/ better SEO 
collection: components
---

# Order Tray Crawlable

A proof-of-concept for improving the SEO of [order tray](/styleguide/order-tray) component

[SITE-16159](https://issues.sho.com/browse/SITE-16159)

## Description

While we are gearing to launch the refactored order tray (same order-tray experience, but rewritten with React/Redux) it's probably a good idea to get in front of the SEO requirements and rethink how this works. [~christina] will take a pass finding at how others are solving the issue of a single-page-app style component that has many states, with views defined in the javascript layer, that still needs to be crawlable for SEO

- in the order-tray component, a url such as this can trigger an individual provider:
http://www.sho.com/#/order/provider/92/apple _triggers  a card in the js component_

- in the webapp, a url such as this is meant to serve as the canonical url for the same provider, but this approach is flawed because reliance on javascript redirects are problematic
http://www.sho.com/order/provider/92/apple  _returns an html version of the order-tray, but with a javascript redirect to the above url embedded in the page_

## Aaron Says
> In order to maintain a similar functionality and have viable SEO, we will have to force everything to have server side rendering. The premise is to create unique URL's for each provider as a landing page, and use pushstate() or similar use of the history API to manipulate the browser. Properly done, Google can still crawl and index each one as a single page.
> The functionality exists to select multiple providers, so we need to account for that. When building out the URL we can block in robots.txt anything with multiple selections.

## Solution
- configure redux to use history api instead of hash fragments
- come up with a url scheme for mapping the provier selections
- build new backend actions to support the endpoints

## URLS
| url                                 | state                       |
| ----------------------------------- | --------------------------- |
| /order/providers/                   | default                     |
| /order/providers/92/apple           | apple is selected           |
| /order/providers/92,93/apple,roku   | apple and roku are selected |

## Do it
<a href="/styleguide/order-tray-with-better-seo/providers" class="button--solid-red">Get Showtime</a>

<style>
 table {
   font-size:16px;
   background: #999;
   color:#000;
 }
 td,th {
   padding: 10px 15px;
   border:#333 solid 1px
 }
</style>

<script type="text/javascript">
window.order_tray_data = window.order_tray_data || {}
window.order_tray_data.providers = [{
    "id" : "114",
    "name" : "Showtime Direct",
    "headline": "Sign up online and start streaming on all your favorite devices",
    "description" : "Get instant, commercial-free access to SHOWTIME. Try free for 7 days, then only $10.99/month. No cable needed. Cancel anytime.",
    "providerLeadUrl" : "https://www.showtime.com/#signup?i_cid=int-default-7689",
    "providerLeadText" : "Start your free trial",
    "freeTrial" : "7-DAY FREE TRIAL*",
    "priceCallout" : "$10.99<em>per month</em><br /><b>after free trial<b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch anywhere",
    "devicesBlurb" : "Download the SHOWTIME app to any supported device and stream at NO ADDITIONAL COST.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Subscribe to SHOWTIME online and start streaming on all your favorite devices",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Get instant, commercial-free access to SHOWTIME. For a limited time, try free for 7 days, then only $10.99/month. No cable needed. Cancel anytime.",
},{
    "id" : "100",
    "name" : "Amazon Prime",
    "headline": "Prime members can subscribe to SHOWTIME with Prime Video Channels",
    "description" : "Prime membership is needed to get SHOWTIME. Go to the Channels category on Prime Video on your favorite device and add SHOWTIME with Prime Video Channels. You can also sign up on Amazon.com.",
    "providerLeadUrl" : "https://www.amazon.com/gp/video/offers/signup/ref=DVM_PTM_AMG_US_AC_C_ACQ_SHOMLPlink2?benefitID=showtimeSub&quot;",
    "providerLeadText" : "Go to Amazon",
    "freeTrial" : "7-Day Free Trial*",
    "priceCallout" : "$8.99<em>per month</em><br /><b>add on with<br /> Prime membership</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free</h4>",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch on your favorite device",
    "devicesBlurb" : "Once you sign up, you can stream SHOWTIME through Prime Video on your TV, tablet, phone and computer.",
    "hasDevicesList" : "false",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Prime members can subscribe to SHOWTIME directly on Prime Video with Prime Video Channels",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Prime is needed to get SHOWTIME. Go to Prime Video on your favorite device and add SHOWTIME with Prime Video Channels. Find it under the Channels category. You can also sign up on the Amazon website.",
},{
    "id" : "98",
    "name" : "Amazon Fire",
    "headline": "Download the SHOWTIME app on your Amazon Fire devices",
    "description" : "Go to the Amazon App Store. Download the SHOWTIME app to your Amazon Fire TV or Fire Tablet. Open the app to sign-up and START YOUR FREE TRIAL instantly.",
    "providerLeadUrl" : "https://control.kochava.com/v1/cpi/click?i_cid=int-default-1888&amp;campaign_id=koshowtime-amazon-prod55ca2912d7a464b0ff16f7321e&amp;network_id=2708&amp;device_id=device_id&amp;site_id=1",
    "providerLeadText" : "Download the Showtime App",
    "freeTrial" : "7-Day Free Trial*",
    "priceCallout" : "$10.99<em>per month</em><br /><b>after free trial</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch seamlessly on all your favorite devices no matter where you subscribe",
    "devicesBlurb" : "Choose how you want to watch! Once you sign up through the SHOWTIME app on your Amazon Fire TV or Fire Tablet you can download the app on other connected TVs, tablets and mobile devices – or go to Showtime.com on your computer – and stream SHOWTIME at NO ADDITIONAL COST.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "true",
    "pageTitle" : "Download the SHOWTIME app on your Amazon Fire devices",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Go to the Amazon App Store. Download the SHOWTIME app to your Amazon Fire TV or Fire Tablet. Open the app to sign-up and START YOUR FREE TRIAL instantly.",
},{
    "id" : "99",
    "name" : "Android",
    "headline": "Subscribe to SHOWTIME directly on your Android devices",
    "description" : "Go to the Google Play Store on your Android TV™, Android phone or tablet. Download the SHOWTIME app to your Android device. Open the app to sign-up and start watching instantly.",
    "providerLeadUrl" : "https://control.kochava.com/v1/cpi/click?i_cid=int-default-1782&amp;campaign_id=koshowtime-android-prod5578ae1e68354c614740c09564&amp;network_id=2708&amp;device_id=device_id&amp;site_id=1&amp;append_app_conv_trk_params=1",
    "providerLeadText" : "Download the Showtime App",
    "freeTrial" : "7-Day Free Trial*",
    "priceCallout" : "$10.99<em>per month</em><br /><b>after free trial<b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch seamlessly on all your favorite devices no matter where you subscribe",
    "devicesBlurb" : "Choose how you want to watch! Once you sign up through the SHOWTIME app on your preferred Apple device you can download the app on other connected TVs, tablets and mobile devices – or go to Showtime.com on your computer – and stream SHOWTIME at NO ADDITIONAL COST.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "true",
    "pageTitle" : "Subscribe to SHOWTIME directly on your Android devices",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Go to the Google Play Store on your Android TV™, Android phone or tablet. Download the SHOWTIME app to your Android device. Open the app to sign-up and start watching instantly.",
},{

    "id" : "92",
    "name" : "Apple",
    "headline": "Subscribe to SHOWTIME directly on your Apple® devices",
    "description" : "Go to the Apple App Store on your Apple TV®, iPad®, iPhone® or iPod Touch®. Download the SHOWTIME app to your Apple device. Open the app to sign-up and START YOUR FREE TRIAL instantly",
    "providerLeadUrl" : "https://control.kochava.com/v1/cpi/click?i_cid=int-default-1086&amp;campaign_id=koshowtime-ios-prod55662ea432fa055f5c543076e8&amp;network_id=2708&amp;device_id=device_id&amp;site_id=1",
    "providerLeadText" : "Download the Showtime App",
    "freeTrial" : "7-DAY FREE TRIAL*",
    "priceCallout" : "$10.99<em>per month</em><br /><b>after free trial</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing",
    "devicesBlurbHeadline" : "Watch seamlessly on all your favorite devices no matter where you subscribe",
    "devicesBlurb" : "Choose how you want to watch! Once you sign up through the SHOWTIME app on your preferred Apple device you can download the app on other connected TVs, tablets and mobile devices – or go to Showtime.com on your computer – and stream SHOWTIME at NO ADDITIONAL COST.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "true",
    "pageTitle" : "Subscribe to SHOWTIME directly on your Apple® devices",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Go to the Apple App Store on your Apple TV®, iPad®, iPhone® or iPod Touch®. Download the SHOWTIME app to your Apple device. Open the app to sign-up and START YOUR FREE TRIAL instantly.",
  },{    
    "id" : "95",
    "name" : "Hulu",
    "headline": "Add SHOWTIME to your Hulu subscription",
    "description" : "Get SHOWTIME as a Premium Add-on with your Hulu subscription. New Hulu subscribers can add SHOWTIME when you sign-up online or through the Hulu app on select devices. Current Hulu subscribers can add SHOWTIME through your account settings by selecting &quot;Manage Premium Add-ons&quot; on select devices. Click <a href=&quot;https://help.hulu.com/articles/53536334#lrmanage&quot;>here</a> to learn how to add SHOWTIME to your Hulu subscription.",
    "providerLeadUrl" : "http://hulu.com/start/showtime?cmp=8062&amp;utm_campaign=Evergreen+Leads+Tracking&amp;utm_source=SHO.com&amp;utm_medium=AFF",
    "providerLeadText" : "Go to Hulu",
    "freeTrial" : "7-Day Showtime free trial for hulu subscribers*",
    "priceCallout" : "$8.99<em>per month</em><br /><b>add on with<br /> Hulu subscription</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch on your favorite device",
    "devicesBlurb" : "Once you sign up, you can stream SHOWTIME through Hulu on your TV, tablet, phone and computer.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Add SHOWTIME to your Hulu subscription",
    "pageHeadline" : "START WATCHING SHOWTIME ON HULU.",
    "pageSubCopy" : "",
    "pageDescription" : "Get SHOWTIME as a Premium Add-on with your Hulu subscription. New Hulu subscribers can add SHOWTIME when you sign-up online or through the Hulu app on select devices. Current Hulu subscribers can add SHOWTIME on their desktop by selecting “My Account” at the top of the homepage.",
},{
    "id" : "93",
    "name" : "Roku",
    "headline": "Subscribe to SHOWTIME directly on your Roku devices",
    "description" : "Open the SHOWTIME app on your Roku to sign-up and START YOUR FREE TRIAL instantly (in most cases the SHOWTIME app is pre-loaded to your Roku device, if you don&#39;t see it you will need to manually install the app).",
    "providerLeadUrl" : "https://channelstore.roku.com/details/8838/showtime",
    "providerLeadText" : "Add Showtime on Roku",
    "freeTrial" : "7-DAY FREE TRIAL*",
    "priceCallout" : "$10.99<em>per month</em><br /><b>after free trial</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch seamlessly on all your favorite devices no matter where you subscribe",
    "devicesBlurb" : "Choose how you want to watch! Once you sign up through the SHOWTIME app on your Roku you can download the app on other connected TVs, tablets and mobile devices – or go to Showtime.com on your computer – and stream SHOWTIME at NO ADDITIONAL COST.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Subscribe to SHOWTIME directly on your Roku devices",
    "pageHeadline" : "START WATCHING SHOWTIME ON ROKU.",
    "pageSubCopy" : "",
    "pageDescription" : "Open the SHOWTIME app on your Roku to sign-up and START YOUR FREE TRIAL instantly (in most cases the SHOWTIME app is pre-loaded to your Roku device, if you don&#39;t see it you will need to manually install the app).",
},{
    "id" : "126",
    "name" : "TV Provider",
    "headline": "Add SHOWTIME to your pay TV subscription",
    "description" : "description",
    "providerLeadUrl" : "",
    "providerLeadText" : "",
    "freeTrial" : "Prices Vary",
    "priceCallout" : "",
    "priceBlurbHeadline" : "",
    "priceBlurb" : "",
    "devicesBlurbHeadline" : "",
    "devicesBlurb" : "",
    "hasDevicesList" : "false",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Add SHOWTIME to your pay TV subscription",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Get connected with your TV provider: Call 1-800-SHOWTIME. Your SHOWTIME subscription includes access to SHOWTIME ON DEMAND and SHOWTIME ANYTIME at no additional cost – watch wherever and whenever on your TV, tablet, phone or computer at ShowtimeAnytime.com. PLUS, you can download full episodes and movies to your favorite mobile devices with the Showtime Anytime app to watch offline later.",
},{
    "id" : "128",
    "name" : "Additional Providers",
    "headline": "Get SHOWTIME through a variety of providers",
    "description" : "description",
    "providerLeadUrl" : "",
    "providerLeadText" : "",
    "freeTrial" : "Prices Vary",
    "priceCallout" : "",
    "priceBlurbHeadline" : "",
    "priceBlurb" : "",
    "devicesBlurbHeadline" : "",
    "devicesBlurb" : "",
    "hasDevicesList" : "false",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Get SHOWTIME through a variety of providers",
    "pageHeadline" : "START WATCHING SHOWTIME ON YOUR FAVORITE DEVICES",
    "pageSubCopy" : "",
    "pageDescription" : "Order SHOWTIME today for instant access to award-winning Original Series, hit movies, action-packed sports and more.",
},{
    "id" : "118",
    "name" : "DIRECTV Now",
    "headline": "Add SHOWTIME To Your DIRECTV NOW Channel Line-up",
    "description" : "Get SHOWTIME including the full SHOWTIME ON DEMAND® library for $8/mo added to your DIRECTV NOW subscription. Go to your profile user account, then click on &#39;Manage My Plan&#39; to add SHOWTIME. Restrictions apply. See <a href=&quot;https://directvnow.com/thegoodstuff?ref=EDe9DNSTP1000000L&quot;>directvnow.com</a> for details.",
    "providerLeadUrl" : "https://www.directvnow.com/thegoodstuff#premiums-on-deck",
    "providerLeadText" : "Go to DIRECTV NOW",
    "freeTrial" : "7-DAY SHOWTIME FREE TRIAL FOR NEW DIRECTV NOW SUBSCRIBERS*",
    "priceCallout" : "$8<em>per month</em><br /><b>add on with<br /> DIRECTV NOW subscription",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch on your favorite device",
    "devicesBlurb" : "Once you sign up, you can stream SHOWTIME through DIRECTV NOW on your TV, tablet, phone and computer.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Add SHOWTIME To Your DIRECTV NOW Channel Line-up",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Get SHOWTIME including the full SHOWTIME ON DEMAND® library for $8/mo added to your DIRECTV NOW subscription. Go to your profile user account, then click on &#39;Manage My Plan&#39; to add SHOWTIME. Restrictions apply.",
},{
    "id" : "124",
    "name" : "fuboTV",
    "headline": "Add SHOWTIME to your fuboTV subscription",
    "description" : "Watch and record live and on-demand when you add SHOWTIME to your fuboTV subscription. Once you sign up, you can stream SHOWTIME through fuboTV on your connected TV devices, tablet, phone and computer.",
    "providerLeadUrl" : "https://www.fubo.tv/lp/showtime/",
    "providerLeadText" : "Go to fuboTV",
    "freeTrial" : "7-DAY SHOWTIME FREE TRIAL FOR NEW FUBOTV SUBSCRIBERS*",
    "priceCallout" : "$10.99<em>per month</em><br /><b>add-on with fuboTV subscription",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. PLUS, you&#39;ll be able to watch exclusive movies, documentaries, sports, comedy specials and much more. Whether you watch LIVE TV or ON DEMAND you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch on your favorite device",
    "devicesBlurb" : "Once you sign up, you can stream SHOWTIME through fuboTV on your TV, tablet, phone and computer.",
    "hasDevicesList" : "false",
    "hasDeviceIcons" : "false",
    "pageTitle" : "",
    "pageHeadline" : "",
    "pageSubCopy" : "",
    "pageDescription" : "",
},{
    "id" : "94",
    "name" : "Playstation Vue",
    "headline": "Subscribe to SHOWTIME directly through PlayStation™Vue",
    "description" : "Download the PlayStation™Vue app from the PlayStation®Store on your PS4™ or PS3™ console or on the web. Add SHOWTIME to your Vue channel line-up or as a standalone channel.",
    "providerLeadUrl" : "https://www.playstation.com/en-us/network/vue/showtime/#1",
    "providerLeadText" : "Go to Playstation™Vue",
    "freeTrial" : "7-Day Free Trial*",
    "priceCallout" : "[&quot;$10.99<em>per month</em><br /><b>after free trial</b>&quot;, &quot;$8.99<em>per month</em><br /><b>for PlayStation®Plus members</b>&quot;]",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch on your favorite device",
    "devicesBlurb" : "Once you sign up, you can stream SHOWTIME through PlayStation™Vue on your PS4™ or PS3™ or through the PlayStation™Vue app on Android TV, AppleTV, Fire TV, Roku, iOS and Android Tablets, or on iOS and Android phones. You can also log in through the Showtime Anytime app or on your computer at ShowtimeAnytime.com.",
    "hasDevicesList" : "false",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Subscribe to SHOWTIME directly through PlayStation™Vue",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Download the PlayStation™Vue app from the PlayStation®Store on your PS4™ or PS3™ console or on the web. Add SHOWTIME to your Vue channel line-up or as a standalone channel.",
},{
    "id" : "112",
    "name" : "Sling TV",
    "headline": "Add SHOWTIME to your Sling TV subscription",
    "description" : "Get eight SHOWTIME channels for just $10/mo with any Sling TV subscription when you sign up at sling.com/showtime or through the Sling TV app. Restrictions apply.",
    "providerLeadUrl" : "http://www.sling.com/showtime?cvosrc=indirect.affiliate.showtime&amp;utm_medium=indirect&amp;utm_source=online&amp;utm_campaign=showtime&amp;affiliate=showtime",
    "providerLeadText" : "Go to Sling",
    "freeTrial" : "7-DAY SHOWTIME FREE TRIAL FOR NEW SLING SUBSCRIBERS*",
    "priceCallout" : "$10<em>per month</em><br /><b>add on with Sling TV subscription</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch on your favorite device",
    "devicesBlurb" : "Once you sign up, you can stream SHOWTIME through Sling on your TV, tablet, phone and computer.",
    "hasDevicesList" : "false",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Add SHOWTIME to your Sling TV subscription",
    "pageHeadline" : "START WATCHING SHOWTIME.",
    "pageSubCopy" : "",
    "pageDescription" : "Get eight SHOWTIME channels for just $10/mo with any Sling TV subscription when you sign up at sling.com/showtime or through the Sling TV app. Restrictions apply.",
},{
    "id" : "130",
    "name" : "Smart TV Providers",
    "headline": "Add SHOWTIME to your Sling TV subscription",
    "description" : "Get eight SHOWTIME channels for just $10/mo with any Sling TV subscription when you sign up at sling.com/showtime or through the Sling TV app. Restrictions apply.",
    "providerLeadUrl" : "http://www.sling.com/showtime?cvosrc=indirect.affiliate.showtime&amp;utm_medium=indirect&amp;utm_source=online&amp;utm_campaign=showtime&amp;affiliate=showtime",
    "providerLeadText" : "Go to Sling",
    "freeTrial" : "7-DAY SHOWTIME FREE TRIAL FOR NEW SLING SUBSCRIBERS*",
    "priceCallout" : "$10<em>per month</em><br /><b>add on with Sling TV subscription</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch on your favorite device",
    "devicesBlurb" : "Once you sign up, you can stream SHOWTIME through Sling on your TV, tablet, phone and computer.",
    "hasDevicesList" : "false",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Download the SHOWTIME app on your LG or SAMSUNG® Smart TV",
    "pageHeadline" : "START WATCHING SHOWTIME ON YOUR SMART TV.",
    "pageSubCopy" : "",
    "pageDescription" : "Go to the Apps Store on your supported LG or SAMSUNG® Smart TV. Download and open the SHOWTIME app, then follow the on-screen instructions to sign up and START YOUR FREE TRIAL.",
},{
    "id" : "116",
    "name" : "Xbox One",
    "headline": "Download the SHOWTIME App on your Xbox One",
    "description" : "Go to the Xbox Store on your Xbox One. Download and open the SHOWTIME app, then follow the on-screen instructions to sign up and START YOUR FREE TRIAL.",
    "providerLeadUrl" : "https://www.microsoft.com/store/apps/9n4jg73k8bsj",
    "providerLeadText" : "Go to Xbox",
    "freeTrial" : "7-DAY FREE TRIAL*",
    "priceCallout" : "$10.99<em>per month</em><br /><b>after free trial</b>",
    "priceBlurbHeadline" : "Get full access to SHOWTIME whenever you want –<br />all commercial-free",
    "priceBlurb" : "Stream award-winning series like Homeland, Billions, Ray Donovan, Shameless and The Affair the moment they air. You&#39;ll also be able to watch exclusive movies, documentaries, sports, comedy specials and much more. PLUS, you can download full episodes and movies to your favorite mobile devices to watch offline later. Whether you watch live, on demand, or offline, you never have to miss a single thing.",
    "devicesBlurbHeadline" : "Watch seamlessly on all your favorite devices no matter where you subscribe",
    "devicesBlurb" : "Choose how you want to watch! Once you sign up through the SHOWTIME app on your Xbox One you can download the app on other connected TVs, tablets and mobile devices – or go to Showtime.com on your computer – and stream SHOWTIME at NO ADDITIONAL COST.",
    "hasDevicesList" : "true",
    "hasDeviceIcons" : "false",
    "pageTitle" : "Download the SHOWTIME App on your Xbox One",
    "pageHeadline" : "START WATCHING SHOWTIME ON XBOX ONE.",
    "pageSubCopy" : "",
    "pageDescription" : "Go to the Xbox Store on your Xbox One. Download and open the SHOWTIME app, then follow the on-screen instructions to sign up and START YOUR FREE TRIAL.",
  }]
</script>