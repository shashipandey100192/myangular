import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginform=new FormGroup({
    user:new FormControl(),
    pass: new FormControl()
  })

u:string ="kumar";
p:string="singh";
localuser:any;
localpass:any;
users:any;

ngOnInit(): void {
   localStorage.setItem("user1",this.u);
   localStorage.setItem("pass1",this.p);


}

mysubmit():void
{
  this.localuser = localStorage.getItem("user1");
  this.localpass = localStorage.getItem("pass1");
  console.log(this.loginform.value);
  // this.users = this.loginform.value.user;
  // console.log(this.users);
    if(this.localuser == this.loginform.value.user && this.localpass == this.loginform.value.pass)
    {
      alert("welcome");
      location.href="/dashboard";
    }
    else{
      alert("wrong");
    }


}


}
