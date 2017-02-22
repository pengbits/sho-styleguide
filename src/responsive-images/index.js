// import vendor depedencies so they get added to the application bundle..
// this is not a component per se, but we need a place to introduce the vendor code 
import respimage from 'respimage';
// this plugin must come before the lazysizes framework itself
import lazyBgSet from 'lazybgset';
import lazySizes from 'lazysizes';

export default {
  'respimage' : respimage,
  'lazySizes' : lazySizes,
  'lazyBgSet' : lazyBgSet
}