package com.company.javabasico.ejercicio5;

public class CocheCRUDImpl implements CocheCRUD {
    @Override
    public void save() {
        System.out.println("save");
    }

    @Override
    public void findAll() {
        System.out.println("findAll");

    }

    @Override
    public void delete() {
        System.out.println("delete");

    }

}
