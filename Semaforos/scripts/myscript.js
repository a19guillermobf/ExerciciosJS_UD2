/**Funçom à que se lhe passa umha cadea e, se existe a cadea RAV conta 
 * que se pode construir um semáforo (Vermelho, Amarelo e Verde)
 * com slice colhe os anacos que nom cadram co buscado, para construir
 * de novo o string retirando o RAV atopado. Assí mentras nom fiquem RAVs
 * 
 * Devolve o contador
 */
function calculaSemaforos(cadea){
    let contador = 0;
    while(cadea.indexOf("RAV") != -1 ){
        contador++;
        let pos = cadea.indexOf("RAV")
        /*if(pos==0){
            cadea=cadea.slice(pos+3);
        }else{*/
            cadea=cadea.slice(0, pos)+cadea.slice(pos+3);
        /*}*/
    }
    return contador;
}

console.log(calculaSemaforos("RAVAV"));

        