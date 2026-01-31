import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { YdIcon, YdInput } from 'yudu-component-kit';
import { YdUserDropdowMenu } from "./yd-user-dropdow-menu/yd-user-dropdow-menu";

import { NavMenu } from '../../interfaces/yd-navbar.interfaces';
import { SettingsMenu } from '../../interfaces/yd-user-dropdown-menu.interfaces';
import { YdNotifications } from "./yd-notifications/yd-notifications";

@Component({
  selector: 'yd-navbar',
  imports: [
    RouterLink,
    YdIcon,
    YdInput,
    YdUserDropdowMenu,
    YdNotifications
],
  templateUrl: './yd-navbar.html',
  host: {
    'class':'yd-navbar__container',
  },
})
export class YdNavbar {
  public signOutEmit = output<void>();

  public companyLogo = input.required<string>();
  public companyLogoRoute = input<string>('');
  public settingsMenu = input<SettingsMenu[]>();
  public fullName = input<string>('');
  public navMenu = input.required<NavMenu[]>();
  public profileImg = input<string>('');
  public username = input<string>('');

  public notificationsDropdownIsOpen = signal<boolean>(true);
  public settingsDropdownIsOpen = signal<boolean>(false);

  public handleSignOut():void {
    this.signOutEmit.emit();
  };

  public handleToggleSettingsEmmit(event:boolean) {
    this.settingsDropdownIsOpen.set(false);
  };

  public handleToggleNotificationsEmmit(event:boolean) {
    this.settingsDropdownIsOpen.set(false);
  };
  
  public toggleSettings():void {
    this.settingsDropdownIsOpen.set(!this.settingsDropdownIsOpen());
    this.notificationsDropdownIsOpen.set(false);
  };
  
  public toggleNotifications():void {
    this.notificationsDropdownIsOpen.set(!this.notificationsDropdownIsOpen());
    this.settingsDropdownIsOpen.set(false);
  };


}
