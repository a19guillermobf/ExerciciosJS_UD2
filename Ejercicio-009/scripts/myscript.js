/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos un número mientras no esté entre 1 y 9. 
*             Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 < numero < 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota: Formatea la salida en el documento HTML empleando *         una tabla con 4 columnas y nueve filas
*
***************************************************************************************************************/

let num;

do {
   num=prompt("Introduze um número entre 1 e 9")
} while (isNaN(num) || (num<1||num>9))

/*O que tinha feito primeiro é fazer o parseo do introduzido e logo comprovar se 
era número ou menor maior que 1 e 9
Pero se introduzia "3edsd" colava, porque o parseo convirte isto em 3, 
quitando o resto de letras e a virgem.
Entom hai que recolher primeiro o valor e logo comprovar se é um número, 
se é um integer (que está sem fazer) e se é menor que 1 ou maior que 9


Realmente funciona sem parsear, tal e como está o código tira para adiante

while(isNaN(num) || !(num>=1 && num<=9 )){
	num=parseInt(prompt("Erro: Introduze um número entre 1 e 9"))
}
*/
console.log("O número é "+num)

let tabla="<table>"

for(let i=0;i<=10;i++){
	tabla+=`<tr>
				<td>${i}</td>
				<td>x</td>
				<td>${num}</td>
				<td>=</td>
				<td>${i*num}</td>
			</tr>`
}
tabla+="</table>"

document.write(tabla)
