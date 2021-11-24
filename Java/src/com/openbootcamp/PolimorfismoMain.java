package com.openbootcamp;

public class PolimorfismoMain {
    public static void main(String[] args) {

        //Coche coche1 = new Coche();
        CocheElectrico coche2 = new CocheElectrico();
        CocheHibrido coche3 = new CocheHibrido();

        //polimorfismo, donde Coche sería el tipo base y CocheEletrico/ CocheHibrido el tipo hijo
        Coche coche4 = new CocheElectrico();
        Coche coche5 = new CocheHibrido();

        //para saber de que tipo es la instancia se usa "instanceof"

        if(coche4 instanceof  CocheElectrico){
            System.out.println("Es un coche eléctrico");
        }
    }
}
