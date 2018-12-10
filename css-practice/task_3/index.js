/* eslint-disable max-len */
/* global document */
function render(res) {
  const blogs = document.querySelector('.stories .pics');
  const latests = document.querySelector('.blocks .block-two');
  const result = res.blogs;
  const latest = res.latest;
  for (let i = 0; i < result.length; i++) {
    const curDate = new Date(result[i].published);
    if (latest.indexOf(result[i].id) == -1) {
      const element = document.createElement('DIV');
      element.classList.add('pic-item');

      const blog = `
      <div class="pic-item">
      <img src="${result[i].previewImg}" alt="table" class="stories-pic">
      <div class="pic-date">
         <span class="date-num">${curDate.getDay()}</span>
         <span class="month"><i>${curDate.toLocaleString('en-US', {month: 'short'})}</i></span>
      </div>
      <div class="pic-title">${result[i].title}</div>
      <div class="pic-text">${result[i].description}</div>
      <div class="pic-line">
         <img src="img/Shape_5.png" alt="line">
      </div>
      <div class="seen">
         <div> <img src="img/VIEW.png" alt="view" class="view"> </div>
         <div class="views">${result[i].watched}</div>
         <div><img src="img/SPEECH_BUBBLE_2.png" alt="speech"></div>
         <div class="speech">${result[i].comments}</div>
      </div>
   </div>
    `;
      element.innerHTML = blog;
      blogs.append(element);
    }
    if (latest.indexOf(result[i].id) > 0) {
      const el = document.createElement('DIV');
      el.classList.add('blog-item');
      const latestBlog = `
      <div class="blog-item">
         <div class="blog-photo"><img src="${result[i].previewImg}" alt="photo"></div>
            <div class="blog-info">
                <div class="title-item">${result[i].title}</div>
                <div class="date">${curDate.getDate()}  
                        ${curDate.toLocaleString('en-US', {month: 'short'})} ,
                        ${curDate.getFullYear()} </div>
      </div>
    `;
      el.innerHTML = latestBlog;
      latests.append(el);
    }
  }
}


(function fetchData() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then((res) => {
    render(res);
  });
})();
