import { Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { YdIconName, YdIconSize } from '../../interfaces/yd-icon-types';
import { YD_ICON_PRIME_MAP } from '../../interfaces/yd-icon.adapter';

@Component({
  selector: 'yd-icon',
  imports: [NgClass],
  templateUrl: './yd-icon.html',
})
export class YdIcon {
  public size = input<YdIconSize | `${number}${'px' | 'rem'}`>('normal');
  public name = input.required<YdIconName>();
  public color = input<string>('var(--yd-chip-color-primary-text-default)');

  public nameComputed = computed(()=> {
    const name = this.name();
    const mapped = YD_ICON_PRIME_MAP[name];

    if(!mapped) {
      console.warn(`[YuduComponentKit] Icon "${name}" is not mapped. Using "question".`);
      return 'pi-question';
    };

    return `pi-${mapped}`;
  });

  public sizeComputed = computed<string>(()=> {
    const size = this.size();
    const sizeTransform = size === 'small' 
      ? '.8rem'
      : size === 'normal'
      ? '1rem'
      : size === 'large'
      ? '1.5rem'
      : size;
    return sizeTransform;
  });
}