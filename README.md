<!-- ![Logo Fine Dev](./projects/yudu-component-kit/assets/logo-fine-dev.png-->
# YuduComponentKit

## ⚠️ **This library is currently under construction.**

- Some features, components, and styles may change in future versions.

## 🚀 Features
- ⚡ Built for Angular **v20+**
- 🧱 Atomic and modular architecture
- 🌗 Supports **Dark / Light** themes
- 🧩 Reusable UI components (Buttons, Cards, Modals, etc.)
- 🧪 100% compatible with **Angular CLI**, **Standalone Components**, and **SSR**

## Components status
- Button ✅
- Header 👷🏾
- Footer 👷🏾
- Sidebar 👷🏾

## 📦 Installation

```bash
npm i yudu-component-kit
```


## ⚠️ Important
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

## ✍🏾 Register styles
YuduComponentKit ships a design-system stylesheet with tokens (CSS variables), base rules, and theme selectors. You must include it in your app.
```angular.json```
```ts
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
Made with ❤️ by "Fine Yudu"
This project using Angular CLI version 20.3.8
</p>