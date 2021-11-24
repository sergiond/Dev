package com.company.javabasico;

import java.io.*;

public class Parte9 {
    /*
        9.Utilizando InputStream y PrintStream, crea una función que reciba dos parámetros: "fileIn" y "fileOut".
        La tarea de la función será realizar la copia del fichero dado en el parámetro "fileIn" al fichero dado en "fileOut".
     */

    public static void  fichero(String fileIn, String fileOut){
        try {
            InputStream fichero = new FileInputStream(fileIn);
            PrintStream salida = new PrintStream(fileOut);
            BufferedInputStream ficheroBuffer = new BufferedInputStream(fichero);

            byte []dato = ficheroBuffer.readAllBytes();

            salida.write(dato);
            salida.close();
            System.out.println("Fichero copiado correctamente");

        }catch (IOException e){
            System.out.println("Error al abrir fichero");
        }

    }
}
