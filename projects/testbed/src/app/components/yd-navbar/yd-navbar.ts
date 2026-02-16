import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
// TODO: Replaced
import { YdIcon, YdInput } from 'yudu-component-kit';

import { NavMenu } from '../../interfaces/yd-navbar.interfaces';
import { Notifications, NotificationsFilter } from '../../interfaces/yd-notifications.interfaces';
import { DropdownMenu } from '../../interfaces/yd-user-dropdown-menu.interfaces';

import { YdUserDropdowMenu } from "./yd-user-dropdow-menu/yd-user-dropdow-menu";
import { YdNotifications } from "./yd-notifications/yd-notifications";
import { YdLeftSidebar } from "./yd-left-sidebar/yd-left-sidebar";

@Component({
  selector: 'yd-navbar',
  imports: [
    RouterLink,
    YdIcon,
    YdInput,
    YdUserDropdowMenu,
    YdNotifications,
    YdLeftSidebar
],
  templateUrl: './yd-navbar.html',
  host: {
    'class':'yd-navbar__container',
  },
})
export class YdNavbar {
  public signOutEmit = output<void>();
  
  public companyLogoRoute = input<string>('');
  public notifications = input<Notifications[]>([]);
  public signOutTitle = input<string>('sign out');
  public placeholder = input<string>('search');
  public notificationsTitle = input<string>('Notifications');
  public filtersOptions = input<NotificationsFilter[]>([
    {
      label:'all',
      value:'all',
    },
    {
      label:'this week',
      value:'week',
    },
    {
      label:'earlier',
      value:'earlier',
    },
  ]);

  public companyLogo = input.required<string>();
  public subTitle = input.required<string>();
  public headerMenu = input<NavMenu[]>();
  public profileImg = input.required<string>();
  public userMenu = input.required<DropdownMenu[]>();
  public title = input.required<string>();
  public themeMenu = input<DropdownMenu[]>();
  public langMenu = input<DropdownMenu[]>();

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