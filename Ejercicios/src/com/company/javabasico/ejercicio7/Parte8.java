package com.company.javabasico.ejercicio7;

public class Parte8 {
    /*
        Crea una función DividePorCero. Esta, debe generar una excepción ("throws") a su llamante del tipo ArithmeticException que será capturada por su llamante (desde "main", por ejemplo).
        Si se dispara la excepción, mostraremos el mensaje "Esto no puede hacerse". Finalmente, mostraremos en cualquier caso: "Demo de código".
     */
    public static void dividePorCero(int a, int b) throws ArithmeticException{
        int resultado;
        try{
            resultado = a/b;
            System.out.println(resultado);
        }catch (ArithmeticException e){
            throw new ArithmeticException("Esto no puede hacerse");
        }finally {
            System.out.println("Demo de código");
        }
    }

}
