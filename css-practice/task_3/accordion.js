/* global document */
(function accordion() {
  const accHead = document.getElementsByClassName('accordion-item-heading');
  for (let i = 0; i < accHead.length; i++) {
    accHead[i].addEventListener('click', toggleItem, false);
  }
})();
function toggleItem() {
  this.isOpened = this.parentNode.classList.contains('open');

  const closeItem = (node) => {
    node.classList.remove('open');
    node.classList.add('close');
  };

  const _toArray = (list) => [].slice.call(list);

  const array = _toArray(document.getElementsByClassName('accordion-item'));

  array.forEach(closeItem);

  if (this.isOpened) {
    closeItem(this.parentNode);
  } else {
    this.parentNode.classList.add('open');
    this.parentNode.classList.remove('close');
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
