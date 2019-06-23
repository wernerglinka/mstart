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
}

export default mainNav;
