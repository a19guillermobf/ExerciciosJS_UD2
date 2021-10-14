/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
*             por una pandemia
*
*   Entrada : segundos
*
*
*   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
*
*
***************************************************************************************************************/
/** Pide o dato e comprova que é um número maior ca 0 */
function lerDato(){
	let numero;
	do {
   		numero=prompt(`Introduze o número de segundos de confinamento`);
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<=0)
	return numero;
}

let segundos=parseInt(lerDato());

const SEGUNDOS = [604800,86400,3600,60,1];
/*const SEMANA=604800;
const DIA=86400;
const HORA=3600;
const MINUTO=60;
const SEGUNDO=1;*/

function descoporSegundos(s){
	let descomposto = [];
	console.log(typeof(s));
	for(let i=0;i<=4;i++){
		console.log(s);
		descomposto.push(Math.round(s/SEGUNDOS[i]));
		s=s%SEGUNDOS[i];
	}
	return descomposto;
}

let tempos=descoporSegundos(segundos);

let resposta=document.getElementById("saida");
resposta.innerHTML=`Estivemos confinad@s ${tempos[0]} semanas, ${tempos[1]} dias, ${tempos[2]} horas, ${tempos[3]} minutos e ${tempos[4]} segundos`;

/** 
 * REVISAR QUE ESTÁ FUNCIONANDO E COMETAR
 * */