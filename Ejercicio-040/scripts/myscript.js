/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
*
***************************************************************************************************************/
function lerDato(){
	let numero;
	do {
   		numero=prompt(`Introduze um número`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
	return numero;
}

function ePar(num){
    if(num%2==0){
        return true;
    }
    return false;
}

console.log(ePar(lerDato()));