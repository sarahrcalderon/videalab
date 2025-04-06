document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.formularioContato');

  if (form) {
    // Captura todos os elementos inputáveis do formulário
    const focusableElements = form.querySelectorAll(
      'input, textarea, select, button',
    );

    focusableElements.forEach((element) => {
      // Intercepta ANTES do focus ocorrer
      element.addEventListener('mousedown', function (e) {
        // Armazena a posição atual do scroll
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Permite o foco, mas mantém a posição
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollPosition);
        });
      });

      // Backup para eventos de teclado (tab)
      element.addEventListener('focus', function () {
        const scrollPosition = window.scrollY || window.pageYOffset;
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollPosition);
        });
      });
    });
  }
});
