document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const botaoMenu = document.getElementById('menuBtn');
  const botaoFechar = document.getElementById('closeBtn');
  const linksNavegacao = document.querySelectorAll('#menu a[href^="#"]');

  function abrirMenu(e) {
    e.stopPropagation();
    menu.classList.add('open');
    botaoFechar.style.display = 'block';
    document.body.classList.add('menu-aberto');
  }

  function fecharMenu() {
    menu.classList.remove('open');
    botaoFechar.style.display = 'none';
    document.body.classList.remove('menu-aberto');
  }

  botaoMenu.addEventListener('click', abrirMenu);

  botaoFechar.addEventListener('click', function (e) {
    e.stopPropagation();
    fecharMenu();
  });

  document.addEventListener('click', function (e) {
    if (
      !menu.contains(e.target) &&
      !botaoMenu.contains(e.target) &&
      menu.classList.contains('open')
    ) {
      fecharMenu();
    }
  });

  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  linksNavegacao.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const idAlvo = this.getAttribute('href');
      fecharMenu();

      setTimeout(() => {
        const secaoAlvo = document.querySelector(idAlvo);
        if (secaoAlvo) {
          secaoAlvo.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 300);
    });
  });
});
