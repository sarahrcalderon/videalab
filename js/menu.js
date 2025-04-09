document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');

  // Abrir menu
  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.add('open'); // <-- alterado para 'open'
    document.body.classList.add('menu-aberto'); // bloqueia rolagem
  });

  // Fechar menu com botão "X"
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('open'); // <-- alterado para 'open'
    document.body.classList.remove('menu-aberto');
  });

  // Fechar menu clicando fora dele
  document.addEventListener('click', function (e) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnButton = menuBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      menu.classList.remove('open'); // <-- alterado para 'open'
      document.body.classList.remove('menu-aberto');
    }
  });

  // Impede que cliques dentro do menu fechem ele
  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
