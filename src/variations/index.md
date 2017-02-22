---
name: A/B Testing
collection: vendor
---

# A/B Testing

A/B Testing documentation is stored in [Confluence](https://wiki.sho.com/pages/viewpage.action?pageId=18744591). 


# Setting the Optimizely Test Cookie

We are introducing a cookie (`sho_allow_optimizely_variations`) that must be present to see experiments on QA. When the cookie is not found or is set to false, no experiments will be run.

<div class="variation-controls js-variation-controls">
    <h3 class="variation-controls__header">Allow Variations</h3>
  <a href="#" class="variation-controls__toggle">Off</a>
</div>

## Optimizely

Optimizely is the platform that we use for our A/B Testing, and for the most part, the implementation is handled in their console. 

That said, there are some utility methods added to the stack to give our components insight into if, and when, an experiement is running:

### Setting a Listener

```
// in your component, import the Variations class
// it's a singleton, so you don't have to call new Variations(), just use it as-is:
@import Variations from '../variations/index';

Class Notification {
  constructor(){
    Variations.on('variation:detected', function(e, opts){
      console.log(`|notification| found variation type = '${e.variation_type}'`);
      console.log(opts)
    })
  }
}
```

### Callback Arguments

the first argument passed to the callback is the event object - it'll also contain a flag for the type of variation that was detected:

it'll be one of the folllowing possibilities:

- `sho`
- `vendor`

a `variation_type` of `sho` means simply that an object was found on the `window` object that matches our internal naming convention.

a `variation_type` of `vendor` means that the custom data that Optimizely exposes after their code runs was found on the `window` object.

the second argument is the actual variation data. it differs slightly depending on the event type

when a `sho` variation is detected, the second argument will contain the custom variation data, ie, the code we wrote into the experiment in optimizely. 


### Conventions for the Experiment Javascript:

in order for this to work, experiments run from the Optimizely platform need to conform to some conventions:

```
window.sho_variations = window.sho_variations || {};
window.sho_variations['streaming_modal'] = {
   'id':'6815300432',
   'direct_headline':'EDIT For Subscribers who signed up through the SHOWTIME app',
   'direct_label':'EDIT Go to Showtime.com',
  'anytime_headline':'EDIT For subscribers who signed up through a cable, satellite, telco or streaming service provider.',
  'anytime':'EDIT go to showtimeanytime.com'
};
```

notice how we check for the existence of `sho_variations` on the `window` object before 
creating a new object, to avoid overwriting anything already set by other experiments

in the case of the vendor variation detection, the second argument will contain the optimizely variation map - a hash where the keys are experiment ids and the values are integers which correspond to which variation is currently runnimg


### More Specific Events

The Notfications manager also exposes events with the type baked in, so you can set a listener on the specific variation detection event you are interested in:

```
class Notification {

  constructor(cfg){
    // just tell me when my custom sho data is exposed via optimizely...
    Variations.on('variation:detected:sho', function(opts){
      console.log(`|notification| found sho variation`);
      console.log(opts);
    })
    
    // tell me when the optimizely variation map is found...
    Variations.on('variation:detected:vendor', function(opts){
      console.log(`|notification| found vendor variation`);
      console.log(opts);
    })
    
  }
```

