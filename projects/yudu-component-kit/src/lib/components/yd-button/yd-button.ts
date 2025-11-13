import { NgClass } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';

export enum YdBtnSize {
  small = 'small',
  normal = 'normal',
  large = 'large',
};

export enum YdBtnStyle {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
};

@Component({
  selector: 'yd-button',
  imports: [ NgClass ],
  templateUrl: './yd-button.html',
  styleUrl: '../../styles/classes/yd-button.scss',
  host:{
    '[class.pointer-events--none]':'disabled()',
    '[class.w--100]':'fullSize()',
    'class':'yd-btn__container',
  },
  encapsulation:ViewEncapsulation.None
})
export class YdButton {
  public size = input.required<YdBtnSize>();
  public buttonStyle = input.required<YdBtnStyle>();
  public type = input<string>('text');
  
  public disabled = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });
  
  public fullSize = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });

}
