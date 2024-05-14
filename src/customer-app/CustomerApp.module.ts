import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './customer/customer.component';

import { FormsModule } from '@angular/forms';

import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component';

import { RouterModule } from '@angular/router';

import { routes } from './CustomerApp.routing';

@NgModule({
  declarations: [
    CustomerComponent,
    MasterComponent,
    HomeComponent,
    SupplierComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [MasterComponent],
})
export class CustomerAppModule {}
