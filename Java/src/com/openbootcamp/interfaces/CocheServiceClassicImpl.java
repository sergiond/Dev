package com.openbootcamp.interfaces;

import com.openbootcamp.Coche;
import com.openbootcamp.CocheElectrico;

public class CocheServiceClassicImpl implements CocheService {
    @Override
    public Coche crearCocheDemo() {
        System.out.println("Se crea un coche clásico");
        return new CocheElectrico();
    }
}
