/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario una cadena de texto 
*   y mostrar el número de vocales
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Número de vocales (p.j: 8)
*
*
***************************************************************************************************************/
/*Comprova que nom seja só um número*/
function pideDato(){
	let cadea;
		do {
			cadea=prompt("Introduze um texto");
		} while(!isNaN(cadea))
	return cadea;
}

/*Creo a variável de entrada*/
let frase=pideDato();

console.log(frase);

/*Contador para saber o número de vogais que hai*/
let contador=0;

/*com frase.length sei a longitude da cadea,
logo convirto todo a minusculas com 
e logo vou percorrendo caracter
a caracter para comprovar se é umha vogal ou nom
*/

frase=frase.toLowerCase();

/*for(let i=0; i<frase.length; i++){
	switch (frase.charAt(i)){
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			contador++;
			break;
		default:
			console.log("Que passa?");
			break;
	}
}*/


/*O mesmo que o anterior pero com indexOf, creo umha funçom onde se lhe passa
a cadea e umhas letras e busca as ocorrencias dessas letras e devolve o número de 
ocorrencias*/
function buscar(cadea,letras){
    let ocorrencias=0;
    cadea=cadea.toLowerCase();
	let indice=0;
	/**Fai um bucle que dure a longitude do string de letras que se lhe passa para 
	 * atopar na frase
	 */
	for(let i=0;i<letras.length;i++){
		console.log(`volta ${i}`);
		/**Establecese o ínidice a 0 para que a cada volta o indexof que se fai
		 * sobre a frase começe desde o princípio
		 */
		indice=0;
		/**Para cada vogal que hai que buscar fai um while que se executa até que nom haja
		 * nengumha ocorrencia mais na frase, é dizer, mentras que a funçon indexof nom devolva
		 * -1
		 */
		while(cadea.indexOf(letras[i],indice)!=-1) {
			//console.log(ocorrencias);
			ocorrencias++;
			/**Vai sumando 1 ao indice para passar à seguinte letra da frase */
			indice=cadea.indexOf(letras[i],indice)+1;
	  }
	}
    return ocorrencias;
}

/**Logo hai que executar unha vez por cada letra
 * Bom, fazendo como fixem ao final, metendo um string de vogais directamente só se
 * precisa de executar umha vez
 */
contador+=buscar(frase,"aeiou");
/*contador+=buscar(frase,'e');
contador+=buscar(frase,'i');
contador+=buscar(frase,'o');
contador+=buscar(frase,'u');*/

console.log(contador);

let resposta = document.getElementById("vogais");
resposta.innerHTML = `<p>A frase tem ${contador} vogais</p>`;

