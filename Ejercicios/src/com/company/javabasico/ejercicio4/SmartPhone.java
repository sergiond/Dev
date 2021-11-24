package com.company.javabasico.ejercicio4;

public class SmartPhone extends SmartDevice {

    int tamanoPantalla = 5;
    String modelo = "S21";

    public SmartPhone(){}
    public SmartPhone(int tamanoPantalla, String modelo,int resolucion, int duracionBateria, String fabricante){
        this.tamanoPantalla = tamanoPantalla;
        this.modelo = modelo;
        this.resolucion = resolucion;
        this.duracionBateria = duracionBateria;
        this.fabricante = fabricante;
    }

    @Override
    public String toString() {
        return "SmartPhone{" +
                "resolucion=" + resolucion +
                ", duracionBateria=" + duracionBateria +
                ", fabricante='" + fabricante + '\'' +
                ", tamanoPantalla=" + tamanoPantalla +
                ", modelo='" + modelo + '\'' +
                '}';
    }
}
