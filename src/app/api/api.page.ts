import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  arrayPosts:any;

  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.apiService.getPosts()
    .subscribe(
    (data) => {this.arrayPosts = data;}
    );
  }
  
}
