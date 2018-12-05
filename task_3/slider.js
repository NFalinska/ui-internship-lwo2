/* global document */

const sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');


let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none'; 
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  sliderImages[current - 1].classList.add('active-left');
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  sliderImages[current + 1].classList.add('active-right');
  current++;
}

arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
