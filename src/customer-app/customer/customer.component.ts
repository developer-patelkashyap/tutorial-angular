import { Component } from '@angular/core';

import { Customer, CustomerDTO } from './customer.model';

import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './customer.view.html',
})
export class CustomerComponent {
  customer: Customer = new Customer();
  customers: Array<Customer> = [];
  // disable: boolean = false;

  constructor(public http: HttpClient) {
    this.getFromServer();
  }

  addToServer() {
    // this.disable = true;

    let customerDTO: CustomerDTO = new CustomerDTO();
    customerDTO.Code = this.customer.Code;
    customerDTO.Name = this.customer.Name;
    customerDTO.Amount = this.customer.Amount;

    this.http.post('http://localhost:3000/Customers', customerDTO).subscribe(
      (res) => this.success(res),
      (res) => this.error(res)
    );
  }

  getFromServer() {
    this.http.get('http://localhost:3000/Customers').subscribe(
      (res) => this.successGet(res),
      (res) => this.error(res)
    );
  }

  success(res: any) {
    console.log('success');
    // this.disable = false;
    // this.customer = new Customer();
  }

  error(res: any) {
    console.log('error');
  }

  successGet(res: any) {
    console.log('success');
    this.customers = res;
  }

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
    this.customer.Code = _selected.Code;
    this.customer.Name = _selected.Name;
    this.customer.Amount = _selected.Amount;
  }
}
