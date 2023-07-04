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

id:string | undefined | null
record:any;

ngOnInit(): void {
    
  
  this.id =this.rout.snapshot.paramMap.get('id');
  console.log(this.id);
  this.mysingledata();
}


mysingledata():void{
  this.myservice.singledata().subscribe((d)=>{
    console.log(d);
    this.record = d;
  })
}


}

