import { setupMenu } from './menu';
import { aparecerImagem } from './efeitoImagem';
import { scrollBar } from './scrollBar';
import { efeitoVideo } from './efeitoVideo';

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  aparecerImagem();
  scrollBar();
  efeitoVideo();

  // Outras inicializações podem vir aqui
});
