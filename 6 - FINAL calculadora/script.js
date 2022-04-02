//CALCULADORA

function calculadora(){
    const operacao =Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2- Subtração (-)\n 3- MUltiplicação(*)'));
    

    let n1 = Number(prompt('Insira um valor'));
    let n2 = Number(prompt('Insira outro valor'));
    let resultado;


    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    } 
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    } 
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
    } 


    if (operacao == 1){
        soma();
    } else if (operacao == 2){
    subtracao();
    } else if (operacao == 3){
    multiplicacao();
    } else{
        console.log('Escolha alguma opção');
    }


  
}   calculadora();

//link do github para estudo de sintaxe básica do js 
// https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript