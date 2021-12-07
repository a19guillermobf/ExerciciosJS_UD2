/***************************************************************************************************************
La pregunta que nos hacemos es ¿cuántos chicles nos podremos comer según la oferta que haya en ese momento?

Entrada
Cada caso de prueba está compuesto de una única línea que tiene tres números enteros (no mayores de 109) separados por espacios.
Los dos primeros números indican cuántos envoltorios se necesitan para que nos den qué cantidad de chicles.
El tercer número indica el número de chicles que compramos inicialmente. Ninguno de esos números será negativo;
el primero, además, será siempre mayor que cero. Los casos de prueba terminan cuando los tres son cero.

Salida
Para cada caso de prueba se escribirá una línea que tendrá, a su vez, dos números. El primero indicará el número total de chicles
que nos comemos, y el segundo con cuántos envoltorios nos quedamos al final.

Si la oferta hace que la empresa se arruine con nosotros se escribirá RUINA. Se considerará que la empresa va a la ruina cuando
tenga que regalarnos chicles de forma indefinida.

Entrada de ejemplo
5 1 25
5 1 5
10 1 100
2 5 20
0 0 0

Salida de ejemplo
31 1
6 1
111 1
RUINA 
***************************************************************************************************************/

/*Primeira entrada compro 25 chicles, umha vez que os coma, tenho 25 envoltorios, e a oferta da tenda é que cada 5 envoltorios regala 1 chicle
como tenho 25 envoltorios dos chicles que comprei, vou a tenda e da-me 5 chicles mais, assi que os pape, volvo ter 5 envoltorios
polo que indo a tenda de novo da-me um chicle mais.
Assí, finalmente, a saida mostra que comemos 31 chicles quedamos com 1 envoltorio*/

/** Entrada que pide os datos, entendo que nom hai que filtrar nem nada polo estilo, entendemos
 * que que meta os datos vai ser umha pessoa guiadinha
 */

function lerDato(mensagem){
    return prompt(mensagem);
}

/** Separa a entrada e executa mentras nom seja 0 0 0 */
let entrada;
let chiclescomprados;
let envoltorios;
let chiclesregalo;

while(chiclescomprados !== 0 && envoltorios !== 0 && chiclesregalo !== 0){
    entrada=lerDato("introduze numero de envoltorios | chicles por cada n envoltorios | chicles que compras");
    entrada=entrada.split(" ");
    
    chiclescomprados = parseInt(entrada[2]);
    envoltorios = parseInt(entrada[0]);
    chiclesregalo = parseInt(entrada[1]);

    console.log(calcularExemplos(chiclescomprados, envoltorios, chiclesregalo))
}

/** Entendo que, se dividindo o número de chicles comprados polos envoltorios necesarios para regalar
 * da um número que é mais da metade de chicles comprados daquela vai a ruina
 * 
 * se nom, o resultado da divisom é o número de chicles que hai que dar. 
 * se o resto da divisom é maior que o número necesario de envoltorios para regalar o chicle, volve-se dividir esse resto, 
 * e imos sumando no resultado final
 */
function calcularExemplos(chiclescomprados, envoltorios, chiclesregalo){
    let chiclescomidos = chiclescomprados;
    let envoltoriosdesobra = 0;
    let dividendo = chiclescomprados;
    /** 2 5 20 Este está mal, devera ser a comprovaçom que 20 entre 2
     * por 5 seja menor que 20
     */
    if (chiclescomprados/envoltorios >= chiclescomprados/2){
        return "RUINA"
    } else {
        while(dividendo >= envoltorios){
            /** Nesta volta, cantos chicles me regalam? 
             * Pois os envoltorios dos chicles que comim polos chiclesregalo 
             * e sumo-lho a chiclescomidos*/

            chiclescomidos+= Math.floor((dividendo/envoltorios)*chiclesregalo);
            /** Cantos envoltorios me quedam despois desses chicles que me regalam? 
             * Pois os chicles que nom comim, mais os chicles que me regalam
             * Os chicles que nom comim som o resto de dividendo%envoltorios
             * e os que me regalam (dividendo/envoltorios)*chiclesregalo
            */
            envoltoriosdesobra = (dividendo%envoltorios) + Math.floor((dividendo/envoltorios)*chiclesregalo);

            /** Com cantos chicles se vai fazer o próximo calculo? 
             * Pois igual ca antes?? 
             * Cos que nom comim mais cos que me regalam?
            */
            dividendo = (dividendo%envoltorios) + Math.floor((dividendo/envoltorios)*chiclesregalo);
        }
        return `Chicles comidos:${chiclescomidos}, envoltorios de sobra ${envoltoriosdesobra}`
    }
}


