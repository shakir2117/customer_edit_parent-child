
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-app';
  customers: any =[
    // { id: 1, name: 'Rajesh Kumar', email: 'rajesh.kumar@example.com', phone: '+91 555-123-4567' },
    // { id: 2, name: 'Priya Singh', email: 'priya.singh@example.com', phone: '+91 555-234-5678' },
    // { id: 3, name: 'Amit Patel', email: 'amit.patel@example.com', phone: '+91 555-345-6789' },
    // { id: 4, name: 'Sneha Sharma', email: 'sneha.sharma@example.com', phone: '+91 555-456-7890' },
    // { id: 5, name: 'Vikram Singh', email: 'vikram.singh@example.com', phone: '+91 555-567-8901' },
    // { id: 6, name: 'Neha Gupta', email: 'neha.gupta@example.com', phone: '+91 555-678-9012' },
    // { id: 7, name: 'Rahul Sharma', email: 'rahul.sharma@example.com', phone: '+91 555-789-0123' },
    // { id: 8, name: 'Anjali Patel', email: 'anjali.patel@example.com', phone: '+91 555-890-1234' },
    // { id: 9, name: 'Alok Verma', email: 'alok.verma@example.com', phone: '+91 555-901-2345' },
    // { id: 10, name: 'Sarika Singh', email: 'sarika.singh@example.com', phone: '+91 555-012-3456' }
  ];
  

  constructor(private router: Router,private customer: CustomerService, private http: HttpClient) {}

  ngOnInit(): void {
    this.customer.getCustomer().subscribe(data => {
      this.customers = data;
    });
  
  }
  cusedit=''
  editCustomer(customer: any): void {
    this.cusedit=customer
    console.log(this.cusedit);
  }
}
