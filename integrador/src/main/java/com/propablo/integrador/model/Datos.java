package com.propablo.integrador.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "datos") // Darle nombre a la tabla de la base de datos
public class Datos implements Serializable {

    @Id // pimary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto incrementa
    private Integer id;

    @Column(name = "dttheme", nullable = false)
    private String dttheme;

    @Column(name = "dttitle", nullable = false)
    private String dttitle;

    @Column(name = "dttext", nullable = false)
    private String dttext;

    @Column(name = "dtstatus", nullable = false)
    private String dtstatus;

    @Column(name = "dtyear", nullable = false)
    private String dtyear; 


    //Constructor
    public Datos(Integer id, String dttheme, String dttitle, String dttext, String dtstatus, String dtyear) {
        this.id = id;
        this.dttheme = dttheme;
        this.dttitle = dttitle;
        this.dttext = dttext;
        this.dtstatus = dtstatus;
        this.dtyear = dtyear;
    }

    public Datos() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDttheme() {
        return dttheme;
    }

    public void setDttheme(String dttheme) {
        this.dttheme = dttheme;
    }

    public String getDttitle() {
        return dttitle;
    }

    public void setDttitle(String dttitle) {
        this.dttitle = dttitle;
    }

    public String getDttext() {
        return dttext;
    }

    public void setDttext(String dttext) {
        this.dttext = dttext;
    }

    public String getDtstatus() {
        return dtstatus;
    }

    public void setDtstatus(String dtstatus) {
        this.dtstatus = dtstatus;
    }

    public String getDtyear() {
        return dtyear;
    }

    public void setDtyear(String dtyear) {
        this.dtyear = dtyear;
    }

}
