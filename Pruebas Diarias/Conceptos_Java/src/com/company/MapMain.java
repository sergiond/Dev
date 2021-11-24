package com.company;

import java.util.HashMap;
import java.util.Map;

public class MapMain {
    public static void main(String[] args) {

        //Son un tipo de listas que las que nos permite crear mapas clave-valor, en la que la clave debe ser única
        Map<Integer, String> personas = new HashMap<>();

        personas.put(123,"Nombre Apellido 1");
        personas.put(456,"Nombre Apellido 2");
        personas.put(789,"Nombre Apellido 3");

        System.out.println(personas);

        //permite imprimir las claves de los mapa, el tipo de la clave "key" tiene que ser igual que en la declaración, en este caso un Integer
        for (int key: personas.keySet()){
            System.out.println(key);
        }
        //permite imprimir los valores del mapas, el tipo del "value", tiene que ser igual que en las declaraciones, en este caso String
        for (String value: personas.values()){
            System.out.println(value);
        }
        // permite imprimir los valores a partir de un objeto, en este caso "pair", con dos atributos, un integer y un String que corresponde a clave y valor respectivamente
        for(Map.Entry<Integer, String> pair: personas.entrySet()){
            System.out.println(pair.getKey()+ " "+ pair.getValue());
        }
    }
}
