/***************************************************************************************************************
*  
*   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
/**
 * Este exercicio era só para aprender a definir um objeto, sem classe
 * Define-se a variável persona, e dentro as suas propriedades, estas propriedades podem 
 * ser funçons, coma neste caso que devolve true ou false em funçom
 * da idade, se é maior de idade true, se nom false
 */

const persona={
    nombre:"Pepe",
    edad:35,
    esMayorEdad: function () {
        return this.edad>=18
    }
}

console.log(persona.esMayorEdad())

