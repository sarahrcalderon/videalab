import { setupMenu } from './menu';
import { aparecerImagem } from './efeitoImagem';
import { scrollBar } from './scrollBar';
import { efeitoVideo } from './efeitoVideo';

document
  .querySelectorAll('.formularioContato input, .formularioContato textarea')
  .forEach((el) => {
    el.addEventListener('focus', (e) => {
      e.target.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'nearest',
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  aparecerImagem();
  scrollBar();
  efeitoVideo();

  // Outras inicializações podem vir aqui
});
