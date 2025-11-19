import { NgClass } from '@angular/common';
import { booleanAttribute, Component, input, ViewEncapsulation } from '@angular/core';

export type YdBtnSize = 'small' | 'normal' | 'large';
export type YdBtnStyle = 'primary' | 'secondary' | 'tertiary';

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
  public size = input<YdBtnSize>('normal');
  public buttonStyle = input<YdBtnStyle>('primary');
  public type = input<string>('text');
  
  public disabled = input(false,{ transform: booleanAttribute });
  
  public fullSize = input(false, { transform: booleanAttribute });

}
