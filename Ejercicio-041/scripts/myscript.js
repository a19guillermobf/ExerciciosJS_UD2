/***************************************************************************************************************
*  
*   Objetivo: Determinar si in número es perfecto o no a través de una función
*             Un número es perfecto cuando el número es igual a la suma de sus divisones.
*
*   Entrada : entero n
*
*
*   Salida  : El número n (es|no es) perfecto !
*
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

/** Pois hai que calcular os divisores do número, e logo sumalos, se som iguais ao número
 * pois é um número perfecto, se nom pois nom.
 * Exemplo, o 6 tem de divisores o 3, 2 e 1, e 3+2+1=6 polo tanto o 6 é perfecto
 */

function ePerfecto(num){
    let divisores = [];
    for(let i=num-1; i>0; i--){
        if (num%i == 0){
            divisores.push(i);
        }
    }
    let suma=0;
    divisores.forEach(numero => suma+=parseInt(numero));
    if(suma == num){
        return true;
    }
    return false;
}

console.log(ePerfecto(lerDato()));