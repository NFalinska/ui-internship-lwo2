/* global document */
(function popup() {
  const modal = document.getElementById('pic-modal');
  const img = document.getElementsByClassName('gallery-img');
  const modalImg = document.getElementById('img-modal');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showPhoto, false);
  }

  function showPhoto() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
  }

  modal.onclick = function() {
    modal.style.display = 'none';
  };
})();

