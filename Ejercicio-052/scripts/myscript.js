/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos persona y determinar cuantos son mayores de edad
*             Devolver el promedio de edad total
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
/** Funçom que pide o dato e comprova que é um número maior ou igual a 0 */
function lerEnteiro(){
	let numero;
	do {
   		numero=prompt(`Introduze a longitude que vai ter o array`);
	} while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||numero<0 )
	return numero;
}

/**Declara-se um array de nomes */
const nomes=["Joam","Ana","Carme","Pedro","Antom","Ainoa","Maria"]

/**Declara-se, co método Array.from, um array de objetos
 * Primeiro passa-se-lhe o número que se pide por prompt, que vai ser a longitude deste array.
 * Logo com umha funçom frecha crea um objeto que colhe um nome aleatório do array de nomes
 * e logo asigna umhaidade aleatória entre 0 e 100
 */
const persoas = Array.from({length: lerEnteiro()}, ()=>{ 
                                                    return {nome:nomes[Math.floor(Math.random()*nomes.length)], 
                                                            idade:Math.floor(Math.random()*100)}
                                                        })
              
/** Método clássico

function mediaIdadeTotal(persoas){
    let suma=0;
    for(p of persoas){
        suma+=p.idade;
    }
    return suma/persoas.length;
}

function mediaMaioresIdade(persoas){
    let sumaidade=0;
    let sumapersoas=0;
    for(p of persoas){
        if(p.idade>=18){
            sumaidade+=p.idade;
            sumapersoas++;
        }
    }
    return sumaidade/sumapersoas;
}

function mediaMenoresIdade(persoas){
    let sumaidade=0;
    let sumapersoas=0;
    for(p of persoas){
        if(p.idade<18){
            sumaidade+=p.idade;
            sumapersoas++;
        }
    }
    return sumaidade/sumapersoas;
}

*/

/**
 * Com filter, reduce, map etc
 */

/**
 * Com reduce havería que indicar o elemento actual e o seguinte, que é sobre os que vai fazer
 * a operaçom na funçom. Por exemplo, para calcular a média de um array seria
 * let media=aleatorios.reduce((anterior,actual)=>anterior+actual)/aleatorios.length
 * Onde aleatórios é um array de números, e anterior e actual os números actual e seguinte em 
 * cada iteraçom sobre o array.
 */

/**
 * O método reduce sempre devolve um elemento do mesmo tipo que os objetos do array, por isso, neste casso
 * a funçom devolve um objeto com dous campos, nome e idade, e no de idade é onde se vai sumando a idade 
 * do elemento actual e a idade do elemento seguinte.
 * Ao final, temos um único objeto co sumatorio de todas as idades, entom se se pom .idade já se fai referencia
 * a esta cifra, e dividida pola longitude do array original temos a media de idade.
 */
 let mediatotal=persoas.reduce((actual,seguinte)=>{return {nome:"",
 idade:actual.idade+seguinte.idade
}
}).idade/persoas.length

/** 
 * objarray.filter(callback) 
// Crea un nuevo array con los elementos que cumplan con callback
 * Filter crea um novo array cos elementos que cumprem co indicado
 * na funçom que se lhe passa. Pode ser funçom anónima, arrow funtion 
 * ou a que seja. Neste casso, "el" representa o elemento em cada iteraçom
 * que vai fazer ao percorrer o array, "el" pode ser elemento ou ou persoa 
 * ou o nome que che pete.
 * 
 * Pois com isto teriamos um array cos maiores de idade.
 */
//let maioresdeidade= persoas.filter(function(el){el.idade>=18});

/**
 * E assí fago todo dumha vez, ao array resultante de persoas.filter, que é um array dos elementos
 * que cumprem a condiçom de que idade seja maior ou igual a 18, fago-lhe o mesmo reduce que 
 * o do total. O que me chirria aquí é que para saber a longitude entre a que dividir 
 * tenho que volver fazer o persoas.filter, nom sei se é melhor fazer em dous passos que executar este 
 * filter duas vezes, ao melhor num array de milheiros de elementos nom é moi eficiente
 */
let maioresidade= (persoas.filter(el=>el.idade>=18)).reduce((actual,seguinte)=>{return {nome:"",
                                                                                    idade:actual.idade+seguinte.idade
                                                                                    }
                                                                                }).idade/(persoas.filter(el=>el.idade>=18)).length;


/**
 * O lógico é faze-lo assi, creando um novo array, e logo sobre esse array fazer o reduce co cálculo
 */
let menoresidade= persoas.filter(el=>el.idade<18)

let menores = menoresidade.reduce((actual,seguinte)=>{return {nome:"",
idade:actual.idade+seguinte.idade
}
}).idade/menoresidade.length;

                                                                        
/**
* objarray.map(callback) 
// Crea un nuevo array con los resultados de la llamada al callback para cada elemento
 * Se fago isto com map, o que me devolve é um array co mesmo número de elementos
 * que o original, em cada possiçom desse novo array ha um true ou um false
 * dependendo de se se cumpriu ou nom a condiçom
 */
//let menoresidade= persoas.map(elemento=>elemento.idade<18)


console.log(`A media de todas as idades é: ${mediatotal}`)
console.log(`A media de maiores de idade é: ${maioresidade}`)
console.log(`A media de menores de idade é: ${menores}`)


/**
 * Entom, agora penso que o chás é aplicar um filter para obter os menores e maiores de idade
 * e logo um reduce para calcular a média de idades
 */

console.log(persoas);
//console.log(maioresdeidade);
//console.log(menoresidade);
/*console.log(`O array creado tem ${persoas.length} persoas introduzidas.
             A media de idade total é: ${mediaIdadeTotal(persoas)},
             A media de idade das pessoas maiores de 18 é: ${mediaMaioresIdade(persoas)},
             A medoa de idade das pessoas menores de 18 é: ${mediaMenoresIdade(persoas)}`)*/

        