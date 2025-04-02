function setupMenu() {
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');

  if (!menu || !menuBtn || !closeBtn) {
    console.error('Elementos do menu não encontrados!');
    return;
  }

  function openMenu() {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) {
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
