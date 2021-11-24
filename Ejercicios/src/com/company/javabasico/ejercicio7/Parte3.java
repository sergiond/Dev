package com.company.javabasico.ejercicio7;

public class Parte3 {
    //3.Crea un array bidimensional de enteros y recórrelo, mostrando la posición y el valor de cada elemento en ambas dimensiones.
    public static void recorrerArray(String[][] arrayARecorrer){
        for (int i = 0; i<arrayARecorrer.length;i++){
            for (int j=0; j<arrayARecorrer[i].length;j++){
                System.out.println("coordenadas posición: "+ i + " " + j +" Valor: " + arrayARecorrer[i][j]);
            }
        }

    }
}
