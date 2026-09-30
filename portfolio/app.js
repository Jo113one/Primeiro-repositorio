var PlanoFundo = document.getElementById("apres");
let botaoSimples = document.getElementById("simples");

let modoEscuroAtivado = false;

botaoSimples.onclick = trocaClasse

function trocaClasse() {
    if(modoEscuroAtivado == true) {
        PlanoFundo.classList.remove("PlanoFundo");
        PlanoFundo.classList.add("modoClaro");

        modoEscuroAtivado = false;
    } else {
        PlanoFundo.classList.remove("modoClaro");
        PlanoFundo.classList.add("PlanoFundo");

        modoEscuroAtivado = true;
    }
}