const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() { 

        if(aba.classList.contains("selecionado")){
            return; 
        }

        selecionarAba(aba); //Fatoramento do código

        informacoesAbaMostrar(aba);
    })
});

function selecionarAba(aba){
    
    const abaSelecionada = document.querySelector(".aba.selecionado"); //Identificando a aba selecionada
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}

function informacoesAbaMostrar(aba){
    
    const descricaoSelecionada = document.querySelector(".informacao.selecionado");
    descricaoSelecionada.classList.remove("selecionado");

    const idelemento = `descricao-${aba.id}` //Criando uma String

    const informacaoMostrada = document.getElementById(idelemento);
    informacaoMostrada.classList.add("selecionado");
}