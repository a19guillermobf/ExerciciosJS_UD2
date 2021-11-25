/***************************************************************************************************************
*  
*   Objetivo: Determinar en un texto el número de palabras, la primera palabra y la última
*
*   Entrada : una cadena
*
*   Salida  : Se muestra el texto(cadena) introducido por el usuario
*             Número de palabras: XXX
*             Primera palabra: YYYYY
*             Última palabra: ZZZZZ
*             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
*             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW 
*
***************************************************************************************************************/

/**
 * Nom sei se entendo esto, vou suponher que hai que meter umha frase, e logo ordena 
 * as palavras pola primeira letra de cada palavra, ou a segunda ou a terceira
 * 
 * Entom assí de primeiras, meteria cada palavra num array de palavras e logo iria comparando umha a umha??
 * Coma se fora ordenar números pero em letras??
 * 
 * A ver, colheria as primeiras letras de cada palavra e compara-as, e ordena-as
 * logo, compara as segundas, pero so poderia comparar as que tiveram a anterior letra igual... Isto pinta complexo de mais...
 * 
 * ESPERA-TE AÍ!! Que co método sort já se ordenam as palavras
 * 
 */

/*Recolhe a cadea e comprova que nom seja só um número*/
function pideDato(mensagem){
	let cadea;
		do {
			cadea=prompt(mensagem);
		} while(!isNaN(cadea))
	return cadea;
}

/** Recolhe a frase de entrada */
let cadea = pideDato("Introduze umha frase");

/** Converte a cadea a minúsculas e converte-a em array colhendo
 * o espaço como separador
*/

arrCadea=cadea.toLocaleLowerCase().split(" ");
arrCadea=arrCadea.sort();

/** Co seguinte funciona pero nom tem em conta as o tema das palavras acentuadas
 */

console.log(`A cadea introduzida foi: ${cadea}`);
console.log(`O número de palavras é: ${arrCadea.length}`);
console.log(`Primeira palavra: ${arrCadea[0]}`);
console.log(`Última palavra: ${arrCadea[arrCadea.length-1]}`);
console.log(`Palavras ordenadas do a ao z ${arrCadea.join(",")}`);
console.log(`Palavras ordenadas do z ao a ${arrCadea.reverse().join(",")}`);

