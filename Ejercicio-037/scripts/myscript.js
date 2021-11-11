/***************************************************************************************************************
*  
*   Objetivo: El número de Euler, e ≈ 2,71828, puede ser representado como la siguiente suma infinita:
*
*                     e =1/0!+1/1!+1/2!+1/3!+1/4!+…
*
*             n! es el factorial de un numero entero n y es el producto de 1 hasta n (0!=1)
*
*                           4! = 4 * 3 * 2 * 1
*
*             Hay que calcular el valor aproximado de "e" hasta que la diferencia entre dos sumandos
*             consecutivos sea menor que 0,0001
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

/** Funçom para calcular o factorial de um número
 * se o número passado à funçom é 1, devolve 1
 * se nom devolve o número passado polo factorial desse número-1, se por exemplo ponhemos um 4
 * Se é 0 ou 1 devolve 1  e se é maior ca 1
 * entom vai-se ir fazendo recursiva até que chegue a 1, que devolve 1
 * logo vai ir devolvenvo 2*1 (que é 2), logo, 2*3(que é 6) e por último 6*4 que é 24
 * e que é o factorial de 4
 */
function factorial(n){
    if (n === 0){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}


/** Parecido ao do exercicio 36, passo-lhe um resultado=0 para que começe fazendo o cálculo de 1/n!
 * Passo-lhe tamém um parametro sumanterior e sumactual que se vam ir actualizando co valoro do sumando 
 * de 1/factorial(n) que vai ser passado como sumanterior e 1/factorial(n+1) que vai ser passado como o sumando actual
 * Logo de cada volta revisa se o n e maior que 1 (se nom 1/factorial de 0 e 1/factorial de 1 valem 1, e a diferencia é 0 e já nom nos valeria) 
 * e revisa que o sumando anterior e o actual nom seja menor que 0,00001
 * 
 * Entom na primeira e segunda (e terceira, etc) nom cumple i if, polo que vai para o else
 * engade a resultado o valor de 1/factorial(n), na primeira volta é 1 e devolve
 * a chamada a funçom de n=1 e o resultado co valor já sumado
 * na segunda volta iria de novo ao else, sumaria-lhe a resultado, que vale neste caso 1, 1/factorial de 1, que é tamém 1
 * polo que resultado passa a valer 2
 * na seguinte passa n=2, a resultado súmase-lhe 1/factorial de 2(que é 2)= 2.5
 * seguinte n=3, a resultado suma-se-lhe 1/factorial de 3(que é 6) e assí sucesivamente
 */
/*
Nesta estava comprovando que o sumando fose menor que 1/10000 nom que a diferença dos sumandos fose assi, modifico na seguinte
function calculae(n,resultado=0,sumanterior=0,sumactual=0){
    if (1/factorial(n)<1/10000){
        resultado += 1/factorial(n);
        return resultado;
    } else {
        resultado+=1/factorial(n);
        return calculae(n+1,resultado);
    }
}*/

function calculae(n,resultado=0,sumanterior=0,sumactual=0){
    if ( (n>1) && sumanterior-sumactual<1/10000){
        resultado += 1/factorial(n);
        return resultado;
    } else {
        resultado+=1/factorial(n);
        sumanterior=1/factorial(n);
        sumactual=1/factorial(n+1);
        return calculae(n+1,resultado,sumanterior,sumactual);
    }
}


console.log(factorial(5));
console.log(calculae(0));