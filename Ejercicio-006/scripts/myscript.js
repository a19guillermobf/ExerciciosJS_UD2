/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
*
*
*   Entrada : edad
*
*
*   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
*             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
*             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
*
*   Notas   : Debemos comprobar que la edad sea un número entero mayor que 0 (sino indicaremos el error)
*             La edad no puede ser superior a 120
*
***************************************************************************************************************/

let idade=parseInt(window.prompt("Cantos anos tes?"))

console.log(idade)

if (idade<30)
	document.write("Vai trabalhar!")
else if (idade>=30 && idade<=65)
	document.write("Qua ganas tenho de reformar-me")
else if (idade>65 && idade<=120)
	document.write("Descansa um pouco")
else
	document.write("Idade fora de rango")