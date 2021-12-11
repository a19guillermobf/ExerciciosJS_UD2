/***************************************************************************************************************
*  
*   Objetivo: Calcular la matriz transpuesta
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

/** 1 2
 *  3 4
 *  5 6
 * 
 * converte-se em 
 * 1 3 5
 * 2 4 6
 */

/** A matriz nova vai ter tantas filas como colunas tem a anterior, e vai ter tantas colunas como filas a anterior
 * Entom, o primeiro bucle percorre a longitude do número de colunas da matriz principal
 * e o segundo percorre a longitude do número de filas, e os valores que vai engadindo
 * som tamém os contrários
 */
function matrizTransposta(matriz){
    let transposta = [];
    for (let i=0; i<matriz[0].length; i++){
        let arrayintermedio = [];
        for (let j=0; j<matriz.length; j++){
            arrayintermedio.push(matriz[j][i]);
        }
        transposta.push(arrayintermedio);
    }
    return transposta;
}

console.log(matrizTransposta([[1,2],[3,4],[5,6]]));

console.log(matrizTransposta([[0,0,4],[1,0,4],[0,1,0],[0,3,2],[0,2,3],[0,3,4],[3,3,1]]));