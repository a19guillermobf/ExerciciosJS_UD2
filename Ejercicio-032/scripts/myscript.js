/***************************************************************************************************************
*  
*   Objetivo: Imprimir en la consola de depuración la suma de los números enteros entre 1 y n, donde n es un dato 
*             solicitado al usuario. Comprobar si esa suma coincide con n*(n+1)/2
*
*   Entrada : n
*
*   Salida  : La suma de 1+2+3+...n es XXXX
*
***************************************************************************************************************/
/** Funçom que pide um número e comprova que é um número enteiro */
function lerNumero(){
	let numero;
	do {
   		numero=prompt(`Introduze um número enteiro`);
        if(isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero <= 0){
            alert("O dato introduzido nom é correcto");
        }
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero)) || numero <= 0)
	return numero;
}

/** 
 * Declaro estes dous números, um o inicial, a zero para que depois começe a 1 na funçom
 * e o outro, entrada, que vai ser a longitude do array
 */
let entrada = lerNumero();
let inicial=0;
/**
 * Crear o array ca longitude entrada (número introduzido) e logo fago a funçom
 * que vai sumando um ao número inicial e devolve esse mesmo número, así vai creando o array de 
 * 1 a o número passado
 */
let saida = Array.from({length:entrada}, () => {
  inicial++;
  return inicial;
});

saida = saida.reduce((anterior,actual)=>anterior+actual)
entrada = parseInt(entrada);
console.log(`A suma de 1 a ${entrada} é ${saida}`);
console.log((entrada*(entrada+1)/2) == saida);

/**
 * Exercicio a parte
 */
const aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random())
let filas = lerNumero();
let colunas = lerNumero();

const matriz1=Array.from({length:filas},()=>Array.from({length:colunas},()=>aleatorio(0,50)))
const matriz2=Array.from({length:filas},()=>Array.from({length:colunas},()=>aleatorio(0,50)))

const sumaMatrices = matriz1.map((fila,i)=>fila.map((coluna,j)=>coluna+matriz2[i][j]))

/*

trasponher a matriz
1 2 3     [1 2 3] [4 5 6]
4 5 6


1 4     [1 4] [2 5] [3 6] 
2 5 
3 6 */

const traspostaMatriz1 = Array.from({length:matriz1[0].length},(el1,i)=>Array.from({length:matriz1.length}, (elemento2,j)=> matriz1[j][i]));



/*
Exercicio proposto 
ROTAR A MATRIZ
1 2 3
4 5 6   [1 2 3][4 5 6]


4 1   [4 1][5 2][6 3]
5 2
6 3

igual que o anterior pero os numeros hai que empeçar a colhelos polo final da coluna??

*/
