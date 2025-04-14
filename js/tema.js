// Elementos
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const logo = document.getElementById('logo');

function setTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');

  document.body.classList.add(`${theme}-theme`);

  themeIcon.classList.remove(theme === 'dark' ? 'bi-sun' : 'bi-moon');
  themeIcon.classList.add(theme === 'dark' ? 'bi-moon' : 'bi-sun');

  logo.src =
    theme === 'dark'
      ? './assets/img/logotipo_videa_BRANCO.svg'
      : './assets/img/logotipo_videa_PRETO.svg';

  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});
