import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withRouterConfig({
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'reload',
  }), withHashLocation()), provideClientHydration(), provideHttpClient(withFetch())]
};
