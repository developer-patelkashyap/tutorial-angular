import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../utility/logger.provider';

@Component({
  templateUrl: './home.view.html',
})
export class HomeComponent {
  title = 'Home Page';
  logger!: BaseLogger;

  constructor(_injector: Injector) {
    this.logger = _injector.get('1');
    this.logger.log();
  }
}
