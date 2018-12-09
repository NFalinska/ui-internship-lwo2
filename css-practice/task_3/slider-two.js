/* eslint-disable max-len */
/* global document */
const carouselSlideTwo = document.querySelector('.wrap-slider-two');
const carouselImagesTwo = document.querySelectorAll('.slide-content-two');
const prevBtnTwo = document.querySelector('.arrow-left-two');
const nextBtnTwo = document.querySelector('.arrow-right-two');

let counterTwo = 0;
const sizeTwo = carouselImagesTwo[0].clientWidth;

carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';

nextBtnTwo.addEventListener('click', () => {
  if (counterTwo >= carouselImagesTwo.length - 1) return;
  carouselSlideTwo.classList.add('transition');
  counterTwo++;
  carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
});

prevBtnTwo.addEventListener('click', () => {
  if (counterTwo <= 0) return;
  carouselSlideTwo.classList.add('transition');
  counterTwo--;
  carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
});
