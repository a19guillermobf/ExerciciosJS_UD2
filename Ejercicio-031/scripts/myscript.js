/***************************************************************************************************************
*  
*   Objetivo: Calcula la suma de los pares y de los impares de elementos de n elementos de un array generados
*             aleatoriamente entre 1 y 10.
*
*
*   Entrada : n
*
*
*   Salida  : Los elementos pares del array son: x1, x2, x3, ...
*             Los elementos impares del array son: x1, x2, x3, ...
*             La suma de los elementos pares del array es: XXXX
*             La suma de los elementos impares del array es: YYYY
*
***************************************************************************************************************/

/** Funçom que pide um número e comprova que é um número enteiro*/
function lerNumero(){
	let numero;
	do {
   		numero=prompt(`Introduze um número enteiro`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
	return numero;
}

/**
 * Aqui está declarando a constante aleatorio que lhe asigna umha funçom frecha
 * A esta funçom passa-lhe um minimo e um máximo e a funçom consiste em
 * Redondear o resultado (Math.floor)
 * da suma do mínimo ca diferencia do max-min por Math.random (math random devolve um num aleatorio entre 0 e 1)
 * O que crearia números aleatórios entre o máximo e o mínimo passado
 * 
 * Logo com array from, crea um array de length lerNumero e enche o array ca constante creada anteriormente
 */

const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random())
let aleatorios=Array.from({length:lerNumero()}, () => aleatorio(1,10))

/**
 * Aqui fai, com um método de array, o filter, umha constante pares.
 * x representa cada elemento do array, e vai-nos pasar todos, se esse elemento cumple
 * a condiçom (neste caso ser par) adiciona-se ao novo array pares (o mesmo para impares)
 */
const pares=aleatorios.filter(x=>x%2===0)
const impares=aleatorios.filter(x=>x%2!==0)

/**
 * Agora que já temos os arrays de pares e impares, co método reduce
 * que é outro método para arrays, e que vai devolver um único valor fai
 * de cada array recolhe o elemento anterior e o actual e suma-o até que só queda um. Suma feita
 */
let sumaPares=pares.reduce((anterior,actual)=>anterior+actual)
let sumaImpares=impares.reduce((anterior,actual)=>anterior+actual)


/**
 * E por último, para imprimir os arrays, pode-se usar o método join
 * que o que fai é devolver o array separado polo separador que se lhe indique, neste caso a coma
 */
console.log(`Los elementos pares del array son: ${pares.join(', ')}`)
console.log(`Los elementos impares del array son: ${impares.join(', ')}`)

/* 
function calculaPares(numeros){
     let pares = [];
     for (numero of numeros){
         if(numero%2==0){
             pares.push(numero);
         }
     }
     return pares;
 }

 function calculaImpares(numeros){
    let impares = [];
    for (numero of numeros){
        if(numero%2==0){
            impares.push(numero);
        }
    }
    return impares;
 }
*/