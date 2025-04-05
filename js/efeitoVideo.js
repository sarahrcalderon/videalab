const videos = document.querySelectorAll('.video-container video');
const overlay = document.getElementById('videoOverlay');
const expanded = document.getElementById('videoExpanded');

videos.forEach((video) => {
  video.addEventListener('click', () => {
    const clone = video.cloneNode(true);
    clone.controls = true;
    expanded.innerHTML = '';
    expanded.appendChild(clone);
    overlay.style.display = 'flex';
    clone.play();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.style.display = 'none';
    expanded.innerHTML = '';
  }
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    expanded.innerHTML = '';
  }
});
