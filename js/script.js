import { setupMenu } from './menu';
import { aparecerImagem } from './efeitoImagem';
import { scrollBar } from './scrollBar';
import { formulario } from './formulario';

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  aparecerImagem();
  scrollBar();
  formulario();

  // Outras inicializações podem vir aqui
});
