/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             en la página HTML
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/

let nome=window.prompt("Introduze o teu nome")

//document.write("<h2>Bem-vind@ a minha página, "+nome+"</h2>")
/*Template string, vale para o mesmo que o anterior pero sem ter que concatenar
com +
Sería ponher comilhas invertidas e logo a variável com ${}*/
document.write(`<h2>Bem-vind@ a minha página, ${nome}</h2>`)