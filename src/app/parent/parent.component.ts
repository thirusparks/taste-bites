import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obj = {
    name: "Thiru"
  }

  receivedData = ''
  //@Output() sendData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onReceiving(data){
    this.receivedData = data;
  }

 

}
