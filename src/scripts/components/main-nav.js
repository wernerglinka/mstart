import $ from 'jquery';

// eslint-disable-next-line
function mainNav() {
  const navLinks = $('.main-menu')
    .find('li')
    .find('> span');

  navLinks.on('click', function(event) {
    event.stopImmediatePropagation();
    navLinks
      .not($(this))
      .parent()
      .removeClass('open');
    $(this)
      .parent()
      .toggleClass('open');
  });

  $(document)
    .not(navLinks)
    .on('click', () => {
      navLinks.parent().removeClass('open');
    });

  // update active trail after page load
  document.addEventListener('updateActiveTrail', function() {
    const links = document.querySelectorAll('.main-menu a');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      // reset any previous active state
      link.classList.remove('is-active');
      // set the active link
      if (link.href === document.location.href) {
        link.classList.add('is-active');
      }
    }
  });
}

export default mainNav;
