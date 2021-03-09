import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class'

const baseurl = "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requests"
//const baseurl = "http://localhost:59525/api/requests"

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  approve(request:Request): Observable<any> {
    return this.http.put(`${baseurl}/approve`, request) as Observable<any>;
  }
  reject(request:Request): Observable<any> {
    return this.http.put(`${baseurl}/reject`, request) as Observable<any>;
  }
  autorev(request:Request): Observable<any> {
    return this.http.put(`${baseurl}/review`, request) as Observable<any>
  }
  reviews(id:number): Observable<Request[]> {
    return this.http.get(`${baseurl}/review/${id}`) as Observable<Request[]>;
  }

  list(): Observable<Request[]> {
    return this.http.get(`${baseurl}`) as Observable<Request[]>;
  }

  get(id:number): Observable<Request>{
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }

  create(request:Request): Observable<Request> {
    return this.http.post(`${baseurl}`, request) as Observable<Request>;
  }

  change(request:Request): Observable<any> {
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<any>;
  }

  remove(id:number): Observable<Request> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Request>;
  }
}
