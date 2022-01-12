/**Crea un archivo "ejercicio.js" que contenga una función sumar(a, b) que reciba dos parámetros y devuelva la suma de estos.
En caso de que uno de los parámetros no sea un número, la función debe lanzar un error que indique el problema. */
/**En el mismo archivo del ejercicio anterior ("ejercicio.js"), debes hacer uso de la función suma(a, b) que acabas de crear y proteger tu código para que, intencionadamente, podamos pasar un parámetro que no sea un número sin que salte un error que finalice el programa.
En el catch, puedes poner un mensaje de aviso indicando que ese no es el uso correcto de la función. */
let a = 'prueba'
let b = 2

sumar = (a, b) => { 
    try {
        if (typeof a !== 'number' && !Number.isNaN(a) || typeof b !== 'number' && !Number.isNaN(b)) {
            throw new TypeError()
        }
        return sumaTotal = a + b
    } catch(err) {
        console.log(err + " : Error de tipado, las variable deben ser un números")
    } 
}
console.log(sumar(a,b))