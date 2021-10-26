/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
/** Funçom que pide o dato e comprova que é um número maior ou igual a 0 */
function lerDato(){
	let numero;
	do {
   		numero=prompt(`Introduze os grados na escal Fahrenheit`);
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<-478 )
	return numero;
}


/**
 * Pois pido um dato que seja um número flotante e fago os cáculos com tres ifs ou com tres switch
 */

function fahrenheitCelsius(fahrenheit){
    /** Define-se a variável que se vai devolver e já de pass calcúla-se */
    let celsius = (5/9)*(fahrenheit-32);
    /** Fam-se uns conso-le log para as mensagens que manda */
    switch(true){
        case celsius>=25: console.log(`A temperatura é maior ou igual a 25ºC: ${celsius}`)
            break;
        case celsius<0: console.log(`A temperatura é inferior a 0ªC: ${celsius}`)
            break;
        case celsius<10: console.log(`A temperatura é inferior a 10ºC: ${celsius}`)
            break;
        default: console.log(`A temperatura é: ${celsius}`)
        break;
    }
    /** Devolve o valor */
    return celsius
}

let temperatura=fahrenheitCelsius(lerDato());
console.log(temperatura);