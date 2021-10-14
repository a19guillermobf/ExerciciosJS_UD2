/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*
***************************************************************************************************************/
/**Pido umha cadea e umha palavra */
function lerDato(i){
	let str;
	do {
   		str=prompt(`Introduze umha ${i}`)
	} while (!isNaN(str))
	return str;
}

let frase=lerDato("frase")
let palavra=lerDato("palavra")


/**funçom que devolve um array cas possiçons da palavra, para isso fazemos 
 * que no indexOf, cando se atopa umha ocorrencia que garde esse número de possiçom
 * e despois que o indice seja o número de possiçom +1 para que siga buscando na seguinte
 * possiçom
*/

function buscaPalavra(cadea, palavra){
    /**passo as duas a minusculas */
    cadea=cadea.toLocaleLowerCase()
    palavra=palavra.toLocaleLowerCase()
    let posicions=[];
    let indice=0;
    while(cadea.indexOf(palavra,indice)!=-1){
        posicions.push(cadea.indexOf(palavra,indice));
        indice=cadea.indexOf(palavra,indice)+1;
    }
    return posicions;
}

let resultado=buscaPalavra(frase,palavra);

let textoHTML = document.getElementById("resultado");
if(resultado.length==0){
    textoHTML.innerHTML=`A palavra \"${palavra}\" nom está na frase \"${frase}\"`
} else {
    textoHTML.innerHTML=`A frase \"${frase}\" tema a palavra \"${palavra}\" na(s) posiçon(s) ${resultado}`
}
console.log(resultado);