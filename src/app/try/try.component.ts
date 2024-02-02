import { Component, OnInit } from '@angular/core';
import { TryService } from '../service/try.service';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {
  title = "Web site"
  tryValue = '"Successfully sent from Try component"';
  constructor(private service: TryService) { }

  ngOnInit(): void {
    //document.getElementById('try').textContent = 'bye';
    //this.changeFn();
  }

  changeFn(){
    document.getElementById('try').textContent = "All the best"
  }

  sendToService(){
    if(true){
      this.service.setData(this.tryValue) ;
    }

    document.getElementById('sendValue').textContent = this.tryValue;
  }
}
