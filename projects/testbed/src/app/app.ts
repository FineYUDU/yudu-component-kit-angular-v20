import { Component, signal } from '@angular/core';

import { YdButton, YdBtnSize, YdBtnStyle } from 'yudu-component-kit';

@Component({
  selector: 'app-root',
  imports: [
    YdButton
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testbed');
  public btnSize = signal<YdBtnSize>('large');
  public btnStyle = signal<YdBtnStyle>('primary');
}
