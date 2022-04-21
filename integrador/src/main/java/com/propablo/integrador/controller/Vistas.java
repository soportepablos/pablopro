package com.propablo.integrador.controller;
import java.util.List;

import com.propablo.integrador.model.Datos;
import com.propablo.integrador.service.IDatos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/datos")
public class Vistas {

    // BASE DATOS - LISTa
    @Autowired
    private IDatos repositorio;

    //Listar Registro Base de datos MYSQL
    @GetMapping
    public List<Datos> getDatos() {
        return repositorio.findAll();
    }

    // Insertar nuevo registro
    // @PostMapping
    // public Object agregarDatos(@RequestBody Datos res){
    //     return repositorio.save(res);
    // }

    //Eliminar registro
    // @DeleteMapping(value = "/{id}")
    // public void eliminarDatos(@PathVariable int id) {
    //     repositorio.deleteById(id);
    // }
    
    //Retorna un registro
    // @GetMapping("/{theme}")
    // public Object getDatos(@PathVariable String theme) {
    //     return repositorio.findByDttheme(theme);
    //     //return id;
    // }
    
    //Retorna un registro
    @GetMapping(value = "/tema")
    public Object getDatos(@RequestBody String tem) {
        
        return repositorio.findByDttheme(tem);
        // return (tem);
    }

    //Actualizar Registro
    // @PutMapping
    // public void actualizarDatos(@RequestBody Datos res) {
    //     repositorio.saveAndFlush(res);
    // }


    // @GetMapping("/")
    // public String index(){
    //     return "Hola mundo";
    // }
    
    @GetMapping("/prueba/{id}")
    public String mostrar(@PathVariable int id){
        return "Envio y toma variable get " + id;
    }
    
    //CRUD SIMPLE
    @GetMapping("/find/{id}")
    public String find(@PathVariable int id){
        return "Busqueda " + id;
    }

    @PostMapping("/update")
    public Datos update(@RequestBody Datos pp) {
        return pp;

    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        return "Eliminacion " + id;
    }

    @PostMapping("/save/{id}")
    public String save(){
        return "Guardar nuevo ";
    }
    /// FIN CRUD SIMPLE
    
}
