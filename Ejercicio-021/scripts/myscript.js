/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/
/** Pide o dato e comprova que é um número maior ca 0 */
function lerDato(i){
	let numero;
	do {
   		numero=prompt(`Introduze a medida do ${i} cateto`)
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<=0)
	return numero;
}

function calculoHipotenusa(){
	let cateto1=lerDato("primeiro");
	let cateto2=lerDato("segundo");

	let hipotenusa=Math.sqrt((Math.pow(cateto1,2)+Math.pow(cateto2,2)),2);
	return hipotenusa;
}

let hipotenusa=document.getElementById("hipotenusa");
hipotenusa.innerHTML=`<p>A medida da hipotenusa é ${calculoHipotenusa()}`