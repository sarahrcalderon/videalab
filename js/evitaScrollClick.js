document.addEventListener('click', function (e) {
  if (!e.target.closest('a') && !e.target.closest('button')) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log('Clique bloqueado para evitar scroll');
  }
});
