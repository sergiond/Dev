package com.company.javabasico;

public class Ejercicio3 {
    /*Ejercicio Sesión 3

        En este ejercicio tenéis que crear un bucle que permita concatenar textos e imprima el resultado final por consola.

        Tened en cuenta que los textos pueden venir de un array de tipo String.

        Por ejemplo: String[] nombres = {"", "", "", ""}

     */

    public static void main(String[] args) {
        String[] nombre = {"nombre1", "nombre2", "nombre3"};
        String cadena = "Nombres:";

        for(String i: nombre){
            cadena += " " + i;
        }
        System.out.println(cadena);
    }
}
