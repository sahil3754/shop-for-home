import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Products = new BehaviorSubject<any>(null);
   
  constructor(private http : HttpClient) { 
  }

  getProduct(){
    return this.http.get<any>("http://localhost:8081/products")
    .pipe(map((res:any)=>{
      this.Products.next(res);
      return res;
    }))
  }

    getProductByCategory(category: string) {
      return this.http.get<any>('http://localhost:8081/products/category?category='.concat(category))
    .pipe(map((res:any)=>{
      return res;
    }))
    }

    login(username: string, password: string){
      const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
      return this.http.post<any>('http://localhost:9192/login', { username: username, password: password}, {headers}).subscribe(data => {
        return data;
    })
    }

  }
