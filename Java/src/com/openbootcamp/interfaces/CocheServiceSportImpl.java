package com.openbootcamp.interfaces;

import com.openbootcamp.Coche;

public class CocheServiceSportImpl implements CocheService{
    @Override
    public Coche crearCocheDemo() {
        System.out.println("Se crea un coche Sport");
        return null;
    }
}
