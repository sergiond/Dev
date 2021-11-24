package com.company.javabasico.ejercicio4;

public class SmartDevice {

    int  resolucion = 720;
    int duracionBateria = 48;
    String fabricante = "Samsung";

    public SmartDevice(){}
    public SmartDevice(int resolucion, int duracionBateria, String fabricante){
        this.resolucion = resolucion;
        this.duracionBateria = duracionBateria;
        this.fabricante = fabricante;
    }

    @Override
    public String toString() {
        return "SmartDevice{" +
                "resolucion=" + resolucion +
                ", duracionBateria=" + duracionBateria +
                ", fabricante='" + fabricante + '\'' +
                '}';
    }
}
