import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = 'http://localhost:3000/Customer';
  url1='http://localhost:3000/Customer/id';


  constructor(private http: HttpClient) { }

  getCustomer(): Observable<any> {
    return this.http.get(this.url);
  }
  putcustomer( id:any): Observable<any> {
    return this.http.put(this.url1,id);
  }
}
