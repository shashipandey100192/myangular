import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.scss']
})
export class MyformsComponent {
  mydata1:any;
  fullname:any;

  myform = new FormGroup({
    fullname: new FormControl('ravi singh'),
    email:new FormControl('ravi@gmai.com'),
    address:new FormControl(''),
    phone:new FormControl(''),
    password:new FormControl(''),
    option:new FormControl('')
  });


mydata():void{
  console.log(this.myform.value);
  this.mydata1=this.myform.value;
this.fullname = this.mydata1.fullname;
  console.log(this.mydata1.fullname);
  
// localStorage.setItem("myd",`${this.myform}`);
// localStorage.setItem("myd",JSON.stringify(()=>{
//   return this.myform
// }));

}




}
