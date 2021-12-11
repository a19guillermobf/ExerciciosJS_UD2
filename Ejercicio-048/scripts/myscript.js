/***************************************************************************************************************
*  
*   Objetivo: Realizar el producto de dos matrices bidimensionales
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

/** Estas matrizes podem-se multiplicar se o número de colunas da primeira é igual
 * ao número de filas da segunda
 * Ex: ([2,0,1],[3,0,0])*([1,0],[1,2],[1,1]) = ([2*1+0*1+1*1,2*0+0*2+1*1],[3*1+0*1+0*1,3*0+0*2+0*1]) = ([3,1],[3,0])
 * 
 * [2,0,1],
 * [3,0,0],
 * [5,1,1]],
 * 
 * [1,0,1],
 * [1,2,1],
 * [1,1,0]])
 */

/** Preciso de 3 bucles, o primeiro vai ir dando o valor de i, para percorrer as filas da primeira matriz 
 * o segundo é um valor que vai permitir fixar a coluna da segunda matriz
 * e o terceiro percorre normalmente a fila da primeira matriz, e na segunda
 * pom-se j primeiro para que percorra as filas, e co valor de k, fixa-se sempre na coluna que toca
 * 
 * O número k tem-se que repetir as mesmas vezes que a longitude dos arrays da segunda matriz
*/
function multiplicaMatrizes(m1,m2){
    console.log(m1);
    console.log(m2);
    let mresultante = [];
    for (let i = 0; i<m1.length; i++){
        let arrayintermedio = [];
        for (let k = 0; k<m2[i].length;k++){
            let sumaintermedia=0;
            for(let j = 0; j<m1[i].length;j++){
                sumaintermedia+=m1[i][j]*m2[j][k];
            }
            arrayintermedio.push(sumaintermedia);
        }
        mresultante.push(arrayintermedio);
    }
    return mresultante;
}

console.log(multiplicaMatrizes([[2,0,1],[3,0,0],[5,1,1]],[[1,0,1],[1,2,1],[1,1,0]]));

console.log(multiplicaMatrizes([[2,0,1],[3,0,0]],[[1,0,1],[1,2,1],[1,1,0]]));

console.log(multiplicaMatrizes([[2,0,1],[3,0,0]],[[1,0],[1,2],[1,1]]));