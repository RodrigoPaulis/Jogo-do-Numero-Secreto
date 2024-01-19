let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

//função abaixo exibe coisa na tela, mas ñ nos devolve uma informação, ela só executa e tem parametro()
function exibirTextoNatela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNatela ('h1', 'Jogo do Número Secreto');
    exibirTextoNatela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//função abaixo ñ tem parâmetro()e ñ tem retorno
function verificarChute() {
    let chute = document.querySelector('Input').value;    //value=nº chutado
    
    if (chute == numeroSecreto) {

        exibirTextoNatela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o NÚMERO SECRETO com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNatela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNatela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNatela ('p', 'O número secreto é maior');
        }
        //tentativas = tentativas + 1; (ou coloca assim ou igual abaixo)
        tentativas ++;
        limparCampo();

    }
}

//na função abaixo ñ tem parametro(), mas temos retorno de informação.
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt (Math.random () * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];

    }
    if (listaDeNumerosSorteados.includes (numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    }else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo (){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', 
    true);
}



//TIPO BOOLEANO - valor gerado pode ser true ou false

//EVITE REPETIÇÕES DE CÓDIGO!
//Ao invés de usarmos:
//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//vamos usar uma função:
//let campo = document.querySelector(tag)
//campo.innerHTML = 'textoquequeremos'

//Para evitar repetições de código podemos isolar o comportamento das 4 linhas em uma função de 2 linhas
//função=determinar algo dentro do código.sempre que criar função precisa de nome evem com () e depois {}

//QUANDO TRATARMOS DE ARRAY (LISTAS), ELAS SEMPRE VIRÃO ENTRE []
//sempre o primeiro elemento da lista vai ter índice 0 (vai vir com 0 dentro dos[])
//índice = é a posição do elemento na lista
//por exemplo para criar uma lista de números temos:

//let numeros = [1, 2, 3]

//se digitarmos "numeros" sem aspas, aparece:
// (3) [1, 2, 3]
//sendo o numero entre () a quantidade de elementos da lista e após isso aparece a lista
//quando digita numeros.length
//ele retorna a quantidade de números na lista, no caso apareceria 3

//se digitarmos numeros[0] ele retorna o primeiro número da lista, no caso 1
//e assim por diante

//para pegarmos o último índice da lista por ex. temos:
// numeros = numeros.length - 1
// no caso o resultado será 3


// o .includes verifica se o elemento já está na lista

// o .push adiciona item ao final da lista

// o .pop elimina o item ao final da linha