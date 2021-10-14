/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. 
*   Se rellena cada celda con 
*   el producto del numero de fila por el número de columna
*
*
*   Entrada : números enteros: nfilas, ncols
*
*
*   Salida  : tabla html con nfilas y ncols
*
*
***************************************************************************************************************/
/*Faltaria comprovar que é maior que 0*/
function lerDato(i){
	let numero;
	do {
   		numero=prompt(`Da-me o número de ${i}`)
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<=0)
	return numero;
}


let fila=lerDato("filas");
let coluna=lerDato("colunas");

let tabla="<table border=2>"

for(let i=1;i<=fila;i++){
	tabla+="<tr>"
	for(let j=1;j<=coluna; j++){
		tabla+=`<td>${i*j}</td>`
	}
	tabla+="</tr>"
}

tabla+="</table>"
/*
document.write(tabla)
*/
// Outro jeito, mais melhor de escrever no html é creando umha variável
// que recolha um elemento e logo engadir o texto
let elemento=document.getElementById("id")
elemento.innerHTML=tabla

