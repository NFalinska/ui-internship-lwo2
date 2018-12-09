/* eslint-disable max-len */
/* global document */

const carouselSlideOne = document.querySelector('.wrap-slider-one');
const carouselImagesOne = document.querySelectorAll('.slide-content-one');
const prevBtnOne = document.querySelector('.arrow-left-one');
const nextBtnOne = document.querySelector('.arrow-right-one');

let counterOne = 0;
const size = carouselImagesOne[0].clientWidth;

carouselSlideOne.style.transform = 'translateX(' + (-size * counterOne) + 'px)';

nextBtnOne.addEventListener('click', () => {
  if (counterOne >= carouselImagesOne.length - 1) return;
  carouselSlideOne.classList.add('transition');
  counterOne++;
  carouselSlideOne.style.transform = 'translateX(' + (-size * counterOne) + 'px)';
});

prevBtnOne.addEventListener('click', () => {
  if (counterOne <= 0) return;
  carouselSlideOne.classList.add('transition');
  counterOne--;
  carouselSlideOne.style.transform = 'translateX(' + (-size * counterOne) + 'px)';
});
