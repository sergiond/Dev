package com.company.javabasico.ejercicio4;

public class Main {
    /*
        Ejercicio Sesión 4

            Ejercicio 1

            En este ejercicio tendréis que crear una clase SmartDevice. Dentro crearéis las clases hijas: SmartPhone y SmartWatch.

            Agregaréis atributos tal cual tendrían esos objetos en la realidad.

            Crear constructor vacío y con todos los parámetros para cada clase.

            Desde una clase Main: crearéis objetos de cada una y los utilizaréis para imprimir sus valores por consola.
    */
    public static void main(String[] args) {
        SmartDevice dispositivo = new SmartDevice();
        SmartDevice smartphone = new SmartPhone();
        SmartDevice smartwatch = new SmartWatch();

        System.out.println(dispositivo);
        System.out.println(smartphone);
        System.out.println(smartwatch);
    }
}
