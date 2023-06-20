import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.scss']
})
export class MyformsComponent {
  submitted = false;

  myform = new FormGroup({
    username: new FormControl('ravi singh',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required])
  });

  get f(): any {
    return this.myform.controls;
  }
  
  loginsubmit():void{
    this.submitted=true;
    if(this.myform.errors)
    {
      return
    }
    console.log(this.myform.value)

  }



}
