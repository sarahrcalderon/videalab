import { setupMenu } from './menu';
import { aparecerImagem } from './efeitoImagem';
import { scrollBar } from './scrollBar';
import { formulario } from './formulario';
import { fraseEfeito } from './fraseEfeito ';
import { evitaScrollClick } from './evitaScrollClick';
// import { includeHTML } from './includeHTML';

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  aparecerImagem();
  scrollBar();
  fraseEfeito();
  formulario();
  evitaScrollClick();
  // includeHTML();

  // Outras inicializações podem vir aqui
});
