//Estruturas condicionais 

var jogador1 = 7;
var jogador2 = 5
var placar;

if (jogador1 > 0){
    console.log('jogador marcou ponto!');
} else if  (jogador2 > 0) {
    console.log('jogador nao fez ponto');
} else {
    comsole.log('nenhuma pontuação');
}

// Exemplo de maior pontuacao
//IF TERNÁRIO ( Condição ) 
if (jogador1 > 0 && jogador2 == 0){
    console.log('Vencedor');
} else {
    console.log('Perdedor');
}

//SWITCH
switch (placar ) {
    case placar = jogador1 > jogador2:
    console.log('jogado 1 ganhou');
}


// LAÇOS DE REPETIÇÃO
/*
For
FOR/in
For/OF
while
DO/ while
*/

//Exemplo

let array = ['valor1', 'valor2','valor3','valor4','valor5'];

let object = { propiedade1: 'valor1',propiedade2:'valor2', propiedade3: 'valor3'}

// for - executa uma instrução até que ela seja falsa

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

// AULA SOBRE ESTRUTURA CONDICIONAIS