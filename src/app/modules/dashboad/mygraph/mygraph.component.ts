import { Component , OnInit} from '@angular/core';
import {FormGroup, FormControl} from  '@angular/forms'
@Component({
  selector: 'app-mygraph',
  templateUrl: './mygraph.component.html',
  styleUrls: ['./mygraph.component.scss']
})
export class MygraphComponent implements OnInit {



   mylist=["Home","About","Contact","service","other","form","select"];

   myobject =[
    {name:'ravi',age:20,phone:'5457874878',address:'new delhi'},
    {name:'kumar',age:20,phone:'5457874878',address:'new delhi'},
    {name:'pankaj',age:20,phone:'5457874878',address:'new delhi'},
    {name:'mohan',age:20,phone:'5457874878',address:'new delhi'},
    {name:'sonhan',age:20,phone:'5457874878',address:'new delhi'},
    {name:'ravi',age:20,phone:'5457874878',address:'new delhi'},
    {name:'ravi',age:20,phone:'5457874878',address:'new delhi'},
    {name:'ravi',age:20,phone:'5457874878',address:'new delhi'},
    {name:'ravi',age:20,phone:'5457874878',address:'new delhi'},
    {name:'ravi',age:20,phone:'5457874878',address:'new delhi'},
    {name:'ravi',age:20,phone:'5457874878',address:'new delhi'}
   ];


   myform:any;
ngOnInit(): void {
      this.mysubmit();
}

mysubmit():void
{
  this.myform=new FormGroup({
    username:new FormControl(),
    age:new FormControl(),
    phone:new FormControl(),
    address:new FormControl()
  })
}

mylog()
{
  console.log(this.myform.value);
}

}
