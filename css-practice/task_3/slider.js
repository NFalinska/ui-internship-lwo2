/* global document, window */

const initSlider = (id) => {
  const slideEl = document.getElementById(id);
  const leftArrow = slideEl.querySelector('.arrow-left');
  const rightArrow = slideEl.querySelector('.arrow-right');
  const scroller = slideEl.querySelector('.scroller');


  let counter = 0;

  scroller.style.transform = 'translateX(' + (-98 * counter) + '%)';

  leftArrow.addEventListener('click', () => {
    if (counter <= 0) {
      counter = 2;
      scroller.classList.add('transition');
      scroller.style.transform = 'translateX(' + (-98 * counter) + '%)';
      return;
    }
    scroller.classList.add('transition');
    counter--;
    scroller.style.transform = 'translateX(' + (-98 * counter) + '%)';
  });

  rightArrow.addEventListener('click', () => {
    if (counter >= 2) {
      counter = 0;
      scroller.classList.add('transition');
      scroller.style.transform = 'translateX(0%)';
      return;
    }
    scroller.classList.add('transition');
    counter++;
    scroller.style.transform = 'translateX(' + (-98 * counter) + '%)';
  });
};


window.onload = function() {
  initSlider('review_slider');
  initSlider('quotes_slider');
};
