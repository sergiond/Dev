package com.company.javabasico;

public class Ejercicio2 {

    /*Ejercicio Sesión 2

        Para este ejercicio tendréis que crear una función que reciba un precio y devuelva el precio con el IVA incluido.

     */
    public static void main(String[] args) {
        double precio = 2.25;

        double precioConIVA = precioIva(precio);
        System.out.println(precioConIVA);

    }

    private static double precioIva(double precio) {
        return precio + (precio *0.21);
    }
}
