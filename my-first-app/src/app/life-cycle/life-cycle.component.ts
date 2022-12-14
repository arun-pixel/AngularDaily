import { Component , Input, OnInit, OnDestroy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  template: `<h1>Hello {{name}}</h1>`,
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnDestroy , OnChanges{
  @Input () name : string;

  timeInstance = null;

  constructor(){
    console.log(this.name)
  }

  ngOnChanges(changes){
   console.log('on changes',changes)
  }

  ngOnInit(): void {
    console.log('component instialized')

 /* this.timeInstance = setInterval(() => {
      console.log(new Date());
    },1000)*/
  }

  ngOnDestroy(): void {
    console.log('component destroyed')
    if(this.timeInstance){
      clearInterval(this.timeInstance);
    }
  }


}
