import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withRouterConfig({
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'reload',
    
  })), provideClientHydration(), provideHttpClient(withFetch())]
};
