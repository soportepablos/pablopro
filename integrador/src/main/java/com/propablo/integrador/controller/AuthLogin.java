package com.propablo.integrador.controller;

import java.lang.reflect.Array;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.propablo.integrador.model.Datos;
import com.propablo.integrador.model.User;
import com.propablo.integrador.service.IUser;
import com.propablo.integrador.util.JWTUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/login")
public class AuthLogin {

    // BASE DATOS - LISTa
    @Autowired
    private IUser repositorio;
    
    @Autowired
    private JWTUtil jwtUtil;
   
    //Para listar los registros EXPERI o EDUCA -- OK
    @PostMapping
    public Object postDatos(@RequestBody User users) {
        
        String user = users.getUsername();
        String pass = users.getPassword();
        // return (pass);        
        List<User> lista = repositorio.findByUsernameAndPassword(user,pass);  

        // return(lista);
        // return repositorio.findByUsernameAndPassword(user,pass); 
        // return !lista.isEmpty();
        // Igual que la linea anterior..
        if (lista.isEmpty()) {
            return false;
        }else {
            String tokenJwt = jwtUtil.create(String.valueOf(lista.get(0).getUsername()), lista.get(0).getRol());
            // System.out.println(tokenJwt);
            return (tokenJwt);
        }
    }

    // TESTEO LOGEO
    @PostMapping(value = "/test")
    public Object isLog(@RequestBody String tok) {

        String log = jwtUtil.getValue(tok);
        if (tok != null) {
            System.out.println("Prueba de logeo" + log);
            return (log);
        }else {
            return("false");
        }
    }


} 
