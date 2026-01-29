import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { YdIcon, YdInput } from 'yudu-component-kit';
import { YdUserDropdowMenu } from "./yd-user-dropdow-menu/yd-user-dropdow-menu";

import { NavMenu } from '../../interfaces/yd-navbar.interfaces';
import { DropdownMenu } from '../../interfaces/yd-user-dropdown-menu.interfaces';

@Component({
  selector: 'yd-navbar',
  imports: [
    RouterLink,
    YdIcon,
    YdInput,
    YdUserDropdowMenu
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
  public dropdownMenu = input<DropdownMenu[]>();
  public fullName = input<string>('');
  public navMenu = input.required<NavMenu[]>();
  public profileImg = input<string>('');
  public username = input<string>('');

  public dropdownIsOpen = signal<boolean>(false);

  public handleSignOut():void {
    this.signOutEmit.emit();
  };

  public toggleDropdown():void {
    this.dropdownIsOpen.set(!this.dropdownIsOpen());
  };

  public handleToggleEmmit(event:boolean) {
    this.dropdownIsOpen.set(false);
  };

}
