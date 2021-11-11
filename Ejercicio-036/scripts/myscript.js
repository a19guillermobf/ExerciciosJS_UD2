/***************************************************************************************************************
*  
*   Objetivo: Solicitamnos un número entero n positivo. Si n es par, se divide por 2 y su n es
*             impar se multiplica por tres y suma uno. El proceso se repite hasta que n tenga el valor de 1.
*             Por ejemplo, la secuencia para n=3 será:
*
*                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
*
*   Entrada : numero entero n entre 1 y 100
*
*
*   Salida  : La secuencia de valores obtenida
*
*
***************************************************************************************************************/
/** Pide o dato e comprova que é um número maior ca 0 */
function lerDato(mensagem){
	let numero;
	do {
   		numero=prompt(mensagem);
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<=0)
	return numero;
}

let mensagem="Introduze um número enteiro positivo";

/** Funçom que fai os cálculos pedidos e vai-nos armazenando num array */
function descompor(num){
    let saida = [];
    while(num != 1){
        saida.push(num);
        num=(num%2 == 0)?num/2:num*3+1;
    }   
    saida.push(num);
    return saida;
}

/** A mesma funçom pero recursiva. O parámetro resultado, ao ir com igual convértese 
 * num parámetro nom obrigatório, polo que se pode chamar sem meter essa funçom. 
 * Tem que fazer-se um return em cada passo para que se vaia devolvendo o valor acumulado de resultado
 * se nom, resultado de cada vez está undefined (revisa de novo que tem a sua complicaçom)
 */
function Collatz(n,resultado=[]) {
    resultado.push(n)
    if (n===1)
       return resultado
    if (n%2 == 0)
       return Collatz(n/2,resultado)
    else 
       return Collatz(n*3+1,resultado);    
}


let solucion=descompor(parseInt(lerDato(mensagem)));

console.log(solucion.join(' --> '));
console.log(Collatz(3).join('-->'))