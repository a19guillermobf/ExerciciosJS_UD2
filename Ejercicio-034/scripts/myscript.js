/***************************************************************************************************************
*  
*   Objetivo: Determinar si un NIF es falso. 
*                1.- El usuario introduce un NIF
*                2.- Se determina la letra correspondiente al DNI introducido (NIF sin la letra)
*                         a) Se calcula el resto de la división del DNI por 23
*                         b) Se busca la correspondencia del resto de acuerdo con la siguiente correspondencia:
*                               0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21  22
*                               T  R  W  A  G  M  Y  F  P  D   X   B   N   J   Z   S   Q   V   H   L   C   K   E                                
*                3.- Se comparan las letras
*
*   Entrada : NIF  en formato NNNNNNNN-L donde N es un digito entre 0 y 9, y L representa una letra a-z,A-Z
*
*   Salida  : El NIF NNNNNNNN-L es (falso|auténtico)
*
***************************************************************************************************************/
function lerDato(mensagem){
    let dni;
    let regexpDNI = new RegExp('^[0-9]{8}-[a-zA-Z]$')
    do{
        dni = prompt(mensagem);
        if(!regexpDNI.test(dni)){
            alert("O número introduzido nom é correcto");
        }
    } while(!regexpDNI.test(dni))
    return dni;
}

function comprovaDNI(dni){
    /** Crea o array cas letras em cada possiçom */
    let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    /** Separa o dni em letra e numero */
    let letra = dni.charAt(dni.length-1).toUpperCase();
    let numero = parseInt(dni.slice(0,8));

    /** Se a letra coincide ca letra na posiçom do array que da a operaçom numero%23 o DNI é auténtico
     * se nom, é falso
     */
    return `O NIF ${dni} é ${letra === letras[numero%23] ? "auténtico" : "falso"}`;
}

console.log(comprovaDNI(lerDato("Introduze um DNI com formato NNNNNNNN-L")));