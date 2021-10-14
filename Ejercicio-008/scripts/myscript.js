/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta 
*             ese numero. Realizarlo con los tres tipos de bucles.
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 2,4,6,....,n   
*
*   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
*
***************************************************************************************************************/
let num=parseInt(prompt("Introduze número maior que 1"))

while(isNaN(num) || num<2 ){
	num=parseInt(prompt("Erro: Introduze número maior que 1"))
}

console.log("O número é "+num)

let saida=""

//Bucle for
/*for(let i=1;i<=num;i++){
	if(i%2==0){
		saida+=" "+i
	}
}*/

//Bucle while
let i=1;
/*while(i<=num){
	if(i%2==0){
		saida+=" "+i
	}
	i++
}*/


//do while
do{
	if(i%2==0){
		saida+=" "+i
	}
	i++
}while(i<=num)

console.log(saida)
