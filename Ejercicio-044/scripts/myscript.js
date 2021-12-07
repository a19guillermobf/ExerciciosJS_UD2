/***************************************************************************************************************
*  
*   Objetivo: Generar los n primeros números perfectos
*
*
*   Entrada : número entero n
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
/** Funçom que pide um número e comprova que é um número enteiro */
function lerNumero(mensagem,erro){
	let numero;
	do {
   		numero=prompt(mensagem);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero <= 0){
            alert(erro);
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero <= 0)
	return numero;
}

function comprovaPerfeito(numero){
    /** Obter os divisores deste número, que vou ir gardando num array */
    let divisores=[];
    /** E agora desde 1 até a metade do número, ir gardando divisores */
    for(let i=1; i<=numero/2; i++){
        if(numero%i===0) divisores.push(i);
    }
    if(divisores.reduce(function(anterior,actual){return anterior+actual},0) === numero ) {
        return true
    }
    /** Também se pode expressar assi
     * divisores.reduce((anterior,actual) => anterior+actual,0)
     */
    return false;
}

function geraPerfeitos(numero){
    let perfeitos = [];
    for(let i=1; perfeitos.length<numero; i++){
        if(comprovaPerfeito(i)){
            perfeitos.push(i);
        }
    }
    return perfeitos;
}

/** O choio é que calcular mais de 4 já se lhe complica ao ordenata */
console.log(geraPerfeitos(parseInt(lerNumero(`Introduze um número enteiro`,"O dato introduzido nom é correcto"))))


