import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomerAppModule } from './customer-app/CustomerApp.module';

platformBrowserDynamic().bootstrapModule(CustomerAppModule)
  .catch(err => console.error(err));
