import { Component, computed, inject, input, output, signal } from '@angular/core';

import { Theme, YdIcon } from "yudu-component-kit";
import { RouterLink } from "@angular/router";

import { DropdownMenu } from '../../../interfaces/yd-user-dropdown-menu.interfaces';
import { I18nService } from 'yudu-component-kit/i18n';

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
  public theme = inject( Theme );
  public translation = inject( I18nService );

  public signOutEmit = output<void>();
  public toggleEmit = output<boolean>();

  public signOutTitle = input.required<string>();
  public dropdownIsOpen = input.required<boolean>();
  public userMenu = input.required<DropdownMenu[]>();
  public subTitle = input.required<string>();
  public title = input.required<string>();
  public themeMenu = input.required<DropdownMenu[]>();
  public langMenu = input.required<DropdownMenu[]>();
  
  public profileImg = input<string>('');

  public openToggleKey = signal<string | null>(null);
  
  public signOut():void {
    this.signOutEmit.emit();
  };

  public toggleDropdow( event:boolean ):void {
    this.toggleEmit.emit( this.dropdownIsOpen() );
  };

  public toggleSubMenu(key: string): void {
    this.openToggleKey.update(curr => (curr === key ? null : key));
  }

  public isSubMenuOpen(key: string): boolean {
    return this.openToggleKey() === key;
  }

}