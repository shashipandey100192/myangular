import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenralService {

  constructor(public http:HttpClient) { }
  public myurl ="https://jsonplaceholder.typicode.com/posts";

  
mydata()
{
 return this.http.get(this.myurl);
}


}
