package com.openbootcamp;

public abstract class Coche {

    //Atributos
    String color;
    String fabricante;
    String modelo;
    Double peso;
    Double largo;
    Integer velocidad =0;

    //constructor
    public Coche(){} // permite crear objetos sin pasarle atributos.

    public Coche(String color, String fabricante, String modelo, Double peso, Double largo){
        this.color =color;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.peso = peso;
        this.largo = largo;
    }
    public void acelerar(Integer cantidad){
        if(cantidad > 0 && cantidad<=120)
            this.velocidad += cantidad;
    }

    // para generar el método toString(), se puede realizar ,haciendo click derecho->generate->toString(), y esto sirve para imprimir las propuedades del objeto
    // cuando hacemos sout
    @Override
    public String toString() {
        return "Coche{" +
                "color='" + color + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", modelo='" + modelo + '\'' +
                ", peso=" + peso +
                ", largo=" + largo +
                ", velocidad=" + velocidad +
                '}';
    }
}
