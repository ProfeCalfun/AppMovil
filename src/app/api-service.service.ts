import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(this.url);  
  }

  getPost(id:number):Observable<any>{
    return this.http.get(this.url+'/'+id).pipe(retry(3));
      
  }
}
