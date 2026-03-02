import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { routes } from './app.routes';
import { AuthInterceptor } from './shared/intercepters/auth.interceptors';
import { LoaderInterceptor } from './shared/services/loader.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },

   
    provideHttpClient(withInterceptorsFromDi()),
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
};
