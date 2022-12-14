import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { DataServService } from './data-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  currentItem =  'Beserk';


  items = ['item1','items2','items3','items4'];


  addToParent(val : string){
    this.items.push(val);
  }
// private data;
//   constructor(data : DataServService){

//   }
  /*genders = ['male', 'female'];

  signupform : FormGroup;



  ngOnInit(){
  this.signupform = new FormGroup({
    'userData': new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    }),
  'gender': new FormControl('male'),
  'hobbies': new FormArray([])
})
} 

forBiddenNames = []


addControl(){
  const control = new FormControl(null, Validators.required);
(<FormArray>this.signupform.get('hobbies')).push(control);

}

getControls(){
  return (<FormArray>this.signupform.get('hobbies')).controls;
}

onSubmit(){
  console.log(this.signupform);
}*/
  

name = new FormControl('');


updateName(){
  this.name.setValue('eminem');
}

count;

playersDetails;

customPlayer = {
  myname : ''
}

// constructor(private data : DataServService){
// this.count = this.data.count;

// this.playersDetails = this.data.player;

// this.customPlayer.myname = this.data.details.name;


// }

myForm: FormGroup;



}
