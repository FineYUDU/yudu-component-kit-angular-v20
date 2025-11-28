import { Component, inject, signal } from '@angular/core';

import { LocalStorageStore } from 'yudu-component-kit';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private localStorageStore = inject( LocalStorageStore );

  protected readonly title = signal('testbed');
}
