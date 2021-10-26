/***************************************************************************************************************
*  
*   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
*             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
*
*   Entrada : n
*
*
*   Salida  : el mayor, el menor y la media de los números del array
*
*
***************************************************************************************************************/

/** Funçom que pide um número e comprova que é um número enteiro entre 1 e 100 */
function lerAno(){
	let numero;
	do {
   		numero=prompt(`Introduze um número enteiro entre 1 e 100`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero<1 || numero > 100){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero<1 || numero > 100)
	return numero;
}

//console.log(lerAno());

let aleatorios=Array.from({length:lerAno()}, () => Math.floor(Math.random()*99)+1)
let max=Math.max(...aleatorios)
let min=Math.min(...aleatorios)

/**Pendente de revisar que significa */

let media=aleatorios.reduce((anterior,actual)=>anterior+actual)/aleatorios.length

console.log(aleatorios)
/*
console.log(Math.floor(3.6))
console.log(Math.ceil(3.6))
console.log(Math.round(3.6))
*/