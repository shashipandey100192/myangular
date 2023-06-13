import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

b:number=0;
c:any;
d:number=0;
f:number=0;
total:number=0;
mydate = Date.now();
myfun = ()=>{
alert("hi");
}
abc: any;
kumar: any;
myinput:any;

ngOnInit() {
  this.myfun();  
  this.myfirst();  
  this.mynumber();

 

}

    myfirst():void
    {
    this.b=500;
      // alert(this.b);
      // this.c= prompt("enter name");
      // document.bgColor=this.c;
      document.body.style.backgroundColor=`${this.c}`;
    }
   mynumber():void
   {
      this.d=800;
      this.f=400;
    this.total = this.d+this.f;
    console.log(this.total);

   }
    
x:number=500;


fs:number=20;
xyz:boolean=true;
myvar:boolean =true;

mytext():void
{
  if(this.myinput=="kumar")
  {
    alert("hi kumar")
  }
}


}
