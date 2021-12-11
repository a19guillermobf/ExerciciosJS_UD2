/***************************************************************************************************************
*  
*   Objetivo: Sumar los elementos de las dos diagonales de una matriz bidimensional
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
/** Dou por suposto que som matrizes quadradas */

/** Isto ve-se melhor num papel, pero o conto é
 * o valor do primeiro sumando obtense da fila0,coluna0 depois fila1,coluna1 e assi até o final
 * o valor do segundo sumando obtense da fila0,ultima coluna, fila1,última coluna -1 e assi até o final
 * 
 * Se hai algum momento no que as diagonais se cruzam num mesmo número, só se suma esse número ao sumatório
 * total, nom os dous
 */

function sumaDiagonais(matriz){
    let resultado = 0;
    for (let i=0, j=matriz.length-1; i<matriz.length; i++,j--){
            if(i===j){
                resultado+=matriz[i][i];
            } else {
                resultado+=(matriz[i][i]+matriz[i][j]);
            }
    }
    return resultado;
}


let matriz = [[1,2,3,4,5,6],[2,3,2,3,2,3],[1,2,3,4,5,6],[2,3,2,3,2,3],[1,2,3,4,5,6],[2,3,2,3,2,3]]

console.log(sumaDiagonais(matriz));
