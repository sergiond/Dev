package com.openbootcamp.interfaces;

import com.openbootcamp.Coche;

public class InterfacesMain {
    public static void main(String[] args) {

        //El uso es el mismo que el polimorfismo aplicado a las interfaces
        CocheService service1 = new CocheServiceClassicImpl();
        CocheService service2 = new CocheServiceSportImpl();

        Coche coche1 = service1.crearCocheDemo();
        Coche coche2 = service2.crearCocheDemo();
    }
}
