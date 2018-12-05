/* global document */

let sliderImages1 = document.querySelectorAll('.slide1');
let arrowLeft1 = document.querySelector('.arrow-left1');
let arrowRight1 = document.querySelector('.arrow-right1');


let current1 = 0;

function reset() {
  for (let i = 0; i < sliderImages1.length; i++) {
    sliderImages1[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages1[0].style.display = 'block';
}

function slideLeft() {
  reset();
  sliderImages1[current1 - 1].style.display = 'block';
  sliderImages1[current1  1].classList.add('active-left');
  current1--;
}

function slideRight() {
  reset();
  sliderImages1[current1 + 1].style.display = 'block';
  sliderImages1[current1 + 1].classList.add('active-right');
  current1++;
}

arrowLeft1.addEventListener('click', function() {
  if (current1 === 0) {
    current1 = sliderImages1.length;
  }
  slideLeft();
});

arrowRight1.addEventListener('click', function() {
  if (current1 === sliderImages1.length - 1) {
    current1 = -1;
  }
  slideRight();
});

startSlide();
