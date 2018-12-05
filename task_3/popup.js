/* global document */

const modal = document.getElementById('myModal');
const img = document.getElementsByClassName('myImg');
for (let i = 0; i < img.length; i ++) {
  img[i].addEventListener('click', showPhoto, false);
}
let modalImg = document.getElementById('img01');

function showPhoto() {
  modal.style.display = 'block';
  modalImg.src = this.src;
}

modal.onclick = function() {
  modal.style.display = 'none';
};
