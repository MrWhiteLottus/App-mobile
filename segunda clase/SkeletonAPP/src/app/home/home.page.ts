import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username! : string;
  password! : string;
  mensaje! : string;


  constructor() {}

  validateLogin() {
    if (this.username == 'admin'
      && this.password == '12345'
      ) 
      (this.mensaje = 'Login exitoso')
    else  
        (this.mensaje = 'login fallido')


  }

}
