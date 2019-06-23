import Highway from '@dogstudio/highway';

/**
 *  Function to fade a page out and a new page in
 *  using CSS animation. See 'styles/components/page-transition.scss'
 */
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);

    // fade in
    to.style.opacity = 0;

    (function fadeIn() {
      let val = parseFloat(to.style.opacity);
      val += 0.05;
      if (val < 1) {
        to.style.opacity = val;
        requestAnimationFrame(fadeIn);
      }
      done();
    })();
  }

  out({ from, done }) {
    from.style.opacity = 1;

    (function fadeOut() {
      let val = parseFloat(from.style.opacity);
      val -= 0.05;
      if (val < 0) {
        // after fadeOut remove the element
        from.remove();
        done();
      } else {
        from.style.opacity = val;
        requestAnimationFrame(fadeOut);
      }
    })();
  }
}

export default Fade;
