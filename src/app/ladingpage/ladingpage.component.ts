import { Component } from '@angular/core';

@Component({
  selector: 'app-ladingpage',
  templateUrl: './ladingpage.component.html',
  styleUrls: ['./ladingpage.component.scss']
})
export class LadingpageComponent {

   a:number=80;
   b:string="kumar";
   t:number=80;
   y:boolean =false;
    name:any = "kumar";
    myarr:number[]=[10,20,30,50,40,20];
    mytype:string="text";
    x:string = "5";
    
  myfun =()=>{
    alert("hi");
  }

  myfun1 = function()
  {
    console.log("hi");
  }

  myret = ()=>{
    return 400;
  }




   constructor()
  {
    let d:number =8000;
    let mynew = ()=>{
      alert("hi");
    }
  }




  
}
