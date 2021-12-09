/**Hola a td@s,

Os habia comentado de un ejercicio de fechas que puse el año pasado en un examen. Ahí va.

El profesor de “Desenvolvemento web en contorno cliente” de FP a Distancia 
tiene que calcular el número de horas de clase que transcurrirán 
entre la fecha en la que se abre la unidad y la fecha en la que debe finalizar 
la unidad para determinar si va adelantado o atrasado en la programación del módulo.
Como alumno del módulo vas a ayudar al profesor creando un script en Javascript que, 
después de solicitar la fecha de inicio de una unidad y la fecha de fin de la misma, 
determine el número de horas de clase entre las fechas indicadas por el usuario teniendo 
en cuenta la siguiente tabla en la que se indica las horas del módulo por cada día de la semana.

Lunes Martes Miércoles Jueves Viernes Sábado Domingo
2 0 2 0 1 0 0

En en ejercicio no tendrás en cuenta la posibilidad de que entre las fechas indicadas haya 
algún día festivo, es decir, si hubiera un día festivo se realizaría el cálculo como si no lo fuera.

Un saludo,
Julian
 */

/** Voyu obviar o método de entrada até mais tarde, depois só seria fazer umha
 * pequena modificaçom, acho...
 * Entom, vou definir umha data de inicio e fim e pista
*/
let dataInicio = "15/9/2021"; //quarta
let dataFim= "7/6/2022"; //terça

/** Separo as datas em dia, mes e ano */
let arrayInicio = dataInicio.split("/");
let arrayFim = dataFim.split("/");

const DIAINICIO=arrayInicio[0];
const MESINICIO=arrayInicio[1];
const ANOINICIO=arrayInicio[2];

const DIAFIM=arrayFim[0];
const MESFIM=arrayFim[1];
const ANOFIM=arrayFim[2];

/** OS MESES VAM DE 0 a 11, tes mal isto
 * e revisa o dos dias que tampouco vai como é o devido
 Podes revisar o exame da 1ª avaliaçom do ano passado para o do date*/

let inicio = new Date(ANOINICIO,MESINICIO,DIAINICIO);
let fim = new Date(ANOFIM,MESFIM,DIAFIM);

console.log(inicio)
console.log(fim)
