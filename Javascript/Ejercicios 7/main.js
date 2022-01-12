/** 1 - Crea un archivo "main.js" que importe el archivo "libreria.js" del ejercicio anterior y ejecute el siguiente código.
 * Puedes comprobar el resultado ejecutando el archivo "main.js" con node.
 */

const libreria = require('./libreria.js')

	
libreria.saludar("Alberto");
console.log("Son las " + libreria.hora());
