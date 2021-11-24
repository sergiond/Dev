package com.company;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) throws Exception {
        String cadena= "[1,2,3]";

            if(cadena.startsWith("[") && cadena.contains(",") && cadena.endsWith("]"))
                System.out.println(Util.stringToArray(cadena));
            else
                throw new NumberFormatException("Fallo en formateo");


    }
}
