window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }
});

document.addEventListener(
  'click',
  function (e) {
    if (e.target.matches('input[type="checkbox"]')) {
      return true;
    }

    // 2. Se for o botão "Saiba Mais"
    if (e.target.matches('.botaoSaibaMais')) {
      const targetId = e.target.getAttribute('data-scroll');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  },
  true,
);
