import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomerAppModule } from './CustomerApp/CustomerApp.module';


platformBrowserDynamic().bootstrapModule(CustomerAppModule)
  .catch(err => console.error(err));
