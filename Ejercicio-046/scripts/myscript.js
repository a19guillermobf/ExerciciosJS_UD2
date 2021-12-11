/***************************************************************************************************************
*  
*   Objetivo: Sumar vectores [1,2,3]+[2,3,4]=[3,5,7]
*             
*   Entrada : Dos grupos de números enteros separados por comas
*             Comprobar si son el mismo número de datos
*
*   Salida  : Muestra la suma de los vectores
*
*
***************************************************************************************************************/


/** Havería que fazer as comprovaçons precisas para que o dato introduzido fora
 * um número enteiro 
 */
function longitudeArray(mensagem){
    let longitude = prompt(mensagem);
    return longitude;
}

/** Crea um novo array de longitude n e com números aleatorios do 0 ao 9 */
function creaArray(n){
    let novoarray=[]
    for(let i=n; i>0;i--){
        /** Crea um numero aleatorio do 0 ao 9 */
        novoarray.push(Math.floor(Math.random()*10));
    }
    return novoarray;
}

/** Suma dous arrays, supom-se que vam ser vectores numéricos */
function sumaVectores(arr1, arr2){
    console.log(arr1);
    console.log(arr2);
    let arrayfinal=[];
    if (arr1.length !== arr2.length){
        return false;
    } else {
        for(let i = 0; i<arr1.length; i++){
            arrayfinal.push(arr1[i]+arr2[i]);
        }
        return arrayfinal;
    }
}

let longitude = longitudeArray();

let arrayfinal = sumaVectores(creaArray(longitude),creaArray(longitude));
console.log(arrayfinal);