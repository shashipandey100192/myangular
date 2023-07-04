import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenralService {

  constructor(public http:HttpClient,public routs:ActivatedRoute) { }
  public myurl ="https://jsonplaceholder.typicode.com/posts";



    mydata()
    {
    return this.http.get(this.myurl);
    }


    singledata()
    {
      return this.http.get(`${this.myurl}/${10}`)
    }


}
