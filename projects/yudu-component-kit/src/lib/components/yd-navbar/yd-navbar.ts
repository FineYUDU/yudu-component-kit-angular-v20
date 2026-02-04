import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavMenu, Notifications, SettingsMenu } from '../../interfaces';

import { YdIcon } from '../yd-icon/yd-icon';
import { YdInput } from '../yd-input/yd-input';
import { YdNotifications } from "./yd-notifications/yd-notifications";
import { YdUserDropdowMenu } from "./yd-user-dropdow-menu/yd-user-dropdow-menu";

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
  public fullName = input.required<string>();
  public navMenu = input.required<NavMenu[]>();
  public profileImg = input.required<string>();
  public settingsMenu = input.required<SettingsMenu[]>();
  public username = input.required<string>();

  public companyLogoRoute = input<string>('');
  public notifications = input<Notifications[]>([]);

  public notificationsDropdownIsOpen = signal<boolean>(false);
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
