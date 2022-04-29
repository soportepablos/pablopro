package com.propablo.integrador.service;

import java.util.List;

import com.propablo.integrador.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface IUser extends JpaRepository<User, String>{
    
    // @Query("select u from User u where u.username = :username and u.password = :password")
    // User findByUsernameAndPassword(@Param("password") String password,
    //                                @Param("username") String username);

    List<User> findByUsernameAndPassword(String username, String password);

}
