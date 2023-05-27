
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { filter, switchMap, toArray } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-app';
    customers: any[] =[];
  
  constructor(private router: Router,private customer: CustomerService, private http: HttpClient) {}
  
  ngOnInit(): void {
    this.customer.getCustomer().subscribe((data: any) => {
      console.log(data);
      this.customers = data;
    });
    }
  
  searchcus(search: string) {
    this.customer.getCustomer().pipe(
      switchMap(cust => from(cust)),
      filter((customer: any) => customer.email.toLowerCase().includes(search.toLowerCase()) || 
      customer.name.toLowerCase().includes(search.toLowerCase())), 
      toArray() 
    ).subscribe((filteredCustomers: any[]) => {
      console.log(filteredCustomers);
      this.customers = filteredCustomers;
      console.log(this.customers);
    });
  }
  
  

  cusedit:any=[]
  editCustomer(custom: any): void {
    this.cusedit=custom;
    console.log(this.cusedit);
  }
  onSubmit(editForm: any[]){
    console.log(editForm);
    const id = this.cusedit.id;
    this.http.put('http://localhost:3000/Customer/' + id, editForm).subscribe((data: any) => {
      console.log('user updated successfully');
      window.location.reload();
    });
  }
}
