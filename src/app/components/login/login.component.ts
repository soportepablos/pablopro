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
  constructor (private formBuilder:FormBuilder,private authService:AuthService, private ruta:Router) {
    this.form=this.formBuilder.group(
      { 
        user_name:['',[Validators.required, Validators.minLength(5)]],
        user_pass:['',[Validators.required, Validators.minLength(8)]]
      }
    );
  }

  ngOnInit(): void {

  }

  ///////// obtener email y pass para validar miesntras escribo (obtengo las propiedades////////////////////
  get user_name() {
    return this.form.get('user_name');
  }
  get user_pass() {
    return this.form.get('user_pass');
  }
  /////////

  logIn(event:Event) {
    
    event.preventDefault;
    this.authService.singin(this.form.value).subscribe(data=>{
      //console.log("DATA:" + JSON.stringify(data)); // muestro la data recibida por JSON
      this.ruta.navigate(['/web']);
    });
  }
}
