/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                1.- Devuelve en un array los elementos del
*                    primer array que están en el segundo array
*                2.- Devuelve en un array los elementos del
*                    primer array que no están en el segundo array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: los elementos comunes
*             En el primer array no hay los siguientes elementos del segundo array: ...
*             En el segundo array no hay los siguientes elementos del primer array: ....
*
***************************************************************************************************************/
/** Crear as funçons para crear arrays aleatorios VAI EM DOUS PASSOS, mira exercicio 31
 * primeiro definese a creaçom dum número aleatório, e depois com array.from crea-se o array com números aleatorios
 * ARRAY FROM
*/

/** aleatorio é umha funçom, que se lhe passa um valor mínimo e outro máximo.
 * Com Math.random() crea um número aleatorio entre 0 e 1
 * max-min representa o número de possibilidades que vai ter
 * o produto de número de possibilidades por math random vai dar o aleatorio
 * e ao sumar-lhe o min entra dentro do rango requerido (mira os breves_apuntamentos.md)
 */
const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random());

/**Pide-se a longitude dos arrays */
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

/** E agora iria a creaçom do array em si */

let longitude = parseInt(lerNumero("Introduze a longitude do array", "O dato introduzido nom é correto"));

let arr1 = Array.from({length:longitude},() => aleatorio(-100,100));
let arr2 = Array.from({length:longitude},() => aleatorio(-100,100));


/** Compara dous arrays e devolve os elementos que som iguais */

let iguais = [];
let arr1diff = [];
let arr2diff = [];
/* 
for (let valor of arr1){
    for(let valor2 of arr2){
        if(valor === valor2){
            iguais.push(valor);
        }
    }
}
 */

/** Pois aqui esta o método includes. Este método devolve true se o elemento que se
 * lhe passa está no array, assi aforra-se fazer o segundo for
 */
/*for (let valor of arr1){
    if (arr2.includes(valor))
            iguais.push(valor);
}*/

/** O jeito de faze-lo numha só linha é co método filter, onde filter sempre tem que levar umha funçom que devolva
 * true ou false.
 * Neste casso, iguais seria um novo array. arr1.filter iria passando cada elemento de arr1 e se arr2.includes(el)
 * ou seja, se o elemento está tamém no array arr2, devolve true e inclue-o no novo array iguais. 
 * 
 * let iguais=arr1.filter(el=>arr2.includes(el))
 * 
 * Esta linha, algo mais desglosada sería
 * 
 * let iguais=arr1.filter(function comprovaIguais(elemento){
 *      return arr2.includes(elemento);
 * })
 * 
 * só que ao ser funçom frecha pode-se aforrar a palavra return
 */
//let iguais=arr1.filter(el=>arr2.includes(el))
//let diferentes=arr1.filter(el=>!arr2.includes(el))


iguais=arr1.filter(el=>arr2.includes(el))
arr1diff = arr1.filter(el=>!iguais.includes(el))
arr2diff = arr2.filter(el=>!iguais.includes(el))

console.log(`Los elementos del Array1: ${arr1.join(',')}
Los elementos del Array2: ${arr2.join(',')}
Los arrays tienen ${iguais.length} elementos comunes: los elementos comunes: ${iguais.join(',')}
En el primer array no hay los siguientes elementos del segundo array: ${arr2diff.join(',')}
En el segundo array no hay los siguientes elementos del primer array: ${arr1diff.join(',')}`)