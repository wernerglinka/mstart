// NOTE: main.js is called at the end of the document body - no DOMContentLoaded event needed
import raf from './utilities/request-animation-frame';
import initPageTransitions from './components/init-page-transitions';
import mainNav from './components/main-nav';

(function() {
  raf(); // fallback fro browsers with no raf
  initPageTransitions();
  mainNav();
})();
