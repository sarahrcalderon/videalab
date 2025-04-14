import { setupMenu } from './menu';
import { scrollBar } from './scrollBar';
import { formulario } from './formulario';
import { evitaScrollClick } from './evitaScrollClick';
import { botaoTopo } from './botaoTopo';
import { efeitoLinhaObjetivo } from './efeitoLinhaObjetivo';
import { tema } from './tema';

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  scrollBar();
  formulario();
  evitaScrollClick();
  efeitoLinhaObjetivo();
  botaoTopo();
  tema();

  // Outras inicializações podem vir aqui
});
