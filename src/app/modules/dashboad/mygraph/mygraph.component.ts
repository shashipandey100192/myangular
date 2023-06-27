import { Component } from '@angular/core';

@Component({
  selector: 'app-mygraph',
  templateUrl: './mygraph.component.html',
  styleUrls: ['./mygraph.component.scss']
})
export class MygraphComponent {



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
}
