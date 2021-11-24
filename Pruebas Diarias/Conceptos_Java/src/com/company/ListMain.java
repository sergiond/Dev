package com.company;

import java.util.ArrayList;
import java.util.List;

public class ListMain {
    public static void main(String[] args) {
        //se crea una lista dinámica de Strings
        List<String> nombres = new ArrayList<>();

        //.add() permite añadir elementos a la lista
        nombres.add("Nombre1");

        System.out.println(nombres);

        //Para recorrer una lista se puede usar un bucle "for" en el que se declara un string(variableIteradora) que recorrerá la lista(nombres)
        for(String variableIteradora : nombres){
            System.out.println(variableIteradora);
        }

        //puede haber Arraylist de objetos
        List<Coche> coches = new ArrayList<>();
        //se añade coche
        coches.add(new Coche());

        for(Coche cocheInt : coches){
            System.out.println(cocheInt);
        }

    }

}
