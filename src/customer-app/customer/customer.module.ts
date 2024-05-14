import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';

import { RouterModule } from '@angular/router';

import { routes } from './customer.routing';

@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
