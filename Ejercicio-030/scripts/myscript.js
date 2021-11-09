/***************************************************************************************************************
*  
*   Objetivo: Determinar cuantas vocales mayúsculas hay en una cadena introducida por el usuario y muestre 
*             el resultado por consola.
*
*   Entrada : cadena
*
*
*   Salida  : número de vocales mayúsculas
*
*
***************************************************************************************************************/
/** Introduzir a cadea */
function lerCadea(){
	let cadea = prompt(`Introduze umha cadea de texto`);
	return cadea;
}


function contar(cadea){
    let vogaisMaiusculas = ['A', 'E', 'I', 'O', 'U'];
    let contador=0;
    for (f of cadea){
        for (i of vogaisMaiusculas){
            if(f==i){
                contador++;
            }
        }
    }
    return contador;
}

document.getElementById('saida').innerHTML=`O número de vogais maiúsculas na frase é ${contar(lerCadea())}`;