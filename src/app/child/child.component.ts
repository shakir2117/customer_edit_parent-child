import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() customer: any;
  constructor(private customers: CustomerService){}

  onSubmit(): void {
    this.customers.putcustomer(this.customer).subscribe(
      (data: any) => {
        console.log('user updated successfully')
      }
    )
    location.reload();
}
}
