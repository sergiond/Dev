package com.openbootcamp;

public class CocheMain {
    public static void main(String[] args) {
        /*se crea un objeto coche instanciando al contructor Coche de la clase Coche

        cocheObj1.acelerar(50); // cambiaria la velocidad del atributo acelerar en 50 unidades
        System.out.println(cocheObj1);*/

        CocheElectrico cocheElectrico = new CocheElectrico();

        cocheElectrico.motorElectrico = "modelo de motor";
        cocheElectrico.color = "rojo";
        cocheElectrico.fabricante = "BMW";
        cocheElectrico.modelo ="M2";
        cocheElectrico.acelerar(50);

        System.out.println(cocheElectrico);
    }
}
