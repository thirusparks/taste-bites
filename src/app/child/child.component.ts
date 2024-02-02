import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: any;

  @Output() sendData: EventEmitter<any> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  sendDat(data): void{
    this.sendData.emit(data);
  }

}
