/**1 - En el archivo "ejercicio.js" crea una función llamada eliminarUltimo() que reciba como parámetro un array y elimine el último elemento de este. */
/**2 - En el mismo archivo anterior ("ejercicio.js"), modifica la función para que alerte al usuario cuando el parámetro no sea un array o este esté vacío.
Si el parámetro es un array con más de un elemento, la función debe realizar lo descrito en el ejercicio anterior. */
/**3 - En el mismo archivo anterior ("ejercicio.js"), además de todo lo descrito anteriormente, haz que la función devuelva en el return el elemento eliminado del array. */

let arrayEliminar = [1,2,3,4]

eliminarUltimo = (arrayEliminar) => {
    if ( arrayEliminar.constructor != Array || arrayEliminar == null || arrayEliminar.length < 1)
        console.log("error al pasar el atributo, tiene que ser un Array válido")
    else
        return arrayEliminar.pop()
}

console.log(eliminarUltimo(arrayEliminar))

 