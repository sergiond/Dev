package com.company.javabasico.ejercicio7;

import java.util.Vector;

public class Parte4 {
    //4.Crea un "Vector" del tipo de dato que prefieras, y añádele 5 elementos. Elimina el 2o y 3er elemento y muestra el resultado final.
    public static void recorrerVector() {
        Vector<String> nombre = new Vector();

            for (int i=1; i<=5;i++){
                nombre.add("Nombre"+i);
            }
        System.out.println("Vector: "+nombre);
        System.out.println("Eliminarmos 2o y 3er elemento");

        while (nombre.size()>3) {
            nombre.remove(1);
        }

        System.out.println("Vector: "+nombre);
    }

}
