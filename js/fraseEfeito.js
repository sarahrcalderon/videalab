const frases = ['DESIGN'];

let i = 0;
const elementoTexto = document.getElementById('textoAnimado');

function trocarFrase() {
  elementoTexto.style.opacity = 0;

  setTimeout(() => {
    elementoTexto.textContent = frases[i];
    elementoTexto.style.opacity = 1;
    i = (i + 1) % frases.length;
  }, 400);
}

// Iniciar a primeira frase
elementoTexto.textContent = frases[0];
setInterval(trocarFrase, 4000); // Troca a cada 4 segundos
