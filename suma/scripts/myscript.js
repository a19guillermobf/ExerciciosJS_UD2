/***************************************************************************************************************
Completa la suma

Son habituales los acertijos numéricos en los que los dígitos son sustituídos por letras y hay que descubrir esa 
sustitución.
El siguiente es uno de los más famosos, en el que se pide que se obtenga la relación entre letras y dígitos 
sabiendo que no hay
dos letras asignadas al mismo dígito:

SEND
+ MORE
MONEY

Otros, mucho más sencillos, se limitan a poner una operación (por ejemplo una suma) y quitan algunos dígitos 
que son los que hay
que completar. Por ejemplo:

87-
+ 2-1
1-63

Es fácil ver que en este caso la suma buscada es 872 + 291 = 1163. Hay veces que la respuesta 
no es tan directa. En ocasiones
el acertijo o no tiene solución o tiene varias:

87-
+ 29-
1-63

87-
+ 2-1
-63

En el acertijo de la izquierda hay dos soluciones (872 + 291 = 871 + 292 = 1163), mientras que en el de la 
derecha no existe ninguna.
¿Eres capaz de hacer un programa que resuelva este tipo de acertijos?

Entrada

Los dos primeros corresponden a los sumandos, y el tercero al resultado.
Cada uno de los tres números tendrá siempre un único valor desconocido, representado por el carácter "-".
Ningún número tendrá más de 9 dígitos ni ceros superfluos a la izquierda. Además, los "-" 
deben siempre interpretarse como incógnitas,
es decir, no hay números negativos en la entrada.

Salida
Se escribirá la suma buscada, con el mismo formato que en la entrada, pero sin valores desconocidos.
Para que la suma sea considerada correcta, todos los números deben tener la misma cantidad de dígitos 
que tenían en el planteamiento
del acertijo, y no deben tener ceros superfluos a la izquierda.
Si hay varias soluciones posibles se escribirá "VARIAS". Si no hay ninguna, se escribirá "IMPOSIBLE".

Entrada de ejemplo

87- 2-1 1-63
87- 29- 1-63
87- 2-1 -63
- - 2-
1- -1 -11-

Salida de ejemplo

872 291 1163
VARIAS
IMPOSIBLE
IMPOSIBLE
IMPOSIBLE*/

function calcula(num1,num2,num3){
    let saida = [];
    for(let i=0;i<=9;i++){
        let numero1=parseInt(num1.replace("-",i));
        for(let j=0;j<=9;j++){
            let numero2=parseInt(num2.replace("-",j))
            for(let k=0;k<=9;k++){
                let numero3=parseInt(num3.replace("-",k))
                if(numero1+numero2==numero3){
                    saida.push(""+numero1+" "+numero2+" "+numero3);
                }
            }
        }
    }
    if (saida.length == 0){
        return "IMPOSIBLE";
    } else if (saida.length == 1){
        return saida.join(" ");
    } else {
        return "VARIAS";
    }
}

console.log(calcula("1-","-1","-11"));


/** Neste caso, crea-se um array que contem os números do 0 ao 9
 * Logo cream-se tres arrays e em cada um, com map, aplica umha funçom 
 * frecha que substitue o guiom polo número do 0 ao 9
 * Depois, já se poderia crear umha funçom ou directamente,
 * com um contador ir percorrendo com foreach seguindo a mesma
 * lógica que co método tradicional. 
 */
let num1 = "87-"
let num2 = "29-" 
let num3 = "1-63"

let digitos=Array.from({length:10},(el,i)=>i)
numeros1=digitos.map(el=>parseInt(num1.replace("-",el)))
numeros2=digitos.map(el=>parseInt(num2.replace("-",el)))
numeros3=digitos.map(el=>parseInt(num3.replace("-",el)))

contador=0
numeros1.forEach(el1=>
    numeros2.forEach(el2=>
        numeros3.forEach(el3=>{
            if (el1+el2==el3) {
               console.log(`${el1}+${el2}=${el3}`)
               contador++
            }
        })
    )
)

if (contador==0)
   console.log("IMPOSIBLE")
 

/** Último caso, crearia-se um array bidimensional(matriz), com todas
 * as sumas entre num1 e num2, e logo por cada fila (array) deste array
 * iría-se comparando co array num3 para ver cantas coincidencias 
 * se atopam
 */

