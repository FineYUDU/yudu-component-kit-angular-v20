// icon-adapter.token.ts
import { InjectionToken } from '@angular/core';
import { IconAdapter } from './icon-adapter.interface';

export const ICON_ADAPTER = new InjectionToken<IconAdapter>('ICON_ADAPTER');