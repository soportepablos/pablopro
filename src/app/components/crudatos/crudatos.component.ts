import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crudatos',
  templateUrl: './crudatos.component.html',
  styleUrls: ['./crudatos.component.css']
})
export class CrudatosComponent implements OnInit {

@Input() datoEnt:any = '';

  constructor(private authService:AuthService ) { }

  ngOnInit(): void {

  }

  public dato:any = [];
  public valor:string = "";
  modificar(id:any = this.datoEnt){
    this.authService.datoTipo(id)
      .subscribe((dati)=>{
        this.dato = dati;
        this.valor = this.dato;
        console.log(this.valor);
      });
      //console.log(this.dato);
    // this.valor = this.dato;
    // console.log(this.valor);

    //this.ruta.navigate(['/crud/'+id]);
  }



}
