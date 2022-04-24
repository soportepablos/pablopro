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
  private urlDatos = 'http://localhost:8080/datos/tema'; //le envio theme (experi o educa)
  private urlTest =  'http://localhost:3000/test'; // envio token y me devuelve usuario y rol
  private urlDato = 'http://localhost:8080/datos/'; // trae el registro con los datos segun ID enviado
  private urlNew = 'http://localhost:8080/datos/new'; // trae el registro con los datos segun ID enviado
  private urlMod = 'http://localhost:8080/datos/update'; // trae el registro con los datos segun ID enviado
  private urlDel = 'http://localhost:8080/datos/delete/'; // elimina registro


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
   
  //////////////////////////
  // trae los registro de experi o educa
  public datos(theme: any): Observable<any[]> {
    return this.http.post<any[]>(this.urlDatos,theme);
  }

  // Trae el registro para modificar segun ID seleccionado
  public datoTipo(id:any):Observable<any> {
      return this.http.get(this.urlDato + id);  
  } 

  // ACTUALIZAR REGISTRO
  regMod(regi:string):Observable<any>  {
    return this.http.put(this.urlMod,regi);
  } 

  // ELIMINA REGISTRO
  regDel(id:any) {
    return this.http.delete(this.urlDel + id);
  }  

  // NUEVO REGISTRO
  regNew(regi:string):Observable<any>  {
    return this.http.post(this.urlNew,regi);
  } 


  ////////////////////////////////


  // Trae el registro para modificar segun ID seleccionado
  // datoTipo(id:any):Observable<any>
  // {
  //   console.log(this.http.post<any[]>(this.urlDato,id));
  //   return this.http.post<any[]>(this.urlDato,id);
  //   //  return this.http.post(this.urlDato,{dtid:id});
     
  // } 



  // MODIFICAR REGISTRO

  



}
  /// este servicio lo consumismo desde nuestro login por lo que instanciamos ahi.