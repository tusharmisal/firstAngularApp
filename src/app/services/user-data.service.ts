import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http:HttpClient) { }

  rootUri:string ="https://reqres.in/";
  //register method
  getUser():Observable<any>{
    return this.http.get(this.rootUri+'api/users?page=2');//Remove 1 from here to get it working 
  }
  saveUser(userData:any) : Observable<any>{
    return this.http.post(this.rootUri+'api/users?page=2',userData);
  }
}
