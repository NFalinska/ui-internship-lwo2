/* global document */
const blogs = document.querySelector('.stories .pics');

function render(previewImg, day, month, title, watched, comments, description) {
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
  blogs.append(element);
}

(function fetchData() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then((res) => {
    const result = res.blogs;
    for (let i = 0; i < result.length; i++) {
      const curDate = new Date(result[i].published);
      render(result[i].previewImg,
          curDate.getDay(),
          curDate.toLocaleString('en-US', {month: 'short'}),
          result[i].title,
          result[i].watched,
          result[i].comments,
          result[i].description);
    }
  });
})();

