const botaoScroll = document.getElementById('botaoScroll');
const icone = botaoScroll.querySelector('i');

function scrollarParaBaixo() {
  const alturaJanela = window.innerHeight;
  window.scrollBy({
    top: alturaJanela,
    behavior: 'smooth',
  });
}

function scrollarParaCima() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

botaoScroll.addEventListener('click', () => {
  if (icone.classList.contains('fa-arrow-down')) {
    scrollarParaBaixo();
  } else {
    scrollarParaCima();
  }
});

// Troca o ícone com base no scroll
window.addEventListener('scroll', () => {
  const scrollTotal =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollAtual = window.scrollY;

  if (scrollAtual + 100 >= scrollTotal) {
    // Estamos no fim
    icone.classList.remove('fa-arrow-down');
    icone.classList.add('fa-arrow-up');
  } else if (scrollAtual < 100) {
    // No topo
    icone.classList.remove('fa-arrow-up');
    icone.classList.add('fa-arrow-down');
  }
});

// Começa como seta para baixo
icone.classList.add('fa-arrow-down');
