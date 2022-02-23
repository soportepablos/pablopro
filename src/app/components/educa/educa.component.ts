import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-educa',
  templateUrl: './educa.component.html',
  styleUrls: ['./educa.component.css']
})
export class EducaComponent implements OnInit {

  constructor(private authService:AuthService) { }

  public edited = true;

  ngOnInit(): void {
    this.cargarData()
  }

  public lista:any = [];

  cargarData(){
    this.authService.datos("educa")
      .subscribe((result)=>{
        this.lista = result;
      //console.log(result);
    });
  }



}
