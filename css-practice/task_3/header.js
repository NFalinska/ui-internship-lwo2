/* global document, window, pageYOffset */
const header = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
  pageYOffset > 0 ? header.classList.add('fixed-header')
: header.classList.remove('fixed-header');
});
