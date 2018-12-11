/* global document, window, pageYOffset */
(function() {
  window.addEventListener('scroll', function() {
    const header = document.getElementsByTagName('nav')[0];
    pageYOffset > 0 ? header.classList.add('fixed-header')
  : header.classList.remove('fixed-header');
  });
})();
