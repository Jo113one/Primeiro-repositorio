var meuFundo = document.getElementById("ModoEscuro");
var meuTitulo = document.getElementById("Titulo");
let CliqueEmMim = document.getElementById("simples");

let oFundoEstaClaro = false;

let oTituloEstaClaro = false

if (CliqueEmMim) {
  CliqueEmMim.onclick = trocaClasse;
}

function trocaClasse() {
    if (oFundoEstaClaro && oTituloEstaClaro) {
        console.log("Fundo Escuro e Título Escuro");
        
        meuFundo.classList.remove("FundoClaro");
        meuFundo.classList.add("FundoEscuro");

        meuTitulo.classList.remove("TituloClaro");
        meuTitulo.classList.add("TituloEscuro");
    } else {
        console.log("Mudando para Fundo Claro e Título Claro");
        
        meuFundo.classList.remove("FundoEscuro");
        meuFundo.classList.add("FundoClaro");

        meuTitulo.classList.remove("TituloEscuro");
        meuTitulo.classList.add("TituloClaro");
    }

    oFundoEstaClaro = !oFundoEstaClaro;
    oTituloEstaClaro = !oTituloEstaClaro;
}