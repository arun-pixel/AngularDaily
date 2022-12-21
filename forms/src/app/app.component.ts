import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { FormGroup,FormControl, ControlContainer, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

forbidName = ['arun','marshall'];

signUpForm : FormGroup;

fullDetails;

emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


ngOnInit(){
   this.signUpForm = new FormGroup({
    username : new FormControl('',[Validators.minLength(6),this.userNameValidator.bind(this)]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',[Validators.required,this.passwordValidate.bind(this)]),
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
  })

  this.signUpForm.controls.password.valueChanges
  .subscribe(x => this.signUpForm.controls.confirmPassword.updateValueAndValidity())

}




userNameValidator(control : AbstractControl): {[s : string]: boolean}{
  if(control && (control.value != null || control.value !== undefined)){
      if(this.forbidName.indexOf(control.value) !== -1){
        return { userNameNotValid : true }
      }
      else{
        return null
      }
    }
}


passwordValidate(control : AbstractControl){
  if(control && (control.value != null || control.value !== undefined)){
    const cnfmPassword = control.value;
    const password = control.root.get('password');
    if(password){
      const passwordValue = password.value;
      if(passwordValue !== cnfmPassword){
        return{ passwordNotMatched : true }
      }
    }
    return null;
  }
}

onSubmit(){
this.fullDetails = {
  username : this.signUpForm.get('username').value,
  password : this.signUpForm.get('password').value,
  confirmPassword : this.signUpForm.get('confirmPassword').value,
  email : this.signUpForm.get('email').value
}

console.log(this.fullDetails);

this.signUpForm.reset();
}


// emailValidate(control : AbstractControl): {[s : string]: boolean}{
//   if(control && (control.value != null || control.value !== undefined)){
//       if(control.value === '123@gmail.com'){
//         return { forbiddenEmail : true }
//       }else{
//         return null
//       }
//     }
// }

// userV;

// valid(){

// if(this.signUpForm.get('username').errors['userNameNotValid'] !== null){
//   console.log('okay');
//   // return true;
//   this.userV= true;
// }
// else{
//   // return false;
//   this.userV= false;
// }

// }

// ngOnChanges(changes: SimpleChanges) {
//   this.valid();
// }

// valid(ch){


// }

// changes(change ){
//   console.log(change);
//   this.valid(change);

// }
}
