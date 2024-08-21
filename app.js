//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

let listaDeNumeroSorteado = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   //responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
mensagemInicial();

function verificarChute() {
   let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
   let mensagemTentativas = "Você descobriu o numero secreto! com " + tentativas + " " + palavraTentativas
    let chute = document.querySelector("input").value;
    if (numeroSecreto == chute) {
      exibirTextoNaTela("h1", "Acertou!");
      exibirTextoNaTela("p", mensagemTentativas);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela("p", "O número secreto é menor");
      } else {
         exibirTextoNaTela("p", "O número secreto é maior");
      }limparcampo();
    } 
    tentativas++;
    

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

if (quantidadeDeElementosNaLista == limiteNumero){
   listaDeNumeroSorteado = [];
}

   if (listaDeNumeroSorteado.includes (numeroEscolhido)){
         return gerarNumeroAleatorio();
   } else {
      listaDeNumeroSorteado.push(numeroEscolhido);
      console.log(listaDeNumeroSorteado);
      return numeroEscolhido;
   }
}

function limparcampo() {
   chute = document.querySelector("input");
   chute.value = "";
}

function mensagemInicial() {
   exibirTextoNaTela("h1", "Jogo do número secreto");
   exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function reiniciarJogo() {
   limparcampo();
   mensagemInicial();
   numeroSecreto = gerarNumeroAleatorio();
   tentativas = 1;
   document.getElementById("reiniciar").setAttribute("disabled", true);
}
