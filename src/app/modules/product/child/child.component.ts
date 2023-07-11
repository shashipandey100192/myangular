import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() abc:string='';
@Input() arradata:any;
@Input() myproduct:any;
@Input() myarray:any[]=[];


ngOnInit(): void {
    
}

}
