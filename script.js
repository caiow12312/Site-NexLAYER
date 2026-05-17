let botaoProximo = document.querySelector(".proximo")
let botaoAnterior = document.querySelector(".anterior")
let listaImagens = document.querySelectorAll(".imgCarrossel img")
let contador = 0

console.log(listaImagens)

botaoProximo.onclick = function passarSlider(){
    document.querySelector("img.ativo").classList.remove("ativo")
    
    if(contador < 4){
    contador = contador + 1 
    }else{
        contador = 0
    }

    listaImagens[contador].classList.add("ativo")
}
botaoAnterior.onclick = function voltarSlider(){
    document.querySelector("img.ativo").classList.remove("ativo")
    
    if(contador > 0){
    contador = contador - 1
    }else{
        contador = 4
    }

    listaImagens[contador].classList.add("ativo")
}

//fim carrossel de imagens

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

//fim texto digitado


const observadorNomes = new IntersectionObserver((entradas) => {
  entradas.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('visivel')
        entry.target.classList.remove('naovisivel')
    }else{
        entry.target.classList.remove('visivel')
        entry.target.classList.add('naovisivel')  
    }
  })
})

const nomesEquipe = document.querySelectorAll('.naovisivel')

nomesEquipe.forEach((nomeEquipe) => observadorNomes.observe(nomeEquipe))

//fim nomes equipe

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

//fim cursor personalizado

const observadorLista = new IntersectionObserver((entradas) => {
  entradas.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('visivel')
        entry.target.classList.remove('naovisivel2')
    }else{
        entry.target.classList.remove('visivel')
        entry.target.classList.add('naovisivel2')  
    }
  })
})

const listaMateriais = document.querySelectorAll('.naovisivel2')

listaMateriais.forEach((lista) => observadorLista.observe(lista))

//fim Lista de Materiais

const sombotaoAnterior = document.getElementById("somBotaoAnterior");
const sombotaoProximo = document.getElementById("somBotaoProximo");
const som = document.getElementById("som");

sombotaoAnterior.addEventListener("click", () => {
  som.currentTime = 0;
  som.play();
});

sombotaoProximo.addEventListener("click", () => {
  som.currentTime = 0;
  som.play();
});