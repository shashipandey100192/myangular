import { Component,OnInit } from '@angular/core';;
import { GenralService } from '../../services/genral.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit{
constructor(private myservice:GenralService,private myrout:ActivatedRoute){}
myaddress:any;
myarry:any
mycurid:any;
myalldata():void{
  this.myservice.mydata().subscribe((e)=>{
    this.myarry=e;
    console.log(this.myarry);
  })
}
ngOnInit(): void {
  this.myalldata();  
  this.mysecondapifunction();
 
 
}


mydeleterecord(id:any):void
{
  // this.mycurid=this.myrout.snapshot.paramMap.get('id');
  // console.log(this.mycurid);
  this.myservice.mydelete(id).subscribe(()=>{
    console.log(id);
    alert("data is deleted");
  })

}


mysecondapifunction():void
{
  this.myservice.mynewapi().subscribe((data)=>{
    // console.log(data);
    this.myaddress = data;
    console.log(this.myaddress[0].email);
    

  })
}

 

}

