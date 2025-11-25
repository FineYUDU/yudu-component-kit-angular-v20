import { Component, signal } from '@angular/core';

import { YdChip } from "./components/yd-chip/yd-chip";

@Component({
  selector: 'app-root',
  imports: [
    YdChip
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testbed');
}
