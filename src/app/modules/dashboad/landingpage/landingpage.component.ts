import { Component,OnInit } from '@angular/core';;
import { GenralService } from '../../services/genral.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit{
constructor(private myservice:GenralService){}

myarry:any

myalldata():void{
  this.myservice.mydata().subscribe((e)=>{
    this.myarry=e;
    console.log(this.myarry);
  })
}
ngOnInit(): void {
  this.myalldata();  

}





}
