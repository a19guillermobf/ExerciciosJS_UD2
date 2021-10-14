/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*
***************************************************************************************************************/
/** Pide o dato e comprova que é um número*/
function lerDato(i){
	let numero;
	do {
   		numero=prompt(`Introduze ${i} número`)
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
	return numero;
}

/**
 * Recolhe os números
 */

let num1=parseInt(lerDato("primeiro"));
let num2=parseInt(lerDato("segundo"));
let num3=parseInt(lerDato("terceiro"));

function calculaMaior(a,b,c){
	let maior = a;
	if (b>a){
		maior=b;
	}
	if (maior<c){
		maior=c;
	}
	return maior;
}

let resposta=document.getElementById("max");
resposta.innerHTML=`O maior número dos introduzidos é ${calculaMaior(num1,num2,num3)}`;