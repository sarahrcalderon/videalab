document.addEventListener('DOMContentLoaded', () => {
  const imagensAnimadas = document.querySelectorAll('.animada');

  function verificarAparecer() {
    imagensAnimadas.forEach((img) => {
      const top = img.getBoundingClientRect().top;
      const altura = window.innerHeight;

      if (top < altura - 100) {
        img.classList.add('aparecer');
      }
    });
  }

  window.addEventListener('scroll', verificarAparecer);
  verificarAparecer(); // dispara no load também
});
