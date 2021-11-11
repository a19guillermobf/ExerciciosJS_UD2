/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número es o no primo empleando una función
*             Un número n es primo si sólo es divisible por 1 y por n
*
*   Entrada : numero entero
*
*   Salida  : El numero n (es|no es) primo
*
***************************************************************************************************************/

/** Pide o dato e comprova que é um número maior ca 0 */
function lerDato(mensagem){
	let numero;
	do {
   		numero=prompt(mensagem);
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<=0)
	return numero;
}

let mensagem="Introduze um número enteiro positivo";

/** Possiblemente com funçom recursiva que devolva false se é divisible por algum outro número que nom seja 
 * el mesmo ou o 1, começando de el mesmo cara atrás
 */
//NOM ESTÁ FUNCIONANDO!!
function numPrimo(n,constante=0,saida=true){
    constante=n;
    if ( (constante != n || constante != 1) && constante%n == 0){
        saida = false
        return saida;
    } else {
        numPrimo(n-1);
    }
    return saida;
}

console.log(numPrimo(6));