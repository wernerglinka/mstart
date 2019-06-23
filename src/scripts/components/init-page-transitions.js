import Highway from '@dogstudio/highway';
import Fade from './fade';

function initPageTransitions() {
  // Call Highway.Core once.
  // Store it in a variable to use events
  const H = new Highway.Core({
    transitions: {
      default: Fade,
    },
  });
}

export default initPageTransitions;
