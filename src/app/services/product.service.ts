import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { find, filter } from 'rxjs/operators';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() : Observable<any> {
    return this.http.get('http://localhost:4200/assets/productList.json')
  } 
}
