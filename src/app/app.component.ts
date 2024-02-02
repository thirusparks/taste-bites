import { Component } from '@angular/core';
import  { TryService }  from  './service/try.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = ''; 
  pageTitle = '';
  mess : any;
  constructor(private service : TryService){
     this.pageTitle = this.service.title;
  }

  getMessage(){
    this.mess = this.service.getData();
    console.log(this.mess , "message");
    
    return this.mess;
  }
  
}
