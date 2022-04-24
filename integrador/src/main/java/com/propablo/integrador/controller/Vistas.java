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
   
    //Para listar los registros EXPERI o EDUCA -- OK
    @PostMapping(value = "/tema")
    public Object postDatos(@RequestBody String tem) {
        return repositorio.findByDttheme(tem);
        // return (tem);
    }
    // devuelve un ID en particular sirve para mostrar el preview a modificar o eliminar -- OK
    @GetMapping(value = "/{ID}")
    public Object getDatos(@PathVariable int ID) {
        return repositorio.findById(ID);
    }

    //Actualizar Registro --- OK
    @PutMapping(value = "/update")
    public void updateDatos(@RequestBody Datos res) {
        repositorio.saveAndFlush(res);
    }

    // nuevo registro -- OK
    @PostMapping(value = "/new")
    public Object newDatos(@RequestBody Datos res) {
        return repositorio.save(res);
    }

    // Eliminar registro -- OK
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        repositorio.deleteById(id);
    }
  
    //CRUD SIMPLE
    // @GetMapping("/find/{id}")
    // public String find(@PathVariable int id){
    //     return "Busqueda " + id;
    // }

    // @PostMapping("/update")
    // public Datos update(@RequestBody Datos pp) {
    //     return pp;

    // }

    // @GetMapping("/delete/{id}")
    // public String delete(@PathVariable int id){
    //     return "Eliminacion " + id;
    // }

    // @PostMapping("/save/{id}")
    // public String save(){
    //     return "Guardar nuevo ";
    // }
    /// FIN CRUD SIMPLE
    
}
