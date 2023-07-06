import { Component, OnInit } from '@angular/core';
import { GenralService } from '../../services/genral.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent implements OnInit {
  constructor(private myservice:GenralService,private rout:ActivatedRoute){}

myid:any;
record:any;

ngOnInit(): void {
    
  this.myid =this.rout.snapshot.paramMap.get('id');
  console.log(this.myid);
  this.mysingledata();
}


mysingledata():void{
  this.myservice.singledata(this.myid).subscribe((x)=>{
    console.log(x);
    this.record = x;

  })
   
}


}

