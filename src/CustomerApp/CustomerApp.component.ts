import { Component } from '@angular/core';

import { Customer } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
})
export class CustomerAppComponent {
  title = 'CustomerApplication';
  customer: Customer = new Customer();
  customers: Array<Customer> = [];

  add() {
    this.customers.push(this.customer);
    this.customer = new Customer();
  }
}
