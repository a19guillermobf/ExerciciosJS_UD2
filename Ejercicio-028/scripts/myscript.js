/***************************************************************************************************************
*  
*   Objetivo: Realizar un script que solicite una fecha a un usuario (día, mes y año) y compruebe es
*             correcta o existe. Hay que tener en cuenta que el año puede ser bisiesto, y por tanto, si es
*             bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
*
*   Entrada : dia, mes, anho
*
*
*   Salida  : La fecha dia/mes/anho (es|no es) correcta
*
*
***************************************************************************************************************/
/** Funçom que pide o ano e comprova que é um número enteiro */
function lerAno(){
	let numero;
	do {
   		numero=prompt(`Introduze um ano`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)))
	return numero;
}

/** Funçom que pide o mes e comprova que é um número entre o 1 e o 12 */
function lerMes(){
	let numero;
	do {
   		numero=prompt(`Introduze um mês`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1 || numero>12){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1 || numero>12)
	return numero;
}

/** Funçom que pide o dia e comprova que é um número entre o 1 e o 31 */
function lerDia(){
	let numero;
	do {
   		numero=prompt(`Introduze um dia`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1 || numero>31){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1 || numero>31)
	return numero;
}

/** Funçom que determina se um ano é bissexto */
function eBissexto(ano){
    let resultado=false;
    if (ano%4==0 && ano%100!=0){
        resultado=true;
    } else if(ano%4==0 && ano%100==0 && ano%400==0){
        resultado=true;
    }
    return resultado;
}

/** Funçom que fai o cálculo de se a data introduzida é correcta */
function comprovaData(ano, mes, dia){
	let numero;
    let booleanoDeSaida=true;
            /** Se o número é maior que 29, sendo fevereiro dum ano bissexto sigue cambia a false */
        if (mes == 2 && dia>29 && eBissexto(ano)){
            booleanoDeSaida=false;
            /** Se o número é maior que 28, sendo fevereiro dum ano nom bissexto sigue sendo errado */
        } else if (mes == 2 && dia>28 && !eBissexto(ano)) {
            booleanoDeSaida=false;
            /** Se o número é maior que 30 sendo um mês de 30 dias sigue sendo errado */
        } else if (dia>30 && (mes==4 || mes==6 || mes==9 || mes==11)){
            booleanoDeSaida=false;
            /** Se nom, o número é correcto, estabelece-se o booleanoDeSaida a false e acaba o bucle*/
        }
    /** devolve o dia */
	return booleanoDeSaida;
}

let ano = lerAno();
let mes = lerMes();
let dia = lerDia();

let res = comprovaData(ano,mes,dia) ? "" : " nom"

document.getElementById("saida").innerHTML=`A  data ${dia}/${mes}/${ano}${res} é correcta`;
console.log(eBissexto(ano));