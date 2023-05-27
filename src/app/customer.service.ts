import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = 'http://localhost:3000/Customer';


  constructor(private http: HttpClient) { }

  getCustomer(): Observable<any> {
    return this.http.get(this.url)
  }
  // putcustomer( editForm: any): Observable<any> {
  //   return this.http.put(this.url1,editForm);
  // }
}
