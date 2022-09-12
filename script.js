function limpaInput() {
    document.getElementById('inputPalavras').value =''
}

function redirecionaGame () {
    window.location.replace('jogo.html')
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
    limpaInput()
    redirecionaGame()
}

const bancoPalavras = []

let botaoadicionaoutro = document.getElementById('but-adicionarout')
botaoadicionaoutro.onclick = adicionaPalavras

let botaoadicionasalva = document.getElementById('but-salvar')
botaoadicionasalva.onclick = adicionaeSalva
