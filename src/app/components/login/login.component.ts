import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  //injectamos formBuilder y el servicio de autenticacion.
  public edited:boolean = false;
  constructor (private formBuilder:FormBuilder,private authService:AuthService, private ruta:Router) {
    this.form=this.formBuilder.group(
      { 
        username:['',[Validators.required, Validators.minLength(5)]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    );
  }

  ngOnInit(): void {
    this.isLog();
  }

  ///////// obtener email y pass para validar miesntras escribo (obtengo las propiedades////////////////////
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  ///////// DESLOGEO 
  isLog(){
    if (!localStorage.getItem("token")){
      console.log("Login verifico SIN LOGEO");
    }else{
      this.authService.isAuth().subscribe((result)=>{
        console.log("Se deslogeo " , result );
          if (result == "admin" || result == "guest") {
            localStorage.clear();
            // this.edited = false;
            console.log("Se deslogeo " , result );
            this.ruta.navigate(['/web']); //vuelve a la ruta web.
          }
      });
    };
  }

  //// LLAMADO PARA LOGEO
  logIn(event:Event) {
    event.preventDefault;
    //console.log(this.form.value);
    this.authService.singIn(this.form.value).subscribe(data=>{
    
    // const res = JSON.stringify(data);
    // console.log(res);
    // guardo en el localStorage
    if (data !== "false"){
      localStorage.setItem('token', data );
      console.log("datos devueltos del logeo: ",data);
      this.ruta.navigate(['/web']); //vuelve a la ruta web.

    }else{
      console.log("ERROR DE LOGEO ", data)
    }
    //  console.log("DATA:" + JSON.stringify(data)); // muestro el return data; del archivo auth.service recibida por JSON en 
    //   //console.log(data); // muestro el return data; del archivo auth.service recibida por JSON en 
    //   this.ruta.navigate(['/web']); //vuelve a la ruta web.
     });
  }


}
