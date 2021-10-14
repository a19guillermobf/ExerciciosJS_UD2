/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. 
*   Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/

function lerDato(){
	let numero;
	do {
   		numero=prompt(`Da-me o número`)
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<=0)
	return numero;
}

/**
 * Estabelece o numero*/
let numero=lerDato()


/*Funçom que escreve umha linha co número que se lhe passa*/
function piramide(num){
	let saida="<p>";
	for(let i=0;i<num;i++){
		saida+=num+" "
	}
	saida+="</p>"
	return saida;
}


let cfinal="";

/*Bucle que vai usando a funçom piramide para ler linhas desde 1 até o número
que se introduzeu*/
for(let i=1; i<=numero; i++){
	cfinal+=piramide(i);
}


document.write(cfinal)