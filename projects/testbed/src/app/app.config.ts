import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideYuduI18n } from 'yudu-component-kit/i18n';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    ...provideYuduI18n({
      assetPath: '/assets/lang',
      storageKey: 'lang',
      defaultLang: 'en',
      supportedLangs: ['en', 'es'], // add as many as you want
    }),
  ]
};
