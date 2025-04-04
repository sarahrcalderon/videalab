import { setupMenu } from './menu';
import { aparecerImagem } from './efeitoImagem';
import { scrollBar } from './scrollBar';

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  aparecerImagem();
  scrollBar();

  // Outras inicializações podem vir aqui
});
