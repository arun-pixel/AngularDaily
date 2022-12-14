import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './imgpage.component.html',
  styleUrls: ['./imgpage.component.css']
})
export class ImgpageComponent {

  @Input('diffTest') test: string;

     clicked = false;
     title = 'sing for the moment';

     car = {
      name: "vintage",
      img: "assets/car2.jpg",
      year: 'build in 2002'
     };


     handleClick(){
     this.clicked = true;
    }

}

