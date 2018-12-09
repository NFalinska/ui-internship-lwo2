/* eslint-disable max-len */
/* global document */
const latests = document.querySelector('.blocks .block-two');

function renderLatest(previewImg, title, published) {
  const element = document.createElement('DIV');
  element.classList.add('blog-item');

  const latest = `
  <div class="blog-item">
  <div class="blog-photo"><img src="${previewImg}" alt="photo"></div>
  <div class="blog-info">
     <div class="title-item">${title}</div>
     <div class="date">${published}</div>
  </div>
    `;

  element.innerHTML = latest;
  latests.append(element);
}

(function fetchData() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then((res) => {
    const result = res.blogs;
    for (let i = 0; i < result.length; i++) {
      const curDate = new Date(result[i].published);
      renderLatest(result[i].previewImg,
          result[i].title,
          `${curDate.getDate()}  ${curDate.toLocaleString('en-US', {month: 'short'})}, ${curDate.getFullYear()} `);
    }
  });
})();
