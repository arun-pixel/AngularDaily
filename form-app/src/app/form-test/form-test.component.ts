import { Component } from '@angular/core';
import { FormGroup,FormControl, ControlContainer, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {

  constructor(private fb : FormBuilder){

  }

  forbiddenUserNames = ['arun','dude'];
  
   /* profileForm = new FormGroup({
       firstName : new FormControl('',this.forBiddenNames.bind(this)),
       lastName : new FormControl(''),
       address : new FormGroup({
        street: new FormControl(''),
        city: new FormControl('')
       }),
      hobbies : this.fb.array([
      this.fb.control('')
  ])
  })*/


  // using formbuilder instead of creating form control instances manully
profileForm = this.fb.group({
  firstName : ['',Validators.required],
  lastName : [''],
  address : this.fb.group({
    street : [''],
    city : [''],
  }),
  hobbies : this.fb.array([
    this.fb.control('')
  ])
})

get hobby(){
  return (<FormArray>this.profileForm.get('hobbies') as FormArray).controls;
}

addHobby(){
  (<FormArray>this.profileForm.get('hobbies')).push(this.fb.control(''));
}

forBiddenNames(control : FormControl): {[s : string]: boolean}{
if(this.forbiddenUserNames.indexOf(control.value)){
  console.log('its an error')
  return {'forBiddenUserName' : true}
 
}
else{
console.log('not an error')
  return null;
}
}

  onSubmit(){
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
  }

  updateForm(){
    this.profileForm.patchValue({
      firstName: 'marshall',
      address : {
        city: 'los angels'
      }
    })
  }


}
