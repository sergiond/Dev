package com.company.javabasico.ejercicio7;

import java.io.FileNotFoundException;

public class Main {
    /*
    Ejercicios sesiones 7, 8 y 9

       1. Dada la función:
        public static String reverse(String texto) {

        }

        Escribe el código que devuelva una cadena al revés. Por ejemplo, la cadena "hola mundo", debe retornar "odnum aloh".

        2.Crea un array unidimensional de Strings y recórrelo, mostrando únicamente sus valores.

        3.Crea un array bidimensional de enteros y recórrelo, mostrando la posición y el valor de cada elemento en ambas dimensiones.

        4.Crea un "Vector" del tipo de dato que prefieras, y añádele 5 elementos. Elimina el 2o y 3er elemento y muestra el resultado final.

        5.Indica cuál es el problema de utilizar un Vector con la capacidad por defecto si tuviésemos 1000 elementos para ser añadidos al mismo.

        6.Crea un ArrayList de tipo String, con 4 elementos. Cópialo en una LinkedList. Recorre ambos mostrando únicamente el valor de cada elemento.

        7.Crea un ArrayList de tipo int, y, utilizando un bucle rellénalo con elementos 1..10. A continuación, con otro bucle, recórrelo y elimina los numeros pares. Por último, vuelve a recorrerlo y muestra el ArrayList final. Si te atreves, puedes hacerlo en menos pasos, siempre y cuando cumplas el primer "for" de relleno.

        8.Crea una función DividePorCero. Esta, debe generar una excepción ("throws") a su llamante del tipo ArithmeticException que será capturada por su llamante (desde "main", por ejemplo). Si se dispara la excepción, mostraremos el mensaje "Esto no puede hacerse". Finalmente, mostraremos en cualquier caso: "Demo de código".

        9.Utilizando InputStream y PrintStream, crea una función que reciba dos parámetros: "fileIn" y "fileOut". La tarea de la función será realizar la copia del fichero dado en el parámetro "fileIn" al fichero dado en "fileOut".

        10.Sorpréndenos creando un programa de tu elección que utilice InputStream, PrintStream, excepciones, un HashMap y un ArrayList, LinkedList o array.
     */

    public static void main(String[] args) throws ArithmeticException, FileNotFoundException {
        //Parte 1
        System.out.println("Parte 1");
        System.out.println(Parte1.reverse("Hola mundo"));
        System.out.println("____________");

        //Parte 2
        System.out.println("Parte 2");
        String [] arrayARecorrer = {"A","B","C"};
        Parte2.recorrerArray(arrayARecorrer);
        System.out.println("____________");

        //Parte 3
        System.out.println("Parte 3");
        String [][] arrayARecorrer2 = {{"A","B","C"},{"D","E","F"}};
        Parte3.recorrerArray(arrayARecorrer2);
        System.out.println("____________");

        //Parte 4
        System.out.println("Parte 4");
        Parte4.recorrerVector();
        System.out.println("____________");

        //Parte 5
        System.out.println("Parte 5");
        Parte5.problema();
        System.out.println("____________");

        //Parte 6
        System.out.println("Parte 6");
        Parte6.arrayList();
        System.out.println("____________");

        //Parte 7
        System.out.println("Parte 7");
        Parte7.arrayListInt();
        System.out.println("____________");

        //Parte 8
        System.out.println("Parte 8");
        Parte8.dividePorCero(3,1);
        System.out.println("____________");

        //Parte 9
        System.out.println("Parte 9");
        Parte9.fichero("C:\\Users\\Sergio\\Documents\\test\\ficheroEntrada.txt","C:\\Users\\Sergio\\Documents\\test\\ficheroSalida.txt");
        System.out.println("____________");

        //Parte 10
        System.out.println("Parte 10");
        Parte10.registro(123,"registro1");
        System.out.println("____________");
    }
}
