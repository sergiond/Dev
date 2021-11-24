package com.company.javabasico.ejercicio4;

public class SmartWatch extends SmartDevice {
    String colorCorrea = "negra";
    String formaPantalla = "redonda";

    public SmartWatch(){}
    public SmartWatch(String colorCorrea, String formaPantalla,int resolucion, int duracionBateria, String fabricante){
        this.colorCorrea = colorCorrea;
        this.formaPantalla = formaPantalla;
        this. resolucion = resolucion;
        this.duracionBateria = duracionBateria;
        this.fabricante = fabricante;
    }

    @Override
    public String toString() {
        return "SmartWatch{" +
                "resolucion=" + resolucion +
                ", duracionBateria=" + duracionBateria +
                ", fabricante='" + fabricante + '\'' +
                ", colorCorrea='" + colorCorrea + '\'' +
                ", formaPantalla='" + formaPantalla + '\'' +
                '}';
    }
}
