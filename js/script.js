import { setupMenu } from './menu';
import { scrollBar } from './scrollBar';
import { formulario } from './formulario';
import { evitaScrollClick } from './evitaScrollClick';
import { botaoTopo } from './botaoTopo';

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  scrollBar();
  formulario();
  evitaScrollClick();
  botaoTopo();

  // Outras inicializações podem vir aqui
});
