/* global document */

const accItem = document.getElementsByClassName('accordionItem');
const accHD = document.getElementsByClassName('accordionItemHeading');
for (let i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}

document.querySelector('.tabs-header').addEventListener('click', changeTabs);

function changeTabs(event) {
  const dataTab = event.target.getAttribute('data-tab');
  const noActive = document.getElementsByClassName('accordionItemHeading');
  const tabBody = document.getElementsByClassName('tab-b');
  if (event.target.className == 'accordionItemHeading') {
    for (let i = 0; i < noActive.length; i++) {
      noActive[i].classList.remove('current');
    }
    event.target.classList.add('current');
    for (let i = 0; i < tabBody.length; i++) {
      if (dataTab == i) {
        tabBody[i].style.display = 'block';
      } else {
        tabBody[i].style.display = 'none';
      }
    }
  }
}
