import { Component, inject, input, output, signal } from '@angular/core';
// TODO: Remover
import { Theme, YdIcon } from "yudu-component-kit";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { I18nService } from 'yudu-component-kit/i18n';
import { DropdownMenu, NavMenu } from '../../../interfaces/yd-navbar.interfaces';

@Component({
  selector: 'yd-user-dropdow-menu',
  imports: [YdIcon, RouterLink, RouterLinkActive],
  templateUrl: './yd-user-dropdow-menu.html',
  host:{
    'class':'yd-user-dropdown-menu',
    '[class.open]':'dropdownIsOpen()'

  }
})
export class YdUserDropdowMenu {
  public theme = inject( Theme );
  public translation = inject( I18nService );

  public signOutEmit = output<void>();
  public toggleEmit = output<boolean>();

  public signOutTitle = input.required<string>();
  public dropdownIsOpen = input.required<boolean>();
  
  public fullName = input<string>();
  public username = input<string>();
  
  public userMenu = input<NavMenu[]>();
  public profileMenu = input<NavMenu[]>();
  public themeMenu = input<DropdownMenu[]>();
  public langMenu = input<DropdownMenu[]>();
  
  public profileImg = input<string | null>();

  public openToggleKey = signal<string | null>(null);
  
  public signOut():void {
    this.signOutEmit.emit();
  };

  public toggleDropdow( event:boolean ):void {
    this.toggleEmit.emit( this.dropdownIsOpen() );
    this.openToggleKey.set(null);
  };

  public toggleSubMenu(key: string): void {
    this.openToggleKey.update(curr => (curr === key ? null : key));
  }

  public isSubMenuOpen(key: string): boolean {
    return this.openToggleKey() === key;
  }

}