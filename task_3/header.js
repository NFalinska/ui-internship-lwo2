/* global document, window, pageYOffset */

window.addEventListener('scroll', function() {
  const header = document.getElementsByTagName('nav')[0];
  pageYOffset > 2 ? header.classList.add('fixed-header')
: header.classList.remove('fixed-header');
});
