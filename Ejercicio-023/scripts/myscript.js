/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*
***************************************************************************************************************/
/** Pide o dato e comprova que é um número, que pode ser float e que é maior que zero*/
function lerDato(i){
	let numero;
	do {
   		numero=prompt(`Introduze ${i}`)
	} while (isNaN(numero)||!Number.isFinite(parseFloat(numero))||numero<=0)
	return numero;
}

let peso=lerDato("peso en Kg");
let estatura=lerDato("estatura en metros");
let idade=lerDato("idade");
/* Para redondear o número a 2 decimais utiliza-se a funçom toFixed(n) onde n é o número de 
decimais que se querem mostrar*/
let imc=(peso/Math.pow(estatura,2)).toFixed(2);
let risco;

switch(true){
	case (imc>=22 && idade<45) || (imc<=22 && idade>=45):
		risco="medio";
		break;
	case imc<=22 && idade<45:
		risco="baixo";
		break;
	case imc>=22 && idade>=45:
		risco="alto";
		break;
	default:
		console.log("Nom está funcionando");
	break;
}

let saida=document.getElementById("IMC");
saida.innerHTML=`O teu índice de masa corporal é ${imc}. Tes um risco ${risco} de doença coronária`;