import { NgClass } from '@angular/common';
import { booleanAttribute, Component, input, ViewEncapsulation } from '@angular/core';

export type YdBtnSize = 'small' | 'normal' | 'large';
export type YdBtnStyle = 'primary' | 'secondary' | 'tertiary';
export type YdBtnType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'yd-button',
  imports: [ NgClass ],
  standalone:true,
  templateUrl: './yd-button.html',
  host:{
    '[class.pointer-events--none]':'disabled()',
    '[class.w--100]':'fullSize()',
    'class':'yd-btn__container',
  },
  encapsulation:ViewEncapsulation.None
})
export class YdButton {
  public size = input<YdBtnSize>('normal');
  public buttonStyle = input<YdBtnStyle>('primary');
  public type = input<YdBtnType>('button');
  
  public disabled = input(false,{ transform: booleanAttribute });
  
  public fullSize = input(false, { transform: booleanAttribute });

}
