/**Crearemos una clase Figura que será la superclase común para todas las figuras.
Posteriormente, las clases Circulo, Rectangulo y Triangulo que heredarán de figura.
Finalmente, la clase Cuadrado, un Rectangulo cuyas base y altura coinciden. */

/** Crea la clase Figura que contenga la definición de una figura.
Esta clase debería contener todas las características comunes de las figuras, pero en este caso vamos a implementar simplemente el color.
_color va a ser una variable de clase que almacenará el valor del color. */

/**El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.
Ya que la variable _color es privada, vamos a crear un getter getColor() y un setter setColor(String). */

/**Crea dos clases: Circulo y Rectangulo que hereden de Figura.
Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).
Rectangulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).
 */

/**Los atributos (variables de clase) de estas clases deben ser públicos (sin getters, setters  y escritos sin "_" delante). */

/**Crea un método calcularArea() en la clase Figura que retorne el valor -1 para indicar que nuestra figura genérica no tiene área.
Implementa ese mismo método en las clases Circulo y Rectangulo que devuelvan el área de la figura en base a sus atributos.
Para calcular el área del círculo, PI puede ser 3.14 simplemente, sin más decimales. */

/**Implementa una clase Cuadrado que herede de Rectangulo con las siguientes características:
Su constructor debe recibir como parámetros el color y la longitud del lado.
Debe implementarse un método calcularArea() para sobreescribir el método con el mismo nombre de Rectangulo. */

class figura { 

    constructor(color) {
        this._color = color;
    }
    get getColor() { 
        return this._color;
    }
    set setColor(color) { 
        this._color = color;
    }

    calcularArea = () => { 
        return -1;
    }
}
class circulo extends figura {

    constructor(color,radio) { 
        super(color);
        this.radio = radio;
    }

    calcularArea = () => {
        return 3.14 * Math.pow(this.radio, 2);
    }
 }
class rectangulo extends figura { 

    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    calcularArea = () => {
        return this.base * this.altura;
    }
}
class triangulo extends figura {

    constructor(color) { 
        super(color);
    }
    
}

class cuadrado extends rectangulo { 

    constructor(color, lado) {
        super(color);
        this.lado = lado;

    }

    calcularArea = () => {
        return Math.pow(this.lado,2);
    }
}

let elemento = new figura("rojo");
console.log(elemento.getColor);

let circuloArea = new circulo("Amarillo",10);
console.log(circuloArea.calcularArea());

let rectanguloArea = new rectangulo("Azul",5,5)
console.log(rectanguloArea.calcularArea());

let cuadradoArea = new cuadrado("Verde", 2);
console.log(cuadradoArea.calcularArea());