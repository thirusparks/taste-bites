import { Component } from '@angular/core';
import  { TryService }  from  './service/try.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  pageTitle = '';
  
  constructor(private service : TryService){
     this.pageTitle = this.service.title;
  }

  
}
