import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getData(){
    let myObservable = this.http.get('http://localhost:3000/blogs');
    return myObservable;
  }

  addData(blog:any){
    return this.http.post('http://localhost:3000/blogs',blog);
  }


}
