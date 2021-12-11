/***************************************************************************************************************
*  
*   Objetivo: Sumar dos matrices bidimensionales
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

/** O caso é sumar os vectores de cada matriz, e estas tenhem que ter as mesmas dimensons
 * Nom se podem sumar matrizes de diferentes dimensons. 
 * Exemplo
 * ([1,2][2,1])+([5,8],[4,4])=([6,10],[6,5])
 * 
 * Entom, com crear umha fn a que se lhe passem duas matrizes já vale
 */

function sumaMatrizes(m1,m2){
    console.log(m1);
    console.log(m2);
    /** Vai ser a matriz que se devolva ca suma */
    let mresultante = [];
    /** Bucle que vai percorrer o primeiro nivel das matrizes, é dizer cada "fila" */
    for(let i = 0; i< m1.length; i++){
        /** Matriz temporal onde se vai ir engadindo a suma de cada fila */
        let mtemporal = []
        /** Bucle que vai percorrer cada columna da fila na que se atope, e sumar a posiçom das duas matrizes */
        for(let j = 0; j<m1[i].length;j++){
            /** Engade-se à matriz temporal cada suma e esse array engade-se ao array resultante */
            mtemporal.push(m1[i][j]+m2[i][j]);
        }
        //console.log(mtemporal);
        mresultante.push(mtemporal);
    }
    return mresultante;
}

console.log(sumaMatrizes([[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]));