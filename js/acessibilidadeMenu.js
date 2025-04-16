const acessibilidadeBtn = document.getElementById('acessibilidadeBtn');
let acessibilidadeAtiva = false;

acessibilidadeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const html = document.documentElement;

  if (!acessibilidadeAtiva) {
    html.style.fontSize = '1.4rem';
    acessibilidadeAtiva = true;
    acessibilidadeBtn.textContent = 'Acessibilidade';
  } else {
    html.style.fontSize = '';
    acessibilidadeAtiva = false;
    acessibilidadeBtn.textContent = 'Acessibilidade';
  }
});
