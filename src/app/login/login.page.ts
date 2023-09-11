import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(private router: Router,public alertController:AlertController) { }

  user={
    username: "",
    password: "",
  }

   async ingresoIncorrecto() {
    let alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario y/o contraseña incorrectos',
      buttons: ['Aceptar']
    });
    await alert.present()
  }

  irLogin(){
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, puedes verificar si el email y la contraseña son válidos
    if (this.user.username === 'fcalfun' && this.user.password === '1234') {
      // El inicio de sesión fue exitoso, puedes redirigir a otra página
      // O realizar otras acciones necesarias
      console.log('Inicio de sesión exitoso');
      const navigationExtras:NavigationExtras={state:
        {username:this.user.username}}
        this.router.navigate(['/home'],navigationExtras);
    } else {
      // El inicio de sesión falló, muestra un mensaje de error o realiza otras acciones necesarias
      console.error('Inicio de sesión fallido');
      this.ingresoIncorrecto();
      
    }
    
  }

  ngOnInit() {
    
  }

}
