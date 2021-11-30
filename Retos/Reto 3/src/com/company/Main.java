package com.company;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;



public class Main {

    public static void main(String[] args) throws IOException {

        String nombre;
        String compuesto;

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.printf("Introduce tu nombre y apellidos: ");
        nombre = br.readLine();

    // Esta entrada es para que el usuario pueda indicar la cantidad de nombres que pueda tener, y no se límite a solo dos nombres, ya que si entra un Borbón se desbordarían los nombres
        System.out.printf("Indica el nº de nombres y segundos nombres que tienes: ");
        compuesto = br.readLine();
        int nombreCompuesto = Integer.parseInt(compuesto);

       String print = devolverNombre(nombre, nombreCompuesto);
       System.out.println(print);


    }

    public static String devolverNombre(String nombre,int nombreCompuesto){
        String [] nombreCompleto = nombre.split("\\s+");
        String [] nombreADevolver = new String[10];

        String nombreProcesado = "";
        String apellido1 = "";
        String apellido2 = "";

        String nombreFinal = "";


        for(int i = 0; i < nombreCompuesto; i++) {
            nombreADevolver[i] = nombreCompleto[i];
            nombreProcesado = nombreProcesado + nombreADevolver[i] + " ";
        }

        for(int i = nombreCompuesto; i < nombreCompleto.length; i++) {
            if( i == nombreCompuesto)
                apellido1 = nombreCompleto[i];
            else if (i == nombreCompuesto+1)
                apellido2 = nombreCompleto[i];
            else {
                System.out.println("Excede apellidos");
                break;
            }
        }

        nombreFinal = "Nombre: " + nombreProcesado;

        if(apellido1 != "") {
            nombreFinal = nombreFinal + ", Apellido1: " + apellido1;
            if (apellido2 != "")
                nombreFinal = nombreFinal + " , Apellido2: " + apellido2;
        }

        return nombreFinal;

    }
}
