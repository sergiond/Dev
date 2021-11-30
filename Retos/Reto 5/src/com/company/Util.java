package com.company;

import java.util.ArrayList;

public class Util {
    public static ArrayList<Integer> stringToArray(String cadena){

        int subString = cadena.length();
        cadena = cadena.substring(1, subString-1);

        String[] cadenaArray = null;
        cadenaArray = cadena.split(",");
        ArrayList<Integer> numArray = new ArrayList<>(cadenaArray.length);

        try {
            for (int i = 0; i < cadenaArray.length; i++) {
                numArray.add(Integer.parseInt(cadenaArray[i]));
            }
        } catch (NumberFormatException e) {
            System.out.println("Esta cadena contiene caracteres diferentes a enteros");
        }
        return numArray;
    }
}
