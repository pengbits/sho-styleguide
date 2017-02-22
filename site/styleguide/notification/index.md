---
name: Notification
collection: components
---

# Notification

## HTML component
The notification component allows for  strip of messaging to be inserted into the top of the page, above the global navigation

<aside class="notification js-notification">
    <h1 class="notification__message">Our <a href="/terms">Terms of Use</a> have changed effective as of July 12, 2016. By using our services, you consent to the updated <a href="/terms">Terms of Use</a>  <em class="notification__closer"></em></h1>
</aside>

```
<aside class="notification js-notification">
  <h1 class="notification__message">Our <a href="/terms">Terms of Use</a> have changed effective as of July 12, 2016. By using our services, you consent to the updated <a href="/terms">Terms of Use</a>   <em class="notification__closer"></em>
</h1>
</aside>
```

## Javascript-only component

The component can be added to the dom purely via javascript, by adding the `js-notification` classname to the body tag. 

```
<body class="js-notification">
  ...
</body>
```

At the moment, the component is displayed conditionally, only if a message object is defined on the `window`. this is commonly acheived with optimizely.

```
window.sho_notification = {
  'message':'surge pricing is in effect!'
}

// elsewhere
if(!!window.sho_notification && window.sho_notification.message){
  
}
```

the message can be html or plaintext:


```
window.sho_notification = {
  'message':'Our <a href="/terms">Terms of Use</a> have changed effective as of July 12, 2016. By using our services, you consent to the updated <a href="/terms">Terms of Use</a>'
}
```

