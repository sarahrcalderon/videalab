// === Acessibilidade ===
const acessibilidadeBtn = document.getElementById('acessibilidadeBtn');
let acessibilidadeAtiva = false;

if (acessibilidadeBtn) {
  acessibilidadeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const html = document.documentElement;

    if (!acessibilidadeAtiva) {
      html.style.fontSize = '1.4rem';
      acessibilidadeAtiva = true;
    } else {
      html.style.fontSize = '';
      acessibilidadeAtiva = false;
    }
    acessibilidadeBtn.textContent = 'Acessibilidade';
  });
}

// === Tema (Light/Dark) ===
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const logo = document.getElementById('logo');
const mockupImage = document.getElementById('mockup-image');

function setTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${theme}-theme`);

  themeIcon?.classList.remove(theme === 'dark' ? 'bi-sun' : 'bi-moon');
  themeIcon?.classList.add(theme === 'dark' ? 'bi-moon' : 'bi-sun');

  if (logo) {
    logo.src =
      theme === 'dark'
        ? './assets/img/logotipo_videa_BRANCO.svg'
        : './assets/img/logotipo_videa_PRETO.svg';
  }

  if (mockupImage) {
    mockupImage.src =
      theme === 'dark'
        ? './assets/img/celularInstagram_DARK.webp'
        : './assets/img/celularInstagram.webp';
  }

  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// === Menu & Botão Topo ===
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

  botaoMenu?.addEventListener('click', abrirMenu);
  botaoFechar?.addEventListener('click', function (e) {
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

  menu?.addEventListener('click', function (e) {
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
          secaoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
  });
});

// === Formulário: evitar pulo ao focar ===
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.formularioContato');

  if (form) {
    const focusableElements = form.querySelectorAll(
      'input, textarea, select, button',
    );

    focusableElements.forEach((element) => {
      element.addEventListener('focus', function () {
        const scrollY = window.scrollY;
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollY);
        });
      });
    });
  }
});

// === ScrollBar + Botão de Scroll por Seção ===
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
  const icone = botaoScroll?.querySelector('i');
  const secoes = ['#servicos', '#sobre', '#contato', 'footer'];
  let indiceAtual = 0;
  let indoParaCima = false;

  botaoScroll?.addEventListener('click', function () {
    if (indoParaCima) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      icone?.classList.remove('fa-arrow-up');
      icone?.classList.add('fa-arrow-down');
      indiceAtual = 0;
      indoParaCima = false;
      return;
    }

    const proximaSecao = document.querySelector(secoes[indiceAtual]);
    if (proximaSecao) {
      proximaSecao.scrollIntoView({ behavior: 'smooth' });
      indiceAtual++;

      if (indiceAtual >= secoes.length) {
        icone?.classList.remove('fa-arrow-down');
        icone?.classList.add('fa-arrow-up');
        indoParaCima = true;
      }
    }
  });
});

// === Evita Scroll e Clicke fora de links/botões ===
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

// === Scroll suave para botão "Saiba Mais" e checkbox permitidos ===
document.addEventListener(
  'click',
  function (e) {
    if (e.target.matches('input[type="checkbox"]')) return true;

    if (e.target.matches('.botaoSaibaMais')) {
      const targetId = e.target.getAttribute('data-scroll');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  },
  true,
);
