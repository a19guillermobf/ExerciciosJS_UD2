/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la página HTML el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
*             ¿Cómo podemos limitar el número de decimales que se mostrarán?
*
***************************************************************************************************************/

/*Prova a parte para trabalhar ca funçom isNaN*/

let numero=prompt("Numero:")
console.log(isNaN(numero))


/* O propio exercicio*/
let num1=parseInt(prompt("Primeiro número"))
let num2=parseInt(prompt("Segundo número"))

document.write(`<p>A suma de ${num1} e ${num2} é: ${num1+num2}</p>
<p>A resta de ${num1} e ${num2} é: "value",  ${num1-num2}</p>
<p>O produto de ${num1} e ${num2} é: ${num1*num2}</p>
<p>A divisom de ${num1} e ${num2} é: ${num1/num2}</p>`)