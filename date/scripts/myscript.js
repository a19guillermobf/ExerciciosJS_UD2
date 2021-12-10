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
/** Com getDay pode-se saber o dia, que vai desde o 0 (domingo) até o 6 (sábado) */

/** Entom, para começar, igual assi um pouco a machete, poderia ver de 
 * mirar cal é o dia inicial, e com um switch case, revisar cantos dias hai até 
 * o seguinte domingo
 */

function calculaHoras(datainicial, datafinal){
    let horas = 0;
    /** Horas desde o primeiro dia até o primeiro domingo 
     * Primeiro estabeleço o dia inicial, polo número que devolve getDay()
    */
    let diainicial = datainicial.getDay();
    /** Bucle que vai percorrer os "dias" desde o dia inicial até o seguinte domingo 
     * que vam ser 7 dias depois, se começa em 0, percorre a semana toda até o sábado,
     * se começa na sexta (dia 5), só percorre sexta e sábado.
     * , se cadra com 1 ou 3 (Segundas ou quartas) suma 2 horas, 
     * se cadra com 5 (sextas) suma umha hora
     */
    for(; diainicial < 7; diainicial++){
        if(diainicial === 1 || diainicial === 3){
            horas+=2;
        } else if(diainicial === 5){
            horas+=1;
        }
    }

    /** Agora transforma a data inicial até a seguinte semana
     * para isso tenho-lhe que sumar os dias que ficam até o domingo
     * com datainicial.setDate(datainicial.getDate()+dias)
     * Os dias que hai que sumar som 7-datainicial.getDay()
     */
    datainicial.setDate(datainicial.getDate()+(7-datainicial.getDay()));

    /** Agora algo similar pero cos últimos dias */
    /** Para saber o dia da data final */
    let diafinal = datafinal.getDay();

    /** E agora, sumo as horas pero contando desde o dia até 0 */
    for(;diafinal>0;diafinal--){
        if(diafinal === 1 || diafinal === 3){
            horas+=2;
        } else if(diafinal === 5){
            horas+=1;
        }
    }

    /** E actualizo o dia final ao domingo anterior */

    datafinal.setDate(datafinal.getDate()-datafinal.getDay());
    /** E logo, co intervalo que queda entre inicial e final ir sumando 5 horas cada volta
     * e incrementar 7 dias a datainicial
     *  mentras a data inicial seja menor que a data final
     */
    while(datainicial<datafinal){
        horas+=5;
        datainicial.setDate(datainicial.getDate()+7);
    }

    console.log("Data inicial: "+datainicial.getDay()+" data " +datainicial)
    console.log("Data final: "/*+datafinal.getDay()*/+" data " +datafinal)
    return horas;

}


/** Voyu obviar o método de entrada até mais tarde, depois só seria fazer umha
 * pequena modificaçom, acho, para obter duas variáveis co formato indicado
 * Entom, vou definir umha data de inicio e fim e pista
*/
let dataInicio = "1/12/2021"; 
let dataFim= "28/12/2021"; 

/** Separo as datas em dia, mes e ano */
let arrayInicio = dataInicio.split("/");
let arrayFim = dataFim.split("/");

const DIAINICIO=arrayInicio[0];
const MESINICIO=arrayInicio[1]-1;
const ANOINICIO=arrayInicio[2];

const DIAFIM=arrayFim[0];
const MESFIM=arrayFim[1]-1;
const ANOFIM=arrayFim[2];

/** OS MESES VAM DE 0 a 11, 
 Podes revisar o exame da 1ª avaliaçom do ano passado para o do date*/

 /**Exemplos
  * 
  * hoy = new Date();
    cumpleanos = new Date("December 17, 1995 03:24:00");
    cumpleanos = new Date(1995,11,17);
    cumpleanos = new Date(1995,11,17,3,24,0);
  */

let inicio = new Date(ANOINICIO,MESINICIO,DIAINICIO);
let fim = new Date(ANOFIM,MESFIM,DIAFIM);

console.log(calculaHoras(inicio,fim));