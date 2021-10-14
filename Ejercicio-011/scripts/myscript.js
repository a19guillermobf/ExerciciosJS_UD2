/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo 
*   test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/

let porcentaje=parseFloat(prompt("Da-me umha percentagem de acertos:"))


switch(true){
	case Number(porcentaje)>=90 && Number(porcentaje)<=100 :
		console.log("90-100");
		break;
	case Number(porcentaje)>=80 && Number(porcentaje)<=89 :
		console.log("80-89");
		break;
	case Number(porcentaje)>=70 && Number(porcentaje)<=79 :
		console.log("70-79");
		break;
	case Number(porcentaje)>=60 && Number(porcentaje)<=69 :
		console.log("60-69");
		break;
	case Number(porcentaje)>=0 && Number(porcentaje)<=59 :
		console.log("0-59");
		break;
	default:
		console.log("O dato introduzido nom é correcto");
	break;
}