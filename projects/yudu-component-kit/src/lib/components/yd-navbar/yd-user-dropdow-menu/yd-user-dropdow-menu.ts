import { Component, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";

import { SettingsMenu } from '../../../interfaces';

import { YdIcon } from '../../yd-icon/yd-icon';

@Component({
  selector: 'yd-user-dropdow-menu',
  imports: [ YdIcon, RouterLink ],
  templateUrl: './yd-user-dropdow-menu.html',
  host:{
    'class':'yd-user-dropdown-menu',
    '[class.open]':'dropdownIsOpen()'

  }
})
export class YdUserDropdowMenu {
  public signOutEmit = output<void>();
  public toggleEmit = output<boolean>();

  public dropdownIsOpen = input.required<boolean>();
  public fullName = input.required<string>();
  public settingsMenu = input.required<SettingsMenu[]>();

  public profileImg = input<string>('');
  public username = input<string>('');
  
  public signOut():void {
    this.signOutEmit.emit();
  };


  public toggleDropdow( event:boolean ):void {
    this.toggleEmit.emit( this.dropdownIsOpen() );
  };

}
