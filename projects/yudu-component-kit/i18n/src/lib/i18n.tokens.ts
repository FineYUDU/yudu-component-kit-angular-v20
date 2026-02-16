import { InjectionToken, Provider } from '@angular/core';

export interface I18nOptions {
  assetPath: string;                 
  storageKey: string;                
  defaultLang: string;               
  supportedLangs?: readonly string[];
}

export const DEFAULT_I18N_OPTIONS: I18nOptions = {
  assetPath: '/assets/lang',
  storageKey: 'lang',
  defaultLang: 'en',
  supportedLangs: undefined,
};

export const I18N_OPTIONS = new InjectionToken<I18nOptions>(
  'YUDU_I18N_OPTIONS',
  { factory: () => DEFAULT_I18N_OPTIONS }
);

export function provideYuduI18n(options: Partial<I18nOptions> = {}): Provider[] {
  return [
    {
      provide: I18N_OPTIONS,
      useValue: { ...DEFAULT_I18N_OPTIONS, ...options },
    },
  ];
}
