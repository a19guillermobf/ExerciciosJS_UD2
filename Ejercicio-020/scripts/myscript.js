/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/
/** Pide o dato e comprova que é um número maior ou igual a 0 */
function lerDato(i){
	let numero;
	do {
   		numero=prompt(`Introduze o número de ${i} co que fazer a conta`)
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<0)
	return numero;
}

let nenos=lerDato("neno(s)");
let caramelos=lerDato("caramelo(s)");

/**Parto da premisa que pode haver 0 caramelos a repartir ou 0 nenos aos que repartir */
function reparteCaramelos(nenos,caramelos){
    let saida="";
    if(caramelos == 0){
        saida+=`Nom hai caramelos para repartir`;
    } else if(nenos == 0){
        saida+=`Nom hai nenos cos que repartir`;
    } else {
        let ncaramelos = parseInt(caramelos/nenos);
        let nsobras = caramelos%nenos;
        saida+=`<p>O número de caramelos por nena é ${ncaramelos}</p>
               <p>O número de caramelos que sobram é ${nsobras}</p>`;
    }
    return saida;
}

let texto=document.getElementById("saida");
texto.innerHTML=reparteCaramelos(nenos,caramelos)