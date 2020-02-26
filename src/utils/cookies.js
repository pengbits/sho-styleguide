// static utility methods for read/write of document.cookie,
// extracted from variations/controls.js

const getCookie = (key) => {
  let cookies   = document.cookie.split('; ');
  let cookie    = cookies.find(c => c.indexOf(key) == 0);
  return cookie ? cookie.split('=').pop() : null;
}

// thanks quirksmode http://www.quirksmode.org/js/cookies.html
const setCookie = (key, value, expiresInDays) => {
  let days,date,expires,domain;
  if(window.location.hostname == 'localhost'){
    domain = 'localhost'
  }
  else if(window.location.hostname == '10.0.2.2'){
    domain = '10.0.2.2'
  }
  else if(/129\.228\./.test(window.location.hostname)){
    // IPs not valid for domain
    // When not setting domain, origin domain seems to be picked up
    domain = ''
  }
  else {
    domain = '.sho.com';
  }
  
  if (expiresInDays) {
    days = expiresInDays;
  } else {
    days = 365 * 10;
  }
  
  date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
  expires = "expires="+date.toGMTString();

  document.cookie = `${key}=${value};${expires}; domain=${domain}; path=/`
}

export default {
  get:getCookie,
  set:setCookie
}