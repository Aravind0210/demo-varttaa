// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),        // ✅ Provide routes here
    provideHttpClient(),
    ...(appConfig.providers || []), // ✅ Use zone optimization etc.
  ],
}).catch(err => console.error(err));
