import { Component ,OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.scss']
})
export class RegistorComponent implements OnInit {

datalist=[{}];
mygetdata:any;

 myform=new FormGroup({
    username: new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    address:new FormControl(),
    pass: new FormControl(),
    repass: new FormControl()
  })

ngOnInit(): void {
  this.getdataformlocal()

}


submitform()
{
  console.log(this.myform.value);
  this.datalist.push(this.myform.value);
  console.log(this.datalist);
  // this.myform.reset();
  this.mylocalstorage();
  this.getdataformlocal();
}

mylocalstorage()
{
  // localStorage.setItem("mydata",`${this.datalist}`);
  localStorage.setItem("mydata",JSON.stringify(this.datalist));
}


getdataformlocal()
{
  this.mygetdata = JSON.parse(localStorage.getItem("mydata") || '{}');
  console.log(this.mygetdata);
}



}
