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
  private urlDato = 'http://localhost:3000/registro'; // trae el registro con los datos segun ID enviado
  private urlNew = 'http://localhost:3000/regnew'; // trae el registro con los datos segun ID enviado
  private urlMod = 'http://localhost:3000/regmod'; // trae el registro con los datos segun ID enviado
  private urlDel = 'http://localhost:3000/regdel'; // trae el registro con los datos segun ID enviado


  constructor(private http: HttpClient) { 
    //para saber si mi servicio esta corriendo
    console.log("Lectura de la Api corriendo!");
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
    
  // trae educa o experi
  datos(theme:any):Observable<any>
  {
    //console.log('DATOOOOSSS: ',theme);
    // console.log("ESTO : ", this.http.post(this.urlDatos1,theme));
    return this.http.post(this.urlDatos,{dt_theme:theme});
  }    
  
  // Trae el registro para modificar segun ID seleccionado
  datoTipo(id:any):Observable<any>
  {
    //console.log({dt_id:id});
     return this.http.post(this.urlDato,{dt_id:id});
  } 
  // ELIMINA REGISTRO
  regDel(ids:any):Observable<any>
  {
    //console.log(ids);
    return this.http.post(this.urlDel,{dt_id:ids});
  }  

  // MODIFICAR REGISTRO
  regMod(regi:string):Observable<any>
  {
    return this.http.post(this.urlMod,regi);
  } 
  
  // NUEVO REGISTRO
  regNew(regi:string):Observable<any>
  {
  console.log(regi);
    // return this.http.post(this.urlMod,regi);
    return this.http.post(this.urlNew,regi);
  } 


}
  /// este servicio lo consumismo desde nuestro login por lo que instanciamos ahi.