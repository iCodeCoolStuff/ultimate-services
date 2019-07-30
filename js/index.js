const navbar = $('#navbar');
const nav_wrapper = $('.nav-wrapper');
const header = $('header');

function navbarChecker() {
  if (window.pageYOffset > header.height() * 0.5) {
    nav_wrapper.css("height", "4rem");
    navbar.addClass('scrolled');
  } else {
    nav_wrapper.css("height", "auto");
    navbar.removeClass('scrolled');
  }

  if (window.pageYOffset > header.height() * 0.6) {
    navbar.addClass('transition');
  } else {
    navbar.removeClass('transition');
  }

  if (window.pageYOffset > header.height() * 0.8) {
    navbar.addClass('shown');
  } else {
    navbar.removeClass('shown');
  }
}
navbarChecker();

window.onscroll = navbarChecker;