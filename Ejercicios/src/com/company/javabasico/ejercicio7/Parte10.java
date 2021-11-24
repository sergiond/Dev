package com.company.javabasico.ejercicio7;

import java.io.*;
import java.util.*;

public class Parte10 {

    //10.Sorpréndenos creando un programa de tu elección que utilice InputStream, PrintStream, excepciones, un HashMap y un ArrayList, LinkedList o array

    public static void registro(int clave, String valor){

        String rutaACopiar = "C:\\Users\\Sergio\\Documents\\test\\claveValor.txt";


        SalvarRegistros(mapa(ListaClave(clave),ListaValor(valor)));
        copiaSeguridad(rutaACopiar);

    }

    private static List<Integer> ListaClave(int clave) {
        List<Integer> listaClave = new ArrayList<>();
        listaClave.add(clave);
        return listaClave;
    }

    private static List<String> ListaValor(String valor){
        List<String> listaValor = new ArrayList<>();
        listaValor.add(valor);
        return listaValor;
    }
    //Se itera a través de las listas para añadir las claves y los valores de las listas
    private static HashMap<Integer, String> mapa(List<Integer>listaClave, List<String> listaValor){
        HashMap<Integer, String> mapa = new HashMap<>();
        try {
            Iterator<Integer> claveIter = listaClave.iterator();
            Iterator<String> valorIter = listaValor.iterator();

            while (claveIter.hasNext() || valorIter.hasNext()) mapa.put(claveIter.next(), valorIter.next());

        }catch (Exception e){
            System.out.println("Error en clave-valor");
        }

        return mapa;
    }

    public static void  SalvarRegistros(Map<Integer,String> mapa){
        try {
            PrintStream salida = new PrintStream("C:\\Users\\Sergio\\Documents\\test\\claveValor.txt");
            salida.print(mapa);
        }catch (IOException e){
            System.out.println("Error al abrir fichero");
        }
    }

    private static void copiaSeguridad(String fileIn){
        try {
            InputStream fichero = new FileInputStream(fileIn);
            PrintStream salida = new PrintStream("C:\\Users\\Sergio\\Documents\\test\\claveValor_copiaSegura.txt");
            BufferedInputStream ficheroBuffer = new BufferedInputStream(fichero);

            byte[] dato = ficheroBuffer.readAllBytes();

            salida.write(dato);
            salida.close();
            System.out.println("Fichero copiado correctamente");
        }catch (IOException e){
            System.out.println("Error al abrir fichero");
        }
    }
}
