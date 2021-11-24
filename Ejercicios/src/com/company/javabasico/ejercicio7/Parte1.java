package com.company.javabasico.ejercicio7;
/*
 1. Dada la función:
    public static String reverse(String texto) {

    }

    Escribe el código que devuelva una cadena al revés. Por ejemplo, la cadena "hola mundo", debe retornar "odnum aloh".
 */
public class Parte1 {

    public static String reverse(String texto){

        StringBuilder rever = new StringBuilder(texto);
        rever.reverse();

        return rever.toString();
    }
}
