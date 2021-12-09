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

/** Entendo que, se dividindo o número de chicles comprados polos envoltorios necesarios para regalar
 * da um número que é mais da metade de chicles comprados daquela vai a ruina
 * 
 * se nom, o resultado da divisom é o número de chicles que hai que dar. 
 * se o resto da divisom é maior que o número necesario de envoltorios para regalar o chicle, volve-se dividir esse resto, 
 * e imos sumando no resultado final
 */
function calcularExemplos(chiclescomprados, envoltoriosprecisos, chiclesregalo){
    let chiclescomidos = 0;
    let chiclessemcomer = chiclescomprados;
    let chiclesquepodocomer = 0;
    let chiclesregalados = 0;

    /** Se o número de envoltorios precisos para que che regalem mais chicles é
     * menor ou igual que os chicles que che regalam de cada vez a empresa vai a quebra
     * é dizer, se che comprem 5 ou menos envoltorios para que che regalem 5 ou mais chicles
     * a empresa sempre che vai estar dando chicles, porque sempre vas ter, como mínimo o mesmo
     * número de envoltorios para que che dem outra vez o mesmo número de chicles.
     */
    if (envoltoriosprecisos<=chiclesregalo){
        return "RUINA"
    } else {
        while(chiclessemcomer >= envoltoriosprecisos){
            /** Mentras os chicles sem comer que tenho por turno sejam mais que os envoltorios 
             * precisos para que me regalem mais chicles, vam-me regalar mais chicles polo
             * que vou ter que seguir calculando
            */

            /** Chicles que podo comer em cada turno, que vam ser os justos para que me regalem novos chicles
             * deixando sem comer o resto que nom daria para cambiar por mais
             */
            chiclesquepodocomer = chiclessemcomer - chiclessemcomer%envoltoriosprecisos;

            /** Chicles sem comer atualiza-se, sendo o resto do que vinha anteriormente
             * entre os envoltorios precisos para regalar mais chicles
             */
            chiclessemcomer = chiclessemcomer%envoltoriosprecisos;
            /** Atualizam-se os chicles comidos cos que podo comer para que me dem mais chicles
             */
            chiclescomidos += chiclesquepodocomer;
            /** Calcula os chicles que regalam desta volta, que vam ser os que podo comer entre os envoltorios precisos,
             * multiplicado polos chicles de regalo que se estipulam na entrada de datos.
             * Como já se fixo antes o cálculo, a divisom vai ser exata, polo que já nom se 
             * redondea
             */
            chiclesregalados = (chiclesquepodocomer/envoltoriosprecisos)*chiclesregalo;

            /** Atualiza-se o número de chicles sem comer para a seguinte volta do bucle, engadindo
             * os chicles que regalarom
             */
            chiclessemcomer += chiclesregalados;
        }
        /* Umha vez que os chicles sem comer som menores que os envoltorios precisos para que regalem mais chicles, finaliza o bucle
        e devolvem-se os chicles comidos, que som os comidos mais os sem comer que nom chegam para cambiar por mais
        e os envoltorios de sobra, que som os chicles sem comer que nom chegam para cambiar por mais */
        return `Chicles comidos:${chiclescomidos+chiclessemcomer}, envoltorios de sobra ${chiclessemcomer}`
    }
}

/*6 5 30 agora si que funciona, antes entrava num bucle calquera entrada do estilo n n-1 y>n*/

/** Separa a entrada e executa mentras nom seja 0 0 0 */
let entrada;
let chiclescomprados;
let envoltorios;
let chiclesregalo;

while(chiclescomprados !== 0 || envoltorios !== 0 || chiclesregalo !== 0){
    entrada=lerDato(`introduze numero de envoltorios precisos para conseguir mais chicles
    numero de chicles por cada n envoltorios precisos e 
    chicles que compras inicialmente separados por espaços
    Ex: 6 5 30`);
    entrada=entrada.split(" ");
    
    chiclescomprados = parseInt(entrada[2]);
    envoltorios = parseInt(entrada[0]);
    chiclesregalo = parseInt(entrada[1]);
    if (chiclescomprados===0 && envoltorios===0 && chiclesregalo===0){
        console.log("Execuçom finalizada")
    } else {
        console.log(calcularExemplos(chiclescomprados, envoltorios, chiclesregalo))
    }
}