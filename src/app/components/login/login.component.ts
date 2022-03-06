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
        user_name:['',[Validators.required, Validators.minLength(5)]],
        user_pass:['',[Validators.required, Validators.minLength(8)]]
      }
    );
  }

  ngOnInit(): void {
    this.isLog();
  }

  ///////// obtener email y pass para validar miesntras escribo (obtengo las propiedades////////////////////
  get user_name() {
    return this.form.get('user_name');
  }
  get user_pass() {
    return this.form.get('user_pass');
  }
  /////////
  isLog(){
    this.authService.isAuth()
      .subscribe((result)=>{
        if (result.user_role == "admin" || result.user_role == "guest") {
          localStorage.clear();
          // this.edited = false;
          console.log("Se deslogeo " , result );
          this.ruta.navigate(['/web']); //vuelve a la ruta web.
        }
    });
  }

  logIn(event:Event) {
    event.preventDefault;
    this.authService.singIn(this.form.value).subscribe(data=>{
      //console.log(this.form.value);
      // const res = JSON.stringify(data);

      // guardo en el localStorage
      localStorage.setItem('currenteUser', data.token );
      if (data.token){
        console.log("datos devueltos del logeo: ",data.token);
      }else{
        console.log("ERROR AL LOGEARSE")
      }

      //console.log("DATA:" + JSON.stringify(data)); // muestro el return data; del archivo auth.service recibida por JSON en 
      //console.log(data); // muestro el return data; del archivo auth.service recibida por JSON en 

      this.ruta.navigate(['/web']); //vuelve a la ruta web.
    });
  }


}
