import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { registerLocaleData } from '@angular/common';
import localesEs from '@angular/common/locales/es'

registerLocaleData(localesEs)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
