/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*
***************************************************************************************************************/

/*
Para comprovar que um número é um enteiro hai que jogar co 
Number.isInteger(parseFloat(numero)) 
mais co 
isNaN(numero)

IsNaN comprova se é um número, e o outro parsea-o a float, e se esse float 
tem só zeros como decimais isInteger devolve true, se nom nom
*/
function lerDato(posicion){
	let numero;
	do {
   		numero=prompt(`Da-me o número ${posicion}`)
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
	return numero;
}


let inicio, final;

do {
	inicio=lerDato("inicial");
	final=lerDato("final");
} while(inicio>=final)


console.log(inicio)
console.log(final)

