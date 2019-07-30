const navbar = $('#navbar');
const header = $('header');

function navbarChecker() {
  if (window.pageYOffset > header.height() * 0.5) {
    navbar.addClass('scrolled');
  } else {
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

var def = 0;

$('.navbar-toggler').click(function(e) {
  if (def) {
    $('.navbar-collapse').removeClass('slide-in');
    $('.navbar-collapse').addClass('slide-out');
    def = 0;
  } else {
    $('.navbar-collapse').removeClass('slide-out');
    $('.navbar-collapse').addClass('slide-in');
    def = 1;
  }
});