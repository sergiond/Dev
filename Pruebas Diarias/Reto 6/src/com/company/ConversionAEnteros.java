package com.company;

public class ConversionAEnteros {
    public static int stringAEntero(String cadenaAConvertir) throws Exception {

        return switch (cadenaAConvertir) {
            case "uno" -> 1;
            case "dos" -> 2;
            case "tres" -> 3;
            case "cuatro" -> 4;
            case "cinco" -> 5;
            case "seis" -> 6;
            case "siete" -> 7;
            case "ocho" -> 8;
            case "nueve" -> 9;
            case "cero" -> 0;
            default -> throw new Exception(" Operación incorrecta; NO se reconoce número");
        };
    }
}
