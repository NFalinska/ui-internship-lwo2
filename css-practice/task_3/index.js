/* eslint-disable max-len */
/* global document */
function render(res) {
  const result = res.blogs;
  const latest = res.latest;
  const latestContainerFragment = document.createDocumentFragment();
  const footerContainerFragment = document.createDocumentFragment();
  const blogsContainer = document.querySelector('.stories .pics');
  const latestsContainer = document.querySelector('.blocks .block-two');
  for (let i = 0; i < result.length; i++) {
    if (latest.indexOf(result[i].id) == -1) {
      latestContainerFragment.appendChild(createBlogsItem(result[i]));
    }
    if (latest.indexOf(result[i].id) > 0) {
      footerContainerFragment.appendChild(createLatestItem(result[i]));
    }
  }
  latestsContainer.appendChild(footerContainerFragment);
  blogsContainer.appendChild(latestContainerFragment);
}

function createBlogsItem(result) {
  const {
    previewImg,
    title,
    description,
    watched,
    comments,
    published,
  } = result;
  const {
    month,
    day,
  } = _formatDate(published);

  const element = document.createElement('DIV');
  element.classList.add('pic-item');

  const blog = `
  <div class="pic-item">
  <img src="${previewImg}" alt="table" class="stories-pic">
  <div class="pic-date">
     <span class="date-num">${day}</span>
     <span class="month"><i>${month}</i></span>
  </div>
  <div class="pic-title">${title}</div>
  <div class="pic-text">${description}</div>
  <div class="pic-line">
     <img src="img/Shape_5.png" alt="line">
  </div>
  <div class="seen">
     <div> <img src="img/VIEW.png" alt="view" class="view"> </div>
     <div class="views">${watched}</div>
     <div><img src="img/SPEECH_BUBBLE_2.png" alt="speech"></div>
     <div class="speech">${comments}</div>
  </div>
</div>
`;
  element.innerHTML = blog;
  return element;
}

function createLatestItem(result) {
  const {
    previewImg,
    title,
    published,
  } = result;
  const {
    year,
    month,
    day,
  } = _formatDate(published);

  const el = document.createElement('DIV');
  el.classList.add('blog-item');
  const latestBlog = `
  <div class="blog-item">
     <div class="blog-photo"><img src="${previewImg}" alt="photo"></div>
        <div class="blog-info">
            <div class="title-item">${title}</div>
            <div class="date">${day} ${month}, ${year} </div>
  </div>
`;
  el.innerHTML = latestBlog;
  return el;
}

function _formatDate(dateISO) {
  const date = new Date(dateISO);
  return {
    year: date.getFullYear(),
    month: date.toLocaleString('en-US', {month: 'short'}),
    day: date.getDate(),
  };
}

(function fetchData() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then((res) => {
    render(res);
  });
})();