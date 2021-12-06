/***************************************************************************************************************
*  
*   Objetivo: Adivina un número. Escojer aleatoriamente un número entero entre 1 y 100. Al abrir la página web 
*             debe ir solicitando números entre 1 y 100 hasta que el usuario acierte el número. 
*             Al finalizar el juego se indica mediante una ventana de alerta el número de intentos,
*             no teniendo en cuenta intentos en los que se introduce un dato incorrecto.
*
*   Entrada : un número entero (en cada intento)
*
*   Salida  : ! Has acertado ! Has necesitado XX intentos
*             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
*
***************************************************************************************************************/
function lerDato(mensagem){
    let dato;
    do{
        dato = prompt(mensagem);
        if(isNaN(dato) || !Number.isInteger(parseFloat(dato)) || dato<1 || dato > 100){
            alert("O dato introduzido nom é correcto");
        }
    } while(isNaN(dato) || !Number.isInteger(parseFloat(dato)) || dato<1 || dato > 100)
    return dato;
}

/** O Math random devolve um valor aleatório entre 0 e 1, sem chegar a 1 (1 excluido vaia)
 * Pa obter valores mais grandes hai que combinalo com math.floor, que devolve o número redondeado (5.1 ou 5.9 devolve 5)
 * 
 * Entom, pa obter valores do 1 ao 100, se math random sempre vai devolver algo como 0 ou 0,xxxxxxxxxxx
 * multiplico-o por 100, así sempre vai sair como xx,xxxxxx
 * sumo-lhe 1 e assí se sae 0 é um e se sae 99 é 100
 * e co floor redondea e elimina os decimais
 */

let aleatorio = Math.floor((Math.random()*100)+1)

function adivinaNumero(aleatorio){
    let intentos = 0;
    let numero;
    do{
        numero=parseInt(lerDato("Introduze um número entre o 1 e o 100"));
        if(numero !== aleatorio){
            alert(`Falhaches! O número que tes que acertar é ${numero>aleatorio ? "menor" : "maior"}`);
            intentos++;
        }
    } while( numero !== aleatorio)
    
    return intentos;
}

alert(`Acertaches! Precisaches ${adivinaNumero(aleatorio)} intento(s)`)