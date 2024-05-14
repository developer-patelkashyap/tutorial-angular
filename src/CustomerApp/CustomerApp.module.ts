import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerAppComponent } from './CustomerApp.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerAppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [CustomerAppComponent],
})
export class CustomerAppModule {}
