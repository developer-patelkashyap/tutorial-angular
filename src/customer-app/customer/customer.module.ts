import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';

import { RouterModule } from '@angular/router';

import { routes } from './customer.routing';

import { ReactiveFormsModule } from '@angular/forms';

import { GridComponent } from '../common/grid/grid.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomerInterceptor } from '../interceptors/customer.interceptor';
@NgModule({
  declarations: [CustomerComponent, GridComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomerInterceptor, multi: true },
  ],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
