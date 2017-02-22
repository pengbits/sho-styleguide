var camelize = (function(str){
  var camelized = '';
  var segments = str.split(/[_-]/)
  var length = segments.length;
  for(var l=0; l<segments.length; l++){
    var phrase = segments[l];
    if(l==0){
      camelized += phrase;
    }
    else {
      camelized += phrase.substr(0,1).toUpperCase();
      camelized += phrase.substr(1);
    }
  }
  return camelized;
})

export {camelize}