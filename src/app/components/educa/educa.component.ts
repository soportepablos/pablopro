import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-educa',
  templateUrl: './educa.component.html',
  styleUrls: ['./educa.component.css']
})
export class EducaComponent implements OnInit {

  // creo el formDatos para poder modificar..................
  public formDatos = new FormGroup({
    dt_title: new FormControl('',Validators.required),
    dt_text: new FormControl('',Validators.required),
    dt_year: new FormControl('',Validators.required),
    dt_status: new FormControl(''),
    dt_id: new FormControl(''),
    dt_theme: new FormControl('')
  });
  
  constructor(private authService:AuthService, 
              private ruta:Router,
              private formBuilder:FormBuilder
  ) { }

  public edited = false;

  ngOnInit(): void {
    this.cargarData(); // trae lista para mostrar
    this.isLog(); // virifica si esta logeado
  }

  // Verificar si esta logeado para saber si habilita la edicion o no
  isLog(){
    this.authService.isAuth()
      .subscribe((result)=>{
        if (result.user_role == "admin") {
            this.edited = true;
          }else{
            this.edited = false;
        }
    });
  }

  /// carga datos para mostrar sobre educacion (educa)
  public lista:any = [];
  cargarData(){
    this.authService.datos("educa")
      .subscribe((result)=>{
        this.lista = result;
    });
    //console.log(this.lista1);
  }

  /// Toma los datos de la base segun el registro seleccionado 
  /// y lo muestra en el modal para modificar
  public dato:any = [];
  tomaDatos(id:any){
    this.authService.datoTipo(id)
      .subscribe((dati)=>{
        this.dato = dati;
        if (this.dato[0].dt_status === 0){
          this.dato[0].status = true;
        }else{ this.dato[0].status = false; }
        this.formDatos.patchValue(this.dato[0]);
      });
  }
 
  ///MODIFICAR FORMULARIO
  actualizar() {
    this.authService.regMod(this.formDatos.value)
    .subscribe((result)=>{ 
      this.cargarData(); // trae lista para mostrar
    });
    //console.log(this.formDatos.value);
  }
  
  // CREAR UN NUEVO  REGISTRO 
  // BLANQUEAR FORMULARIO ANTES DE CREAR EL NUEVO
  blanqueo(): any {
    //console.log(this.formDatos.value);
    this.formDatos.reset();
  }
  
  // INSERTA NUEVO REGISTRO
  nuevoEduca() {
    // console.log(this.formDatos.value);
    this.formDatos.value.dt_theme = "educa";
    this.authService.regNew(this.formDatos.value)
    .subscribe((result)=>{ 
      this.cargarData(); // trae lista para mostrar
    });
  }
  
  //ELIMINAR FORMULARIO
  eliminarEduca() {
    this.authService.regDel(this.formDatos.value.dt_id)
    .subscribe((result)=>{ 
      console.log(result); 
      this.cargarData(); // trae lista para mostrar
    });
    //console.log(this.formDatos.value.dt_id);
  }

 
  // public lista:any = [];
  // cargarData(){
  //   this.authService.datos()
  //     .subscribe(dt => {
  //       this.lista = dt;
  //   })
  // }

  
}

