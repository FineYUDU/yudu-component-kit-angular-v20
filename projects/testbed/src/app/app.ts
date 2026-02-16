import { Component, inject } from '@angular/core';

import { LocalStorageStore } from 'yudu-component-kit';

import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private localStorageStore = inject( LocalStorageStore );
}
