function sorteiaPalavra() {
    let sorteia = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)]
    palavraEscolhida = sorteia
    
    //escreve os tracinhos na tela
    for (let i = 0; i < palavraEscolhida.length; i++){
        letrasAdivinhadas = letrasAdivinhadas + '-'
    }
    canvaForca.innerText = letrasAdivinhadas

}  //função adicionada à função de início do jogo

document.body.addEventListener('keypress', function comparaLetras(evento) {
    

    letraDigitada = evento.key.toUpperCase()
    console.log(letraDigitada)
    
    let i = 0
    while(i < palavraEscolhida.length){
        if (letraDigitada == palavraEscolhida[i]) {

            // alert(`tem ${letraDigitada} na posição ${i}`)
            letrasAdivinhadas = letrasAdivinhadas
            canvaForca.innerText = letrasAdivinhadas
            i++

        } else if (letraDigitada != palavraEscolhida[i]) {

            // alert(`NÃO tem ${letraDigitada} na posição ${i}`)
            i++

        }
    }

}) //função que captura a letra da tecla digitada e compara com as letras da palavra escolhida