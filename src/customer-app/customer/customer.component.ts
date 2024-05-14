import { Component } from '@angular/core';

import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.view.html',
})
export class CustomerComponent {
  customer: Customer = new Customer();
  customers: Array<Customer> = [];

  add() {
    this.customers.push(this.customer);
    this.customer = new Customer();
  }
}
