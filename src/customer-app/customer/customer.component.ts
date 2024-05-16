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
    console.log(this.customers);
  }

  hasError(typeOfValidator: string, controlName: string): boolean {
    return this.customer.customerFormGroup.controls[controlName].hasError(
      typeOfValidator
    );
  }

  setSelectedCustomer(_selected: Customer) {
    this.customer = _selected;
  }
}
