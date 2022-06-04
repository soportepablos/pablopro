import { Component, OnInit } from '@angular/core';
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
    private location: Location
    ) { }

  public edited = false;
  ngOnInit(): void {
    // this.isLog();
  }

  // Verificar si esta logeado para saber si habilita la edicion o no
  isLog(){
    if (!localStorage.getItem("token")){
      console.log("ERROR NO ESTA LOGEADO");
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



}
