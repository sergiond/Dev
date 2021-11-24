package com.company.javabasico.ejercicio7;

import java.util.ArrayList;

public class Parte7 {
    /*
        7.Crea un ArrayList de tipo int, y, utilizando un bucle rellénalo con elementos 1..10. A continuación, con otro bucle, recórrelo y elimina los numeros pares.
        Por último, vuelve a recorrerlo y muestra el ArrayList final. Si te atreves, puedes hacerlo en menos pasos, siempre y cuando cumplas el primer "for" de relleno.
    */
    public static void arrayListInt() {
        ArrayList<Integer> enteros = new ArrayList<>();

        for (int i=1; i<=10;i++){
            enteros.add(i);
        }
        for (int i = 0; i<= enteros.size();i++) {
            if (enteros.get(i) % 2 == 0) {
                enteros.remove(i);
            }
        }
        System.out.println(enteros);

    }
}
