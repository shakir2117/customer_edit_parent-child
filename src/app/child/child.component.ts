import { Component, Input,Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  editForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', Validators.required],
  });

  @Input() customer: any = [];

  @Output() updateCustomer = new EventEmitter<any>();

  constructor(private customers: CustomerService, private fb: FormBuilder,private http: HttpClient) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customer'] && changes['customer'].currentValue) {
      this.editForm.patchValue({
        name: this.customer.name,
        email: this.customer.email,
        phone: this.customer.phone,
      });
    }
  }

  onSubmit(): void {
  this.editForm.reset();
  }
}
