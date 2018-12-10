/* global document */
(function accordion() {
  const accHead = document.getElementsByClassName('accordion-item-heading');
  for (let i = 0; i < accHead.length; i++) {
    accHead[i].addEventListener('click', toggleItem, false);
  }
})();

function toggleItem() {
  const accItem = document.getElementsByClassName('accordion-item');
  let itemClass = this.parentNode.className;
  for (let i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordion-item close';
  }
  if (itemClass == 'accordion-item close') {
    this.parentNode.className = 'accordion-item open';
  }
}

document.querySelector('.tabs-header').addEventListener('click', changeTabs);

function changeTabs(event) {
  if (event.target.className == 'accordion-item-heading') {
    const dataTab = event.target.getAttribute('data-tab');
    const tabBody = document.getElementsByClassName('tab-b');
    for (let i = 0; i < tabBody.length; i++) {
      if (dataTab == i) {
        tabBody[i].style.display = 'block';
      } else {
        tabBody[i].style.display = 'none';
      }
    }
  }
}
