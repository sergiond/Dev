package com.openbootcamp;

import org.w3c.dom.ls.LSOutput;

public class CocheElectrico extends Coche{

    String motorElectrico;

    public CocheElectrico(){}

    public CocheElectrico(String motorElectrico){
        this.motorElectrico = motorElectrico;
    }
    public CocheElectrico(String color, String fabricante, String modelo, Double peso, Double largo, String motorElectrico){
        //con Super se invoca al contructor de la clase padre
        super(color, fabricante, modelo, peso, largo);
        this.motorElectrico = motorElectrico;
    }

    @Override
    public void acelerar(Integer cantidad) {
        Integer cantidadAjustada = cantidad*2; // modificación del método
        super.acelerar(cantidadAjustada); // invocamos el código original de la clase superior
    }

    //Al generar el toString ya nos permite devolver el motorElectrico junto a los atributos de Coche
    @Override
    public String toString() {
        return "CocheElectrico{" +
                "color='" + color + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", modelo='" + modelo + '\'' +
                ", peso=" + peso +
                ", largo=" + largo +
                ", velocidad=" + velocidad +
                ", motorElectrico='" + motorElectrico + '\'' +
                '}';
    }
}
