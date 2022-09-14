//funções de navegação

function telaInicial(){
    document.getElementById('main-index').style.display = ''
    document.getElementById('main-addpalavras').style.display = 'none'
    document.getElementById('main-game').style.display = 'none'
}

function iniciaJogo () {
    document.getElementById('main-index').style.display = 'none'
    document.getElementById('main-addpalavras').style.display = 'none'
    document.getElementById('main-game').style.display = ''
    sorteiaPalavra()
}

function telaPalavra () {
    document.getElementById('main-index').style.display = 'none'
    document.getElementById('main-game').style.display = 'none'
    document.getElementById('main-addpalavras').style.display = ''
}

//funções referentes à adição de palavras

function limpaInput() {
    document.getElementById('inputPalavras').value =''
}

function adicionaPalavras () {
    let inputPalavras = document.getElementById('inputPalavras')
    bancoPalavras.push(inputPalavras.value.toUpperCase())
    console.log(bancoPalavras)
    limpaInput()
}

function adicionaeSalva () {
    let inputPalavras = document.getElementById('inputPalavras')
    bancoPalavras.push(inputPalavras.value.toUpperCase())
    console.log(bancoPalavras)
    iniciaJogo()
}

//lógica do jogo ------------------------------------

function sorteiaPalavra() {
    let sorteia = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)]
    palavraEscolhida = sorteia

}  //função adicionada à função de início do jogo

document.body.addEventListener('keypress', function comparaLetras(evento) {
    
    //capturando a letra digitada
    var letraDigitada = evento.key.toUpperCase()
    console.log(letraDigitada)
    
    let i = 0

    while(i < palavraEscolhida.length){
        if (letraDigitada == palavraEscolhida[i]) {

            adivinhado = adivinhado + letraDigitada
            canvaForca.innerText = adivinhado
            i++

        } else if (letraDigitada != palavraEscolhida[i]) {


            i++

        }
    }

})

//botões index

let botaoIniciarJogo = document.getElementById('iniciarJogo')
botaoIniciarJogo.onclick = iniciaJogo

let menuAdicionar = document.getElementById('adicionarPalavra')
menuAdicionar.onclick = telaPalavra

//botões da tela adicionar palavras

let botaoadicionaoutro = document.getElementById('but-adicionarout')
botaoadicionaoutro.onclick = adicionaPalavras

let botaoadicionasalva = document.getElementById('but-salvar')
botaoadicionasalva.onclick = adicionaeSalva

let botaoCancelar = document.getElementById('but-cancelar')
botaoCancelar.onclick = telaInicial


telaInicial()

const bancoPalavras = []

let palavraEscolhida = ''
let adivinhado = ''