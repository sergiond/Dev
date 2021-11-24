package com.company.javabasico.ejercicio7;

public class Parte5 {
      //5.Indica cuál es el problema de utilizar un Vector con la capacidad por defecto si tuviésemos 1000 elementos para ser añadidos al mismo.

    public static void problema() {
        System.out.println("El problema que tendría es que reservaria dinámicamente hueco para el doble de elementos en el array que trabaja por debajo del vector, por lo que puede generar problemas de memoria sobre todo cuando hace la copia durante la ampliación del array");
    }
}
