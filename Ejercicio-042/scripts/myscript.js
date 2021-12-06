/***************************************************************************************************************
*  
*   Objetivo: Generar los primeros n números primos 
*
*
*   Entrada : número entero n
*
*
*   Salida  : 1 2 3 5 7 ....
*
*
***************************************************************************************************************/

/** Funçom que pide um número e comprova que é um número enteiro */
function lerNumero(){
	let numero;
	do {
   		numero=prompt(`Introduze um número enteiro`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero <= 0){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero <= 0)
	return numero;
}

/**
 * Método "clássico"
 */

function comprovaPrimo(numero){
    if (numero === 1 || numero === 2 || numero === 3){
        return true;
    } else {
        for(let i = 2; i<numero-1; i++){
            if(numero%i === 0){
                return false;
            }
        }
    }
    return true;
}

function geraPrimos(numero){
    let primos=[];
    for(let i = 1; primos.length < numero; i++){
        if(comprovaPrimo(i)){
            primos.push(i);
        }
    }
    return primos;
}

console.log(geraPrimos(parseInt(lerNumero())));
//console.log(comprovaPrimo(1));

/** ESTA FORMA PA MAIS PA DIANTE, A "CLASSICA" ESTÁ BEM
 * Crear o array ca longitude entrada (número introduzido) e logo fago a funçom 
 * que lhe vai ir introduzindo os valores no array
 */
 /*let saida = Array.from({length:lerNumero()}, () => {
    
  });

console.log(saida);*/