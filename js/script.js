import { setupMenu } from './menu';
import { scrollBar } from './scrollBar';
import { formulario } from './formulario';
import { evitaScrollClick } from './evitaScrollClick';
import { botaoTopo } from './botaoTopo';
import { tema } from './tema';
import { acessibilidadeMenu } from './acessibilidadeMenu';
document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  scrollBar();
  formulario();
  evitaScrollClick();
  botaoTopo();
  tema();
  acessibilidadeMenu();
});
