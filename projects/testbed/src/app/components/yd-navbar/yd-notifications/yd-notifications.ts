import { Component, input, output, signal } from '@angular/core';
import { YdIcon, YdIconName } from "yudu-component-kit";

export interface Notifications {
  icon:YdIconName;
  hour:string;
  title:string;
  message:string;
  route?:string;
}

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
  public filterBy = signal<string>('all'); 
  public notifications = input<Notifications[]>([
    {
      icon:'lightbulb',
      hour:'1 hour ago',
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      hour:'1 hour ago',
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      hour:'1 hour ago',
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      hour:'1 hour ago',
      title:'New user',
      message:'Jorge is now available'
    },
  ]);

  public toggleDropdown( event:boolean ):void {
    this.toggleEmit.emit( this.dropdownIsOpen() );
  };

  public selectFilter(filter:string):void {
    this.filterBy.set(filter);
  };

}
