document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.formularioContato');

  if (form) {
    const focusableElements = form.querySelectorAll(
      'input, textarea, select, button',
    );

    focusableElements.forEach((element) => {
      // Só intercepta o foco vindo do teclado (não clique!)
      element.addEventListener('focus', function () {
        // Salva a posição atual do scroll
        const scrollY = window.scrollY;

        requestAnimationFrame(() => {
          window.scrollTo(0, scrollY);
        });
      });
    });
  }
});
