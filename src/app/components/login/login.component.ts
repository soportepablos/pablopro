import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user =  {
    // ya coloco datos deberian ir vaios.
    user_name:'pablo',
    user_pass:'12345678'
  }

  ngOnInit(): void {
  }

  logIn(){
  
    console.log(this.user);
  }


}
