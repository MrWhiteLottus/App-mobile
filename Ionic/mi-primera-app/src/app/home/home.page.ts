import { Component, ViewRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  saludo! : string;
  nombre! : string;
  edad! : string;
  direccion! : string;
  profesion! : string;


  constructor() {
    this.saludo = "Hola compare!";
    this.nombre = "Nombre: Benjamin Tapia";
    this.edad = "Edad: 20";
    this.direccion = "Direccion: mi casita";
    this.profesion = "Profesion: pastero"; 
  }

}
