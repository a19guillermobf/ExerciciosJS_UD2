/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número tras otro al usuario hasta que ingresamos el númoer 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*
***************************************************************************************************************/
/** Funçom que pide o dato e comprova que é um número maior ou igual a 0 */
function lerDato(){
	let numero;
	do {
   		numero=prompt(`Introduze um número, ou 0 para acabar a execuçom`);
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<0)
	return numero;
}

/** Funçom que vai ir comprovando se o número introduzido é maior que o anterior
 * se é, garda-o, se nom continúa ca seguinte até que seja 0.
 * Em cada volta vai gardando os números numha cadea de texto e é o que devolve no final
 */

function numMaior(){
    let num = 0;
    let anterior = 0;
    let cadea="O maior de ";
    do {
        num=parseInt(lerDato());
        console.log("-----------");
        console.log(num);
        console.log(anterior);
        console.log("-----------");
        if(num>anterior){
            anterior=num;
        }
        cadea+=`${num}, `
    } while ( num != 0);
    cadea+=`é ${anterior}`;
    return cadea;
}

/**
 * Recolhe o elemento do DOM e engade a saida de numMaior()
 */
 document.getElementById("resposta").innerHTML=numMaior();
 