import { Component, signal } from '@angular/core';

import { YdIcon } from "./components/yd-icon/yd-icon";
import { YdIconName, YdIconSize } from './interfaces/yd-icon.types';

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
  public readonly iconName = signal<YdIconName>('check');
  public readonly iconSize = signal<YdIconSize>('large');
}
