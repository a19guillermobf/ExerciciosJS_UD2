/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores. Se empieza con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*
***************************************************************************************************************/
/** Pide o dato e comprova que é um número maior ou igual a 0 */
function lerDato(){
	let numero;
	do {
   		numero=prompt(`Introduze o número até o que se quere que se calcule a sequencia de fibonacci`)
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<0)
	return numero;
}

let num=lerDato();

/**Funçom recursiva que calcula a secuencia até o número introduzido */
/**
 * Vai com algo de ajuda, na dei quitado eu só. Parece tam simples que é dificil de entender
 * A secuencia é:
 * POSIÇOM      0   1   2   3   4   5   6   7   8     9      10...
 * SUMA         0   1   0+1 1+1 2+1 3+2 5+3 8+5 13+8  21+13  34+21...
 * RESULTADO    0   1   1   2   3   5   8   13  21    34     55...
 * O número que se lhe passa é a possiçom que se quere averiguar, e deve devolver o valor do resultado
 * O cálculo que tem que fazer é a suma das duas anteriores posiçons, entm
 * Se o introduzido é menor que 2, devolve esse mesmo número, se é dous ou mais 
 * devolve suma da funçom chamando as duas anteriores. Entom, vai ir baixando e cando chegue a restar o suficiente como
 * para que num valga 0 ou 1, va já dar um número concreto, acaba a recursividade e a partir daí começa a sumar
 * cara arriba. Se o pintas num papel ve-se mais ou menos facil.
 */
function fibonacci(num){
    if(num<2){
        return num;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}

console.log(fibonacci(num));

/**
 * A anterior funçom nom garda a série, só devolve o resultado da possiçom que se pide.
 * Para obter a série haveria que utilizar a funçom num bucle por exemplo
 */

let serie=[];
for(let i=0;i<=num;i++){
    serie.push(fibonacci(i));
}

console.log(serie);
let texto=document.getElementById("fibo");
texto.innerHTML=`<p>A serie de Fibonacci para o número <b>${num}</b> é <b>${serie}</b></p>`;