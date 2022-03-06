// injectado en los componentes
import { Component, Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  //como es root no hace falta declarar en el app.module
  providedIn: 'root'
})
export class AuthService {
  //para hacer uso de esto tenemos que utilizar el cliente HTTP - consultas http

  private URL = 'http://localhost:3000/singin'; // envio el form con usuario y pass
  private urlDatos = 'http://localhost:3000/datos'; //le envio theme (experi o educa)
  private urlTest =  'http://localhost:3000/test'; // envio token y me devuelve usuario y rol
  private urlGet = 'http://localhost:3000';


  constructor(private http: HttpClient) { 
    //para saber si mi servicio esta corriendo
    console.log("el servicio corre");
  }
  
  // metodo para iniciar la sesion recibe las credenciales del usuario 
  // observable para que los controladores puedan suscribir
  singIn(user:string):Observable<any>
  {
    //return this.http.post(`${this.URL}/user/singin`,user); //nos devuelve un observable que es nuestra consulta.
    // llamada a la API
    // metodo pipe -- encadena operadores (realizo acciones previo a retornar la respuesta a los controladores (componente))
    // map mapea, modifica la repuesta y despues pasa a los componentes. 
    // data => modificamos si queremos y luego retornamos
    return this.http.post(this.URL,user).pipe(map(data=>{
      return data;
    })) 
  }

  //Verificacion del logeo
  isAuth():Observable<any> 
  {
    var tok = localStorage.getItem("currenteUser");
    var pp =  this.http.post(this.urlTest,{ tok });
    return(pp);
    

    // return this.http.post(this.urlTest,{ tok });

  }
    
  // trae educa y experi
  datos(theme:any):Observable<any>
  {
    //console.log('DATOOOOSSS: ',theme);
    // console.log("ESTO : ", this.http.post(this.urlDatos1,theme));
    return this.http.post(this.urlDatos,{dt_theme:theme});
  }    
    
}
  /// este servicio lo consumismo desde nuestro login por lo que instanciamos ahi.