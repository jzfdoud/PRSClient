import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class'
import { HttpClient } from '@angular/common/http';

//const baseurl = "http://jzfdoudc.w30.wh-2.com/prsserver/api/products"
const baseurl = "http://localhost:59525/api/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]>{
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }

  get(id:number): Observable<Product>{
    return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
  }

  create(product:Product): Observable<Product> {
    return this.http.post(`${baseurl}`, product) as Observable<Product>;
  }

  change(product:Product): Observable<any> {
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
  }
  // change(product:Product): Observable<any> {
  //   return this.http.post(`${baseurl}/update/${product.id}`, product) as Observable<any>;
  // }

  remove(id:number): Observable<Product> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Product>;
  }
}
