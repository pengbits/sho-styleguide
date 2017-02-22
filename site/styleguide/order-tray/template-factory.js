import templates from './templates';

// using this prefix to match what our friends are doing on the java side
let SHO_TEMPLATE_STORE_PREFIX = 'partials/order/templates/';

var TemplateFactory = {
      
  // TemplateFactory#getTemplate
  // return the static html associated with the Provider
  // the template is fetched from an eager-loaded object that's built up dynamically via a gulp task,
  // by providing a key similar to this: templates.providers_0, see gulpisms/compile-templates.js for more
  
  getTemplate : function(providerId,themeId){
    let template;
    let key       = `${SHO_TEMPLATE_STORE_PREFIX}providers_${providerId}`;
    let themedKey = `${SHO_TEMPLATE_STORE_PREFIX}providers_${providerId}_themes_${themeId}`;

    if(!templates[key]){
      throw new Error(`couldn't find a template for ${key}`);
      return false
    }
    
    if(themeId !== undefined){
      if(!!templates[themedKey]){
        key = themedKey;   
      }
      else {
        console.log(`|TemplateFactory| no template found for {provider:${providerId},theme:${themeId}}, using defaults`)
      }
    }
    
    // console.log(`TemplateFactory.getTemplate(${key})`);
    // must return template in the form of a function for dynamic partial inclusion
    // http://handlebarsjs.com/partials.html
    return function(){
      return key;
    }
  },
  
  // TemplateFactory#getRegion
  // return the ui template associated with the region requested
  // at this point - the only supported region is the root element - the tray itself
  getRegion : function(region){    
    let region_ = region == 'root' ? 'tray' : region;
    return templates[`${SHO_TEMPLATE_STORE_PREFIX}${region_}`]
  }
}

export default TemplateFactory;