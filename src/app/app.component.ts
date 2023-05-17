
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
  customers: any =[];
  

  constructor(private router: Router,private customer: CustomerService, private http: HttpClient) {}

  ngOnInit(): void {
    this.customer.getCustomer().subscribe(data => {
      this.customers = data;
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
