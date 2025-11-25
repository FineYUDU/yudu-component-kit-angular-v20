import { Component, signal } from '@angular/core';

import { YdIcon } from "./components/yd-icon/yd-icon";

@Component({
  selector: 'app-root',
  imports: [
    YdIcon
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testbed');
}
