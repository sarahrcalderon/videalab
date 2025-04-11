document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const botaoMenu = document.getElementById('menuBtn');
  const botaoFechar = document.getElementById('closeBtn');
  const linksNavegacao = document.querySelectorAll('#menu a[href^="#"]'); // Seleciona todos os links âncora no menu

  const abrirMenu = function (e) {
    e.stopPropagation();
    menu.classList.add('open');
    document.body.classList.add('menu-aberto');
  };

  const fecharMenu = function () {
    menu.classList.remove('open');
    document.body.classList.remove('menu-aberto');
  };

  botaoMenu.addEventListener('click', abrirMenu);

  botaoFechar.addEventListener('click', function (e) {
    e.stopPropagation();
    fecharMenu();
  });

  document.addEventListener('click', function (e) {
    const cliqueDentroDoMenu = menu.contains(e.target);
    const cliqueNoBotaoMenu = botaoMenu.contains(e.target);

    if (!cliqueDentroDoMenu && !cliqueNoBotaoMenu) {
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

      // Rola suavemente para a seção após um pequeno delay
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
