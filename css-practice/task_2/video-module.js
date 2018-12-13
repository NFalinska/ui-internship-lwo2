/* eslint-disable max-len */
/* global  document */
const video = document.getElementById('my-video');
const btnVideo = document.getElementById('play');

function togglePlay() {
        video.paused ? playVideo() : pauseVideo();
}

function playVideo() {
  video.play();
  btnVideo.classList.remove('play');
  btnVideo.classList.add('paused');
}

function pauseVideo() {
  video.pause();
  btnVideo.classList.remove('paused');
  btnVideo.classList.add('play');
}

const player = {
  init: () => {
    btnVideo.addEventListener('click', togglePlay, false);
  },
};

export default player;