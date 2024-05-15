import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

import { routes } from './CustomerApp.routing';

import {
  BaseLogger,
  ConsoleLogger,
  ErrorLogger,
} from './utility/logger.provider';

@NgModule({
  declarations: [MasterComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [
    {
      provide: BaseLogger,
      useClass: ConsoleLogger,
    },
    {
      provide: '1',
      useClass: ErrorLogger,
    },
    {
      provide: '2',
      useClass: ConsoleLogger,
    },
  ],
  bootstrap: [MasterComponent],
})
export class CustomerAppModule {}
