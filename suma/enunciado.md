/***************************************************************************************************************
Completa la suma

Son habituales los acertijos numéricos en los que los dígitos son sustituídos por letras y hay que descubrir esa sustitución.
El siguiente es uno de los más famosos, en el que se pide que se obtenga la relación entre letras y dígitos sabiendo que no hay
dos letras asignadas al mismo dígito:

SEND
+ MORE
MONEY

Otros, mucho más sencillos, se limitan a poner una operación (por ejemplo una suma) y quitan algunos dígitos que son los que hay
que completar. Por ejemplo:

87-
+ 2-1
1-63

Es fácil ver que en este caso la suma buscada es 872 + 291 = 1163. Hay veces que la respuesta no es tan directa. En ocasiones
el acertijo o no tiene solución o tiene varias:

87-
+ 29-
1-63

87-
+ 2-1
-63

En el acertijo de la izquierda hay dos soluciones (872 + 291 = 871 + 292 = 1163), mientras que en el de la derecha no existe ninguna.
¿Eres capaz de hacer un programa que resuelva este tipo de acertijos?

Entrada

Los dos primeros corresponden a los sumandos, y el tercero al resultado.
Cada uno de los tres números tendrá siempre un único valor desconocido, representado por el carácter "-".
Ningún número tendrá más de 9 dígitos ni ceros superfluos a la izquierda. Además, los "-" deben siempre interpretarse como incógnitas,
es decir, no hay números negativos en la entrada.

Salida
Se escribirá la suma buscada, con el mismo formato que en la entrada, pero sin valores desconocidos.
Para que la suma sea considerada correcta, todos los números deben tener la misma cantidad de dígitos que tenían en el planteamiento
del acertijo, y no deben tener ceros superfluos a la izquierda.
Si hay varias soluciones posibles se escribirá "VARIAS". Si no hay ninguna, se escribirá "IMPOSIBLE".

Entrada de ejemplo

87- 2-1 1-63
87- 29- 1-63
87- 2-1 -63
- - 2-
1- -1 -11

Salida de ejemplo

872 291 1163
VARIAS
IMPOSIBLE
IMPOSIBLE
IMPOSIBLE