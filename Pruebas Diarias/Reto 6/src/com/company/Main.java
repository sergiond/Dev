package com.company;

import java.io.BufferedReader;

import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws Exception {

    String repetir;
    boolean otra;
    int numero1 ,numero2 ;
    int resultado;


    do {
        BufferedReader imput = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Instrucciones: introduce tu operación en este formato 'suma uno y dos' numeros permitidos del 0 al 9 ");
        System.out.print("Introduce tu operación: ");
        String operacion = imput.readLine();

        String[] split = operacion.split(" ");

        numero1 = ConversionAEnteros.stringAEntero(split[1]);
        numero2 = ConversionAEnteros.stringAEntero(split[3]);

        resultado = switch (split[0]) {
            case "suma" -> Sumar.sumar(numero1, numero2);
            case "resta" -> Restar.restar(numero1, numero2);
            case "multiplica" -> Multiplicar.multiplicar(numero1, numero2);
            case "divide" -> Dividir.dividir(numero1, numero2);
            default -> throw new Exception(" Operación incorrecta; únicas operaciones válidas 'suma' 'resta' 'multiplica' y 'divide' ");
        };
        System.out.println(ConversionAStrings.entroAString(resultado));
        System.out.println("repetir? escribe 'si' para volver a ejecutar ");
        repetir = imput.readLine();

        otra = repetir.equals("si");
    }
    while(otra);

    }
}
