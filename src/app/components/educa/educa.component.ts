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
    dttitle: new FormControl('',Validators.required),
    dttext: new FormControl('',Validators.required),
    dtyear: new FormControl('',Validators.required),
    dtstatus: new FormControl(''),
    id: new FormControl(''),
    dttheme: new FormControl('')
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

  // VERIFICO SI ESTA LOGEADO Y SI EL USUARIO TIENE ROL DE EDICION
  isLog(){

    if (!localStorage.getItem("token")){
       console.log ("EDUCA edicion SIN LOGEO")
    }else {
      this.authService.isAuth()
      .subscribe((result)=>{
        if (result == "admin") {
              this.edited = true;
            }else{
              this.edited = false;
          }
      });
    }
  }

  /// CARGA EL LISTADO EXPERI OK
  public lista:any = [];
  cargarData(){
    this.authService.datos("educa")
      .subscribe((result)=>{
        this.lista = result;
    });
  }

  // TOMA LOS DATOS SEGUN ID SELECCIONADO Y REALIZA EL PREVIEW OK
  public dato:any = [];
  tomaDatos(id:any){
    this.authService.datoTipo(id)
      .subscribe((dati)=>{
        this.dato = dati;
        this.formDatos.patchValue(this.dato); 
      });
  }
 
  ///MODIFICAR FORMULARIO
  actualizar() {
    this.authService.regMod(this.formDatos.value)
    .subscribe((result)=>{ /// si no me suscribo nunca llega a la API
      this.cargarData(); // trae lista para mostrar
    });
  }
  
  // CREAR UN NUEVO  REGISTRO 
  // BLANQUEAR FORMULARIO ANTES DE CREAR EL NUEVO
  blanqueo(): any {
    this.formDatos.reset();
    //console.log(this.formDatos.value);
  }

  // INSERTA NUEVO REGISTRO
  nuevoEduca() {
    // console.log(this.formDatos.value);
    this.formDatos.value.dttheme = "experi";
    this.formDatos.value.dtstatus = 0; // SOLUCIONAR EL TEMA DE STATUS BOOLEANO
    this.authService.regNew(this.formDatos.value)
    .subscribe((result)=>{ 
      this.cargarData(); // trae lista para mostrar
    });
  }
  
  //ELIMINAR FORMULARIO
  eliminarEduca() {
    this.authService.regDel(this.formDatos.value.id)
    .subscribe((result)=>{ 
      // console.log(result); 
      this.cargarData(); // trae lista para mostrar
    });
    //console.log(this.formDatos.value.dtid);
  }

 
  // public lista:any = [];
  // cargarData(){
  //   this.authService.datos()
  //     .subscribe(dt => {
  //       this.lista = dt;
  //   })
  // }

  
}

