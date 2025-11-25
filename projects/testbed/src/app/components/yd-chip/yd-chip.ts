import { Component, computed, input } from '@angular/core';
import { Chip } from '../../interfaces/chip.interfaces';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'yd-chip',
  imports: [RouterLink],
  templateUrl: './yd-chip.html',
  host: {
    'class':'yd-chip__container'
  }
})
export class YdChip {
  public chips = input.required<Chip[]>();

  public chipsList = computed<Chip[]>(()=> this.chips());
}
