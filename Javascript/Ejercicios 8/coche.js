/**1 - Crea un archivo "coche.js" que implemente una clase Coche con un constructor con las siguientes características:
Debe recibir 3 parámetros: peso, potencia y marca.
Peso y potencia deben ser números, y marca una String.
La clase debe tener variables de clase en las que se almacene el valor de los parámetros pasados al constructor. */

/**2 - La clase Coche debe ser exportada como un módulo para poder ser usada desde otros archivos javascript */

/**3 - Modifica el archivo anterior para que los atributos sean privados y tengan sus correspondientes getters y setters. */

class coche{ 

    _peso = 1500;
    _potencia = 180;
    _marca = 'Audi';

    constructor(peso, potencia, marca) {
        
        this._peso = peso;
        this._potencia = potencia;
        this._marca = marca;
    }

    set setPeso(peso) {
        this._peso = peso;
    }
    set setPotencia(potencia) {
        this._potencia = potencia;
    }
    set setMarca(marca) { 
        this._marca = marca;
    }

    get getPeso() { 
        return this._peso;
    }
    get getPotencia() { 
        return this._potencia;
    }
    get getMarca() { 
        return this._marca;
    }


}

/**let buga = new coche(1800,220,'BMW')
console.log('Peso: ' + buga.getPeso + ' Potencia: ' + buga.getPotencia + ' Marca: ' + buga.getMarca);
*/
module.exports = { coche }

