package com.company;

import java.util.Scanner;

public class TryMain {
    public static void main(String[] args) {
    try {
        int result = 5/0;
    }catch(ArithmeticException e){
        e.printStackTrace();
    }finally {
        System.out.println("Cierre de recursos");
    }

    System.out.println("fin");
        Scanner scanner = new Scanner(System.in);
        scanner.nextLine();
    }
}
