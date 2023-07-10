import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenralService {

  constructor(public http:HttpClient,public routs:ActivatedRoute) { }
  public myurl ="https://jsonplaceholder.typicode.com/posts";
  public mysecond = "https://jsonplaceholder.typicode.com/users";



    mydata()
    {
    return this.http.get(this.myurl);
    }

    singledata(id:any)
    {
      let ids = id;
      return this.http.get(`${this.myurl}/${ids}`)
    }

    mydelete(id:any)
    {
      let ids = id;
      return this.http.delete(`${this.myurl}/${ids}`)
    }

    mynewapi()
    {
      return this.http.get(this.mysecond);
    }


}
