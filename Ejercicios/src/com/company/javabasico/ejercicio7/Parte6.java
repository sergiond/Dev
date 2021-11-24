package com.company.javabasico.ejercicio7;

import java.util.ArrayList;
import java.util.LinkedList;

public class Parte6 {
    //6.Crea un ArrayList de tipo String, con 4 elementos. Cópialo en una LinkedList. Recorre ambos mostrando únicamente el valor de cada elemento.
    public static void arrayList(){

        ArrayList<String> elementos = new ArrayList<String>();
        LinkedList<String> elementosLinked = new LinkedList<String>();

        elementos.add("elemento1");
        elementos.add("elemento2");
        elementos.add("elemento3");
        elementos.add("elemento4");


        elementosLinked.addAll(elementos);

        System.out.println("ArrayList: " + elementos);
        System.out.println("LinkedList: " + elementosLinked);

    }
}
