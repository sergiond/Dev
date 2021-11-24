package com.company;

public class funciones {
    public static void main(String[] args) {

        holamundo();
        holamundo("Sergio");
        String hola = devolverHolamundo();
        System.out.println(hola);
    }

    // Private -> modificador de visibilidad, puede ser privado, público o protegido
    //      PRIVATE: solo es accesible desde la clase donde se declara
    //      PUBLIC: se puede acceder a la funcion desde otra clase EJ: "funciones.funcionPublica"
    //      PROTECTED: Solo pueden acceder a esta función las clases hijas o clases que estén en el mismo paquete
    // Static -> pertenece a la clase funciones, no es necesario crear un objeto
    // Void/String -> No tiene un retorno/ Devuelve un String
    private static void holamundo() {
        System.out.println("hola mundo");
    }
    private static void holamundo(String nombre) {
        System.out.println("hola " + nombre);
    }
    private static String devolverHolamundo() {
        return "hola";
    }
}
