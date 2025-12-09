<p align="center">
  <img
    src="./assets/logo.svg"
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
- Input 👷🏾
- Header 👷🏾
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
---
<p align="center">
  Made with ❤️ by "Fine Yudu" 2025<br/>
  This project uses Angular CLI version 20.3.8
</p>