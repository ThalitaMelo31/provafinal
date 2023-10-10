var cadastro = [];
var ordem = 1;
var tabelaNomes = document.getElementById("tabelaNomes")

function cadastrarBloom() {
    let nome = document.querySelector("#nome").value

    if(nome!=="") {
        cadastro.push(nome)
        document.querySelector("#nome").value = ""
        atualizarLista();

    }

}

function atualizarLista() {
    
    tabelaNomes.innerHTML =""
    for()


}