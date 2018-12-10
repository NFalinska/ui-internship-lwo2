// /* eslint-disable max-len */
// /* global document */

// const carouselSlideOne = document.querySelector('.wrap-slider-one');
// const carouselImagesOne = document.querySelectorAll('.slide-content-one');
// const prevBtnOne = document.querySelector('.arrow-left-one');
// const nextBtnOne = document.querySelector('.arrow-right-one');

// let counterOne = 0;
// const size = carouselImagesOne[0].clientWidth;

// carouselSlideOne.style.transform = 'translateX(' + (-size * counterOne) + 'px)';

// nextBtnOne.addEventListener('click', () => {
//   if (counterOne >= carouselImagesOne.length - 1) return;
//   carouselSlideOne.classList.add('transition');
//   counterOne++;
//   carouselSlideOne.style.transform = 'translateX(' + (-size * counterOne) + 'px)';
// });

// prevBtnOne.addEventListener('click', () => {
//   if (counterOne <= 0) return;
//   carouselSlideOne.classList.add('transition');
//   counterOne--;
//   carouselSlideOne.style.transform = 'translateX(' + (-size * counterOne) + 'px)';
// });


const initSlider = (id) => {
  const slideEl = document.getElementById(id);
  const leftArrow = slideEl.querySelector('.arrow-left');
  const rightArrow = slideEl.querySelector('.arrow-right');
  const scroller = slideEl.querySelector('.scroller');


  let counterOne = 0;

  scroller.style.transform = 'translateX(' + (-98 * counterOne) + '%)';

  leftArrow.addEventListener('click', () => {
    //  if (counterOne >= carouselImagesOne.length - 1) return;
    scroller.classList.add('transition');
    counterOne++;
    scroller.style.transform = 'translateX(' + (-98 * counterOne) + '%)';
  });

  rightArrow.addEventListener('click', () => {
    if (counterOne <= 0) return;
    scroller.classList.add('transition');
    counterOne--;
    scroller.style.transform = 'translateX(' + (-98 * counterOne) + '%)';
  });

}


window.onload = function() {
  initSlider('review_slider');
  initSlider('quotes_slider');
}