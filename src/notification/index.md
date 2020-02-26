---
name: Notification
collection: components
---

# Notification

## HTML component
The notification component allows for  strip of messaging to be inserted into the top of the page, above the global navigation

<aside class="notification js-notification">
  <div class="notification__content">  
    <h1 class="notification__message">Our <a href="/terms">Terms of Use</a> have changed effective as of July 12, 2016. By using our services, you consent to the updated <a href="/terms">Terms of Use</a></h1>
    <em class="notification__closer"></em>
  </div>  
</aside>

```
<aside class="notification js-notification">
  <div class="notification__content">  
    <h1 class="notification__message">Our <a href="/terms">Terms of Use</a> have changed effective as of July 12, 2016. By using our services, you consent to the updated <a href="/terms">Terms of Use</a></h1>
    <em class="notification__closer"></em>
  </div>  
</aside>
```

### --white --no-closer (optional icon) As seen on /bulk/hotel-app

<aside class="notification notification--white notification--no-closer">
  <div class="notification__content">
    <i class="icon icon--medium icon--check-mark-white notification__icon"></i>
    <h1 class="notification__message">Thanks! A SHOWTIME Representative will be in touch shortly.</h1>
  </div>
</aside>

```
<aside class="notification notification--white notification--no-closer">
  <div class="notification__content">
    <i class="icon icon--medium icon--check-mark-white notification__icon"></i>
    <h1 class="notification__message">Thanks! A SHOWTIME Representative will be in touch shortly.</h1>
  </div>
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

