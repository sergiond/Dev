/**En el archivo "ejercicio1.js" define una constante max y otra min que sean números enteros cualesquiera (siempre que max sea mayor que min).
Define una variable dato y haz que el programa notifique si la variable dato está entre el máximo y el mínimo.
Ve cambiando los valores de la variable dato para comprobar el correcto funcionamiento. */

const max = 5
const min = 1
var dato = 0

for (i = 0; i <= max; i++) {
    if (dato >= min && dato <= max) {
        console.log('el valor de dato es:' + dato + ' y esta entre' + min + ' y ' + max)
    } else { 
        console.log('el valor de dato es:' + dato + ' y NO esta entre' + min + ' y ' + max)
    }
    dato++
 }