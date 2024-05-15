import { Component } from '@angular/core';
import { BaseLogger } from '../utility/logger.provider';

@Component({
  selector: 'app-root',
  templateUrl: './master.view.html',
})
export class MasterComponent {
  title = 'Customer Application';
  logger!: BaseLogger;

  constructor(_logger: BaseLogger) {
    this.logger = _logger;
    this.logger.log();
  }
}
