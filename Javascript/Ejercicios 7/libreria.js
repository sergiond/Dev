/** 1 - Crea un archivo "libreria.js" en el que implementes dos funciones:
Una función saludar(String) que reciba como parámetro un nombre e imprima por consola "Hola, " + el parámetro.
Otra función hora() que devuelva en el return la hora actual del sistema. */
/** 2 - -Para la segunda función debes utilizar la librería "moment.js" tal y como hemos visto en las transparencias del curso.
Ambas funciones creadas deben ser exportadas para su posterior uso desde otro archivo Javascript.
 */

const moment = require('./moment.js')

function saludar (nombre){
    console.log("Hola " + nombre);
}
 
function hora () {
    moment.locale("es")
    return horaActual = moment().format("LLL");
}

module.exports = { saludar, hora };