import { Component, input, output, signal } from '@angular/core';

import { YdIcon } from "yudu-component-kit";

import { Notifications, NotificationsFilter } from '../../../interfaces/yd-notifications.interfaces';


@Component({
  selector: 'yd-notifications',
  imports: [YdIcon],
  templateUrl: './yd-notifications.html',
  host: {
    'class':'yd-notifications',
    '[class.open]':'dropdownIsOpen()'
  }

})
export class YdNotifications {
  public toggleEmit = output<boolean>();

  public dropdownIsOpen = input.required<boolean>();
  public notificationsTitle = input.required<string>();
  public filtersOptions = input.required<NotificationsFilter[]>();

  public filterBy = signal<string>('all'); 
  public notifications = input.required<Notifications[]>();

  public toggleDropdown( event:boolean ):void {
    this.toggleEmit.emit( this.dropdownIsOpen() );
  };

  public selectFilter(filter:string):void {
    this.filterBy.set(filter);
  };

}
