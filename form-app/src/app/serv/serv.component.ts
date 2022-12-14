import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { DataServService } from '../data-serv.service';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})


export class ServComponent {

  @Input() item = '';

  @Output() sendItem = new EventEmitter<string>();


  itemEvent(value : string){
    this.sendItem.emit(value);
  }

  // constructor(private data : DataServService){

  // }

}
