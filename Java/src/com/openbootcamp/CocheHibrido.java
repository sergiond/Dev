package com.openbootcamp;

public class CocheHibrido extends Coche{
    String motorHibirdo;

    public CocheHibrido(){}

    public CocheHibrido(String motorHibirdo){
        this.motorHibirdo = motorHibirdo;
    }
    public CocheHibrido(String color, String fabricante, String modelo, Double peso, Double largo, String motorHibirdo){
        //con Super se invoca al contructor de la clase padre
        super(color, fabricante, modelo, peso, largo);
        this.motorHibirdo = motorHibirdo;
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
                ", motorElectrico='" + motorHibirdo + '\'' +
                '}';
    }
}
