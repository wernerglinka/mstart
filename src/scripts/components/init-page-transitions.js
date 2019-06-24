import 'intersection-observer';
import Highway from '@dogstudio/highway';
import Quicklink from 'quicklink/dist/quicklink.mjs';
import Fade from './fade';

function initPageTransitions() {
  // Call Highway.Core once.
  // Store it in a variable to use events
  const H = new Highway.Core({
    transitions: {
      default: Fade,
    },
  });

  // load quickview upon Highway event when view is loaded
  H.on('NAVIGATE_END', ({ to }) => {
    console.log('NAVIGATE_END event');
    Quicklink({
      el: to.view,
    });
  });
}

export default initPageTransitions;
