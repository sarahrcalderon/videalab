document.addEventListener('DOMContentLoaded', function () {
  const linhas = document.querySelectorAll('.linha-horizontal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ativo');
        }
      });
    },
    { threshold: 1.0 },
  );

  linhas.forEach((linha) => {
    observer.observe(linha);
  });
});
