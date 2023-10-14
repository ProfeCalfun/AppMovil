import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn:'root'
})

export class DatabaseService {

 // private database: SQLiteObject;
  
  private dbReady = new BehaviorSubject<boolean>(false);

  constructor(private sqlite: SQLite, 
    private platform:Platform,
    ) 
    {
      this.crearDataBase();
    }

  crearDataBase() {
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default',
      }).then((db:SQLiteObject)=>{
        db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
  })
  .catch(e => console.log(e));
    })  
  }
  
}
