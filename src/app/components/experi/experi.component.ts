import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experi',
  templateUrl: './experi.component.html',
  styleUrls: ['./experi.component.css']
})
export class ExperiComponent implements OnInit {

  constructor(private authService:AuthService) { }

  public edited = false;

  ngOnInit(): void {
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


  // public lista:any = [];
  // cargarData(){
  //   this.authService.datos()
  //     .subscribe(dt => {
  //       this.lista = dt;
  //   })
  // }

  public lista:any = [];
  cargarData(){
    this.authService.datos("experi")
      .subscribe((result)=>{
        this.lista = result;
    });
    //console.log(this.lista1);
  }

 
}
