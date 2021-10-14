/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el 
* 			  usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*
*
***************************************************************************************************************/

/*Entendo que a lógica é:
recolher a cadea
passar todo a minusculas
eliminar os espaços
percorrer desde o ińicio e desde o final comprovando que as letras sejam as mesmas
*/
/*Recolhe a cadea e comprova que nom seja só um número*/
function pideDato(){
	let cadea;
		do {
			cadea=prompt("Introduze um texto");
		} while(!isNaN(cadea))
	return cadea;
}

/*Creo a variável de entrada*/
let frase=pideDato().toLocaleLowerCase();

console.log(frase);

/**Funçom que retira os espaços ou calquera caracter que nom esteja entre o 
 * "a" e o "z" minúsculos
*/
function retiraEspacios(frase){
    let resultado=""
    for(let i=0; i<frase.length;i++){
        if(frase.charAt(i)>='a' && frase.charAt(i)<='z'){
            resultado+=frase.charAt(i);
        }
    }
    return resultado;
}

let frasefinal=retiraEspacios(frase);
/**Umha vez que temos a frase bem feitinha, teria que percorrer-la desde o início
 * e desde o final ao mesmo tempo, e em todo momento os caracteres tenhem que coincidir
 */
let control=true;
for(let i=0,j=frasefinal.length-1; i<frasefinal.length; i++,j--){
    if(frasefinal.charAt(i)!=frasefinal.charAt(j)){
        control=false;
    }
}

/**Escreve a saida em funçom de se é ou nom é palíndromo */

let saida = document.getElementById("saida");
if (control){
    saida.innerHTML=`A cadea ${frase} é um palíndromo`;
} else {
    saida.innerHTML=`A cadea ${frase} nom é um palíndromo`;
}

//console.log(frasefinal.charAt(frasefinal.length-1));
//console.log(frasefinal);
//console.log(control)