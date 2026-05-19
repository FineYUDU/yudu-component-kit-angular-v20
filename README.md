<p align="center">
  <img
    src="./projects/yudu-component-kit/assets/logo.svg"
    alt="Logo Fine Dev"
    width="250"
    
  />
</p>
<h1 align="center">
  YuduComponentKit
</h1>

![last update](https://img.shields.io/github/last-commit/FineYUDU/yudu-component-kit?label=last%20update)


## ⚠️ **This library is currently under construction.**
- Some features, components, and styles may change in future versions.



## Table of contents
- [Features](#features)
- [Components list](#components-list)
- [Status](#status)
- [Quick start](#quick-start)
- [i18n](#i18n)

## Features
- ⚡ Built for Angular **v20+**
- 🧱 Atomic and modular architecture
- 🌗 Supports **Dark / Light** themes
- 🧩 Reusable UI components (Buttons, Cards, Modals, etc.)
- 🧪 100% compatible with **Angular CLI**, **Standalone Components**, and **SSR**

## Components list
- Button ✅
- Chip ✅
- Icons ✅
- Input ✅
- Navbar 👷🏾
- Footer 👷🏾
- Sidebar 👷🏾

## Status
<!-- ![Vitest](https://img.shields.io/badge/testing-Vitest-blue) -->
![Angular](https://img.shields.io/badge/Angular-v20%2B-red)
![npm](https://img.shields.io/npm/v/yudu-component-kit)
![Karma](https://img.shields.io/badge/testing-Karma-blueviolet)
![coverage](https://img.shields.io/badge/coverage-78.4%25-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

## Quick start
Install with npm:
```bash
npm i yudu-component-kit
```

### Configuration
Before using the UI components, you must initialize the theme service.
This library includes a service called `LocalStorageStore` that:

- creates the `theme` key in `localStorage` (default: `dark`)
- applies the corresponding CSS classes (`theme--dark` / `theme--light`) to the `<body>`

This initialization does not happen automatically. You need to inject the service at least once, preferably in your root component.

```ts
// app.component.ts (standalone)
import { Component, inject } from '@angular/core';
import { LocalStorageStore } from 'yudu-component-kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // injecting the service will run its constructor and apply the theme classes
  private readonly localStorageStore = inject(LocalStorageStore);
}
```

Important: if you don’t inject the service, the theme classes won’t be applied and the global styles may not look as expected.

YuduComponentKit ships a design-system stylesheet with tokens (CSS variables), base rules, and theme selectors. You must include it in your app.
```angular.json``` this line: ```"node_modules/yudu-component-kit/src/lib/styles/index.design-system.scss"```
```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.css",
              "node_modules/yudu-component-kit/src/lib/styles/index.design-system.scss"
            ]
          }
        }
      }
    }
  }
}
```

## i18n

YuduComponentKit includes an optional **i18n** entry point that provides a lightweight translation service based on JSON files stored in your app’s `assets` folder.

### Install
If you already installed the library, you’re done:
```bash
npm i yudu-component-kit
```

### Setup

1) **Enable HttpClient** (required to load JSON files)
```ts
// app.config.ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [provideHttpClient()],
};
```

2) **Provide i18n configuration**
```ts
// app.config.ts
import { provideHttpClient } from '@angular/common/http';
import { provideYuduI18n } from 'yudu-component-kit/i18n';

export const appConfig = {
  providers: [
    provideHttpClient(),
    ...provideYuduI18n({
      assetPath: '/assets/lang',
      storageKey: 'lang',
      defaultLang: 'en',
      supportedLangs: ['en', 'es'], // add as many as you want
    }),
  ],
};
```

3) **Create translation files inside your app**
Create these files:
- `src/assets/lang/en.json`
- `src/assets/lang/es.json`

Example:

`src/assets/lang/en.json`
```json
{
  "home": {
    "title": "Hello"
  },
  "error": {
    "unknown": "Connection error. Please try again later."
  }
}
```

`src/assets/lang/es.json`
```json
{
  "home": {
    "title": "Hola"
  },
  "error": {
    "unknown": "Error de conexión. Intenta más tarde."
  }
}
```

### Usage

Inject the service and translate using dot-notation keys:

```ts
import { Component, inject } from '@angular/core';
import { I18nService } from 'yudu-component-kit/i18n';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ t.translate('home.title') }}</h1>
    <button (click)="t.changeLang()">Toggle language</button>
  `,
})
export class AppComponent {
  t = inject(I18nService);
}
```

### How it works
- The current language is persisted in `localStorage` using the configured `storageKey` (default: `lang`).
- Translation files are loaded from: `${assetPath}/${lang}.json` (default: `/assets/lang/{lang}.json`).
- Loaded dictionaries are cached in memory to avoid re-downloading.
- If a key doesn’t exist, `translate()` returns the key itself (useful to detect missing translations).

### Adding more languages
1) Add the new language JSON file in your app, for example:
- `src/assets/lang/fr.json`

2) Add it to `supportedLangs`:
```ts
...provideYuduI18n({
  supportedLangs: ['en', 'es', 'fr']
})
```

---
<p align="center">
  Made with ❤️ by "Fine Yudu" 2025<br/>
  This project uses Angular CLI version 20.3.8
</p>
