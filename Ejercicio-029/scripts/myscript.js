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

/**
 * Esta declaraçom crea um aray com umha longitude "lerAno()", é dizer, o número que se passa
 * por prompt, e logo com umha funçom vai metendo valores dentro do array, neste caso números
 * aleatórios do 1 ao 100
 */
let aleatorios=Array.from({length:lerAno()}, () => Math.floor(Math.random()*99)+1)
/**
 * Com isto sacamos automáticamente o número mais alto do array
 */
let max=Math.max(...aleatorios)
/**
 * E com isto o número mais baixo
 */
let min=Math.min(...aleatorios)

/**Pendente de revisar que significa */
/**
 * Pois com isto o que fai é aplicar o método reduce sobre o array aleatórios
 * Este método precisa o elemento actual e o anterior, e sobre eles fazer as operaçons 
 * que se estime. Neste caso vai ir sumando cada elemento anterior e o actual, polo que ao 
 * final está fazendo o sumatório de todos os números. 
 * Logo divide entre o length para saber a média.
 * Hai que ter em conta que o método reduce tem que devolver um array do mesmo tipo que co que trabalha,
 * polo que se se lhe passa um array de objetos tem que devolver um array de objetos cos mesmos 
 * campos. Mira exercício 52
 */

let media=aleatorios.reduce((anterior,actual)=>anterior+actual)/aleatorios.length

console.log(aleatorios)
/*
console.log(Math.floor(3.6))
console.log(Math.ceil(3.6))
console.log(Math.round(3.6))
*/