/*
Given an incomplete palindrome as a string, return the minimum letters needed to be added on to the end to make the string a palindrome.

Examples
minPalindromeSteps("race") ➞ 3
// Add 3 letters: "car" to make "racecar"

minPalindromeSteps("mada") ➞ 1
// Add 1 letter: "m" to make "madam"

minPalindromeSteps("mirror") ➞ 3
// Add 3 letters: "rim" to make "mirrorrim"

Trivially, words which are already palindromes should return 0.

*/

/*Recolhe a cadea e comprova que nom seja só um número*/
function pideDato(){
	let cadea;
		do {
			cadea=prompt("Introduze um texto");
		} while(!isNaN(cadea))
	return cadea;
}
        
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

function ePalindromo(frase){
    //let control=true;
    for(let i=0,j=frase.length-1; i<frase.length; i++,j--){
        if(frase.charAt(i)!=frase.charAt(j) && i<=j){
            return false;
        }
    }
    return true;
}

/** * fai duas variáveis, a primeira, intermedia vai ir gardando os caracteres da frase principal
 * mentras nom se complete um palindromo
 * 
 * a segunda, volta, vai ser essa mesma intermedia pero dada a volta
 * 
 * e Um contador para ir aumentando em cada volta
 * 
 * Em cada volta passa-se-lhe a frase mais a volta e comprova a ver se o conjunto é um palíndromo,
 * se nom o é, engade um novo caracter a intermedia e actualiza volta co valor de intermedia dado a volta (valga a redundancia)
 * 
 * cando o conjunto frase+volta da certo, devolve o string frase+volta
 */
function convertePalindromo(frase){
    let intermedia = "";
    let volta = "";
    let contador = 0;
    while(!ePalindromo(frase+volta)){
        intermedia+=frase.charAt(contador);
        volta=intermedia.split("").reverse().join("");
        contador++;
    }
    return frase+volta;
}

/*Creo a variável de entrada*/
let frase=pideDato().toLocaleLowerCase();

let frasefinal=retiraEspacios(frase);
/**Umha vez que temos a frase bem feitinha, teria que percorrer-la desde o início
 * e desde o final ao mesmo tempo, e em todo momento os caracteres tenhem que coincidir
 */

let saida=convertePalindromo(frasefinal);

console.log(saida);