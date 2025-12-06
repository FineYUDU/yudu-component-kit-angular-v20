import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { YdIcon, YdIconName } from "yudu-component-kit";

import { YdChipSize } from '../../interfaces/yd-chip.interfaces';
@Component({
  selector: 'yd-chip',
  imports: [RouterLink, YdIcon],
  templateUrl: './yd-chip.html',
  host: {
    'class':'yd-chip__container',
  }
})
export class YdChip {
  public label = input.required<string>();
  public route = input<string>();
  public icon = input<YdIconName | undefined>(undefined);
  public size = input<YdChipSize | undefined>('normal');
}
