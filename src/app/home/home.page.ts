import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: any;
  nameUser="Francisco";

  constructor(
    
    private router: Router, 
    private activeroute: ActivatedRoute,
    private databaseService: DatabaseService){

    
      console.log('Se cargó el constructor');

    this.activeroute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuario = this.router.getCurrentNavigation()?.extras.state?.['user.username'];
        console.log(this.usuario);
      }
    });
  }

  enviarDatos(){
    // localStorage.setItem(name, content)
    // name = nombre del elemento
    // content = Contenido del elemento
    localStorage.setItem('Nombre usuario',this.nameUser);
    this.router.navigate(['/registro']);
  }

  async ngOnInit() {
    //this.databaseService.crearDataBase();
    console.log('Se cargó el ngOnInit');
  }
  ionViewWillEnter() {
    console.log('Se cargó el ionViewWillEnter'); 
  }
  ionViewDidEnter() {
    console.log('Se cargó el ionViewDidEnter');
       
  }
  ionViewWillLeave() {
    console.log('Se cargó el ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('Se cargó el ionViewDidLeave');
  }
  ngOnDestroy() {
    console.log('Se cargó el ngOnDestroy');
  }
}
