window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const botaoScroll = document.getElementById('botaoScroll');
  const icone = botaoScroll.querySelector('i');
  const secoes = ['#servicos', '#sobre', '#contato', 'footer'];
  let indiceAtual = 0;
  let indoParaCima = false;

  botaoScroll.addEventListener('click', function () {
    if (indoParaCima) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      icone.classList.remove('fa-arrow-up');
      icone.classList.add('fa-arrow-down');
      indiceAtual = 0;
      indoParaCima = false;
      return;
    }

    const proximaSecao = document.querySelector(secoes[indiceAtual]);
    if (proximaSecao) {
      proximaSecao.scrollIntoView({
        behavior: 'smooth',
      });
      indiceAtual++;

      if (indiceAtual >= secoes.length) {
        icone.classList.remove('fa-arrow-down');
        icone.classList.add('fa-arrow-up');
        indoParaCima = true;
      }
    }
  });
});

document.addEventListener('click', function (e) {
  const isLink = e.target.closest('a');
  const isButton = e.target.closest('button');

  if (isLink && isLink.getAttribute('href')?.startsWith('#')) {
    return;
  }

  if (!isLink && !isButton) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log('Clique bloqueado para evitar scroll');
  }
});

document.addEventListener(
  'click',
  function (e) {
    if (e.target.matches('input[type="checkbox"]')) {
      return true;
    }

    if (e.target.matches('.botaoSaibaMais')) {
      const targetId = e.target.getAttribute('data-scroll');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  },
  true,
);
