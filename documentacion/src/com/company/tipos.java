package com.company;

public class tipos {
    public static void main(String[] args) {

        //tipo identificador  = valor/texto...

        //tipo de identificador;
        //identificador = valor/texto....

        //enteros
        byte number1 = 1; // capacidad de 1 byte de almacenamiento
        short number2 = 2; // capacidad de 2 bytes
        int number3 = 3; // capacidad de 4 bytes
        long number4 =  4; // capacidad de 8 bytes, son los más interesantes a la hora de trabajar con identificadores y clasese primaria

        //punto flotante
        float decimal1 = 4.9f; // la f es para indicar que es flotante
        double decimal2 = 4.99d; // la d es para indicar que es double

        //caracter
        char caracter1 = 'a'; //solo permite un caracter

        //boleanos
        boolean  verdadero = true;
        boolean falso = false;

        // todos los anteriores tipos de datos, son tipos primitivos y no pueden ser nulos.

        //cadenas de texto
        String nombre = "Sergio";

        // tipos envoltorios
        Integer numero1 = null; //envuelven a los tipos primitivos permitiendo usar null, puede ser interesante para usar con BBDD o en situaciones en las que puede haber nulos
        Long numero2 = 2L; // la L es para indicar que es un Long
     }
}
