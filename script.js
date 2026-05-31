
const textoElemento = document.querySelector(".texto");
const frases = ["Impressora 3D", "Super Rápida", "Baixo Nível de Ruído", "Alta Performace", "Firmaware Marlin", "Ideal para PETG, PLA, TPU"];
let fraseAtual = 0;
let letraAtual = 0;
let apagando = false;

function digitar() {
  const fraseCompleta = frases[fraseAtual];
  
  if (apagando) {
    // Apaga o texto: remove a última letra
    textoElemento.innerText = fraseCompleta.substring(0, letraAtual - 1);
    letraAtual--;
  } else {
    // Escreve o texto: adiciona a próxima letra
    textoElemento.innerText = fraseCompleta.substring(0, letraAtual + 1);
    letraAtual++;
  }

  // Define a velocidade da digitação/apagamento
  let velocidade = apagando ? 25 : 50;

  // Verifica se terminou de escrever a frase
  if (!apagando && letraAtual === fraseCompleta.length) {
    apagando = true;
    velocidade = 2000; // Pausa antes de começar a apagar
  } 
  // Verifica se terminou de apagar a frase
  else if (apagando && letraAtual === 0) {
    apagando = false;
    fraseAtual = (fraseAtual + 1) % frases.length; // Passa para a próxima frase
    velocidade = 500; // Pequena pausa antes de escrever a nova
  }

  setTimeout(digitar, velocidade);
}

// Inicia a função
digitar();

//fim texto digitado secaoIncial


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

//fim cursor personalizado


$(document).ready(function() {
    $(".mobile_btn").on('click', function() {
      $(".mobile-menu").toggleClass('active');
    });
});