import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  constructor() { 
  }
  // localStorage.getItem(name)
  //Obtenemo los datos y los almacenamos en variables.
  nombre=localStorage.getItem('Nombre usuario');

  ngOnInit() {
    console.log('Nombre usuario: ',this.nombre);
  }


  eliminarDato(){
    //localStorage.removeItem(name)
    //Especifica el nombre del elemento a eliminar
    localStorage.removeItem('Nombre usuario');
  }

  limpiarDatos(){
    //localStorage.clear()
    //limpia el almacenamiento local completo
    localStorage.clear();
  }
  
}

