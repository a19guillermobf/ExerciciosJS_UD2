/**A sus 7 años, Lorenzo está aprendiendo a dividir. Una de las primeras cosas que ha hecho ha sido averiguar cuántas semanas
tiene un año. Para eso, con lápiz y papel, ha dividido 365 entre 7, y ha llegado a que hay 52 semanas, y sobra un día.

Sin embargo, al mirar el calendario del año en que nació, ha contado únicamente 51 semanas. Sin entender dónde se
ha equivocado en la cuenta, ha ido corriendo a sus padres para que le ayudaran.
"No, hijo, ¡tu cuenta está bien!" ,le han dicho, "El problema está en que en el año en que naciste hubo sólo
51 semanas completas. Pero hubo dos semanas más, con 8 días en total que, unidas, harían la semana y el día que te faltan".

A pesar de su tierna edad, Lorenzo se pregunta cuándo ocurrirá eso, y cómo afecta el día de la semana de inicio del año,
o incluso el propio esquema del calendario, es decir el número de días de una semana o de un año.

Entrada
La entrada comienza con un número indicando la cantidad de casos de prueba que deberán procesarse. Cada caso de prueba
está compuesto por tres números. El primero indica el número de días A que tiene un año en el calendario que se quiere evaluar.
El segundo indica el número de días de la semana, S. Por último, el tercer número I especifica el día de la semana en la que
empieza el año. Se garantiza que 1 ≤ I ≤ S ≤ A ≤ 10.000.000.

Salida
Para cada caso de prueba, el programa escribirá el número de semanas completas que tendrá el año especificado.

Entrada de ejemplo
3
365 7 7
365 7 4
100 5 2

Salida de ejemplo
52
51
19
 */


/** Suponho que será, calcular o resto de dias do ano entre dias da semana
 * se da 0, o ano só terá as semanas completas se começa no dia 1, todo o demais vai ser o resultado da divissom
 * 
 * se da distinto de 0, é que hai algumha semana que nom vai ter todos os dias, entom, o resto vai ser os dias 
 * que tem essa semana que nom chega ao total.
 * Entom, se começa no dia 1 vai ter todas as semanas possíveis (dias ano/dias semana), se começa no dia da semana
 * dias totais semana-resto ou algum maior tamém, e se nom, vai ter umha semana menos
 * 
 * em todo caso, a lógica dos do resto 0 vai ser igual que a dos do resto nom 0, porque restaria 0 polo que nom variaria nunca
 * os dias da semana e só valeria o dia 1
 */

function calculaSemanas(dias_ano,dias_semana,dia_semana){
    if (dia_semana === 1 || dia_semana >= dias_semana-(dias_ano%dias_semana)){
        return Math.floor(dias_ano/dias_semana);
    } else {
        return Math.floor(dias_ano/dias_semana)-1;
    }
}

let numero_casos = prompt("Intruduze o número de casos que queres que se avaliem");

while(numero_casos>0){
    let datos = prompt(`Introduze os dias totais do ano,
    os dias que tem umha semana e o dia no que começa o ano
    de 1 a dias totais da semana
    em formato dias_ano dias_semana dia_semana
    Ex. 365 7 7`)
    datos = datos.split(" ");
    console.log(calculaSemanas(parseInt(datos[0]),parseInt(datos[1]),parseInt(datos[2])));
    numero_casos--;
}