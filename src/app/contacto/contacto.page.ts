import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private router: Router) { }

  nombre = 'Francisco';
  apellido = 'Calfún';

  persona = {
    nombre: 'Cecilia',
    apellido: 'Patiño',
  }

  duplicarTexto(texto:string){
    return texto+' '+texto;
  }

  irLogin(){
    this.router.navigate(['/login']);
  }
  
  ngOnInit() {
  }

}
