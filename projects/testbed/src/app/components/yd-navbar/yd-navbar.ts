import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

// TODO: Replaced
import { YdIcon } from 'yudu-component-kit';

import { YdInputSearch } from "./yd-input-search/yd-input-search";
import { YdLeftSidebar } from "./yd-left-sidebar/yd-left-sidebar";
import { YdUserDropdowMenu } from "./yd-user-dropdow-menu/yd-user-dropdow-menu";

import { YdNavbarMenu } from '../../interfaces/yd-navbar.interfaces';
@Component({
  selector: 'yd-navbar',
  imports: [
    RouterLink,
    YdIcon,
    YdUserDropdowMenu,
    YdInputSearch,
    YdLeftSidebar
],
  templateUrl: './yd-navbar.html',
  host: {
    'class':'yd-navbar',
  },
})
export class YdNavbar {
  public signOutEmit = output<void>();
  public searchEmit = output<string>();
  
  public navbarMenu = input.required<YdNavbarMenu>();  
  public signOutTitle = input<string>('sign out');

  public settingsDropdownIsOpen = signal<boolean>(false);
  public isSidebarOpen = signal<boolean>(false);


  public handleEmitSearch(event:string):void {
    this.searchEmit.emit(event);
  }

  public handleSignOut():void {
    this.signOutEmit.emit();
  };

  public handleToggleSettingsEmmit(event:boolean) {
    this.settingsDropdownIsOpen.set(false);
  };
  
  public toggleSettings():void {
    this.settingsDropdownIsOpen.set(!this.settingsDropdownIsOpen());
  };

  public handleSidebarToggle(toggle:boolean):void {
    this.isSidebarOpen.set(false);
  };

  public openSidebar():void {
    this.settingsDropdownIsOpen.set(false);
    this.isSidebarOpen.set(true);
  }
}