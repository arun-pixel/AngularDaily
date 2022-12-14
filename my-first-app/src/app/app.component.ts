import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  name = 'Arun';
  show = false;
  //parentName: string;
  title: string;
  test = 'this is a message';

  receiveData(event){
    console.log(event);
  }


  constructor(){

  }

  toggleName(){
    this.show = !this.show;
  }

 

}
