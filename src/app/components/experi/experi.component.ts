import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-experi',
  templateUrl: './experi.component.html',
  styleUrls: ['./experi.component.css']
})
export class ExperiComponent implements OnInit {
  

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

  /// carga datos para mostrar sobre experiencia (experi)
  public lista:any = [];
  cargarData(){
    this.authService.datos("experi")
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
 
  ///ACTUALIZAR FORMULARIO
  actualizar(): any {
    console.log(this.formDatos.value);
  }

  //ELIMINAR FORMULARIO
  eliminar(): any {
    console.log(this.formDatos.value);
  }

  // BLANQUEAR FORMULARIO ANTES DE CREAR EL NUEVO
  blanqueo(): any {
    this.formDatos.reset();
    console.log(this.formDatos.value);
  }
  nuevoExperi(): any {
    console.log(this.formDatos.value);
  }
  
  
    // public lista:any = [];
  // cargarData(){
  //   this.authService.datos()
  //     .subscribe(dt => {
  //       this.lista = dt;
  //   })
  // }

  
}

