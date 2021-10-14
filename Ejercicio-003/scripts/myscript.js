/***************************************************************************************************************
*  
*   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
*
*
*   Entrada : cadena de texto, numero: nombre, edad
*
*
*   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
*                       Tu nombre es .... y tienes .... años
*
*
***************************************************************************************************************/

let nome=window.prompt("Introduze o teu nome")
let idade=window.prompt("Introduze a tua idade")

document.write(`<h4>O teu nome é ${nome} e tes ${idade} anos</h4>`)

/*Outro jeito de sacar datos é o alert*/
window.alert(`<h4>O teu nome é ${nome} e tes ${idade} anos</h4>`)