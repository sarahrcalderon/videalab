document.addEventListener('DOMContentLoaded', function () {
  const imagem = document.getElementById('imagemAnimada');

  function aparecerImagem() {
    const posicao = imagem.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      imagem.classList.add('aparecer');
    }
  }

  window.addEventListener('scroll', aparecerImagem);
});
