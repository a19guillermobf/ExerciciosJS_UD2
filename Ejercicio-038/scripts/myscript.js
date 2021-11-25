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

/**
 * Funçom à que se lhe passa um número e logo comprova desde o número anterior
 * até o dous, se se pode dividir com resto 0.
 * Se aparece algúm, entom nom é palíndromo, e devolve false, e se nom como 
 * nom é divisível entre nengum número intermedio pois é palíndromo e devolve true
 */
function numPrimo(n){
    for(i=n-1;i>1;i--){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

console.log(numPrimo(lerDato(mensagem)));