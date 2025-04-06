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
    if (targetElement) {
      closeMenu();

      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }

  // Configuração dos event listeners
  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        smoothScroll(targetId);
      }
    });
  });

  // Fecha o menu ao clicar fora ou pressionar Escape
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

document.addEventListener('DOMContentLoaded', setupMenu);
