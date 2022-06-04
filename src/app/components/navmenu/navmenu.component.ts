import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {


  // lo de adentro de () injecto el servicio
  constructor( 
    private authService:AuthService,
    private location:Location,
    private ruta:Router
    ) { }

  public edited = false;
  ngOnInit(): void {
    this.isLog();
  }

  // Verificar si esta logeado para saber si habilita la edicion o no
  isLog(){
    if (!localStorage.getItem("token")){
      // console.log("NavMenu verifica SIN LOGEO");
    }else{
      this.authService.isAuth()
        .subscribe((result)=>{
          if (result == "admin" || result == "guest") {
              this.edited = true;
            }else{
              this.edited = false;
          }
      });
    }
  }


  irWeb() {
    this.location.replaceState('/logeo');
    // this.ruta.navigate(['logeo']); //vuelve a la ruta web.
  }
  
}
