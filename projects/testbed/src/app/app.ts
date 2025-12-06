import { Component, inject } from '@angular/core';

import { LocalStorageStore } from 'yudu-component-kit';

import { Main } from "./views/main/main";
@Component({
  selector: 'app-root',
  imports: [Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private localStorageStore = inject( LocalStorageStore );
}
