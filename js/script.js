import { setupMenu } from './menu';
import { aparecerImagem } from './efeitoImagem';
import { scrollBar } from './scrollBar';
import { formulario } from './formulario';
import { fraseEfeito } from './fraseEfeito ';
document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  aparecerImagem();
  scrollBar();
  fraseEfeito();
  formulario();

  // Outras inicializações podem vir aqui
});
