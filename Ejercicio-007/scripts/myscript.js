/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 0,1,2,3,4,5,....,n
*
*
***************************************************************************************************************/

let numero=parseInt(prompt("Mete um número"))

//Com for
/*for(let i=0;i<=numero;i++){
	document.write(` ${i}`)
	console.log(` ${i}`)
}*/
/*Ca anterior num console log vai sair todo em coluna, entom melhor
gardar numha variável*/
let saida=""
/*
for(let i=0;i<=numero;i++){
	saida+=i
}
console.log(saida)*/


//com while
let i=0

/*while(i<=numero){
	saida+=i+" "
	i++
}*/



console.log(saida)