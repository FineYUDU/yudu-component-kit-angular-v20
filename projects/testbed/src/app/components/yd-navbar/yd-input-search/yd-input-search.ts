import { booleanAttribute, Component, input, output, signal } from '@angular/core';
// TODO: Replaced
import { YdIcon, YdIconName } from 'yudu-component-kit';

@Component({
  selector: 'yd-input-search',
  imports: [ YdIcon ],
  templateUrl: './yd-input-search.html',
  host:{
    'class':'yd-input__container',
    '[class.w--100]':'fullSize()'
  },
})
export class YdInputSearch {
  public emitQuery = output<string>();

  public fullSize = input(false, { transform: booleanAttribute });
  public placeholder = input<string | undefined >();
  
  public icon = signal<YdIconName | null>('search');

  public onSearch(query:string):void {
    this.emitQuery.emit(query);
  };

}
