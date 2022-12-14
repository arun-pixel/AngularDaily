import { Component, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
// @Input() receivedName : string;

@Input()dude = 'crazy';

proName = 'Killshot';

proVal = 'property working';

num1 = 20;
num2 = 30;
disable = false;

valueName = 'Arun';
print(event){
  console.log(event);
  this.valueName = event.target.value;
}

@Output() sendData : EventEmitter<any> = new EventEmitter<any>();

sendDataTransfer(){
  this.sendData.emit('sending data to parent');
}


}
