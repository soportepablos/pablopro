package com.propablo.integrador.controller;

import java.util.List;

import com.propablo.integrador.model.Datos;
import com.propablo.integrador.model.User;
import com.propablo.integrador.service.IUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/login")
public class AuthLogin {

    // BASE DATOS - LISTa
    @Autowired
    private IUser repositorio;
    
   
    //Para listar los registros EXPERI o EDUCA -- OK
    @PostMapping
    public Object postDatos(@RequestBody User users) {
        
        String user = users.getUsername();
        String pass = users.getPassword();
        // return (pass);        
        // List<User> lista = repositorio.findByUsernameAndPassword(user,pass);        
        return repositorio.findByUsernameAndPassword(user,pass); 

        // return !lista.isEmpty();
        // Igual que la linea anterior..
        // if (lista.isEmpty()) {
        //     return false;
        // }else {
        //     return true;
        // }

    }

} 
