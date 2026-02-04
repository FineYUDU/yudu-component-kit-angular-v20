import { Component, input, output, signal } from '@angular/core';

import { Notifications } from '../../../interfaces';

import { YdIcon } from '../../yd-icon/yd-icon';

@Component({
  selector: 'yd-notifications',
  imports: [ YdIcon ],
  templateUrl: './yd-notifications.html',
  host: {
    'class':'yd-notifications',
    '[class.open]':'dropdownIsOpen()'
  }

})
export class YdNotifications {
  public toggleEmit = output<boolean>();

  public dropdownIsOpen = input.required<boolean>();
  public filterBy = signal<string>('all'); 
  public notifications = input.required<Notifications[]>();

  public toggleDropdown( event:boolean ):void {
    this.toggleEmit.emit( this.dropdownIsOpen() );
  };

  public selectFilter(filter:string):void {
    this.filterBy.set(filter);
  };

}
