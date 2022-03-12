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
  
  public formDatos = new FormGroup({
    dt_title: new FormControl('',Validators.required),
    dt_year: new FormControl('',Validators.required),
    dt_text: new FormControl('',Validators.required),
    dt_status: new FormControl(''),
    dt_id: new FormControl(''),
    dt_theme: new FormControl('')
  });

  //public formDatos : FormGroup;
  
  
  constructor(private authService:AuthService, 
              private ruta:Router,
              private formBuilder:FormBuilder
  ) { }

  public edited = false;

  ngOnInit(): void {
    // this.formDatos = this.formBuilder.group( {
    //   titulo:[''],
    //   anio:[''], 
    //   info:[''],
    //   estado:['']
    // });

    this.cargarData();
    this.isLog();
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

  /// carga datos sobre experiencia (experi)
  public lista:any = [];
  cargarData(){
    this.authService.datos("experi")
      .subscribe((result)=>{
        this.lista = result;
    });
    //console.log(this.lista1);
  }

  /// envio de informacion para la modificacion
  send(): any {
    console.log(this.formDatos.value);
  }
  
  public dato:any = [];
  modificar(id:any){
    this.authService.datoTipo(id)
      .subscribe((dati)=>{
        this.dato = dati;
        if (this.dato[0].dt_status === 0){
          this.dato[0].status = true;
        }else{ this.dato[0].status = false; }
        this.formDatos.patchValue(this.dato[0]);
      });
  }


    // public lista:any = [];
  // cargarData(){
  //   this.authService.datos()
  //     .subscribe(dt => {
  //       this.lista = dt;
  //   })
  // }

  
}

