function setupMenu() {
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const menuLinks = document.querySelectorAll('#menu a[href^="#"]');
  let scrollPosition = 0;

  if (!menu || !menuBtn || !closeBtn) {
    console.error('Elementos do menu não encontrados!');
    return;
  }

  function openMenu() {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    menu.classList.add('open');
    document.body.classList.add('menu-aberto');
    document.body.style.top = `-${scrollPosition}px`;
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('open');
    document.body.classList.remove('menu-aberto');
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  function smoothScroll(targetId) {
    const targetElement = document.querySelector(targetId);

    if (targetElement && targetId !== '#') {
      closeMenu();

      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    openMenu();
  });

  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (!targetId || targetId === '#') {
        e.preventDefault();
        closeMenu();
        return;
      }

      e.preventDefault();
      smoothScroll(targetId);
    });
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const isValidTarget =
      targetId && targetId !== '#' && document.querySelector(targetId);

    if (isValidTarget) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (targetId === '#') {
      e.preventDefault(); // Evita scroll para topo
    }
  });
});

document.addEventListener('DOMContentLoaded', setupMenu);
