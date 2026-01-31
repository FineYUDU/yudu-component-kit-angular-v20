import { Component, input, output, signal } from '@angular/core';

import { YdIcon } from "yudu-component-kit";
import { RouterLink } from "@angular/router";

import { SettingsMenu } from '../../../interfaces/yd-user-dropdown-menu.interfaces';


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
  public settingsMenu = input<SettingsMenu[]>();
  public fullName = input<string>('');
  public profileImg = input<string>('');
  public username = input<string>('');
  
  public signOut():void {
    this.signOutEmit.emit();
  };


  public toggleDropdow( event:boolean ):void {
    this.toggleEmit.emit( this.dropdownIsOpen() );
  };

}
