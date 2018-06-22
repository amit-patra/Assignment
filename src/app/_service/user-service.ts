import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class userService {
  private  ProductList= [
        {id:1, name: "Mobile", price:15000, qty:2},
        {id:2, name: "Laptop", price:10000, qty:1},
        {id:3, name: "Speaker", price:2000, qty:4}
      ]
    constructor(private http: Http) { }
    getProduct() {
        return this.ProductList;
    }
}