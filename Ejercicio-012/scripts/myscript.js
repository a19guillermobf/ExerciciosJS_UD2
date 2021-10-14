/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la 
*   cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/
let cadena=""
let saida=""
do {
	cadena=prompt("Introduze umha cadea de texto")
	saida+="<p>"+cadena+"</p>"
} while (cadena != "cancelar")

document.write(saida)