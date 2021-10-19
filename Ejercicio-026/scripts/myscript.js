/***************************************************************************************************************
*  
*   Objetivo: Solicita la fecha de nacimiento de una persona (dia, mes y año) y calcula el número de la suerte
*             El número de la suerte se calcula sumando las cifras obtenidas en la suma
*             Por ejemplo: si la fecha de nacimiento es el 12 de Julio de 1980
*                                  12-7-1980 = 1999
*                                  1+9+9+9 = 28    
*                                  2+8 = 10
*                                  1+0 = 1   <---- Número de la suerte
*
*   Entrada : dia, mes, anho
*
*
*   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
*
*
***************************************************************************************************************/
/** Funçom que pide o ano e comprova que é um número entre o 1900 e o 2021 */
function lerAno(){
	let numero;
	do {
   		numero=prompt(`Introduze teu ano de nacemento, entre 1900 e 2021`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1900 || numero>2021){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1900 || numero>2021)
	return numero;
}

/** Funçom que pide o mes e comprova que é um número entre o 1 e o 12 */
function lerMes(){
	let numero;
	do {
   		numero=prompt(`Introduze o número do mês do teu nacemento`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1 || numero>12){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1 || numero>12)
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

/** Funçom que pide o día de nacemento e ao que se lhe passa o mes e comprova que é um número válido para esse mês */
function lerDia(mes, ano){
	let numero;
    const ALERTA="O dato introduzido nom é correcto";
    let booleanoDeSaida=true;
	do {
   		numero=prompt(`Introduze o dia do teu nacemento`);
           /** Se o número e menor que 1 ou maior que 31 alerta de número errado */
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero))|| numero<1 || numero>31){
            alert(ALERTA);
            /** Se o número é maior que 29, sendo fevereiro dum ano bissexto sigue sendo errado */
        } else if (mes == 2 && numero>29 && eBissexto(ano)){
            alert(ALERTA);
            /** Se o número é maior que 28, sendo fevereiro dum ano nom bissexto sigue sendo errado */
        } else if (mes == 2 && numero>28 && !eBissexto(ano)) {
            alert(ALERTA);
            /** Se o número é maior que 30 sendo um mês de 30 dias sigue sendo errado */
        } else if (numero>30 && (mes==4 || mes==6 || mes==9 || mes==11)){
            alert(ALERTA);
            /** Se nom, o número é correcto, estabelece-se o booleanoDeSaida a false e acaba o bucle*/
        } else {
            booleanoDeSaida=false;
        }
	} while (booleanoDeSaida)
    /** devolve o dia */
	return numero;
}

/** Funçom que fai o cálculo do numero da sorte 
 *Acho que vai ter que ser com recursividade.
 A primeira suma vaina ter que fazer. logo para o resto, recebe um número, convérteo a string
 se o string tem longitude de 1, devolve o string, se nom suma os números de cada posiçom do string e devolve 
 umha chamada a si mesmo passando esse número que se acaba de calcular
 
 Suma vai ser a suma dos tres numeros que se passam como argumento
*/

function sorte(suma){
    /** Estabelece o número coma um string */
    suma+="";
    /** Declara umha variável que vai sevir para fazer sumas no caso de cumprir */
    let numero=0;
    /** Se a longitude da cadea suma é 1, devolve este valor */
    if(suma.length==1){
        return suma;
    /** Se nom, fai um bucle no que vai sumando cada número da cadea suma e devolve o valor da própria
     * funçom passando-lhe esse valor
     */
    } else {
        for(let i=0;i<suma.length;i++){
            numero+=parseInt(suma.charAt(i));
        }
        return sorte(numero);
    }
}

/** Pide o dia o mês e o ano e garda-o nas respectivas variáveis */
let ano=lerAno();
let mes=lerMes();
let dia=lerDia(mes, ano);

/** Introuduze no DOM a frase de saída cos valores obtidos */
document.getElementById("resposta").innerHTML=`Como naciches o dia ${dia} do mês ${mes} do ano ${ano}, o teu número da sorte é ${sorte(ano+mes+dia)}`;
console.log(eBissexto(ano));