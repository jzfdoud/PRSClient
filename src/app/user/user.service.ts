import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

//const baseurl = "http://jzfdoudc.w30.wh-2.com/prsserver/api/users";
const baseurl = "http://localhost:59525/api/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string): Observable<User> {
    return this.http.get(`${baseurl}/${username}/${password}`) as Observable<User>
  }
  list(): Observable<User[]>{
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  get(id:number): Observable<User>{
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }

  create(user:User): Observable<User> {
    return this.http.post(`${baseurl}`, user) as Observable<User>;
  }

  change(user:User): Observable<any> {
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<any>;
  }
  // change(user:User): Observable<any> {
  //   return this.http.post(`${baseurl}/update/${user.id}`, user) as Observable<any>;
  // }

  remove(id:number): Observable<User> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<User>;
  }
}
