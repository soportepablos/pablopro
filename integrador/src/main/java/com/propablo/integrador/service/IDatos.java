package com.propablo.integrador.service;

import java.util.List;

import com.propablo.integrador.model.Datos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@EnableJpaRepositories
@Repository
public interface IDatos extends JpaRepository<Datos, Integer> {

    // que sea solo lectura la utilizacion de la consulta
    @Transactional(readOnly = true) 
    List<Datos> findByDttheme(String tema);

    // @Query("SELECT u FROM User u WHERE u.username = :username")
    // public User getUserByUsername(@Param("username") String username);

    // @Query("select u from Datos u where u.dttheme like ?1")
    // List<Datos> findByDttheme(String dttheme);

    //  Optional<Datos> findByDttheme(String tema);
    
}
