import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {


  // lo de adentro de () injecto el servicio
  constructor(private authService:AuthService) { }

  public edited = false;
  ngOnInit(): void {
    this.isLog();
  }

  // Verificar si esta logeado para saber si habilita la edicion o no
  isLog(){
    this.authService.isAuth()
      .subscribe((result)=>{
        if (result.user_role == "admin" || result.user_role == "guest") {
            this.edited = true;
          }else{
            this.edited = false;
        }
    });
  }


}
