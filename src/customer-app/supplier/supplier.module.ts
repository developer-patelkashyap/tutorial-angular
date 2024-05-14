import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SupplierComponent } from './supplier.component';

import { RouterModule } from '@angular/router';

import { routes } from './supplier.routing';

@NgModule({
  declarations: [SupplierComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [SupplierComponent],
})
export class SupplierModule {}
