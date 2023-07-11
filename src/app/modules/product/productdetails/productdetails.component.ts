import { Component,OnInit } from '@angular/core';
import { GenralService } from '../../services/genral.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  constructor(private myser:GenralService){}

  list:any = 505454;
  mydata=[
    {
      name:'kumar',
      age:20,
      email:'kumar@gmail.com'
    },
    {
      name:'pankaj',
      age:30,
      email:'pankaj@gmail.com'
    },
    {
      name:'mohan',
      age:25,
      email:'mohan@gmail.com'
    },
    {
      name:'pooja',
      age:24,
      email:'pooja@gmail.com'
    }
  ];

  product=[
    "jan","feb","march","apr"
  ];


 ngOnInit(): void {
  this.myalldata();
 }


myid:any[]=[];
myalldata():void{
  this.myser.mydata().subscribe((d:any)=>{
    console.log(d);
    // this.myid = d[0].id;
    this.myid = d;
    console.log(this.myid);
  })
}


}
