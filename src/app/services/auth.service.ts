// injectado en los componentes
import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Router } from 'express';

@Injectable({
  //como es root no hace falta declarar en el app.module
  providedIn: 'root'
})
export class AuthService {
  //para hacer uso de esto tenemos que utilizar el cliente HTTP - consultas http

  private URL = 'http://localhost:3000/singin';
  private urlDatos = 'http://localhost:3000/datos';
  private urlDatos1 = 'http://localhost:3000/datos/experi';

  currentUserSubject : BehaviorSubject<any>;
  //private ruta:Router
  constructor(private http: HttpClient) { 
    //para saber si mi servicio esta corriendo
    console.log("el servicio corre");
    //hay qye inicializar porque los behaviorSubject devuelven el ultimo 
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }
  
  // metodo para iniciar la sesion recibe las credenciales del usuario 
  // observable para que los controladores puedan suscribir
  singin(user:string):Observable<any>
  {
    //return this.http.post(`${this.URL}/user/singin`,user); //nos devuelve un observable que es nuestra consulta.
    // llamada a la API
    // metodo pipe -- encadena operadores (realizo acciones previo a retornar la respuesta a los controladores (componente))
    // map mapea, modifica la repuesta y despues pasa a los componentes. 
    // data => modificamos si queremos y luego retornamos
      return this.http.post(this.URL,user).pipe(map(data=>{
        sessionStorage.setItem('currenteUser', JSON.stringify(data)); // guardamos storage el token que nos devuelve la API
        return data;
      })) 
  }

  // trae experi
  // datos():Observable<any> 
  // {
  //   return this.http.get(this.urlDatos);
  // }

  // trae educa
  datos(theme:any):Observable<any>
  {
    //console.log('DATOOOOSSS: ',theme);
    // console.log("ESTO : ", this.http.post(this.urlDatos1,theme));
    return this.http.post(this.urlDatos,{dt_theme:theme});
  }
}
/// este servicio lo consumismo desde nuestro login por lo que instanciamos ahi.