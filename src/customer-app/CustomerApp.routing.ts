import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';

export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: '', component: HomeComponent },
];
