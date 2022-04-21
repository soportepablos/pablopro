package com.propablo.integrador.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Datos {

    public List database = new ArrayList<>();
    
    @GetMapping("/")
    public List index(){
        return this.database;
    }
    
    @GetMapping("/find/{id}") //localhost:8080/find/1 .... devuelve ID: 1
    public String find(@PathVariable int id){
        return "ID buscado: " + id;
    }
    
    @GetMapping("/update/{id}") //localhost:8080/find/1 .... devuelve ID: 1
    public String update(@PathVariable int id){
        return "ID actualizando: " + id;
    }
    @GetMapping("/delete/{id}") //localhost:8080/find/1 .... devuelve ID: 1
    public String delete(@PathVariable int id){
        return "ID eliminando: " + id;
    }
    @PostMapping("/save/{id}") //localhost:8080/find/1 .... devuelve ID: 1
    public String save(){
        return "ID: ";
    }



}
