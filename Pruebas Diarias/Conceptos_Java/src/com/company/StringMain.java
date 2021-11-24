package com.company;

public class StringMain {

    public static void main(String[] args) {
	/*
        lenght     devuelve el tamaño de un Stream
        startsWith("")
        endsWith("")
        indexOf("")
        subString(1,5)
        trim() Elimina espacios antes y despues de la cadena de texto
        Equals()  compara dos cadenas
        compareTO
    */
        String nombre1 = "nombre1";
        String nombre2 = "nombre2";
        String nombre3 = "nombre3";

        //Se crean estructuras de datos (Arrays)
        String[] cadena = new String[3]; // array con un tamaño fijo
        String[] cadena2 = new String[]{nombre1, nombre2, nombre3}; // array con un tamaño dinámico
        int[] entero = new int[5];
        Coche[] coche1 = new Coche[7];

        //Se añade una cadena a cada posición del array, empezando en la posición 0
        cadena[0] = nombre1;
        cadena[1] = nombre2;
        cadena[2] = nombre3;

        //Se recorre el array desde la posición 0 e imprime el valor de cada posición
        for(int i=0; i<cadena.length;i++){
            System.out.println(cadena[i]);
        }
        System.out.println("Cadena 2");
        for(int i=0; i<cadena2.length;i++){
            System.out.println(cadena2[i]);
        }
    }
}
